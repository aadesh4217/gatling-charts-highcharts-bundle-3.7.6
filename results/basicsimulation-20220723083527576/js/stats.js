var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "11052",
        "ko": "8948"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "83",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "50421",
        "ok": "47293",
        "ko": "50421"
    },
    "meanResponseTime": {
        "total": "8081",
        "ok": "2768",
        "ko": "14644"
    },
    "standardDeviation": {
        "total": "15586",
        "ok": "8990",
        "ko": "19110"
    },
    "percentiles1": {
        "total": "102",
        "ok": "106",
        "ko": "44"
    },
    "percentiles2": {
        "total": "331",
        "ok": "217",
        "ko": "36192"
    },
    "percentiles3": {
        "total": "42701",
        "ok": "28898",
        "ko": "44849"
    },
    "percentiles4": {
        "total": "47080",
        "ok": "43294",
        "ko": "48503"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10000,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1051,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 8948,
    "percentage": 45
},
    "meanNumberOfRequestsPerSecond": {
        "total": "153.846",
        "ok": "85.015",
        "ko": "68.831"
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
        "ok": "1052",
        "ko": "8948"
    },
    "minResponseTime": {
        "total": "38",
        "ok": "959",
        "ko": "38"
    },
    "maxResponseTime": {
        "total": "50421",
        "ok": "47293",
        "ko": "50421"
    },
    "meanResponseTime": {
        "total": "16017",
        "ok": "27692",
        "ko": "14644"
    },
    "standardDeviation": {
        "total": "18970",
        "ok": "12741",
        "ko": "19110"
    },
    "percentiles1": {
        "total": "46",
        "ok": "29528",
        "ko": "44"
    },
    "percentiles2": {
        "total": "36442",
        "ok": "37464",
        "ko": "36192"
    },
    "percentiles3": {
        "total": "44829",
        "ok": "44752",
        "ko": "44849"
    },
    "percentiles4": {
        "total": "48325",
        "ok": "46089",
        "ko": "48503"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1051,
    "percentage": 11
},
    "group4": {
    "name": "failed",
    "count": 8948,
    "percentage": 89
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.923",
        "ok": "8.092",
        "ko": "68.831"
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "687",
        "ok": "687",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "146",
        "ok": "146",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "81",
        "ok": "81",
        "ko": "-"
    },
    "percentiles1": {
        "total": "104",
        "ok": "104",
        "ko": "-"
    },
    "percentiles2": {
        "total": "171",
        "ok": "171",
        "ko": "-"
    },
    "percentiles3": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "percentiles4": {
        "total": "404",
        "ok": "404",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10000,
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
        "total": "76.923",
        "ok": "76.923",
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
