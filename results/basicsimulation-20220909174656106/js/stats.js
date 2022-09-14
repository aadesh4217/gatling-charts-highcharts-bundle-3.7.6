var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "23123",
        "ko": "26877"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "95",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "130340",
        "ok": "130340",
        "ko": "60042"
    },
    "meanResponseTime": {
        "total": "107",
        "ok": "159",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "750",
        "ok": "1027",
        "ko": "367"
    },
    "percentiles1": {
        "total": "80",
        "ok": "143",
        "ko": "50"
    },
    "percentiles2": {
        "total": "142",
        "ok": "149",
        "ko": "70"
    },
    "percentiles3": {
        "total": "167",
        "ok": "179",
        "ko": "83"
    },
    "percentiles4": {
        "total": "241",
        "ok": "323",
        "ko": "192"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23064,
    "percentage": 46
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 28,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 31,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 26877,
    "percentage": 54
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "23.1",
        "ko": "26.85"
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
        "ok": "2107",
        "ko": "22893"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "143",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "60042",
        "ok": "55173",
        "ko": "60042"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "244",
        "ko": "64"
    },
    "standardDeviation": {
        "total": "521",
        "ok": "1213",
        "ko": "397"
    },
    "percentiles1": {
        "total": "50",
        "ok": "175",
        "ko": "50"
    },
    "percentiles2": {
        "total": "75",
        "ok": "187",
        "ko": "72"
    },
    "percentiles3": {
        "total": "176",
        "ok": "375",
        "ko": "85"
    },
    "percentiles4": {
        "total": "299",
        "ok": "1306",
        "ko": "202"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2069,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 22893,
    "percentage": 92
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "2.105",
        "ko": "22.87"
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
        "ok": "21016",
        "ko": "3984"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "95",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "130340",
        "ok": "130340",
        "ko": "795"
    },
    "meanResponseTime": {
        "total": "135",
        "ok": "151",
        "ko": "52"
    },
    "standardDeviation": {
        "total": "924",
        "ok": "1006",
        "ko": "20"
    },
    "percentiles1": {
        "total": "139",
        "ok": "142",
        "ko": "51"
    },
    "percentiles2": {
        "total": "146",
        "ok": "147",
        "ko": "53"
    },
    "percentiles3": {
        "total": "158",
        "ok": "160",
        "ko": "56"
    },
    "percentiles4": {
        "total": "185",
        "ok": "187",
        "ko": "64"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20995,
    "percentage": 84
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3984,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "20.995",
        "ko": "3.98"
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
