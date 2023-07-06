var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "571",
        "ko": "429"
    },
    "minResponseTime": {
        "total": "844",
        "ok": "844",
        "ko": "848"
    },
    "maxResponseTime": {
        "total": "60066",
        "ok": "60046",
        "ko": "60066"
    },
    "meanResponseTime": {
        "total": "33928",
        "ok": "30210",
        "ko": "38878"
    },
    "standardDeviation": {
        "total": "18448",
        "ok": "17277",
        "ko": "18791"
    },
    "percentiles1": {
        "total": "32895",
        "ok": "30825",
        "ko": "37275"
    },
    "percentiles2": {
        "total": "50743",
        "ok": "45063",
        "ko": "60044"
    },
    "percentiles3": {
        "total": "60046",
        "ok": "56234",
        "ko": "60048"
    },
    "percentiles4": {
        "total": "60049",
        "ok": "58962",
        "ko": "60051"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 567,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 429,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.329",
        "ok": "3.614",
        "ko": "2.715"
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
        "total": "1000",
        "ok": "571",
        "ko": "429"
    },
    "minResponseTime": {
        "total": "844",
        "ok": "844",
        "ko": "848"
    },
    "maxResponseTime": {
        "total": "60066",
        "ok": "60046",
        "ko": "60066"
    },
    "meanResponseTime": {
        "total": "33928",
        "ok": "30210",
        "ko": "38878"
    },
    "standardDeviation": {
        "total": "18448",
        "ok": "17277",
        "ko": "18791"
    },
    "percentiles1": {
        "total": "32895",
        "ok": "30825",
        "ko": "37275"
    },
    "percentiles2": {
        "total": "50743",
        "ok": "45063",
        "ko": "60044"
    },
    "percentiles3": {
        "total": "60046",
        "ok": "56234",
        "ko": "60048"
    },
    "percentiles4": {
        "total": "60049",
        "ok": "58962",
        "ko": "60051"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 567,
    "percentage": 57
},
    "group4": {
    "name": "failed",
    "count": 429,
    "percentage": 43
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.329",
        "ok": "3.614",
        "ko": "2.715"
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
