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
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6690",
        "ok": "6690",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1626",
        "ok": "1626",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1668",
        "ok": "1668",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1044",
        "ok": "1042",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2325",
        "ok": "2323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5027",
        "ok": "5027",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5647",
        "ok": "5647",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11092,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2119,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11789,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2272.727",
        "ok": "2272.727",
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
        "total": "25000",
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "6690",
        "ok": "6690",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1626",
        "ok": "1626",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1668",
        "ok": "1668",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1042",
        "ok": "1045",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2325",
        "ok": "2323",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5027",
        "ok": "5027",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5647",
        "ok": "5647",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 11092,
    "percentage": 44
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2119,
    "percentage": 8
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11789,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2272.727",
        "ok": "2272.727",
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
