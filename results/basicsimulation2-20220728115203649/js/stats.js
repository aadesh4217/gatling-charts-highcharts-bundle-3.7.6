var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "233",
        "ko": "4767"
    },
    "minResponseTime": {
        "total": "2567",
        "ok": "2567",
        "ko": "2616"
    },
    "maxResponseTime": {
        "total": "7030",
        "ok": "3886",
        "ko": "7030"
    },
    "meanResponseTime": {
        "total": "4528",
        "ok": "3576",
        "ko": "4574"
    },
    "standardDeviation": {
        "total": "830",
        "ok": "198",
        "ko": "821"
    },
    "percentiles1": {
        "total": "4469",
        "ok": "3617",
        "ko": "4520"
    },
    "percentiles2": {
        "total": "5138",
        "ok": "3713",
        "ko": "5175"
    },
    "percentiles3": {
        "total": "5955",
        "ok": "3802",
        "ko": "5968"
    },
    "percentiles4": {
        "total": "6404",
        "ok": "3854",
        "ko": "6420"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 233,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 4767,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "625",
        "ok": "29.125",
        "ko": "595.875"
    }
},
contents: {
"req_pushlogs-api-ca529": {
        type: "REQUEST",
        name: "pushLogs api",
path: "pushLogs api",
pathFormatted: "req_pushlogs-api-ca529",
stats: {
    "name": "pushLogs api",
    "numberOfRequests": {
        "total": "5000",
        "ok": "233",
        "ko": "4767"
    },
    "minResponseTime": {
        "total": "2567",
        "ok": "2567",
        "ko": "2616"
    },
    "maxResponseTime": {
        "total": "7030",
        "ok": "3886",
        "ko": "7030"
    },
    "meanResponseTime": {
        "total": "4528",
        "ok": "3576",
        "ko": "4574"
    },
    "standardDeviation": {
        "total": "830",
        "ok": "198",
        "ko": "821"
    },
    "percentiles1": {
        "total": "4469",
        "ok": "3617",
        "ko": "4520"
    },
    "percentiles2": {
        "total": "5138",
        "ok": "3713",
        "ko": "5175"
    },
    "percentiles3": {
        "total": "5955",
        "ok": "3802",
        "ko": "5968"
    },
    "percentiles4": {
        "total": "6404",
        "ok": "3854",
        "ko": "6420"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 233,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 4767,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "625",
        "ok": "29.125",
        "ko": "595.875"
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
