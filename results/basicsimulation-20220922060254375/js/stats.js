var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "1908",
        "ko": "48092"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "107",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "1100",
        "ok": "674",
        "ko": "1100"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "173",
        "ko": "63"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "61",
        "ko": "18"
    },
    "percentiles1": {
        "total": "67",
        "ok": "161",
        "ko": "66"
    },
    "percentiles2": {
        "total": "73",
        "ok": "191",
        "ko": "72"
    },
    "percentiles3": {
        "total": "95",
        "ok": "298",
        "ko": "78"
    },
    "percentiles4": {
        "total": "196",
        "ok": "381",
        "ko": "104"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1908,
    "percentage": 4
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
    "count": 48092,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "1.906",
        "ko": "48.044"
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
        "ok": "956",
        "ko": "24044"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "143",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "831",
        "ok": "674",
        "ko": "831"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "210",
        "ko": "74"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "62",
        "ko": "16"
    },
    "percentiles1": {
        "total": "73",
        "ok": "187",
        "ko": "72"
    },
    "percentiles2": {
        "total": "76",
        "ok": "234",
        "ko": "75"
    },
    "percentiles3": {
        "total": "127",
        "ok": "338",
        "ko": "81"
    },
    "percentiles4": {
        "total": "241",
        "ok": "438",
        "ko": "139"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 956,
    "percentage": 4
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
    "count": 24044,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.955",
        "ko": "24.02"
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
        "ok": "952",
        "ko": "24048"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "107",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "1100",
        "ok": "343",
        "ko": "1100"
    },
    "meanResponseTime": {
        "total": "56",
        "ok": "136",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "21",
        "ok": "30",
        "ko": "12"
    },
    "percentiles1": {
        "total": "52",
        "ok": "129",
        "ko": "52"
    },
    "percentiles2": {
        "total": "54",
        "ok": "138",
        "ko": "54"
    },
    "percentiles3": {
        "total": "69",
        "ok": "187",
        "ko": "59"
    },
    "percentiles4": {
        "total": "138",
        "ok": "274",
        "ko": "70"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 952,
    "percentage": 4
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
    "count": 24048,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.951",
        "ko": "24.024"
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
