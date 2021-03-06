/**
 * Created by wangyu on 16/5/11.
 */
$(function () {
    var chart = {
        type: 'scatter',
        zoomType: 'xy',
        //设置绘图背景颜色
        plotBackgroundColor: '#F9F0F0'
    };
    
    var title = {
        text: '信号强度图',
        style: {
            fontSize:'16px',
            fontWeight: 'bold'
        },
        align: 'left'
    };
    var subtitle = {
        text: ''
    };
    var xAxis = {
        type: 'datetime',
//      tickPixelInterval: 50
        title: {
            enabled: true,
            text: 'Time'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    };
    var yAxis = {
        title: {
            text: 'Latency(ms)'
        }
    };
    var legend = {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 250,
        y: 60,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    }
    var plotOptions = {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        }
    };
    var tooltip= {
        formatter: function() {
            return '<b>'+ this.series.name +'</b><br/>'+                                                         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
                Highcharts.numberFormat(this.y, 2);
        }
    };
    var series= [{
        name: 'Sina',
        color: 'rgba(223, 83, 83, .5)',
        data: (function() {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -10; i <= 0; i++) {
                data.push({
                    x: time + i * 1000,
                    y: 100 * Math.random()
                });
            }
            return data;
        })()
    }, {
        name: 'SOHU',
        color: 'rgba(119, 152, 191, .5)',
        data: (function() {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -10; i <= 0; i++) {
                data.push({
                    x: time + i * 1000,
                    y: 100 * Math.random()
                });
            }
            return data;
        })()
    },{
        name: 'Baidu',
        color: 'rgba(119, 52, 9, .5)',
        data: (function() {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -10; i <= 0; i++) {
                data.push({
                    x: time + i * 1000,
                    y: 100 * Math.random()
                });
            }
            return data;
        })()
    }
    ];

    var json = {};
    json.chart = chart;
    json.title = title;
    json.subtitle = subtitle;
    json.legend = legend;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    json.tooltip = tooltip;
    $('#container_timedelay').highcharts(json);

});