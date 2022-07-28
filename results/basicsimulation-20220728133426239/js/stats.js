var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100000",
        "ok": "99994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "85",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "133744",
        "ok": "133744",
        "ko": "139"
    },
    "meanResponseTime": {
        "total": "382",
        "ok": "382",
        "ko": "84"
    },
    "standardDeviation": {
        "total": "3920",
        "ok": "3920",
        "ko": "28"
    },
    "percentiles1": {
        "total": "132",
        "ok": "132",
        "ko": "75"
    },
    "percentiles2": {
        "total": "279",
        "ok": "279",
        "ko": "90"
    },
    "percentiles3": {
        "total": "673",
        "ok": "673",
        "ko": "127"
    },
    "percentiles4": {
        "total": "2527",
        "ok": "2527",
        "ko": "137"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 96178,
    "percentage": 96
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1402,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2414,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "88.889",
        "ok": "88.884",
        "ko": "0.005"
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
        "total": "50000",
        "ok": "49994",
        "ko": "6"
    },
    "minResponseTime": {
        "total": "61",
        "ok": "114",
        "ko": "61"
    },
    "maxResponseTime": {
        "total": "133744",
        "ok": "133744",
        "ko": "139"
    },
    "meanResponseTime": {
        "total": "507",
        "ok": "507",
        "ko": "84"
    },
    "standardDeviation": {
        "total": "3523",
        "ok": "3524",
        "ko": "28"
    },
    "percentiles1": {
        "total": "278",
        "ok": "278",
        "ko": "75"
    },
    "percentiles2": {
        "total": "469",
        "ok": "469",
        "ko": "90"
    },
    "percentiles3": {
        "total": "1140",
        "ok": "1140",
        "ko": "127"
    },
    "percentiles4": {
        "total": "2951",
        "ok": "2951",
        "ko": "137"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46242,
    "percentage": 92
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1401,
    "percentage": 3
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2351,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 6,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.444",
        "ok": "44.439",
        "ko": "0.005"
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
        "total": "50000",
        "ok": "50000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "131302",
        "ok": "131302",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "4276",
        "ok": "4276",
        "ko": "-"
    },
    "percentiles1": {
        "total": "105",
        "ok": "105",
        "ko": "-"
    },
    "percentiles2": {
        "total": "111",
        "ok": "111",
        "ko": "-"
    },
    "percentiles3": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles4": {
        "total": "141",
        "ok": "141",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 49936,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 63,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "44.444",
        "ok": "44.444",
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
