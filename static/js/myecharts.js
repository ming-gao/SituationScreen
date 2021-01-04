
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
        width:'40%',
        top: '15%',
        right:'5%'
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

