var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "5000",
        "ok": "161",
        "ko": "4839"
    },
    "minResponseTime": {
        "total": "863",
        "ok": "2928",
        "ko": "863"
    },
    "maxResponseTime": {
        "total": "43951",
        "ok": "43951",
        "ko": "43277"
    },
    "meanResponseTime": {
        "total": "10376",
        "ok": "22449",
        "ko": "9974"
    },
    "standardDeviation": {
        "total": "6483",
        "ok": "10211",
        "ko": "5912"
    },
    "percentiles1": {
        "total": "8856",
        "ok": "20883",
        "ko": "8637"
    },
    "percentiles2": {
        "total": "12796",
        "ok": "30368",
        "ko": "12390"
    },
    "percentiles3": {
        "total": "23975",
        "ok": "39931",
        "ko": "23155"
    },
    "percentiles4": {
        "total": "32919",
        "ok": "42662",
        "ko": "28104"
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
    "count": 161,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4839,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.045",
        "ok": "1.45",
        "ko": "43.595"
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
        "ok": "161",
        "ko": "4839"
    },
    "minResponseTime": {
        "total": "863",
        "ok": "2928",
        "ko": "863"
    },
    "maxResponseTime": {
        "total": "43951",
        "ok": "43951",
        "ko": "43277"
    },
    "meanResponseTime": {
        "total": "10376",
        "ok": "22449",
        "ko": "9974"
    },
    "standardDeviation": {
        "total": "6483",
        "ok": "10211",
        "ko": "5912"
    },
    "percentiles1": {
        "total": "8856",
        "ok": "20883",
        "ko": "8637"
    },
    "percentiles2": {
        "total": "12796",
        "ok": "30368",
        "ko": "12390"
    },
    "percentiles3": {
        "total": "23975",
        "ok": "39931",
        "ko": "23155"
    },
    "percentiles4": {
        "total": "32919",
        "ok": "42662",
        "ko": "28104"
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
    "count": 161,
    "percentage": 3
},
    "group4": {
    "name": "failed",
    "count": 4839,
    "percentage": 97
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.045",
        "ok": "1.45",
        "ko": "43.595"
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
