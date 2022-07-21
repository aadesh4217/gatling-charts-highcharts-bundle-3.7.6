var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "10000",
        "ok": "4999",
        "ko": "5001"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "380",
        "ko": "223"
    },
    "maxResponseTime": {
        "total": "24663",
        "ok": "24663",
        "ko": "4429"
    },
    "meanResponseTime": {
        "total": "6122",
        "ok": "11743",
        "ko": "503"
    },
    "standardDeviation": {
        "total": "6631",
        "ok": "4948",
        "ko": "528"
    },
    "percentiles1": {
        "total": "2176",
        "ok": "11526",
        "ko": "303"
    },
    "percentiles2": {
        "total": "11523",
        "ok": "15108",
        "ko": "424"
    },
    "percentiles3": {
        "total": "18693",
        "ok": "20518",
        "ko": "1956"
    },
    "percentiles4": {
        "total": "22033",
        "ok": "23006",
        "ko": "2510"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4970,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 5001,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.365",
        "ok": "39.675",
        "ko": "39.69"
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
        "ok": "4999",
        "ko": "5001"
    },
    "minResponseTime": {
        "total": "223",
        "ok": "380",
        "ko": "223"
    },
    "maxResponseTime": {
        "total": "24663",
        "ok": "24663",
        "ko": "4429"
    },
    "meanResponseTime": {
        "total": "6122",
        "ok": "11743",
        "ko": "503"
    },
    "standardDeviation": {
        "total": "6631",
        "ok": "4948",
        "ko": "528"
    },
    "percentiles1": {
        "total": "2176",
        "ok": "11521",
        "ko": "303"
    },
    "percentiles2": {
        "total": "11522",
        "ok": "15107",
        "ko": "424"
    },
    "percentiles3": {
        "total": "18685",
        "ok": "20514",
        "ko": "1956"
    },
    "percentiles4": {
        "total": "22033",
        "ok": "23006",
        "ko": "2510"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 25,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 4970,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 5001,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "79.365",
        "ok": "39.675",
        "ko": "39.69"
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
