var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "4996",
        "ko": "5004"
    },
    "minResponseTime": {
        "total": "226",
        "ok": "315",
        "ko": "226"
    },
    "maxResponseTime": {
        "total": "6300",
        "ok": "6300",
        "ko": "908"
    },
    "meanResponseTime": {
        "total": "1244",
        "ok": "2235",
        "ko": "255"
    },
    "standardDeviation": {
        "total": "1441",
        "ok": "1480",
        "ko": "66"
    },
    "percentiles1": {
        "total": "415",
        "ok": "2901",
        "ko": "242"
    },
    "percentiles2": {
        "total": "2897",
        "ok": "3565",
        "ko": "249"
    },
    "percentiles3": {
        "total": "3915",
        "ok": "4306",
        "ko": "284"
    },
    "percentiles4": {
        "total": "4717",
        "ok": "4903",
        "ko": "702"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1433,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 851,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2712,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 5004,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.125",
        "ok": "39.031",
        "ko": "39.094"
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
        "total": "10000",
        "ok": "4996",
        "ko": "5004"
    },
    "minResponseTime": {
        "total": "226",
        "ok": "315",
        "ko": "226"
    },
    "maxResponseTime": {
        "total": "6300",
        "ok": "6300",
        "ko": "908"
    },
    "meanResponseTime": {
        "total": "1244",
        "ok": "2235",
        "ko": "255"
    },
    "standardDeviation": {
        "total": "1441",
        "ok": "1480",
        "ko": "66"
    },
    "percentiles1": {
        "total": "415",
        "ok": "2901",
        "ko": "242"
    },
    "percentiles2": {
        "total": "2897",
        "ok": "3565",
        "ko": "249"
    },
    "percentiles3": {
        "total": "3915",
        "ok": "4306",
        "ko": "284"
    },
    "percentiles4": {
        "total": "4717",
        "ok": "4903",
        "ko": "702"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1433,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 851,
    "percentage": 9
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2712,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "count": 5004,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.125",
        "ok": "39.031",
        "ko": "39.094"
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
