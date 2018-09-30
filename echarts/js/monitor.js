function drawLayer02Label(canvasObj, text, textBeginX, lineEndX) {
    var colorValue = '#3b8fbb';

    var ctx = canvasObj.getContext("2d");

    ctx.beginPath();
    ctx.arc(35, 55, 2, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = colorValue;
    ctx.fill();

    ctx.moveTo(35, 55);
    ctx.lineTo(80, 80);
    ctx.lineTo(lineEndX, 80);
    ctx.lineWidth = 1;
    ctx.strokeStyle = colorValue;
    ctx.stroke();

    ctx.font = '14px Georgia';
    ctx.fillStyle = colorValue;
    ctx.fillText(text, textBeginX, 92);
}

//接入机型占比

var COLOR = {
    MACHINE: {
        TYPE_A: '#fe21ce',
        TYPE_B: '#599deb',
        TYPE_C: '#32cd32',
        TYPE_D: '#06B5C6',

    }
};

function renderLegend() {
    drawLegend(25);
    drawLegend(50);
    drawLegend(75);
    drawLegend(100);
    // drawLegend(COLOR.MACHINE.TYPE_E, 125, 'trspt');
    // drawLegend(COLOR.MACHINE.TYPE_F, 150, 'tamt');
    // drawLegend(COLOR.MACHINE.TYPE_G, 175, 'tamtf');
}

function drawLegend(pointColor, pointY, text) {
    var ctx = $("#layer03_left_01 canvas").get(0).getContext("2d");
    ctx.beginPath();
    ctx.arc(10, pointY, 4, 0, 2 * Math.PI);
    ctx.fillStyle = pointColor;
    ctx.fill();
    ctx.font = '20px';
    ctx.fillStyle = '#FEFFFE';
    ctx.fillText(text, 40, pointY + 3);
}


//存储
function renderLayer03Right() {
    drawLayer03Right($("#layer03_right_chart01 canvas").get(0), "#ffa749", 0.23);
    drawLayer03Right($("#layer03_right_chart02 canvas").get(0), "#0ad1ca", 0.32);
    drawLayer03Right($("#layer03_right_chart03 canvas").get(0), "#b58dff", 0.18);
    drawLayer03Right($("#layer03_right_chart04 canvas").get(0), "#0a92d1", 0.27);
}

function drawLayer03Right(canvasObj, colorValue, rate) {
    var ctx = canvasObj.getContext("2d");

    var circle = {
        x: 65, //圆心的x轴坐标值
        y: 80, //圆心的y轴坐标值
        r: 60 //圆的半径
    };

    //画扇形
    //ctx.sector(circle.x,circle.y,circle.r,1.5*Math.PI,(1.5+rate*2)*Math.PI);
    //ctx.fillStyle = colorValue;
    //ctx.fill();

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2)
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#05525a';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.r, 1.5 * Math.PI, (1.5 + rate * 2) * Math.PI)
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = colorValue;
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'white';
    ctx.font = '20px Calibri';
    ctx.fillText(rate * 100 + '%', circle.x - 15, circle.y + 10);

}


function renderChartBar01() {
    var myChart = echarts.init(document.getElementById("layer03_left_02"));
    myChart.setOption({
        title: {
            text: '',
            subtext: '',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            show: false,
            x: 'center',
            y: 'bottom',
            data: ['流量分析', '事件分析', '交易分析', '整体分析']
        },
        toolbox: {},
        label: {
            normal: {
                show: true,
                formatter: "{b} \n{d}%"
            }
        },
        calculable: true,
        color: [COLOR.MACHINE.TYPE_A, COLOR.MACHINE.TYPE_B, COLOR.MACHINE.TYPE_C, COLOR.MACHINE.TYPE_D, COLOR.MACHINE.TYPE_E, COLOR.MACHINE.TYPE_F, COLOR.MACHINE.TYPE_G],
        series: [{
            name: '',
            type: 'pie',
            radius: [40, 80],
            center: ['50%', '50%'],
            //roseType : 'area',
            data: [{
                value: 4600,
                name: '流量分析'
            },
            {
                value: 5900,
                name: '事件分析'
            },
            {
                value: 15600,
                name: '交易分析'
            },
            {
                value: 6500,
                name: '整体分析'
            }

            ]
        }]
    });

}

