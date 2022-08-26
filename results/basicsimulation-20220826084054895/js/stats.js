var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "34640",
        "ko": "15360"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "86",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "2203",
        "ok": "2203",
        "ko": "1071"
    },
    "meanResponseTime": {
        "total": "109",
        "ok": "136",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "76",
        "ko": "12"
    },
    "percentiles1": {
        "total": "116",
        "ok": "128",
        "ko": "47"
    },
    "percentiles2": {
        "total": "133",
        "ok": "138",
        "ko": "48"
    },
    "percentiles3": {
        "total": "161",
        "ok": "182",
        "ko": "53"
    },
    "percentiles4": {
        "total": "330",
        "ok": "356",
        "ko": "63"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 34579,
    "percentage": 69
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 52,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15360,
    "percentage": 31
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "34.605",
        "ko": "15.345"
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
        "ok": "9640",
        "ko": "15360"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "114",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "2203",
        "ok": "2203",
        "ko": "1071"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "177",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "105",
        "ok": "133",
        "ko": "12"
    },
    "percentiles1": {
        "total": "49",
        "ok": "145",
        "ko": "47"
    },
    "percentiles2": {
        "total": "140",
        "ok": "160",
        "ko": "48"
    },
    "percentiles3": {
        "total": "223",
        "ok": "330",
        "ko": "53"
    },
    "percentiles4": {
        "total": "381",
        "ok": "489",
        "ko": "63"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9580,
    "percentage": 38
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 52,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 15360,
    "percentage": 61
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "9.63",
        "ko": "15.345"
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
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "810",
        "ok": "810",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "16",
        "ok": "16",
        "ko": "-"
    },
    "percentiles1": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "percentiles2": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles3": {
        "total": "139",
        "ok": "139",
        "ko": "-"
    },
    "percentiles4": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
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
        "total": "24.975",
        "ok": "24.975",
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