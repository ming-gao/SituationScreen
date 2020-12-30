
let lineCharts = echarts.init(document.getElementById('safe_line'))
option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        lineStyle: {
            color: '#1ABD95'
        }

    },
    {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
        lineStyle: {
            color: '#1ABD95'
        }
    }
    ]
}
lineCharts.setOption(option)