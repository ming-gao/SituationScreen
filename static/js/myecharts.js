
// 环形进度图
var pieCDN = echarts.init(document.getElementById("CDN_pie"));
var option = {
    // 标题组件，包含主标题和副标题
    title: {
        show: true,
        text: "执行任务",
        x: "center",
        textStyle: {
            fontSize: "15",
            color: "green",
            fontWeight: "bold",
        }


    },
    //  提示框组件
    tooltip: {
        //是否显示提示框组件，包括提示框浮层和 axisPointe
        show: false,
        // 触发类型: item:数据项触发，axis：坐标轴触发
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    // // 图例
    // legend: {
    //     orient: 'vertical',
    //     x: 'left',
    //     data:['完成率']
    // },

    // 系列列表。每个系列通过 type 决定自己的图表类型
    series: [
        {
            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            name: '任务进度',
            type: 'pie',
            // 饼图的半径，数组的第一项是内半径，第二项是外半径
            radius: ['50%', '70%'],
            // 是否启用防止标签重叠策略，默认开启
            avoidLabelOverlap: false,
            hoverAnimation: false,
            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                {   // 数据值
                    value: 20,
                    // 数据项名称
                    name: '完成率',
                    //该数据项是否被选中
                    selected: false,
                    // 单个扇区的标签配置
                    label: {
                        normal: {
                            // 是显示标签
                            show: true,
                            position: 'center',
                            fontSize: 20,
                            // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
                            formatter: '{b}\n{d}%',
                        }

                    },

                },
                {
                    value: 100,
                    label: {
                        normal: {
                            show: false,

                        }
                    }

                },

            ]
        }
    ]
};
pieCDN.setOption(option)


// 以下全部废弃
let lineCharts = echarts.init(document.getElementById('safe_line'))
lineoption = {
    grid: {
        left: '20%',
        height: '70%',
        top: '10%'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            interVal: 0,
            rotate: -45
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    series: [{
        data: [82, 93, 90, 93, 129, 133, 132],
        type: 'line',
        lineStyle: {
            color: '#1ABD95'
        }

    }
    ]
}
lineCharts.setOption(lineoption)

let barCharts = echarts.init(document.getElementById('bar_normal'))

baroption = {
    color: '#1ABD95',
    grid: {
        height: '50%',
        top: '15%',
        left: '20%'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            interVal: 0,
            rotate: -45
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 15
    }]
}
barCharts.setOption(baroption)


let barChartsInfosf = echarts.init(document.getElementById('bar_normal_Infosf'))
baroption = {
    color: '#1ABD95',
    grid: {
        height: '50%',
        top: '30%',
        left: '20%'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            interVal: 0,
            rotate: -45
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth: 15
    }]
}
barChartsInfosf.setOption(baroption)

let barExCharts = echarts.init(document.getElementById('bar_exchange'))
baroption = {
    color: '#1ABD95',
    grid: {
        height: '50%',
        top: '10%',
        left: '15%'
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            interVal: 0,
            rotate: -45
        }
    },
    yAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        barWidth: 10
    }]
}
barExCharts.setOption(baroption)

let barExChartsInfo = echarts.init(document.getElementById('bar_exchange_Infosf'))
baroption = {
    color: '#1ABD95',
    grid: {
        height: '50%',
        width: '40%',
        top: '15%',
        right: '5%'
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            interVal: 0,
            rotate: -45
        }
    },
    yAxis: {
        type: 'category',
        data: ['一', '二', '三', '四', '五'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70],
        type: 'bar',
        barWidth: 10
    }]
}
barExChartsInfo.setOption(baroption)

let sf_control = echarts.init(document.getElementById('hebeimap_sfcontrol'))
// 获取对应省的文件,13.js对应河北
$.getJSON('../../data/13.json', function (geoJson) {
    // 传入id:13
    echarts.registerMap(13, geoJson);
    option = {
        geo: {  //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
            //id:13
            map: 13,
            // roam: true,
            zoom: 1.2,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#11B441'                        //省份字体颜色
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#11AE4B',
                    areaColor: '#173D53',
                },
                emphasis: {
                    areaColor: '#fff',

                    borderWidth: 0.8,

                }
            }
        },
        series: [
            {
                name: '河北地图',
                roam: false,
                type: 'map',
                coordinateSystem: 'geo'
            }
        ]
    };
    sf_control.setOption(option)
});

