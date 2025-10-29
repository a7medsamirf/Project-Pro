"use strict";
var KTChartsWidget01 = function () {
    var e = {
            self: null,
            rendered: !1
        },
        t = function (e) {
            var t = document.getElementById("kt_charts_widget_01");
            if (t) {
                var a = parseInt(KTUtil.css(t, "height")),
                    l = KTUtil.getCssVariableValue("--bs-gray-500"),
                    r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    s = KTUtil.getCssVariableValue("--bs-success"),
                    n = {
                        series: [{
                            name: "Monthly Trend",
                            data: [35, 47, 30, 15, 40, 45, 40, 50, 60, 48, 30, 20]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "area",
                            height: a,
                            toolbar: {
                                show: false
                            }
                        },
                        plotOptions: {},
                        legend: {
                            show: false,
                            fontFamily: 'Baloo 2, sans-serif',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                shadeIntensity: 1,
                                opacityFrom: 0.4,
                                opacityTo: 0.2,
                                stops: [15, 120, 100]
                            }
                        },
                        stroke: {
                            curve: "smooth",
                            show: true,
                            width: 3,
                            colors: [s]
                        },
                        xaxis: {
                            categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                            tickAmount: 12,
                            labels: {
                                rotate: 0,
                                style: {
                                    colors: l,
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            max: 60,
                            min: 0,
                            tickAmount: 4,
                            labels: {
                                style: {
                                    colors: l,
                                    fontSize: "12px"
                                }
                            }
                        },
                        // ... existing code ...
                        colors: [s],
                        grid: {
                            borderColor: r,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            }
                        },
                        markers: {
                            strokeColor: [s],
                            strokeWidth: 3
                        }
                    };
                e.self = new ApexCharts(t, n), setTimeout((function () {
                    e.self.render(), e.rendered = !0
                }), 200)
            }
        };
    // ... existing code ...


    return {
        init: function () {
            t(e), KTThemeMode.on("kt.thememode.change", (function () {
                e.rendered && e.self.destroy(), t(e)
            }))
        }
    }
}();
"undefined" != typeof module && (module.exports = KTChartsWidget01), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget01.init()
}));



var KTChartsWidget02 = function () {
    var e = {
            self: null,
            rendered: !1
        },
        t = function (e) {
            var t = document.getElementById("kt_charts_widget_02");
            if (t) {
                var a = parseInt(KTUtil.css(t, "height")),
                    l = KTUtil.getCssVariableValue("--bs-gray-500"),
                    r = KTUtil.getCssVariableValue("--bs-border-dashed-color"),
                    n = {
                        series: [{
                            name: 'Approved',
                            data: [18, 35, 35, 35, 15, 50, 25, 30, 30, 25, 45, 35]
                        }, {
                            name: 'Submitted',
                            data: [15, 10, 15, 5, 15, 5, 15, 15, 15, 15, 10, 15]
                        }, {
                            name: 'Cancelled',
                            data: [17, 5, 0, 2, 2, 3, 2, 5, 5, 2, 2, 2]
                        }],
                        chart: {
                            fontFamily: "inherit",
                            type: "bar",
                            height: a,
                            stacked: true,
                            toolbar: {
                                show: false
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '50%',
                            },
                        },
                        legend: {
                            show: true,
                            position: 'bottom',
                            horizontalAlign: 'center',
                            fontFamily: 'Baloo 2, sans-serif',
                        },
                        dataLabels: {
                            enabled: false
                        },
                        xaxis: {
                            categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                            axisBorder: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                            labels: {
                                style: {
                                    colors: l,
                                    fontSize: "12px"
                                }
                            }
                        },
                        yaxis: {
                            max: 60,
                            min: 0,
                            tickAmount: 4,
                            labels: {
                                style: {
                                    colors: l,
                                    fontSize: "12px"
                                }
                            }
                        },
                        colors: [KTUtil.getCssVariableValue("--bs-success"), 
                                KTUtil.getCssVariableValue("--bs-primary"), 
                                KTUtil.getCssVariableValue("--bs-danger")],
                        grid: {
                            borderColor: r,
                            strokeDashArray: 4,
                            yaxis: {
                                lines: {
                                    show: true
                                }
                            }
                        }
                    };
                e.self = new ApexCharts(t, n), setTimeout((function () {
                    e.self.render(), e.rendered = !0
                }), 200)
            }
        };
    return {
        init: function () {
            t(e), KTThemeMode.on("kt.thememode.change", (function () {
                e.rendered && e.self.destroy(), t(e)
            }))
        }
    }
}();
"undefined" != typeof module && (module.exports = KTChartsWidget02), KTUtil.onDOMContentLoaded((function () {
    KTChartsWidget02.init()
}));


var KTChartsWidget03 = function () {
    var e = {
        self: null,
        rendered: !1
    };

    var t = function () {
        var t = document.getElementById("kt_charts_widget_03");
        if (t) {
            var n = {
                series: [80, 20],
                chart: {
                    type: 'donut',
                    height: 250
                },
                legend: {
                    show: false
                },
                plotOptions: {
                    pie: {
                        donut: {
                            size: '75%',
                            labels: {
                                show: false
                            }
                        }
                    }
                },
                colors: [KTUtil.getCssVariableValue('--bs-success'), '#506373'],
                labels: ['Active', 'Inactive'],
                dataLabels: {
                    enabled: false
                }
            };
            e.self = new ApexCharts(t, n);
            setTimeout(function () {
                e.self.render();
                e.rendered = !0;
            }, 200);
        }
    };

    return {
        init: function () {
            t();
            KTThemeMode.on("kt.thememode.change", function () {
                e.rendered && e.self.destroy();
                t();
            });
        }
    };
}();

KTUtil.onDOMContentLoaded(function () {
    KTChartsWidget03.init();
});