var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "49995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "84",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "130854",
        "ok": "130854",
        "ko": "138"
    },
    "meanResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "84"
    },
    "standardDeviation": {
        "total": "1566",
        "ok": "1566",
        "ko": "35"
    },
    "percentiles1": {
        "total": "121",
        "ok": "121",
        "ko": "61"
    },
    "percentiles2": {
        "total": "138",
        "ok": "138",
        "ko": "114"
    },
    "percentiles3": {
        "total": "208",
        "ok": "208",
        "ko": "133"
    },
    "percentiles4": {
        "total": "341",
        "ok": "341",
        "ko": "137"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49983,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.956",
        "ok": "45.951",
        "ko": "0.005"
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
        "ok": "24995",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "110",
        "ko": "53"
    },
    "maxResponseTime": {
        "total": "130854",
        "ok": "130854",
        "ko": "138"
    },
    "meanResponseTime": {
        "total": "170",
        "ok": "170",
        "ko": "84"
    },
    "standardDeviation": {
        "total": "1304",
        "ok": "1304",
        "ko": "35"
    },
    "percentiles1": {
        "total": "137",
        "ok": "137",
        "ko": "61"
    },
    "percentiles2": {
        "total": "147",
        "ok": "147",
        "ko": "114"
    },
    "percentiles3": {
        "total": "289",
        "ok": "289",
        "ko": "133"
    },
    "percentiles4": {
        "total": "367",
        "ok": "367",
        "ko": "137"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24991,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 5,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.978",
        "ok": "22.973",
        "ko": "0.005"
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
        "ok": "25000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "130845",
        "ok": "130845",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1790",
        "ok": "1790",
        "ko": "-"
    },
    "percentiles1": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles2": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles3": {
        "total": "117",
        "ok": "116",
        "ko": "-"
    },
    "percentiles4": {
        "total": "124",
        "ok": "124",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24992,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "22.978",
        "ok": "22.978",
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
