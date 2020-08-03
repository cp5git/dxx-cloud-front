<template>
    <span style="margin-right:10px">
        <input class="input-file" type="file" @change="exportData" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
        <a-button type="primary" @click="btnClick">上传Excel表格数据</a-button>
    </span>
</template>
<script>
// 引入组件 https://www.jianshu.com/p/608078244c6e
import XLSX from "xlsx";
export default {
    data() {
        return {};
    },
    methods: {
        
        btnClick() {
            // 点击事件
            document.querySelector(".input-file").click();
        },

        /**
         * [loadExcelData 导入excel后对每个sheet解析成数组]
         * @author +c
         * @DateTime    2020-03-18T11:23:46+0800
         * @description {{description}}
         * @param       {[type]}                 event [description]
         * @return      {[type]}                       [description]
         */
        exportData(event) {
            if (!event.currentTarget.files.length) {
                return;
            }
            const that = this;
            // 拿取文件对象
            var f = event.currentTarget.files[0];
            // 用FileReader来读取
            var reader = new FileReader();
            // 重写FileReader上的readAsBinaryString方法
            FileReader.prototype.readAsBinaryString = function(f) {
                var binary = "";
                var wb; // 读取完成的数据
                var outdata = []; // 你需要的数据
                var reader = new FileReader();
                reader.onload = function() {
                    // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
                    var bytes = new Uint8Array(reader.result);
                    var length = bytes.byteLength;
                    for (var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    // 接下来就是xlsx了，具体可看api
                    wb = XLSX.read(binary, {
                        type: "binary",
                        cellDates: true
                    });

                    //保存每个sheet到outdata
                    wb.SheetNames.forEach((val, i) => {
                        outdata.push(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[i]]));
                    })
                    // 自定义方法向父组件传递数据
                    that.$emit("getResult", outdata);
                };
                reader.readAsArrayBuffer(f);
            };
            reader.readAsBinaryString(f);
        }
    }
};
</script>
<style>
.input-file {
    display: none;
}
</style>