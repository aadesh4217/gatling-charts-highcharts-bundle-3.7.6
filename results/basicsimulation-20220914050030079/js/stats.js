var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "6060",
        "ko": "43940"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "99",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "5196",
        "ok": "5196",
        "ko": "5135"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "144",
        "ko": "57"
    },
    "standardDeviation": {
        "total": "127",
        "ok": "250",
        "ko": "94"
    },
    "percentiles1": {
        "total": "52",
        "ok": "120",
        "ko": "51"
    },
    "percentiles2": {
        "total": "69",
        "ok": "127",
        "ko": "55"
    },
    "percentiles3": {
        "total": "123",
        "ok": "200",
        "ko": "75"
    },
    "percentiles4": {
        "total": "184",
        "ok": "387",
        "ko": "87"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 6041,
    "percentage": 12
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 43940,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "6.054",
        "ko": "43.896"
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
        "ok": "366",
        "ko": "24634"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "149",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "5135",
        "ok": "993",
        "ko": "5135"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "260",
        "ko": "61"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "139",
        "ko": "123"
    },
    "percentiles1": {
        "total": "50",
        "ok": "199",
        "ko": "50"
    },
    "percentiles2": {
        "total": "70",
        "ok": "288",
        "ko": "70"
    },
    "percentiles3": {
        "total": "78",
        "ok": "607",
        "ko": "77"
    },
    "percentiles4": {
        "total": "196",
        "ok": "762",
        "ko": "97"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 363,
    "percentage": 1
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
    "count": 24634,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.366",
        "ko": "24.609"
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
        "ok": "5694",
        "ko": "19306"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "99",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "5196",
        "ok": "5196",
        "ko": "1156"
    },
    "meanResponseTime": {
        "total": "72",
        "ok": "137",
        "ko": "53"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "253",
        "ko": "24"
    },
    "percentiles1": {
        "total": "53",
        "ok": "120",
        "ko": "52"
    },
    "percentiles2": {
        "total": "60",
        "ok": "126",
        "ko": "54"
    },
    "percentiles3": {
        "total": "127",
        "ok": "152",
        "ko": "58"
    },
    "percentiles4": {
        "total": "161",
        "ok": "237",
        "ko": "67"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5678,
    "percentage": 23
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 19306,
    "percentage": 77
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "5.688",
        "ko": "19.287"
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
