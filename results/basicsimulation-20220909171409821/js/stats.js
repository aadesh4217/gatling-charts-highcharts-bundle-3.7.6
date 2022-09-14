var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "23948",
        "ko": "26052"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "95",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "131100",
        "ok": "131100",
        "ko": "130881"
    },
    "meanResponseTime": {
        "total": "107",
        "ok": "148",
        "ko": "69"
    },
    "standardDeviation": {
        "total": "834",
        "ok": "848",
        "ko": "820"
    },
    "percentiles1": {
        "total": "95",
        "ok": "137",
        "ko": "50"
    },
    "percentiles2": {
        "total": "137",
        "ok": "142",
        "ko": "72"
    },
    "percentiles3": {
        "total": "162",
        "ok": "177",
        "ko": "87"
    },
    "percentiles4": {
        "total": "263",
        "ok": "321",
        "ko": "220"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23916,
    "percentage": 48
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 19,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 26052,
    "percentage": 52
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "23.924",
        "ko": "26.026"
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
        "ok": "2218",
        "ko": "22782"
    },
    "minResponseTime": {
        "total": "40",
        "ok": "138",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "5131",
        "ok": "1540",
        "ko": "5131"
    },
    "meanResponseTime": {
        "total": "78",
        "ok": "205",
        "ko": "66"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "115",
        "ko": "131"
    },
    "percentiles1": {
        "total": "51",
        "ok": "174",
        "ko": "50"
    },
    "percentiles2": {
        "total": "76",
        "ok": "188",
        "ko": "73"
    },
    "percentiles3": {
        "total": "178",
        "ok": "382",
        "ko": "90"
    },
    "percentiles4": {
        "total": "331",
        "ok": "645",
        "ko": "233"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2201,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 22782,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "2.216",
        "ko": "22.759"
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
        "ok": "21730",
        "ko": "3270"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "95",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "131100",
        "ok": "131100",
        "ko": "130881"
    },
    "meanResponseTime": {
        "total": "135",
        "ok": "142",
        "ko": "93"
    },
    "standardDeviation": {
        "total": "1171",
        "ok": "889",
        "ko": "2288"
    },
    "percentiles1": {
        "total": "134",
        "ok": "136",
        "ko": "52"
    },
    "percentiles2": {
        "total": "140",
        "ok": "141",
        "ko": "54"
    },
    "percentiles3": {
        "total": "147",
        "ok": "148",
        "ko": "59"
    },
    "percentiles4": {
        "total": "181",
        "ok": "187",
        "ko": "82"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 21715,
    "percentage": 87
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 3270,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "21.708",
        "ko": "3.267"
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
