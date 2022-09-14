var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50000",
        "ok": "27138",
        "ko": "22862"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "97",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "131051",
        "ok": "131051",
        "ko": "64808"
    },
    "meanResponseTime": {
        "total": "165",
        "ok": "239",
        "ko": "77"
    },
    "standardDeviation": {
        "total": "1914",
        "ok": "2472",
        "ko": "861"
    },
    "percentiles1": {
        "total": "123",
        "ok": "143",
        "ko": "49"
    },
    "percentiles2": {
        "total": "144",
        "ok": "150",
        "ko": "71"
    },
    "percentiles3": {
        "total": "189",
        "ok": "226",
        "ko": "88"
    },
    "percentiles4": {
        "total": "373",
        "ok": "452",
        "ko": "229"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 27031,
    "percentage": 54
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 35,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 72,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 22862,
    "percentage": 46
},
    "meanNumberOfRequestsPerSecond": {
        "total": "48.685",
        "ok": "26.425",
        "ko": "22.261"
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
        "ok": "3908",
        "ko": "21092"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "139",
        "ko": "41"
    },
    "maxResponseTime": {
        "total": "57200",
        "ok": "7947",
        "ko": "57200"
    },
    "meanResponseTime": {
        "total": "92",
        "ok": "236",
        "ko": "65"
    },
    "standardDeviation": {
        "total": "377",
        "ok": "174",
        "ko": "398"
    },
    "percentiles1": {
        "total": "50",
        "ok": "186",
        "ko": "49"
    },
    "percentiles2": {
        "total": "80",
        "ok": "248",
        "ko": "73"
    },
    "percentiles3": {
        "total": "238",
        "ok": "452",
        "ko": "90"
    },
    "percentiles4": {
        "total": "436",
        "ok": "763",
        "ko": "229"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3871,
    "percentage": 15
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 27,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 10,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 21092,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.343",
        "ok": "3.805",
        "ko": "20.537"
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
        "ok": "23230",
        "ko": "1770"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "97",
        "ko": "46"
    },
    "maxResponseTime": {
        "total": "131051",
        "ok": "131051",
        "ko": "64808"
    },
    "meanResponseTime": {
        "total": "238",
        "ok": "239",
        "ko": "222"
    },
    "standardDeviation": {
        "total": "2678",
        "ok": "2671",
        "ko": "2769"
    },
    "percentiles1": {
        "total": "140",
        "ok": "141",
        "ko": "55"
    },
    "percentiles2": {
        "total": "146",
        "ok": "146",
        "ko": "57"
    },
    "percentiles3": {
        "total": "159",
        "ok": "160",
        "ko": "62"
    },
    "percentiles4": {
        "total": "199",
        "ok": "199",
        "ko": "481"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23160,
    "percentage": 93
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 8,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 62,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 1770,
    "percentage": 7
},
    "meanNumberOfRequestsPerSecond": {
        "total": "24.343",
        "ok": "22.619",
        "ko": "1.723"
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
