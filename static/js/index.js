
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
    }]
}
barCharts.setOption(baroption)

let barExCharts = echarts.init(document.getElementById('bar_exchange'))
baroption = {
    color: '#1ABD95',
    grid: {
        height: '50%',
        top: '10%'
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
    }]
}
barExCharts.setOption(baroption)


// ========================================套饼图==============================================

// Web站点运行监测情况
let pieStationOperationMonitoring = echarts.init(document.getElementById("pie_station_operation_monitoring"));
pieStationOperationMonitoringOption = {
    color:["#99CDD3","#1c9fdc","#0096ae","#00e2d1"],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 0,
        bottom : 40,
        width : 5,
        height : 80,
        itemWidth : 4,
        itemHeight : 2,
        data: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test11', 'test22', 'test33', 'test44', 'test55']
    },
    textStyle : {
        fontSize : 2,
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            left : -50,
            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: 'test11'},
                { value: 679, name: 'test22' },
                { value: 1548, name: 'test33' },
                { value: 1548, name: 'test44' },
                { value: 1548, name: 'test55' },

            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            left : -50,
            label: {
               position : 'inner',
            },
            data: [
                { value: 335, name: 'test1' },
                { value: 310, name: 'test2' },
                { value: 234, name: 'test3' },
                { value: 135, name: 'test4' },
                { value: 1048, name: 'test5' },
                { value: 251, name: 'test6' },
                { value: 147, name: 'test7' },
                { value: 102, name: 'test8' }
            ]
        }
    ]
};
pieStationOperationMonitoring.setOption(pieStationOperationMonitoringOption);


// 公网主机系统漏洞情况
let piePublicNetworkHostVulnerability = echarts.init(document.getElementById("pie_public_network_host_vulnerability"));
piePublicNetworkHostVulnerabilityOption = {
    color:["#99CDD3","#1c9fdc","#0096ae","#00e2d1"],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    
    legend: {
        orient: 'vertical',
        right: 0,
        bottom : 40,
        width : 5,
        height : 80,
        itemWidth : 4,
        itemHeight : 2,
        data: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test11', 'test22', 'test33', 'test44', 'test55'],
    },
    textStyle : {
        fontSize : 2,
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            left : -50,
            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: 'test11'},
                { value: 679, name: 'test22' },
                { value: 1548, name: 'test33' },
                { value: 1548, name: 'test44' },
                { value: 1548, name: 'test55' },

            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            left : -50,
            label: {
               position : 'inner',
            },
            data: [
                { value: 335, name: 'test1' },
                { value: 310, name: 'test2' },
                { value: 234, name: 'test3' },
                { value: 135, name: 'test4' },
                { value: 1048, name: 'test5' },
                { value: 251, name: 'test6' },
                { value: 147, name: 'test7' },
                { value: 102, name: 'test8' }
            ]
        }
    ]
};
piePublicNetworkHostVulnerability.setOption(piePublicNetworkHostVulnerabilityOption);


// 公网端口暴漏情况
let piePublicNetworkPortLeakage = echarts.init(document.getElementById("pie_public_network_port_leakage"));
piePublicNetworkPortLeakageOption = {
    color:["#99cdd3", "#ffc87f", "#0096ae", "#00dfec", "#ffa2c5", "#ff6f69"],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 0,
        bottom : 40,
        width : 5,
        height : 80,
        itemWidth : 4,
        itemHeight : 2,
        data: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test11', 'test22', 'test33', 'test44', 'test55']
    },
    textStyle : {
        fontSize : 2,
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            left : -50,
            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: 'test11'},
                { value: 679, name: 'test22' },
                { value: 1548, name: 'test33' },
                { value: 1548, name: 'test44' },
                { value: 1548, name: 'test55' },

            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            left : -50,
            label: {
               position : 'inner',
            },
            data: [
                { value: 335, name: 'test1' },
                { value: 310, name: 'test2' },
                { value: 234, name: 'test3' },
                { value: 135, name: 'test4' },
                { value: 1048, name: 'test5' },
                { value: 251, name: 'test6' },
                { value: 147, name: 'test7' },
                { value: 102, name: 'test8' }
            ]
        }
    ]
};
piePublicNetworkPortLeakage.setOption(piePublicNetworkPortLeakageOption);


