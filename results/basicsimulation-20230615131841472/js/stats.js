var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "146",
        "ko": "4854"
    },
    "minResponseTime": {
        "total": "836",
        "ok": "2094",
        "ko": "836"
    },
    "maxResponseTime": {
        "total": "40925",
        "ok": "40925",
        "ko": "39848"
    },
    "meanResponseTime": {
        "total": "8513",
        "ok": "20398",
        "ko": "8156"
    },
    "standardDeviation": {
        "total": "5076",
        "ok": "9172",
        "ko": "4431"
    },
    "percentiles1": {
        "total": "7132",
        "ok": "22654",
        "ko": "6912"
    },
    "percentiles2": {
        "total": "10301",
        "ok": "26327",
        "ko": "10047"
    },
    "percentiles3": {
        "total": "19287",
        "ok": "33111",
        "ko": "15149"
    },
    "percentiles4": {
        "total": "28102",
        "ok": "37701",
        "ko": "26321"
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
    "count": 146,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4854,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.045",
        "ok": "1.315",
        "ko": "43.73"
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
        "ok": "146",
        "ko": "4854"
    },
    "minResponseTime": {
        "total": "836",
        "ok": "2094",
        "ko": "836"
    },
    "maxResponseTime": {
        "total": "40925",
        "ok": "40925",
        "ko": "39848"
    },
    "meanResponseTime": {
        "total": "8513",
        "ok": "20398",
        "ko": "8156"
    },
    "standardDeviation": {
        "total": "5076",
        "ok": "9172",
        "ko": "4431"
    },
    "percentiles1": {
        "total": "7132",
        "ok": "22654",
        "ko": "6912"
    },
    "percentiles2": {
        "total": "10301",
        "ok": "26327",
        "ko": "10047"
    },
    "percentiles3": {
        "total": "19287",
        "ok": "33111",
        "ko": "15149"
    },
    "percentiles4": {
        "total": "28102",
        "ok": "37701",
        "ko": "26321"
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
    "count": 146,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4854,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.045",
        "ok": "1.315",
        "ko": "43.73"
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
