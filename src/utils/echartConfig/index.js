/**
 * @description 大屏存放 统一配置
 * @author +c
 * @DateTime    2020-03-01T17:31:12+0800
 */

import Vue from 'vue'

/**
 * @description 统一配置
 */
Vue.prototype.echartConfig = {
    legend: {
        textStyle: {
            fontSize: 13,
            color: "#fff"
        }
    },
    color: [
        "#ffdb5c",
        "#9ccb3d",
        "#ff9f7f",
        "#67e0e3",
        "#e062ae",
        "#37a2da"
      ],
    yAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 2, //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            interval: 0, //横轴信息全部显示
            // rotate:60,//-30度角倾斜显示
            textStyle: {
                color: '#fff',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: { show: false },//去除网格线
    },
    xAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 2, //这里是为了突出显示加上的
            }
        },
        axisLabel: {
            interval: 0, //横轴信息全部显示
            // rotate:60,//-30度角倾斜显示
            textStyle: {
                color: '#fff',
                fontSize: '14',
                fontFamily: 'PingFangSC-Regular'
            }
        },
        axisTick: {
            show: false
        },
        splitLine: { show: false },//去除网格线
    },
    tooltip: {
        trigger: 'item',
        backgroundColor: "rgba(30,176,252,0.2)",
        textStyle: {
            color: '#fff',
            fontSize: "14"
        }
    },
    showtooltip: (self, length, fanxing) => {
        let seriesIndex = 0;
        let theinterval;
        if (fanxing == 'undefined' || fanxing == false) {
            seriesIndex = length - 1;
            theinterval = setInterval(() => {
                self.charts.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex: seriesIndex
                });
                seriesIndex--;
                if (seriesIndex < 0) {
                    seriesIndex = length - 1;
                }
            }, 2000);
        } else {
            theinterval = setInterval(() => {
                self.charts.dispatchAction({
                    type: "showTip",
                    seriesIndex: 0,
                    dataIndex: seriesIndex
                });
                seriesIndex++;
                if (seriesIndex >= length) {
                    seriesIndex = 0;
                }
            }, 2000);
        }
        self.charts.on('mouseover', () => {
            clearInterval(theinterval)
        })
        self.charts.on('mouseout', () => {
            if (fanxing == 'undefined' || fanxing == false) {
                seriesIndex = length - 1;
                theinterval = setInterval(() => {
                    self.charts.dispatchAction({
                        type: "showTip",
                        seriesIndex: 0,
                        dataIndex: seriesIndex
                    });
                    seriesIndex--;
                    if (seriesIndex < 0) {
                        seriesIndex = length - 1;
                    }
                }, 2000);
            } else {
                seriesIndex = 0;
                theinterval = setInterval(() => {
                    self.charts.dispatchAction({
                        type: "showTip",
                        seriesIndex: 0,
                        dataIndex: seriesIndex
                    });
                    seriesIndex++;
                    if (seriesIndex >= length) {
                        seriesIndex = 0;
                    }
                }, 2000);
            }
        })
    }
}