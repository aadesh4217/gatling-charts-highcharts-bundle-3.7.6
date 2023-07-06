var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "0",
        "ko": "5000"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "maxResponseTime": {
        "total": "25243",
        "ok": "-",
        "ko": "25243"
    },
    "meanResponseTime": {
        "total": "455",
        "ok": "-",
        "ko": "455"
    },
    "standardDeviation": {
        "total": "2568",
        "ok": "-",
        "ko": "2568"
    },
    "percentiles1": {
        "total": "69",
        "ok": "-",
        "ko": "69"
    },
    "percentiles2": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "percentiles3": {
        "total": "104",
        "ok": "-",
        "ko": "104"
    },
    "percentiles4": {
        "total": "16702",
        "ok": "-",
        "ko": "16702"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.505",
        "ok": "-",
        "ko": "49.505"
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
        "total": "5000",
        "ok": "0",
        "ko": "5000"
    },
    "minResponseTime": {
        "total": "58",
        "ok": "-",
        "ko": "58"
    },
    "maxResponseTime": {
        "total": "25243",
        "ok": "-",
        "ko": "25243"
    },
    "meanResponseTime": {
        "total": "455",
        "ok": "-",
        "ko": "455"
    },
    "standardDeviation": {
        "total": "2568",
        "ok": "-",
        "ko": "2568"
    },
    "percentiles1": {
        "total": "69",
        "ok": "-",
        "ko": "69"
    },
    "percentiles2": {
        "total": "74",
        "ok": "-",
        "ko": "74"
    },
    "percentiles3": {
        "total": "104",
        "ok": "-",
        "ko": "104"
    },
    "percentiles4": {
        "total": "16702",
        "ok": "-",
        "ko": "16702"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.505",
        "ok": "-",
        "ko": "49.505"
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
