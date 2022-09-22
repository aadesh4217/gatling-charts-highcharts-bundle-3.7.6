var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "3281",
        "ko": "46719"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "100",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "130468",
        "ok": "1889",
        "ko": "130468"
    },
    "meanResponseTime": {
        "total": "70",
        "ok": "159",
        "ko": "64"
    },
    "standardDeviation": {
        "total": "585",
        "ok": "132",
        "ko": "604"
    },
    "percentiles1": {
        "total": "55",
        "ok": "126",
        "ko": "54"
    },
    "percentiles2": {
        "total": "73",
        "ok": "161",
        "ko": "72"
    },
    "percentiles3": {
        "total": "121",
        "ok": "288",
        "ko": "79"
    },
    "percentiles4": {
        "total": "195",
        "ok": "640",
        "ko": "108"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3253,
    "percentage": 7
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 46719,
    "percentage": 93
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "3.278",
        "ko": "46.672"
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
        "ok": "780",
        "ko": "24220"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "150",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "130468",
        "ok": "1889",
        "ko": "130468"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "266",
        "ko": "74"
    },
    "standardDeviation": {
        "total": "827",
        "ok": "238",
        "ko": "838"
    },
    "percentiles1": {
        "total": "72",
        "ok": "191",
        "ko": "71"
    },
    "percentiles2": {
        "total": "76",
        "ok": "261",
        "ko": "75"
    },
    "percentiles3": {
        "total": "102",
        "ok": "519",
        "ko": "82"
    },
    "percentiles4": {
        "total": "243",
        "ok": "1626",
        "ko": "146"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 752,
    "percentage": 3
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 20,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 24220,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.779",
        "ko": "24.196"
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
        "ok": "2501",
        "ko": "22499"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "100",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "426",
        "ok": "411",
        "ko": "426"
    },
    "meanResponseTime": {
        "total": "60",
        "ok": "126",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "24",
        "ok": "24",
        "ko": "7"
    },
    "percentiles1": {
        "total": "53",
        "ok": "121",
        "ko": "52"
    },
    "percentiles2": {
        "total": "55",
        "ok": "129",
        "ko": "54"
    },
    "percentiles3": {
        "total": "122",
        "ok": "146",
        "ko": "59"
    },
    "percentiles4": {
        "total": "136",
        "ok": "234",
        "ko": "68"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2501,
    "percentage": 10
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
    "count": 22499,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "2.499",
        "ko": "22.477"
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
