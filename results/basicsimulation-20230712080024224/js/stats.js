var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "131306",
        "ok": "131306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles1": {
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "percentiles2": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "percentiles3": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "percentiles4": {
        "total": "237",
        "ok": "237",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24950,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22,
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
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "131306",
        "ok": "131306",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "179",
        "ok": "179",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "percentiles1": {
        "total": "169",
        "ok": "169",
        "ko": "-"
    },
    "percentiles2": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "percentiles3": {
        "total": "194",
        "ok": "194",
        "ko": "-"
    },
    "percentiles4": {
        "total": "237",
        "ok": "237",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24950,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 22,
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
