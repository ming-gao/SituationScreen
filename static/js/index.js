
let lineCharts = echarts.init(document.getElementById('safe_line'))
lineoption = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine:{
            lineStyle:{
                color:'#e2e2e2'
            }
        },
        axisLabel:{
            interVal:0,
            rotate:-45
        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#e2e2e2'
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        lineStyle: {
            color: '#1ABD95'
        }

    }
    ]
}
lineCharts.setOption(lineoption)

let barCharts = echarts.init(document.getElementById('bar_normal'))
baroption={
    color: '#1ABD95',
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine:{
            lineStyle:{
                color:'#e2e2e2'
            }
        },
        axisLabel:{
            interVal:0,
            rotate:-45
        }
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
    }]
}
barCharts.setOption(baroption)

let barExCharts = echarts.init(document.getElementById('bar_exchange'))
baroption={
    color: '#1ABD95',
    xAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{
                color:'#e2e2e2'
            }
        },
        axisLabel:{
            interVal:0,
            rotate:-45
        }
    },
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine:{
            lineStyle:{
                color:'#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
    }]
}
barExCharts.setOption(baroption)