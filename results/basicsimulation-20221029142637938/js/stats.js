var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "49992",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "70",
        "ok": "116",
        "ko": "70"
    },
    "maxResponseTime": {
        "total": "131029",
        "ok": "131029",
        "ko": "303"
    },
    "meanResponseTime": {
        "total": "149",
        "ok": "149",
        "ko": "161"
    },
    "standardDeviation": {
        "total": "586",
        "ok": "586",
        "ko": "63"
    },
    "percentiles1": {
        "total": "140",
        "ok": "140",
        "ko": "152"
    },
    "percentiles2": {
        "total": "154",
        "ok": "154",
        "ko": "173"
    },
    "percentiles3": {
        "total": "189",
        "ok": "189",
        "ko": "263"
    },
    "percentiles4": {
        "total": "266",
        "ok": "266",
        "ko": "295"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49987,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.444",
        "ok": "44.437",
        "ko": "0.007"
    }
},
contents: {
"req_agent-config-ap-4c62a": {
        type: "REQUEST",
        name: "agent-config api",
path: "agent-config api",
pathFormatted: "req_agent-config-ap-4c62a",
stats: {
    "name": "agent-config api",
    "numberOfRequests": {
        "total": "25000",
        "ok": "24992",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "70",
        "ok": "125",
        "ko": "70"
    },
    "maxResponseTime": {
        "total": "1124",
        "ok": "1124",
        "ko": "303"
    },
    "meanResponseTime": {
        "total": "161",
        "ok": "161",
        "ko": "161"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "63"
    },
    "percentiles1": {
        "total": "154",
        "ok": "154",
        "ko": "152"
    },
    "percentiles2": {
        "total": "163",
        "ok": "163",
        "ko": "173"
    },
    "percentiles3": {
        "total": "225",
        "ok": "225",
        "ko": "263"
    },
    "percentiles4": {
        "total": "289",
        "ok": "289",
        "ko": "295"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24988,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 8,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.215",
        "ko": "0.007"
    }
}
    },"req_desktop-layout--175f2": {
        type: "REQUEST",
        name: "desktop-layout api",
path: "desktop-layout api",
pathFormatted: "req_desktop-layout--175f2",
stats: {
    "name": "desktop-layout api",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "131029",
        "ok": "131029",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "828",
        "ok": "828",
        "ko": "-"
    },
    "percentiles1": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles2": {
        "total": "134",
        "ok": "134",
        "ko": "-"
    },
    "percentiles3": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles4": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.222",
        "ok": "22.222",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
