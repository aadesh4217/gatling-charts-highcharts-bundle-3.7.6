var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "49989",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "91",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "65639",
        "ok": "65639",
        "ko": "218"
    },
    "meanResponseTime": {
        "total": "142",
        "ok": "142",
        "ko": "103"
    },
    "standardDeviation": {
        "total": "295",
        "ok": "295",
        "ko": "49"
    },
    "percentiles1": {
        "total": "139",
        "ok": "139",
        "ko": "87"
    },
    "percentiles2": {
        "total": "155",
        "ok": "155",
        "ko": "109"
    },
    "percentiles3": {
        "total": "181",
        "ok": "181",
        "ko": "199"
    },
    "percentiles4": {
        "total": "276",
        "ok": "276",
        "ko": "214"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49988,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 11,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "49.939",
        "ko": "0.011"
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
        "ok": "24989",
        "ko": "11"
    },
    "minResponseTime": {
        "total": "60",
        "ok": "124",
        "ko": "60"
    },
    "maxResponseTime": {
        "total": "731",
        "ok": "731",
        "ko": "218"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "103"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "32",
        "ko": "49"
    },
    "percentiles1": {
        "total": "155",
        "ok": "155",
        "ko": "87"
    },
    "percentiles2": {
        "total": "164",
        "ok": "164",
        "ko": "109"
    },
    "percentiles3": {
        "total": "228",
        "ok": "228",
        "ko": "199"
    },
    "percentiles4": {
        "total": "299",
        "ok": "299",
        "ko": "214"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24989,
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
    "count": 11,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "24.964",
        "ko": "0.011"
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
        "total": "91",
        "ok": "91",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "65639",
        "ok": "65639",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "123",
        "ok": "123",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "percentiles1": {
        "total": "120",
        "ok": "120",
        "ko": "-"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "-"
    },
    "percentiles3": {
        "total": "138",
        "ok": "138",
        "ko": "-"
    },
    "percentiles4": {
        "total": "144",
        "ok": "144",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24999,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
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
