var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "49998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "68",
        "ok": "117",
        "ko": "68"
    },
    "maxResponseTime": {
        "total": "716",
        "ok": "716",
        "ko": "199"
    },
    "meanResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "134"
    },
    "standardDeviation": {
        "total": "25",
        "ok": "25",
        "ko": "66"
    },
    "percentiles1": {
        "total": "140",
        "ok": "140",
        "ko": "134"
    },
    "percentiles2": {
        "total": "153",
        "ok": "153",
        "ko": "166"
    },
    "percentiles3": {
        "total": "178",
        "ok": "178",
        "ko": "192"
    },
    "percentiles4": {
        "total": "265",
        "ok": "264",
        "ko": "198"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49998,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "49.948",
        "ko": "0.002"
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
        "ok": "24998",
        "ko": "2"
    },
    "minResponseTime": {
        "total": "68",
        "ok": "121",
        "ko": "68"
    },
    "maxResponseTime": {
        "total": "716",
        "ok": "716",
        "ko": "199"
    },
    "meanResponseTime": {
        "total": "160",
        "ok": "160",
        "ko": "134"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "29",
        "ko": "66"
    },
    "percentiles1": {
        "total": "153",
        "ok": "153",
        "ko": "134"
    },
    "percentiles2": {
        "total": "162",
        "ok": "162",
        "ko": "166"
    },
    "percentiles3": {
        "total": "222",
        "ok": "222",
        "ko": "192"
    },
    "percentiles4": {
        "total": "287",
        "ok": "287",
        "ko": "198"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "24.973",
        "ko": "0.002"
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
        "total": "117",
        "ok": "117",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "353",
        "ok": "353",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "133",
        "ok": "133",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "7",
        "ok": "7",
        "ko": "-"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles3": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "percentiles4": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25000,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
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
