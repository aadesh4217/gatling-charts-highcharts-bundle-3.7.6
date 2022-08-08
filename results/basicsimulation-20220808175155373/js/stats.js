var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "28199",
        "ko": "21801"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "98",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1516",
        "ok": "1516",
        "ko": "545"
    },
    "meanResponseTime": {
        "total": "105",
        "ok": "141",
        "ko": "57"
    },
    "standardDeviation": {
        "total": "65",
        "ok": "63",
        "ko": "27"
    },
    "percentiles1": {
        "total": "117",
        "ok": "125",
        "ko": "49"
    },
    "percentiles2": {
        "total": "126",
        "ok": "131",
        "ko": "53"
    },
    "percentiles3": {
        "total": "185",
        "ok": "200",
        "ko": "86"
    },
    "percentiles4": {
        "total": "350",
        "ok": "402",
        "ko": "176"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28154,
    "percentage": 56
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 41,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 21801,
    "percentage": 44
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "28.171",
        "ko": "21.779"
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
        "ok": "4103",
        "ko": "20897"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "150",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "1148",
        "ok": "1148",
        "ko": "545"
    },
    "meanResponseTime": {
        "total": "84",
        "ok": "222",
        "ko": "57"
    },
    "standardDeviation": {
        "total": "77",
        "ok": "98",
        "ko": "27"
    },
    "percentiles1": {
        "total": "50",
        "ok": "185",
        "ko": "49"
    },
    "percentiles2": {
        "total": "80",
        "ok": "212",
        "ko": "52"
    },
    "percentiles3": {
        "total": "203",
        "ok": "401",
        "ko": "86"
    },
    "percentiles4": {
        "total": "389",
        "ok": "630",
        "ko": "177"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4083,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 20,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 20897,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "4.099",
        "ko": "20.876"
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
        "ok": "24096",
        "ko": "904"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "98",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "1516",
        "ok": "1516",
        "ko": "493"
    },
    "meanResponseTime": {
        "total": "125",
        "ok": "127",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "43",
        "ok": "41",
        "ko": "20"
    },
    "percentiles1": {
        "total": "123",
        "ok": "124",
        "ko": "54"
    },
    "percentiles2": {
        "total": "128",
        "ok": "128",
        "ko": "56"
    },
    "percentiles3": {
        "total": "138",
        "ok": "139",
        "ko": "59"
    },
    "percentiles4": {
        "total": "201",
        "ok": "204",
        "ko": "64"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 24071,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 21,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 904,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "24.072",
        "ko": "0.903"
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
