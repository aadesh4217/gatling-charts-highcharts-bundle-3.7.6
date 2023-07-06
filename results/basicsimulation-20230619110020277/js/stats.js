var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "518",
        "ko": "482"
    },
    "minResponseTime": {
        "total": "859",
        "ok": "895",
        "ko": "859"
    },
    "maxResponseTime": {
        "total": "60133",
        "ok": "60018",
        "ko": "60133"
    },
    "meanResponseTime": {
        "total": "31470",
        "ok": "32949",
        "ko": "29880"
    },
    "standardDeviation": {
        "total": "19817",
        "ok": "17288",
        "ko": "22105"
    },
    "percentiles1": {
        "total": "29831",
        "ok": "34742",
        "ko": "25764"
    },
    "percentiles2": {
        "total": "49814",
        "ok": "48548",
        "ko": "60043"
    },
    "percentiles3": {
        "total": "60046",
        "ok": "57434",
        "ko": "60047"
    },
    "percentiles4": {
        "total": "60049",
        "ok": "58812",
        "ko": "60050"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 516,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 482,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.623",
        "ok": "3.43",
        "ko": "3.192"
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
        "ok": "518",
        "ko": "482"
    },
    "minResponseTime": {
        "total": "859",
        "ok": "895",
        "ko": "859"
    },
    "maxResponseTime": {
        "total": "60133",
        "ok": "60018",
        "ko": "60133"
    },
    "meanResponseTime": {
        "total": "31470",
        "ok": "32949",
        "ko": "29880"
    },
    "standardDeviation": {
        "total": "19817",
        "ok": "17288",
        "ko": "22105"
    },
    "percentiles1": {
        "total": "29831",
        "ok": "34742",
        "ko": "25764"
    },
    "percentiles2": {
        "total": "49814",
        "ok": "48548",
        "ko": "60043"
    },
    "percentiles3": {
        "total": "60046",
        "ok": "57434",
        "ko": "60047"
    },
    "percentiles4": {
        "total": "60049",
        "ok": "58812",
        "ko": "60050"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 516,
    "percentage": 52
},
    "group4": {
    "name": "failed",
    "count": 482,
    "percentage": 48
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.623",
        "ok": "3.43",
        "ko": "3.192"
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
