var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles3": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles4": {
        "total": "149",
        "ok": "149",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50000,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "49.95",
        "ko": "-"
    }
},
contents: {
"req_agent-config-ap-9134f": {
        type: "REQUEST",
        name: "agent-config api load 10 nov 50k",
path: "agent-config api load 10 nov 50k",
pathFormatted: "req_agent-config-ap-9134f",
stats: {
    "name": "agent-config api load 10 nov 50k",
    "numberOfRequests": {
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "375",
        "ok": "375",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "119",
        "ok": "119",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles1": {
        "total": "118",
        "ok": "118",
        "ko": "-"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "-"
    },
    "percentiles3": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles4": {
        "total": "149",
        "ok": "150",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 50000,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "49.95",
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