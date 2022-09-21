var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "4636",
        "ko": "45364"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "99",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "2009",
        "ok": "2009",
        "ko": "1870"
    },
    "meanResponseTime": {
        "total": "66",
        "ok": "147",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "57",
        "ok": "123",
        "ko": "35"
    },
    "percentiles1": {
        "total": "53",
        "ok": "127",
        "ko": "52"
    },
    "percentiles2": {
        "total": "70",
        "ok": "138",
        "ko": "58"
    },
    "percentiles3": {
        "total": "129",
        "ok": "211",
        "ko": "80"
    },
    "percentiles4": {
        "total": "196",
        "ok": "436",
        "ko": "129"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4612,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 45364,
    "percentage": 91
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "4.631",
        "ko": "45.319"
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
        "ok": "396",
        "ko": "24604"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "153",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "2009",
        "ok": "2009",
        "ko": "1870"
    },
    "meanResponseTime": {
        "total": "66",
        "ok": "335",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "365",
        "ko": "47"
    },
    "percentiles1": {
        "total": "50",
        "ok": "205",
        "ko": "50"
    },
    "percentiles2": {
        "total": "72",
        "ok": "317",
        "ko": "72"
    },
    "percentiles3": {
        "total": "100",
        "ok": "1501",
        "ko": "87"
    },
    "percentiles4": {
        "total": "247",
        "ok": "1874",
        "ko": "170"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 372,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 24,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 24604,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.396",
        "ko": "24.579"
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
        "ok": "4240",
        "ko": "20760"
    },
    "minResponseTime": {
        "total": "45",
        "ok": "99",
        "ko": "45"
    },
    "maxResponseTime": {
        "total": "626",
        "ok": "404",
        "ko": "626"
    },
    "meanResponseTime": {
        "total": "66",
        "ok": "130",
        "ko": "54"
    },
    "standardDeviation": {
        "total": "31",
        "ok": "21",
        "ko": "10"
    },
    "percentiles1": {
        "total": "53",
        "ok": "126",
        "ko": "53"
    },
    "percentiles2": {
        "total": "57",
        "ok": "135",
        "ko": "55"
    },
    "percentiles3": {
        "total": "133",
        "ok": "153",
        "ko": "60"
    },
    "percentiles4": {
        "total": "151",
        "ok": "224",
        "ko": "70"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4240,
    "percentage": 17
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
    "count": 20760,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "4.236",
        "ko": "20.739"
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