/*
function renderChartBar02(){
	var myChart = echarts.init(document.getElementById("layer03_left_03"));
		myChart.setOption(
					{
						title : {
							text: '',
							subtext: '',
							x:'center'
						},
						tooltip : {
							show:true,
							trigger: 'item',
							formatter: "上线率<br>{b} : {c} ({d}%)"
						},
						legend: {
							show:false,
							orient: 'vertical',
							left: 'left',
							data: ['A机型','B机型','C机型','D机型','E机型','F机型','G机型']
						},
						series : [
							{
								name: '',
								type: 'pie',
								radius : '50%',
								center: ['50%', '60%'],
								data:[
									{value:7600, name:'A机型'},
									{value:6600, name:'B机型'},
									{value:15600, name:'C机型'},
									{value:5700, name:'D机型'},
									{value:4600, name:'E机型'},
									{value:4600, name:'F机型'},
									{value:3500, name:'G机型'}
								],
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								}
							}
						],
						color:[COLOR.MACHINE.TYPE_A,COLOR.MACHINE.TYPE_B,COLOR.MACHINE.TYPE_C,COLOR.MACHINE.TYPE_D,COLOR.MACHINE.TYPE_E,COLOR.MACHINE.TYPE_F,COLOR.MACHINE.TYPE_G]
					}
		);
}*/

function renderLayer04Left() {
    var myChart = echarts.init(document.getElementById("layer04_left_chart"));
    myChart.setOption({
        
        title: {
            text: ''
        },
        grid: {
            left: '4%',
            right: '4%',
            bottom: '20%',
            top: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: getLatestDays(31),
            axisLabel: {
                textStyle: {
                    color: "white", //刻度颜色
                    fontSize: 8 //刻度大小
                },
                rotate: 45,
                interval: 2
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0B3148',
                    width: 1,
                    type: 'solid'
                }
            }
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: "white", //刻度颜色
                    fontSize: 8 //刻度大小
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#0B3148',
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: '',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#026B6F'
                    }, {
                        offset: 1,
                        color: '#012138'
                    }], false),
                    opacity: 0.2
                }
            },
            itemStyle: {
                normal: {
                    color: '#009991'
                },
                lineStyle: {
                    normal: {
                        color: '#009895',
                        opacity: 1
                    }
                }
            },
            symbol: 'none',
            data: [48, 52, 45, 348, 89, 120, 110, 1101, 500, 96, 88, 45, 78, 600, 89, 13, 104, 56, 5, 304, 112, 132, 120, 110, 89, 95, 90, 89, 102, 110, 110]

        },
        {
            name: '',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#026B6F'
                    }, {
                        offset: 1,
                        color: '#012138'
                    }], false),
                    opacity: 0.2
                }
            },
            itemStyle: {
                normal: {
                    color: '#fccf07'
                },
                lineStyle: {
                    normal: {
                        color: '#009895',
                        opacity: 1
                    }
                }
            },
            symbol: 'none',
            data: [48, 62, 85, 46, 89, 320, 180, 20, 308, 96, 508, 689, 98, 37, 89, 53, 94, 106, 45, 64, 12, 132, 120, 110, 89, 95, 90, 89, 102, 110, 110]


        },
        {
            name: '',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#026B6F'
                    }, {
                        offset: 1,
                        color: '#012138'
                    }], false),
                    opacity: 0.2
                }
            },
            itemStyle: {
                normal: {
                    color: '#7a81ff'
                },
                lineStyle: {
                    normal: {
                        color: '#009895',
                        opacity: 1
                    }
                }
            },
            symbol: 'none',
            data: [48, 52, 35, 46, 9, 320, 910, 689, 88, 96, 88, 255, 78, 67, 199, 303, 64, 26, 29, 34, 42, 52, 60, 80, 90, 95, 90, 89, 102, 110, 110]


        },
        {
            name: '',
            type: 'line',
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fb68b3'
                    }, {
                        offset: 1,
                        color: '#012138'
                    }], false),
                    opacity: 0.2
                }
            },
            itemStyle: {
                normal: {
                    color: '#fb68b3'
                },
                lineStyle: {
                    normal: {
                        color: '#009895',
                        opacity: 1
                    }
                }
            },
            symbol: 'none',
            data: [58, 52, 65, 46, 9, 50, 80, 50, 58, 66, 48, 55, 58, 87, 99, 63, 64, 26, 29, 34, 42, 52, 60, 80, 90, 95, 90, 89, 102, 110, 110]


        }
        ]
    }

    );
}

