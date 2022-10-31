var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "49997",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "119",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "1199",
        "ok": "1199",
        "ko": "175"
    },
    "meanResponseTime": {
        "total": "153",
        "ok": "153",
        "ko": "142"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "34"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "155"
    },
    "percentiles2": {
        "total": "163",
        "ok": "163",
        "ko": "165"
    },
    "percentiles3": {
        "total": "186",
        "ok": "186",
        "ko": "173"
    },
    "percentiles4": {
        "total": "274",
        "ok": "274",
        "ko": "175"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49982,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 15,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "49.947",
        "ko": "0.003"
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
        "ok": "24997",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "96",
        "ok": "134",
        "ko": "96"
    },
    "maxResponseTime": {
        "total": "1199",
        "ok": "1199",
        "ko": "175"
    },
    "meanResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "142"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "33",
        "ko": "34"
    },
    "percentiles1": {
        "total": "163",
        "ok": "163",
        "ko": "155"
    },
    "percentiles2": {
        "total": "171",
        "ok": "171",
        "ko": "165"
    },
    "percentiles3": {
        "total": "229",
        "ok": "229",
        "ko": "173"
    },
    "percentiles4": {
        "total": "296",
        "ok": "296",
        "ko": "175"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24990,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "24.972",
        "ko": "0.003"
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
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1149",
        "ok": "1149",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "19",
        "ok": "19",
        "ko": "-"
    },
    "percentiles1": {
        "total": "137",
        "ok": "137",
        "ko": "-"
    },
    "percentiles2": {
        "total": "142",
        "ok": "142",
        "ko": "-"
    },
    "percentiles3": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "percentiles4": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24992,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "24.975",
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
