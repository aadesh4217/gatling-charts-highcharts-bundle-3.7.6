var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "25383",
        "ko": "24617"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "98",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "130373",
        "ok": "130373",
        "ko": "1066"
    },
    "meanResponseTime": {
        "total": "103",
        "ok": "144",
        "ko": "62"
    },
    "standardDeviation": {
        "total": "586",
        "ok": "820",
        "ko": "30"
    },
    "percentiles1": {
        "total": "112",
        "ok": "124",
        "ko": "50"
    },
    "percentiles2": {
        "total": "125",
        "ok": "131",
        "ko": "74"
    },
    "percentiles3": {
        "total": "184",
        "ok": "201",
        "ko": "94"
    },
    "percentiles4": {
        "total": "303",
        "ok": "365",
        "ko": "203"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 25339,
    "percentage": 51
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 31,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 13,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 24617,
    "percentage": 49
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "25.358",
        "ko": "24.592"
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
        "ok": "3012",
        "ko": "21988"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "149",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "1991",
        "ok": "1991",
        "ko": "1066"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "227",
        "ko": "63"
    },
    "standardDeviation": {
        "total": "76",
        "ok": "129",
        "ko": "31"
    },
    "percentiles1": {
        "total": "50",
        "ok": "186",
        "ko": "49"
    },
    "percentiles2": {
        "total": "80",
        "ok": "224",
        "ko": "75"
    },
    "percentiles3": {
        "total": "200",
        "ok": "395",
        "ko": "99"
    },
    "percentiles4": {
        "total": "355",
        "ok": "777",
        "ko": "211"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2984,
    "percentage": 12
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 17,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 11,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 21988,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "3.009",
        "ko": "21.966"
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
        "ok": "22371",
        "ko": "2629"
    },
    "minResponseTime": {
        "total": "48",
        "ok": "98",
        "ko": "48"
    },
    "maxResponseTime": {
        "total": "130373",
        "ok": "130373",
        "ko": "146"
    },
    "meanResponseTime": {
        "total": "124",
        "ok": "133",
        "ko": "54"
    },
    "standardDeviation": {
        "total": "825",
        "ok": "871",
        "ko": "6"
    },
    "percentiles1": {
        "total": "122",
        "ok": "123",
        "ko": "53"
    },
    "percentiles2": {
        "total": "127",
        "ok": "128",
        "ko": "54"
    },
    "percentiles3": {
        "total": "143",
        "ok": "146",
        "ko": "60"
    },
    "percentiles4": {
        "total": "210",
        "ok": "214",
        "ko": "85"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22355,
    "percentage": 89
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 2629,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "22.349",
        "ko": "2.626"
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
