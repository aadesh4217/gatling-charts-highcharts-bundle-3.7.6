var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "116",
        "ko": "9884"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "2511",
        "ko": "239"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "40367",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "6377",
        "ok": "19684",
        "ko": "6221"
    },
    "standardDeviation": {
        "total": "4895",
        "ok": "9197",
        "ko": "4599"
    },
    "percentiles1": {
        "total": "5050",
        "ok": "21351",
        "ko": "5050"
    },
    "percentiles2": {
        "total": "8808",
        "ok": "25421",
        "ko": "8705"
    },
    "percentiles3": {
        "total": "14707",
        "ok": "34483",
        "ko": "14129"
    },
    "percentiles4": {
        "total": "22592",
        "ok": "38041",
        "ko": "21138"
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
    "count": 116,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "count": 9884,
    "percentage": 99
},
    "meanNumberOfRequestsPerSecond": {
        "total": "93.458",
        "ok": "1.084",
        "ko": "92.374"
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
        "total": "5000",
        "ok": "99",
        "ko": "4901"
    },
    "minResponseTime": {
        "total": "266",
        "ok": "2511",
        "ko": "266"
    },
    "maxResponseTime": {
        "total": "40367",
        "ok": "40367",
        "ko": "39219"
    },
    "meanResponseTime": {
        "total": "6708",
        "ok": "18832",
        "ko": "6463"
    },
    "standardDeviation": {
        "total": "5172",
        "ok": "9447",
        "ko": "4739"
    },
    "percentiles1": {
        "total": "5061",
        "ok": "20931",
        "ko": "5060"
    },
    "percentiles2": {
        "total": "9545",
        "ok": "24952",
        "ko": "9333"
    },
    "percentiles3": {
        "total": "15379",
        "ok": "34628",
        "ko": "14182"
    },
    "percentiles4": {
        "total": "23890",
        "ok": "38329",
        "ko": "21860"
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
    "count": 99,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 4901,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.729",
        "ok": "0.925",
        "ko": "45.804"
    }
}
    },"req_vteams-api-1c326": {
        type: "REQUEST",
        name: "vteams api",
path: "vteams api",
pathFormatted: "req_vteams-api-1c326",
stats: {
    "name": "vteams api",
    "numberOfRequests": {
        "total": "5000",
        "ok": "17",
        "ko": "4983"
    },
    "minResponseTime": {
        "total": "239",
        "ok": "14596",
        "ko": "239"
    },
    "maxResponseTime": {
        "total": "60015",
        "ok": "34482",
        "ko": "60015"
    },
    "meanResponseTime": {
        "total": "6046",
        "ok": "24643",
        "ko": "5983"
    },
    "standardDeviation": {
        "total": "4578",
        "ok": "5352",
        "ko": "4444"
    },
    "percentiles1": {
        "total": "5025",
        "ok": "23887",
        "ko": "5025"
    },
    "percentiles2": {
        "total": "8047",
        "ok": "28637",
        "ko": "7979"
    },
    "percentiles3": {
        "total": "14200",
        "ok": "33184",
        "ko": "14039"
    },
    "percentiles4": {
        "total": "19705",
        "ok": "34222",
        "ko": "18846"
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
    "count": 17,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 4983,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "46.729",
        "ok": "0.159",
        "ko": "46.57"
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
