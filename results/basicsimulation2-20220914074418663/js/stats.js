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
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7699",
        "ok": "7699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1482",
        "ok": "1482",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1975",
        "ok": "1975",
        "ko": "-"
    },
    "percentiles1": {
        "total": "576",
        "ok": "577",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2163",
        "ok": "2166",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6066",
        "ok": "6060",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6990",
        "ok": "6990",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15191,
    "percentage": 61
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1579,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8230,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2500",
        "ok": "2500",
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
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "7699",
        "ok": "7699",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1482",
        "ok": "1482",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1975",
        "ok": "1975",
        "ko": "-"
    },
    "percentiles1": {
        "total": "581",
        "ok": "578",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2162",
        "ok": "2167",
        "ko": "-"
    },
    "percentiles3": {
        "total": "6067",
        "ok": "6066",
        "ko": "-"
    },
    "percentiles4": {
        "total": "6991",
        "ok": "6991",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15191,
    "percentage": 61
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1579,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 8230,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2500",
        "ok": "2500",
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