// 右下角图片
function renderLayer04Right() {
    var dom = document.getElementById("layer04_right_chart");
    var myChart = echarts.init(dom, 'light');
    var app = {};
    option = null;
    var base = +new Date(2018, 9, 3);
    var oneDay = 1;
    var date = [];

    // var num =Math.ceil(Math.random()*9+1);
    // data.slice(1, 4);

    // var data = [num];
    // console.log(num);
    var data = [(Math.ceil(Math.random() * 20 + 1))];

    var now = new Date();// 你是要使用这个now对吗
    // 要不我先回去吧 这个要关门了

    var addData = (shift) => {

        var now = new Date();
        var trueNow = [now.getFullYear(), now.getMonth() + 1, now.getDay()];
        if (date.length > 0) {
            var str = date[date.length - 1].split(":", 3);
            for (var j = 0; j < str.length; j++) {
                trueNow.push(str[j]);
            }
        } else {
            trueNow.push(now.getHours());
            trueNow.push(now.getMinutes());
            trueNow.push(now.getSeconds());
        }
        // console.log(trueNow)
        var now = new Date(trueNow[0], trueNow[1], trueNow[2], trueNow[3], trueNow[4], trueNow[5]);
        // console.log(now)
        // console.log(now);addData
        now = [now.getHours(), now.getMinutes(), now.getSeconds() + 1].join(':');
        date.push(now);
        data.push((Math.round(Math.random() - 0.4) * 10) + data[data.length - 1]);

        if (shift) {
            date.shift();
            data.shift();
        }
        now = new Date(+new Date(now) + oneDay);
    }

    // var now = new Date();
    // now = now.getSeconds();
    for (var i = 1; i < 100; i++) {
        if (date.length > 30) {
            addData(1)
        } else {
            addData();
        }
        // console.log(date)
    }
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top: 20,
            right: 1,
            textStyle: {
                color: 'white'
            },
            orient: 'vertical',
            data: [
            ]
        },
        grid: {
            left: '10%',
            right: '25%',
            bottom: '3%',
            top: '3%',
            containLabel: true
        },
        xAxis: {
            name: '时间',
            type: 'category',
            boundaryGap: [0, '20%'],
            data: date
        },
        yAxis: {
            name: 'tps',
            boundaryGap: [0, '20%'],
            type: 'value'
        },
        series: [
            {
                name: 'tps',
                type: 'bar',
                smooth: true,
                symbol: 'none',
                stack: 'a',
                areaStyle: {
                    emphasis: {
                        color: '#0080c0'
                    }
                },
                data: data
            }
        ]
    };

    setInterval(function () {
        addData(true);
        // console.log(date);
        myChart.setOption({
            textStyle: {
                color: '#fff'
            },
            tooltip: {},
            legend: {
                data: ['tps']
            },
            grid: {
                left: '10%',
                right: '25%',
                bottom: '3%',
                top: '3%',
                containLabel: true
            },
            xAxis: {
                data: date
            },
            series: [{
                name: 'tps',
                data: data,

            }]
        });
    }, 500);;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}

// function get10MinutesScale()
// {
// 	var currDate = new Date();
// 	var odd = currDate.getMinutes()%10;
// 	var returnArr = new Array();
// 	currDate.setMinutes(currDate.getMinutes()-odd);
// 	for(var i = 0; i <7; i++){
// 		returnArr.push(currDate.getHours()+":"+(currDate.getMinutes()<10?("0"+currDate.getMinutes()):currDate.getMinutes()));
// 		currDate.setMinutes(currDate.getMinutes()-10);
// 	}
// 	return returnArr;
// }
function getLatestDays(num) {
    var currentDay = new Date();
    var returnDays = [];
    for (var i = 0; i < num; i++) {
        currentDay.setDate(currentDay.getDate() - 1);
        returnDays.push((currentDay.getMonth() + 1) + "/" + currentDay.getDate());
    }
    return returnDays;
}

function renderLayer04Left() {
    var dom = document.getElementById("container");
    var myChart = echarts.init(dom,'light');
    var app = {};
    option = null;
    app.title = '多 Y 轴示例';

    var colors = [ '#d14a61'];

    option = {
        textStyle: {
                color: '#fff'
            },
        color: colors,

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        grid: {
            right: '10%'
        },
        legend: {
            textStyle: {
                color: 'white'
            },
            data: ['数据', '时间']
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [
            {
                type: 'value',
                name: '数据',
                min: 0,
                max: 250,
                position: 'left',
                axisLine: {
                    lineStyle: {
                        color: colors[0]
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [{
            name: '数据',
            type: 'bar',
            emphasis: {
                itemStyle: {
                    // 高亮时点的颜色。
                    color: 'green'
                  },
             },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        }
        ]
    };;
    if (option && typeof option === "object") {
        myChart.setOption(option, true);
    }

}