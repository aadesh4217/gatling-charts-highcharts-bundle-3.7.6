var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "19996",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "279",
        "ko": "579"
    },
    "maxResponseTime": {
        "total": "70598",
        "ok": "70598",
        "ko": "808"
    },
    "meanResponseTime": {
        "total": "5583",
        "ok": "5584",
        "ko": "687"
    },
    "standardDeviation": {
        "total": "6452",
        "ok": "6453",
        "ko": "97"
    },
    "percentiles1": {
        "total": "2284",
        "ok": "2284",
        "ko": "680"
    },
    "percentiles2": {
        "total": "8540",
        "ok": "8541",
        "ko": "768"
    },
    "percentiles3": {
        "total": "18497",
        "ok": "18499",
        "ko": "800"
    },
    "percentiles4": {
        "total": "28668",
        "ok": "28669",
        "ko": "806"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 813,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6776,
    "percentage": 34
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12407,
    "percentage": 62
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.681",
        "ok": "79.665",
        "ko": "0.016"
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
        "total": "10000",
        "ok": "9996",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "319",
        "ok": "319",
        "ko": "579"
    },
    "maxResponseTime": {
        "total": "16230",
        "ok": "16230",
        "ko": "808"
    },
    "meanResponseTime": {
        "total": "1644",
        "ok": "1644",
        "ko": "687"
    },
    "standardDeviation": {
        "total": "2496",
        "ok": "2496",
        "ko": "97"
    },
    "percentiles1": {
        "total": "964",
        "ok": "965",
        "ko": "680"
    },
    "percentiles2": {
        "total": "1219",
        "ok": "1219",
        "ko": "768"
    },
    "percentiles3": {
        "total": "6723",
        "ok": "6828",
        "ko": "800"
    },
    "percentiles4": {
        "total": "13463",
        "ok": "13463",
        "ko": "806"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 694,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 6666,
    "percentage": 67
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2636,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.841",
        "ok": "39.825",
        "ko": "0.016"
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "279",
        "ok": "279",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "70598",
        "ok": "70598",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "9522",
        "ok": "9522",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6782",
        "ok": "6782",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7779",
        "ok": "7779",
        "ko": "-"
    },
    "percentiles2": {
        "total": "12577",
        "ok": "12577",
        "ko": "-"
    },
    "percentiles3": {
        "total": "22803",
        "ok": "22803",
        "ko": "-"
    },
    "percentiles4": {
        "total": "32464",
        "ok": "32464",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 119,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 110,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9771,
    "percentage": 98
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "39.841",
        "ok": "39.841",
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
