var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "5231",
        "ko": "44769"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "97",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "1147",
        "ok": "1147",
        "ko": "1010"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "147",
        "ko": "65"
    },
    "standardDeviation": {
        "total": "38",
        "ok": "63",
        "ko": "20"
    },
    "percentiles1": {
        "total": "69",
        "ok": "123",
        "ko": "67"
    },
    "percentiles2": {
        "total": "75",
        "ok": "152",
        "ko": "73"
    },
    "percentiles3": {
        "total": "127",
        "ok": "263",
        "ko": "81"
    },
    "percentiles4": {
        "total": "222",
        "ok": "409",
        "ko": "129"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5228,
    "percentage": 10
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 44769,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "5.226",
        "ko": "44.724"
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
        "ok": "1114",
        "ko": "23886"
    },
    "minResponseTime": {
        "total": "59",
        "ok": "146",
        "ko": "59"
    },
    "maxResponseTime": {
        "total": "867",
        "ok": "867",
        "ko": "837"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "226",
        "ko": "75"
    },
    "standardDeviation": {
        "total": "39",
        "ok": "84",
        "ko": "17"
    },
    "percentiles1": {
        "total": "73",
        "ok": "194",
        "ko": "73"
    },
    "percentiles2": {
        "total": "76",
        "ok": "253",
        "ko": "76"
    },
    "percentiles3": {
        "total": "159",
        "ok": "392",
        "ko": "84"
    },
    "percentiles4": {
        "total": "263",
        "ok": "561",
        "ko": "155"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1113,
    "percentage": 4
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
    "count": 23886,
    "percentage": 96
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "1.113",
        "ko": "23.862"
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
        "ok": "4117",
        "ko": "20883"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "97",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "1147",
        "ok": "1147",
        "ko": "1010"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "125",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "33",
        "ok": "31",
        "ko": "16"
    },
    "percentiles1": {
        "total": "52",
        "ok": "121",
        "ko": "51"
    },
    "percentiles2": {
        "total": "56",
        "ok": "126",
        "ko": "53"
    },
    "percentiles3": {
        "total": "125",
        "ok": "151",
        "ko": "58"
    },
    "percentiles4": {
        "total": "148",
        "ok": "225",
        "ko": "70"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4115,
    "percentage": 16
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 20883,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "4.113",
        "ko": "20.862"
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
