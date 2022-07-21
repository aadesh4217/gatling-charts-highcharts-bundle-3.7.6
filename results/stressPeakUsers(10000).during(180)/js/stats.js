var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20000",
        "ok": "5311",
        "ko": "14689"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1003",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "1087262",
        "ok": "397363",
        "ko": "1087262"
    },
    "meanResponseTime": {
        "total": "108986",
        "ok": "36132",
        "ko": "135328"
    },
    "standardDeviation": {
        "total": "148148",
        "ok": "49910",
        "ko": "162388"
    },
    "percentiles1": {
        "total": "44332",
        "ok": "9367",
        "ko": "50868"
    },
    "percentiles2": {
        "total": "195407",
        "ok": "52095",
        "ko": "256165"
    },
    "percentiles3": {
        "total": "456940",
        "ok": "159631",
        "ko": "462542"
    },
    "percentiles4": {
        "total": "474274",
        "ok": "214322",
        "ko": "474303"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 375,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4936,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 14689,
    "percentage": 73
},
    "meanNumberOfRequestsPerSecond": {
        "total": "16.474",
        "ok": "4.375",
        "ko": "12.1"
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
        "ok": "1887",
        "ko": "8113"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1003",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "527454",
        "ok": "208806",
        "ko": "527454"
    },
    "meanResponseTime": {
        "total": "35482",
        "ok": "22407",
        "ko": "38523"
    },
    "standardDeviation": {
        "total": "73993",
        "ok": "34261",
        "ko": "80164"
    },
    "percentiles1": {
        "total": "1795",
        "ok": "4837",
        "ko": "2"
    },
    "percentiles2": {
        "total": "49436",
        "ok": "39174",
        "ko": "49802"
    },
    "percentiles3": {
        "total": "161894",
        "ok": "92221",
        "ko": "220487"
    },
    "percentiles4": {
        "total": "442410",
        "ok": "157251",
        "ko": "443568"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 375,
    "percentage": 4
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1512,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "count": 8113,
    "percentage": 81
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.237",
        "ok": "1.554",
        "ko": "6.683"
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
        "ok": "3424",
        "ko": "6576"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2591",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "1087262",
        "ok": "397363",
        "ko": "1087262"
    },
    "meanResponseTime": {
        "total": "182491",
        "ok": "43695",
        "ko": "254759"
    },
    "standardDeviation": {
        "total": "166177",
        "ok": "55280",
        "ko": "158585"
    },
    "percentiles1": {
        "total": "181577",
        "ok": "20255",
        "ko": "256486"
    },
    "percentiles2": {
        "total": "314524",
        "ok": "58363",
        "ko": "375691"
    },
    "percentiles3": {
        "total": "465174",
        "ok": "177868",
        "ko": "466129"
    },
    "percentiles4": {
        "total": "474350",
        "ok": "214415",
        "ko": "474371"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3424,
    "percentage": 34
},
    "group4": {
    "name": "failed",
    "count": 6576,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.237",
        "ok": "2.82",
        "ko": "5.417"
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
