var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "49995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "96",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "130878",
        "ok": "130878",
        "ko": "239"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "163"
    },
    "standardDeviation": {
        "total": "1014",
        "ok": "1014",
        "ko": "65"
    },
    "percentiles1": {
        "total": "147",
        "ok": "147",
        "ko": "184"
    },
    "percentiles2": {
        "total": "165",
        "ok": "165",
        "ko": "217"
    },
    "percentiles3": {
        "total": "196",
        "ok": "196",
        "ko": "235"
    },
    "percentiles4": {
        "total": "288",
        "ok": "288",
        "ko": "238"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49865,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 52,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 78,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "49.945",
        "ko": "0.005"
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
        "ok": "24995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "79",
        "ok": "133",
        "ko": "79"
    },
    "maxResponseTime": {
        "total": "3509",
        "ok": "3509",
        "ko": "239"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "163"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "116",
        "ko": "65"
    },
    "percentiles1": {
        "total": "165",
        "ok": "165",
        "ko": "184"
    },
    "percentiles2": {
        "total": "173",
        "ok": "173",
        "ko": "217"
    },
    "percentiles3": {
        "total": "239",
        "ok": "239",
        "ko": "235"
    },
    "percentiles4": {
        "total": "333",
        "ok": "333",
        "ko": "238"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24870,
    "percentage": 99
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 50,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 75,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "24.97",
        "ko": "0.005"
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
        "total": "96",
        "ok": "96",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "130878",
        "ok": "130878",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "145",
        "ok": "145",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1430",
        "ok": "1430",
        "ko": "-"
    },
    "percentiles1": {
        "total": "129",
        "ok": "129",
        "ko": "-"
    },
    "percentiles2": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "percentiles4": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24995,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
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
