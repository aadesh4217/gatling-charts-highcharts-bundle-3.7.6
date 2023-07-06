var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "6552",
        "ko": "43448"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "445",
        "ko": "223"
    },
    "maxResponseTime": {
        "total": "60077",
        "ok": "59778",
        "ko": "60077"
    },
    "meanResponseTime": {
        "total": "11106",
        "ok": "22745",
        "ko": "9351"
    },
    "standardDeviation": {
        "total": "14769",
        "ok": "12091",
        "ko": "14334"
    },
    "percentiles1": {
        "total": "801",
        "ok": "22206",
        "ko": "783"
    },
    "percentiles2": {
        "total": "20192",
        "ok": "32081",
        "ko": "17273"
    },
    "percentiles3": {
        "total": "41797",
        "ok": "42692",
        "ko": "41405"
    },
    "percentiles4": {
        "total": "57056",
        "ok": "50371",
        "ko": "58377"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 16,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6516,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "count": 43448,
    "percentage": 87
},
    "meanNumberOfRequestsPerSecond": {
        "total": "49.456",
        "ok": "6.481",
        "ko": "42.975"
    }
},
contents: {
"req_agent-config-id-17db2": {
        type: "REQUEST",
        name: "agent-config idle-codes api",
path: "agent-config idle-codes api",
pathFormatted: "req_agent-config-id-17db2",
stats: {
    "name": "agent-config idle-codes api",
    "numberOfRequests": {
        "total": "25000",
        "ok": "4169",
        "ko": "20831"
    },
    "minResponseTime": {
        "total": "251",
        "ok": "445",
        "ko": "251"
    },
    "maxResponseTime": {
        "total": "60077",
        "ok": "59778",
        "ko": "60077"
    },
    "meanResponseTime": {
        "total": "12334",
        "ok": "22779",
        "ko": "10243"
    },
    "standardDeviation": {
        "total": "15102",
        "ok": "11976",
        "ko": "14792"
    },
    "percentiles1": {
        "total": "1047",
        "ok": "22191",
        "ko": "798"
    },
    "percentiles2": {
        "total": "22030",
        "ok": "31984",
        "ko": "18664"
    },
    "percentiles3": {
        "total": "42616",
        "ok": "42674",
        "ko": "42559"
    },
    "percentiles4": {
        "total": "58037",
        "ok": "50076",
        "ko": "60038"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 9,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4145,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "count": 20831,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.728",
        "ok": "4.124",
        "ko": "20.604"
    }
}
    },"req_agent-config-wr-5f78e": {
        type: "REQUEST",
        name: "agent-config wrapup-codes api",
path: "agent-config wrapup-codes api",
pathFormatted: "req_agent-config-wr-5f78e",
stats: {
    "name": "agent-config wrapup-codes api",
    "numberOfRequests": {
        "total": "25000",
        "ok": "2383",
        "ko": "22617"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "486",
        "ko": "223"
    },
    "maxResponseTime": {
        "total": "60022",
        "ok": "59377",
        "ko": "60022"
    },
    "meanResponseTime": {
        "total": "9879",
        "ok": "22686",
        "ko": "8530"
    },
    "standardDeviation": {
        "total": "14325",
        "ok": "12289",
        "ko": "13849"
    },
    "percentiles1": {
        "total": "768",
        "ok": "22214",
        "ko": "760"
    },
    "percentiles2": {
        "total": "18097",
        "ok": "32296",
        "ko": "14932"
    },
    "percentiles3": {
        "total": "40835",
        "ok": "42789",
        "ko": "40282"
    },
    "percentiles4": {
        "total": "56000",
        "ok": "50602",
        "ko": "56552"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 2371,
    "percentage": 9
},
    "group4": {
    "name": "failed",
    "count": 22617,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.728",
        "ok": "2.357",
        "ko": "22.371"
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
