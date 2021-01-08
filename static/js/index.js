
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
        top: '10%',
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
        top: '13%',
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
        width:'50%',
        top: '18%',
        right:'15%'
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

let barExChartssfcontrol = echarts.init(document.getElementById('bar_exchange_sfcontrol'))
baroption = {
    color: '#1ABD95',
    grid: {
        height: '50%',
        width:'70%',
        top: '10%',
        right:'15%'
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
barExChartssfcontrol.setOption(baroption)
// let sf_control = echarts.init(document.getElementById('hebeimap_sfcontrol'))
// // 获取对应省的文件,13.js对应河北
// $.getJSON('../../data/13.json', function (geoJson) {
//     // 传入id:13
//     echarts.registerMap(13, geoJson);
//     option = {
//         geo: {  //地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
//             //id:13
//             map: 13,
//             // roam: true,
//             zoom: 1.2,
//             label: {
//                 normal: {
//                     show: true,
//                     textStyle: {
//                         color: '#11B441'                        //省份字体颜色
//                     }
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     borderColor: '#11AE4B',
//                     areaColor: '#173D53',
//                 },
//                 emphasis: {
//                     areaColor: '#fff',

//                     borderWidth: 0.8,

//                 }
//             }
//         },
//         series: [
//             {
//                 name: '河北地图',
//                 roam: false,
//                 type: 'map',
//                 coordinateSystem: 'geo'
//             }
//         ]
//     };
//     sf_control.setOption(option)
// });



// let text=document.getElementsByClassName('svgiframe').getSVGDocument()
// console.log(text);
 
// let iframe=document.getElementsByClassName('svgiframe')
// if(iframe.attachEvent){
//     iframe.attachEvent('onload',function(){
//         console.log('iframe is loaded');
//     })
// } else{
//     iframe.onload=function(){
//         let tag_number0=document.getElementsByClassName('tag_number').contentDocument
//         console.log(tag_number0);
//     }
// }
// tag_number0.textContent="34"


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
            radius : '75%',
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


// 流量攻击
var lineTrafficAttack = echarts.init(document.getElementById("line_traffic_attack"));
lineTrafficAttackOption = {
    color : ["#0096ae", "#1abd95", ],
    grid : {
        top : "20%",
        left : "15%",
        height : "60%",
        width : "75%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            interVal: 0,
            rotate: -45
        },
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
    },
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            smooth : 1,
        },
        {
            data: [720, 832, 801, 834, 1190, 930, 1120],
            type: 'line',
            areaStyle: {
               
            },
            smooth : 1,
        }
    ]
};
lineTrafficAttack.setOption(lineTrafficAttackOption);


// DNS劫持
var DNSHijackingNumber = 85;
var pieDNSHijacking = echarts.init(document.getElementById("pie_DNS_hijacking"));
pieDNSHijackingOption = {
    color : ["#1abd95", "#28414f"],
    title : {
        text : DNSHijackingNumber + "%",
        left : "center",
        top : "center",
        textStyle : {
            color : "#f6e34c",
            fontFamily : "LcdD"
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ["70%","50%"],
            labelLine: {
                show: false
            },
            data: [
                {value: DNSHijackingNumber},
                {value: 100-DNSHijackingNumber},
                
            ]
        }
    ]
};
pieDNSHijacking.setOption(pieDNSHijackingOption);

// CND劫持
var pieCDNNumberOfProblems = 4;     //存在问题数
var pieCDNProcessingNumber = 10;    //处理数
var pieCDNHijackingLeft = echarts.init(document.getElementById("pie_CDN_hijacking_left"));
pieCDNHijackingLeftOption = {
    color : ["#1abd95", "#28414f"],
   
    title : {
        text : pieCDNNumberOfProblems + "/" + pieCDNProcessingNumber,
        left : "center",
        top : "35%",
        textStyle : {
            color : "#f6e34c",
            fontFamily : "LcdD"
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ["70%","50%"],
            top : "-15%",
            labelLine: {
                show: false
            },
            data: [
                {value: pieCDNNumberOfProblems},
                {value: pieCDNProcessingNumber-pieCDNNumberOfProblems},
                
            ]
        }
    ]
};
pieCDNHijackingLeft.setOption(pieCDNHijackingLeftOption);