// 内网主机系统漏洞情况
let pieIntranetHostVulnerability = echarts.init(document.getElementById("pie_intranet_host_vulnerability"));
pieIntranetHostVulnerabilityOption = {
    color:["#99cdd3", "#ffc87f", "#0096ae", "#00dfec", "#ffa2c5", "#ff6f69"],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        right: 0,
        bottom : 40,
        width : 5,
        height : 80,
        itemWidth : 4,
        itemHeight : 2,
        data: ['test1', 'test2', 'test3', 'test4', 'test5', 'test6', 'test7', 'test8', 'test11', 'test22', 'test33', 'test44', 'test55']
    },
    textStyle : {
        fontSize : 2,
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            left : -50,
            label: {
                position: 'inner'
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: 'test11'},
                { value: 679, name: 'test22' },
                { value: 1548, name: 'test33' },
                { value: 1548, name: 'test44' },
                { value: 1548, name: 'test55' },

            ]
        },
        {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            left : -50,
            label: {
               position : 'inner',
            },
            data: [
                { value: 335, name: 'test1' },
                { value: 310, name: 'test2' },
                { value: 234, name: 'test3' },
                { value: 135, name: 'test4' },
                { value: 1048, name: 'test5' },
                { value: 251, name: 'test6' },
                { value: 147, name: 'test7' },
                { value: 102, name: 'test8' }
            ]
        }
    ]
}
pieIntranetHostVulnerability.setOption(pieIntranetHostVulnerabilityOption);


// ===========================================标准饼图===================================================

// 网页篡改
let pieWebpageTampering = echarts.init(document.getElementById("pie_webpage_tampering"));

pieWebpageTamperingOption = {
    color : ["#ffac84", '#3495b7', '#75caf4', '#b3ecf0', '#8acad5'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    
    series: [
        {
            type: 'pie',
            data: [
                {value: 335, name: 'test1'},
                {value: 310, name: 'test2'},
                {value: 234, name: 'test3'},
                {value: 135, name: 'test4'},
                {value: 1548, name: 'test5'}
            ]
        }
    ]
};

pieWebpageTampering.setOption(pieWebpageTamperingOption);



// 骚扰电话治理情况
let pieHarassingTelephoneManagement = echarts.init(document.getElementById("pie_harassing_telephone_management"));

pieHarassingTelephoneManagementOption = {
    color : ["#ffac84", '#3495b7', '#75caf4', '#b3ecf0', '#8acad5'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    
    series: [
        {
            radius : '40%',
            type: 'pie',
            data: [
                {value: 335, name: 'test1'},
                {value: 310, name: 'test2'},
                {value: 234, name: 'test3'},
                {value: 135, name: 'test4'},
                {value: 1548, name: 'test5'}
            ]
        }
    ]
};

pieHarassingTelephoneManagement.setOption(pieHarassingTelephoneManagementOption);


// 僵木蠕处置情况
let pieTreatmentOfNumbness = echarts.init(document.getElementById("pie_treatment_of_numbness"));

pieTreatmentOfNumbnessOption = {
    color : ["#ffac84", '#3495b7', '#75caf4', '#b3ecf0', '#8acad5'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    
    series: [
        {
            radius : '40%',
            type: 'pie',
            data: [
                {value: 335, name: 'test1'},
                {value: 310, name: 'test2'},
                {value: 234, name: 'test3'},
                {value: 135, name: 'test4'},
                {value: 1548, name: 'test5'}
            ]
        }
    ]
};

pieTreatmentOfNumbness.setOption(pieTreatmentOfNumbnessOption);

// 主账号设备授权限管控
let pieEquipmentAuthorizationControl = echarts.init(document.getElementById("pie_equipment_authorization_control"));

pieEquipmentAuthorizationControlOption = {
    color : ["#ffac84", '#3495b7', '#75caf4', '#b3ecf0', '#8acad5'],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    
    series: [
        {
            radius : '40%',
            type: 'pie',
            data: [
                {value: 335, name: 'test1'},
                {value: 310, name: 'test2'},
                {value: 234, name: 'test3'},
                {value: 135, name: 'test4'},
                {value: 1548, name: 'test5'}
            ]
        }
    ]
};

pieEquipmentAuthorizationControl.setOption(pieEquipmentAuthorizationControlOption);
