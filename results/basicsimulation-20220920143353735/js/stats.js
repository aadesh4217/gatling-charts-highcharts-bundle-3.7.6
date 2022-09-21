var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "5751",
        "ko": "44249"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "107",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "1889",
        "ok": "537",
        "ko": "1889"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "140",
        "ko": "54"
    },
    "standardDeviation": {
        "total": "34",
        "ok": "30",
        "ko": "18"
    },
    "percentiles1": {
        "total": "52",
        "ok": "136",
        "ko": "51"
    },
    "percentiles2": {
        "total": "59",
        "ok": "142",
        "ko": "54"
    },
    "percentiles3": {
        "total": "138",
        "ok": "172",
        "ko": "76"
    },
    "percentiles4": {
        "total": "161",
        "ok": "289",
        "ko": "93"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5751,
    "percentage": 12
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
    "count": 44249,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "5.745",
        "ko": "44.205"
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
        "total": "25000",
        "ok": "205",
        "ko": "24795"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "155",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "1063",
        "ok": "498",
        "ko": "1063"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "250",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "26",
        "ok": "84",
        "ko": "18"
    },
    "percentiles1": {
        "total": "49",
        "ok": "217",
        "ko": "49"
    },
    "percentiles2": {
        "total": "55",
        "ok": "291",
        "ko": "54"
    },
    "percentiles3": {
        "total": "80",
        "ok": "432",
        "ko": "79"
    },
    "percentiles4": {
        "total": "183",
        "ok": "470",
        "ko": "104"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 205,
    "percentage": 1
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
    "count": 24795,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.205",
        "ko": "24.77"
    }
}
    },"req_desktop-layout--175f2": {
        type: "REQUEST",
        name: "desktop-layout api",
path: "desktop-layout api",
pathFormatted: "req_desktop-layout--175f2",
stats: {
    "name": "desktop-layout api",
    "numberOfRequests": {
        "total": "25000",
        "ok": "5546",
        "ko": "19454"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "107",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "1889",
        "ok": "537",
        "ko": "1889"
    },
    "meanResponseTime": {
        "total": "72",
        "ok": "136",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "15",
        "ko": "17"
    },
    "percentiles1": {
        "total": "53",
        "ok": "136",
        "ko": "52"
    },
    "percentiles2": {
        "total": "61",
        "ok": "142",
        "ko": "54"
    },
    "percentiles3": {
        "total": "142",
        "ok": "156",
        "ko": "60"
    },
    "percentiles4": {
        "total": "158",
        "ok": "182",
        "ko": "71"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5546,
    "percentage": 22
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
    "count": 19454,
    "percentage": 78
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "5.54",
        "ko": "19.435"
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
