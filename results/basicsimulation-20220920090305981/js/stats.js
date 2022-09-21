var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "5357",
        "ko": "44643"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "97",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "65704",
        "ok": "2390",
        "ko": "65704"
    },
    "meanResponseTime": {
        "total": "66",
        "ok": "138",
        "ko": "58"
    },
    "standardDeviation": {
        "total": "298",
        "ok": "114",
        "ko": "312"
    },
    "percentiles1": {
        "total": "51",
        "ok": "121",
        "ko": "51"
    },
    "percentiles2": {
        "total": "69",
        "ok": "130",
        "ko": "56"
    },
    "percentiles3": {
        "total": "123",
        "ok": "186",
        "ko": "75"
    },
    "percentiles4": {
        "total": "173",
        "ok": "408",
        "ko": "84"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5327,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 44643,
    "percentage": 89
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.95",
        "ok": "5.352",
        "ko": "44.598"
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
        "ok": "417",
        "ko": "24583"
    },
    "minResponseTime": {
        "total": "42",
        "ok": "148",
        "ko": "42"
    },
    "maxResponseTime": {
        "total": "2390",
        "ok": "2390",
        "ko": "1860"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "321",
        "ko": "60"
    },
    "standardDeviation": {
        "total": "69",
        "ok": "357",
        "ko": "40"
    },
    "percentiles1": {
        "total": "51",
        "ok": "190",
        "ko": "51"
    },
    "percentiles2": {
        "total": "70",
        "ok": "282",
        "ko": "70"
    },
    "percentiles3": {
        "total": "79",
        "ok": "1343",
        "ko": "77"
    },
    "percentiles4": {
        "total": "199",
        "ok": "1781",
        "ko": "96"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 387,
    "percentage": 2
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 25,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 24583,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "0.417",
        "ko": "24.558"
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
        "ok": "4940",
        "ko": "20060"
    },
    "minResponseTime": {
        "total": "44",
        "ok": "97",
        "ko": "44"
    },
    "maxResponseTime": {
        "total": "65704",
        "ok": "556",
        "ko": "65704"
    },
    "meanResponseTime": {
        "total": "68",
        "ok": "122",
        "ko": "55"
    },
    "standardDeviation": {
        "total": "416",
        "ok": "17",
        "ko": "464"
    },
    "percentiles1": {
        "total": "52",
        "ok": "120",
        "ko": "51"
    },
    "percentiles2": {
        "total": "56",
        "ok": "127",
        "ko": "53"
    },
    "percentiles3": {
        "total": "127",
        "ok": "139",
        "ko": "57"
    },
    "percentiles4": {
        "total": "139",
        "ok": "170",
        "ko": "66"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4940,
    "percentage": 20
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
    "count": 20060,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.975",
        "ok": "4.935",
        "ko": "20.04"
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