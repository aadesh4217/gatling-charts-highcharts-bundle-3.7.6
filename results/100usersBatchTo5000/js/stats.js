var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "4996",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "241",
        "ok": "329",
        "ko": "241"
    },
    "maxResponseTime": {
        "total": "5448",
        "ok": "5448",
        "ko": "281"
    },
    "meanResponseTime": {
        "total": "2106",
        "ok": "2108",
        "ko": "258"
    },
    "standardDeviation": {
        "total": "1075",
        "ok": "1075",
        "ko": "15"
    },
    "percentiles1": {
        "total": "2086",
        "ok": "2088",
        "ko": "255"
    },
    "percentiles2": {
        "total": "3044",
        "ok": "3044",
        "ko": "265"
    },
    "percentiles3": {
        "total": "3704",
        "ok": "3704",
        "ko": "278"
    },
    "percentiles4": {
        "total": "4286",
        "ok": "4286",
        "ko": "280"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 744,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 647,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3605,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.045",
        "ok": "45.009",
        "ko": "0.036"
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
        "ok": "4996",
        "ko": "4"
    },
    "minResponseTime": {
        "total": "241",
        "ok": "329",
        "ko": "241"
    },
    "maxResponseTime": {
        "total": "5448",
        "ok": "5448",
        "ko": "281"
    },
    "meanResponseTime": {
        "total": "2106",
        "ok": "2108",
        "ko": "258"
    },
    "standardDeviation": {
        "total": "1075",
        "ok": "1075",
        "ko": "15"
    },
    "percentiles1": {
        "total": "2086",
        "ok": "2088",
        "ko": "255"
    },
    "percentiles2": {
        "total": "3044",
        "ok": "3044",
        "ko": "265"
    },
    "percentiles3": {
        "total": "3704",
        "ok": "3704",
        "ko": "278"
    },
    "percentiles4": {
        "total": "4286",
        "ok": "4286",
        "ko": "280"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 744,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 647,
    "percentage": 13
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3605,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 4,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.045",
        "ok": "45.009",
        "ko": "0.036"
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
