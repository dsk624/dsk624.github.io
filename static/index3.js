(function (fn) {
    fn();
    setInterval(fn, 1000);
})(function () {
    var dt = new Date();
    document.getElementById("show_time").innerHTML =
        dt.getFullYear() + "-" +
        (dt.getMonth() + 1) + "-" +
        (dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate()) + " " +
        (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ":" +
        (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) + ":" +
        (dt.getSeconds() < 10 ? '0' + dt.getSeconds() : dt.getSeconds()) + "";
});
(function () {
    var myChart = echarts.init(document.getElementById('center_bar'));
   var xData = ["南方航空", "厦门航空", "吉祥航空", "海南航空","青岛航空","春秋航空"];
var legendData = ["综合得分", "完成率"]; //图例
var firstIndustry = [60.71,84.22,98.90,69.61,85.55,76.21,]; //第一产业
var thirdIndustry = [50,90,100,60,58,100,]; //第三产业
var option = {
    // backgroundColor:"#061740",
    grid: {
        x: 0,
        y: 0,
        x2: 0,
        y2: 0,
        top: '15%',
        left: '3%',
        right: '3%',
        bottom: '18%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        orient: 'vertical',
        left: 'center',
        bottom: 'bottom',
        padding: [1, 0, 20, 0],
        data: legendData,
        //图例滚动
        // type: 'scroll',
        //图例文字样式
        textStyle: {
            color: 'rgba(36, 173, 254, 1)',
            fontSize:"1rem"
        }
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                show: false,
            },
            interval: 1,
            axisLabel: {
                color: 'rgba(36, 173, 254, 1)',
                fontSize:"1rem"
            },
            axisLine: {
                show: false
            },
            data: xData,
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value} '
            },
            axisLabel: {
                textStyle: {
                    //坐标轴颜色
                    color: 'rgba(36, 173, 254, 1)',
                    fontSize:"1rem"
                }
            },
            //坐标轴线样式
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid', //solid实线;dashed虚线
                    color: 'rgba(36, 173, 254, 0.2)'
                }
            },
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
                formatter: '{value}'
            },
            axisLabel: {
                textStyle: {
                    //坐标轴颜色
                    color: 'rgba(36, 173, 254, 1)',
                    fontSize:"1rem"
                }
            },
            //坐标轴线样式
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: 'rgba(36, 173, 254, 0.2)'
                }
            },
        }
    ],
    series: [
        {
            name: "综合得分",
            data: firstIndustry,
            type: 'line',
            smooth: true, //true曲线; false折线
            itemStyle: {
                normal: {
                    color: '#ffc600', //改变折线点的颜色
                    lineStyle: {
                        color: '#ffc600', //改变折线颜色
                        type: 'solid'
                    }
                }
            },
            areaStyle: {
                //折线图颜色半透明
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(255,198,0, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255,198,0, 0.1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        {
            name: "完成率",
            data: thirdIndustry,
            type: 'line',
            smooth: true, //true曲线; false折线
            itemStyle: {
                normal: {
                    color: '#24adfe', //改变折线点的颜色
                    lineStyle: {
                        color: '#24adfe', //改变折线颜色
                        type: 'solid'
                    }
                }
            },
            areaStyle: {
                //折线图颜色半透明
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(36,173,254, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(52,112,252, 0.1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }
    ]
};

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    var myChart = echarts.init(document.getElementById('center_pie'));
    var pie1Data = [
    {
        value: 10,
        name: '设备选择',
        itemStyle: {
            color: '#72FFA3',
        },
    },
    {
        value: 21,
        name: '信息通报',
        itemStyle: {
            color: '#FF7469',
        },
    },
    {
        value: 22,
        name: '规范灭火',
        itemStyle: {
            color: '#FFBA69',
        },
    },
    {
        value: 25,
        name: '指导旅客应对',
        itemStyle: {
            color: '#2BD8FB',
        },
    },
     
]

var percentColor = null;
var rich = {
    name: {
        color: '#fff',
        fontSize: 14,
    },
};
pie1Data.map(function (item, index) {
    rich['p' + index] = {
        color: item.itemStyle.color,
        fontSize: 17,
        fontWeight: 'bold',
    };
});

var option = {
        // backgroundColor:'#061740',
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
        // backgroundColor: '#1B2D56',
        borderColor: '#2BD8FB',
        textStyle: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '所占比例',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            label: {
                color: '#fff',
                fontSize: 14,

                formatter: function (params) {
                    percentColor = params.color;
                    return `{name|${params.name}}:{p${params.dataIndex}|${params.percent + '%'}}`;
                },
                rich: rich,
            },
            data: pie1Data,
            roseType: 'area',
        },
        {
            name: '外部刻度',
            type: 'gauge',
            center: ['50%', '50%'],
            radius: '95%',
            // min: 0, //最小刻度
            // max: 100, //最大刻度
            startAngle: 90,
            endAngle: -270,
            // endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [[1, 'rgba(0,0,0,0)']],
                },
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color: '#4d5bd1',
                distance: 25,
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 8,
                lineStyle: {
                    color: '#2AD2FB', //用颜色渐变函数不起作用
                    width: 1,
                },
                length: -6,
            }, //刻度样式
            splitLine: {
                show: false,
                length: -20,
                lineStyle: {
                    color: '#2AD2FB', //用颜色渐变函数不起作用
                },
            }, //分隔线样式
            detail: {
                show: false,
            },
            pointer: {
                show: false,
            },
        },
    ],
};
myChart.setOption(option);

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();






