var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "139",
        "ko": "4861"
    },
    "minResponseTime": {
        "total": "911",
        "ok": "2071",
        "ko": "911"
    },
    "maxResponseTime": {
        "total": "46507",
        "ok": "41911",
        "ko": "46507"
    },
    "meanResponseTime": {
        "total": "9025",
        "ok": "20171",
        "ko": "8707"
    },
    "standardDeviation": {
        "total": "5758",
        "ok": "9037",
        "ko": "5302"
    },
    "percentiles1": {
        "total": "6944",
        "ok": "21100",
        "ko": "6756"
    },
    "percentiles2": {
        "total": "10630",
        "ok": "25632",
        "ko": "10400"
    },
    "percentiles3": {
        "total": "22867",
        "ok": "34880",
        "ko": "20905"
    },
    "percentiles4": {
        "total": "29587",
        "ok": "41143",
        "ko": "28542"
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
    "count": 139,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4861,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.86",
        "ok": "1.219",
        "ko": "42.64"
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
        "ok": "139",
        "ko": "4861"
    },
    "minResponseTime": {
        "total": "911",
        "ok": "2071",
        "ko": "911"
    },
    "maxResponseTime": {
        "total": "46507",
        "ok": "41911",
        "ko": "46507"
    },
    "meanResponseTime": {
        "total": "9025",
        "ok": "20171",
        "ko": "8707"
    },
    "standardDeviation": {
        "total": "5758",
        "ok": "9037",
        "ko": "5302"
    },
    "percentiles1": {
        "total": "6944",
        "ok": "21100",
        "ko": "6756"
    },
    "percentiles2": {
        "total": "10630",
        "ok": "25632",
        "ko": "10400"
    },
    "percentiles3": {
        "total": "22867",
        "ok": "34880",
        "ko": "20905"
    },
    "percentiles4": {
        "total": "29587",
        "ok": "41143",
        "ko": "28542"
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
    "count": 139,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4861,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.86",
        "ok": "1.219",
        "ko": "42.64"
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
