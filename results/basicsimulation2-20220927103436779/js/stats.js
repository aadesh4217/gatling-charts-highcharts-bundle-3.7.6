var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "75000",
        "ok": "75000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6713",
        "ok": "6713",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "percentiles1": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles2": {
        "total": "811",
        "ok": "811",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3640",
        "ok": "3640",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4967",
        "ok": "4966",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55415,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10715,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8870,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5357.143",
        "ok": "5357.143",
        "ko": "-"
    }
},
contents: {
"req_health-api-2d905": {
        type: "REQUEST",
        name: "health API",
path: "health API",
pathFormatted: "req_health-api-2d905",
stats: {
    "name": "health API",
    "numberOfRequests": {
        "total": "75000",
        "ok": "75000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6713",
        "ok": "6713",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "759",
        "ok": "759",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1015",
        "ok": "1015",
        "ko": "-"
    },
    "percentiles1": {
        "total": "486",
        "ok": "486",
        "ko": "-"
    },
    "percentiles2": {
        "total": "811",
        "ok": "811",
        "ko": "-"
    },
    "percentiles3": {
        "total": "3640",
        "ok": "3640",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4967",
        "ok": "4967",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55415,
    "percentage": 74
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 10715,
    "percentage": 14
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8870,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5357.143",
        "ok": "5357.143",
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
