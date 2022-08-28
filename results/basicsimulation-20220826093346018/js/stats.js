var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "34996",
        "ko": "15004"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "108",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "130079",
        "ok": "130079",
        "ko": "311"
    },
    "meanResponseTime": {
        "total": "117",
        "ok": "147",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "823",
        "ok": "983",
        "ko": "6"
    },
    "percentiles1": {
        "total": "128",
        "ok": "132",
        "ko": "46"
    },
    "percentiles2": {
        "total": "135",
        "ok": "139",
        "ko": "48"
    },
    "percentiles3": {
        "total": "160",
        "ok": "181",
        "ko": "54"
    },
    "percentiles4": {
        "total": "313",
        "ok": "338",
        "ko": "67"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34993,
    "percentage": 70
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15004,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.456",
        "ok": "34.615",
        "ko": "14.841"
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
        "ok": "9996",
        "ko": "15004"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "115",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "2128",
        "ok": "2128",
        "ko": "311"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "164",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "70",
        "ok": "62",
        "ko": "6"
    },
    "percentiles1": {
        "total": "49",
        "ok": "142",
        "ko": "46"
    },
    "percentiles2": {
        "total": "139",
        "ok": "157",
        "ko": "48"
    },
    "percentiles3": {
        "total": "216",
        "ok": "311",
        "ko": "54"
    },
    "percentiles4": {
        "total": "353",
        "ok": "392",
        "ko": "67"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9995,
    "percentage": 40
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
    "count": 15004,
    "percentage": 60
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.728",
        "ok": "9.887",
        "ko": "14.841"
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
        "total": "108",
        "ok": "108",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "130079",
        "ok": "130079",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1162",
        "ok": "1162",
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
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles4": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24998,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.728",
        "ok": "24.728",
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
