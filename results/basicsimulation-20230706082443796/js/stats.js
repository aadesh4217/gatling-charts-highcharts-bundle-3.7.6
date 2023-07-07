var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "25000",
        "ok": "430",
        "ko": "24570"
    },
    "minResponseTime": {
        "total": "256",
        "ok": "2344",
        "ko": "256"
    },
    "maxResponseTime": {
        "total": "60122",
        "ok": "60040",
        "ko": "60122"
    },
    "meanResponseTime": {
        "total": "14873",
        "ok": "40739",
        "ko": "14420"
    },
    "standardDeviation": {
        "total": "21591",
        "ok": "14501",
        "ko": "21418"
    },
    "percentiles1": {
        "total": "796",
        "ok": "45613",
        "ko": "795"
    },
    "percentiles2": {
        "total": "26237",
        "ok": "52016",
        "ko": "24214"
    },
    "percentiles3": {
        "total": "60045",
        "ok": "58033",
        "ko": "60045"
    },
    "percentiles4": {
        "total": "60048",
        "ok": "59534",
        "ko": "60048"
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
    "count": 430,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 24570,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.585",
        "ok": "0.406",
        "ko": "23.179"
    }
},
contents: {
"req_ep-dn-mapping-a-0e548": {
        type: "REQUEST",
        name: "ep-dn-mapping api",
path: "ep-dn-mapping api",
pathFormatted: "req_ep-dn-mapping-a-0e548",
stats: {
    "name": "ep-dn-mapping api",
    "numberOfRequests": {
        "total": "25000",
        "ok": "430",
        "ko": "24570"
    },
    "minResponseTime": {
        "total": "256",
        "ok": "2344",
        "ko": "256"
    },
    "maxResponseTime": {
        "total": "60122",
        "ok": "60040",
        "ko": "60122"
    },
    "meanResponseTime": {
        "total": "14873",
        "ok": "40739",
        "ko": "14420"
    },
    "standardDeviation": {
        "total": "21591",
        "ok": "14501",
        "ko": "21418"
    },
    "percentiles1": {
        "total": "796",
        "ok": "45613",
        "ko": "795"
    },
    "percentiles2": {
        "total": "26237",
        "ok": "52016",
        "ko": "24214"
    },
    "percentiles3": {
        "total": "60045",
        "ok": "58033",
        "ko": "60045"
    },
    "percentiles4": {
        "total": "60048",
        "ok": "59534",
        "ko": "60048"
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
    "count": 430,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 24570,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "23.585",
        "ok": "0.406",
        "ko": "23.179"
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