//右
var CDNHijackingNumber = 85;
var pieCDNHijackingRight = echarts.init(document.getElementById("pie_CDN_hijacking_right"));
pieCDNHijackingRightOption = {
    color : ["#1abd95", "#28414f"],
    title : {
        text : CDNHijackingNumber + "%",
        left : "center",
        top : "30%",
        textStyle : {
            color : "#f6e34c",
            fontFamily : "LcdD"
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ["70%","50%"],
            top : "-30%",
            labelLine: {
                show: false
            },
            data: [
                {value: CDNHijackingNumber},
                {value: 100-CDNHijackingNumber},
                
            ]
        }
    ]
};
pieCDNHijackingRight.setOption(pieCDNHijackingRightOption);


// 异常操作组合
let barExceptionOperationCombination = echarts.init(document.getElementById("bar_exception_operation_combination"));

barExceptionOperationCombinationOption = {
    color : ["#85ffe6", "#a9da3f", "#3aa789"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        textStyle : {
            fontSize : 10
        }
    },
    grid: {
        left : 0,
        top : "15%",
        height : "60%",
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            interVal: 0,
            rotate: -45,
            textStyle : {
                fontSize : 9
            }
        },
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
    },
    yAxis: {
        type: 'category',
        data: ['测试1', '测试2', '测试3', '测试4'],
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            textStyle : {
                fontSize : 8
            }
        },
    },
    textStyle : {
        fontSize : 5,
    },
    series: [
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [220, 182, 191, 234],
            barWidth : "50%"

        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [150, 212, 201, 154]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'insideRight'
            },
            data: [820, 832, 901, 934]
        }
    ]
};

barExceptionOperationCombination.setOption(barExceptionOperationCombinationOption);



// 全省合规率
var lineProvincialComplianceRate = echarts.init(document.getElementById("line_provincial_compliance_rate"));
lineProvincialComplianceRateOption = {
    color : ["#0096ae", "#1abd95", ],
    grid : {
        top : "10%",
        left : "15%",
        height : "50%",
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
            interVal: 0,
            rotate: -45,
            textStyle : {
                fontSize : 8
            }
        },
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#e2e2e2'
            }
        },
        axisLabel: {
            textStyle : {
                fontSize : 8
            }
        },
    },
    
    series: [
        {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
               
            },
            smooth : 1
        },
    ]
};
lineProvincialComplianceRate.setOption(lineProvincialComplianceRateOption);


// 配置合规
let configurationComplianceRate = 85;  //配置合规率
let pieConfigurationCompliance = echarts.init(document.getElementById("pie_configuration_compliance"));
pieConfigurationComplianceOption = {
    color : ["#1abd95", "#28414f"],
    grid : {

    },
    title : {
        text : configurationComplianceRate + "%",
        left : "center",
        top : "center",
        textStyle : {
            color : "#f6e34c",
            fontFamily : "LcdD"
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ["70%","50%"],
            labelLine: {
                show: false
            },
            data: [
                {value: configurationComplianceRate},
                {value: 100-configurationComplianceRate},
                
            ]
        }
    ]
};
pieConfigurationCompliance.setOption(pieConfigurationComplianceOption);

// 系统漏洞
let systemVulnerabilityRate = 85;  //配置合规率
let pieSystemFLAW = echarts.init(document.getElementById("pie_system_FLAW"));
pieSystemFLAWOption = {
    color : ["#1abd95", "#28414f"],
    title : {
        text : systemVulnerabilityRate + "%",
        left : "center",
        top : "center",
        textStyle : {
            color : "#f6e34c",
            fontFamily : "LcdD"
        }
    },
    series: [
        {
            name: '',
            type: 'pie',
            radius: ["70%","50%"],
            labelLine: {
                show: false
            },
            data: [
                {value: systemVulnerabilityRate},
                {value: 100-systemVulnerabilityRate},
                
            ]
        }
    ]
};
pieSystemFLAW.setOption(pieSystemFLAWOption);