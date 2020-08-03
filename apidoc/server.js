const http = require('http');
var url = require('url');
var fs = require('fs');

const hostname = '127.0.0.1';
const port = 1337;

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    //获取get请求中的参数 path https://www.cnblogs.com/tugenhua0707/p/9064292.html
    const urlString = url.parse(req.url);
    var path = urlString.pathname;

    //将字符串格式参数转化为对象使用
    var strurl = url.parse(req.url, true).query
    // var path = strurl.pathname;
    var rep_num = parseInt(strurl.rep);//返回数据是数组，重复里面的数据
    
    //获取doc的json文件
    fs.readFile('./doc/api_data.json', function(err, data) {

        if (err) {
            return console.error(err);
        }
        var person = data.toString(); //将二进制的数据转换为字符串
        person = JSON.parse(person); //将字符串转换为json对象

        //找到该path的json
        let newArr2 = person.filter((val, i) => {
            return val.url == path;
        })
        if (newArr2[0]) {
            var result_json = newArr2[0]['success']['examples'][0]['content'];

             if(rep_num){
                //如果是数组，可以进行复制数组成员
                var res_jsonstr = JSON.parse(result_json);
                var newDataArr = [];
                for(var i=0;i<rep_num;i++){
                    newDataArr.push(res_jsonstr['data']['rows'][0])
                }
                res_jsonstr['data']['rows'] = newDataArr;
                result_json = JSON.stringify(res_jsonstr)
             }
            res.end(result_json)
        }
    })

}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});