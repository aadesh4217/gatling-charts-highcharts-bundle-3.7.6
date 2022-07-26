package computerdatabase;
import java.util.*;
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class BasicSimulation extends Simulation{
{
HttpProtocolBuilder httpProtocol = http
.baseUrl("")
.inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*detectportal\\.firefox\\.com.*"));

Map<CharSequence, String> headers = new HashMap<>();
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLi1CeGVOYmQyM0FJMUhOVlpRRUc0eVEuWEN1SlhVSG9VQW1paUo3MGhvS1I3ZmllNi03SktEbFlSWG1CNUV1ZjdqMG1pUEd0aDM1WFBZQWk3cFdLaFc0V0dYUHJTbFJYQ0xlaG83b1hqejZzTUtQam5NVkJlUUNtT1FfSi0yVzRfb1RTU1NaMTR0akFiS2Rpd2x1WjkzY2NwTkY4OF9qN19abTNJWUcwMnBDMFNKZDdSY2FPSXJCMGpZRWxXOU5qNlFtYVBBbjFkZFYwemNkZ2psNk83dmtnN2xGNGY4Y1ZoMzU2bzVNd2NxNms1Wk5vekVHbVh1UzRocDYyY3g2MlpuRUM1aUxLbzJrTFE3WnV4MGdwd3hJRmpmd3ZKTTVyWW1YSXB0TUNaUzhSaEw2VEd6dFhwUy1hNE1DQTR1RWxNYk1TQlZ1YS1uMnhzRXdmck5pOGI1ZFNWcXpucEZnOGlvUUVZT0FvT3RyTzRkNHRRbVRRRVlnMmRHZEFVMlhKVlZlc3J0d3ZIYy1nV3hadE55U0xpSHFpQ0piYTdmalNqMjAtQTNvM0VldFBtYi14Z3VyeG9jUXF1LXF4ZWZJc0pYeTRRbENIY19EdEpLTVRkWkFpQWxYaUxDZU1IZlgxZ3ByZVZvNG16TUhJNl9HT0R5Nkt3TFc4d1Q0YkRxMGJ1enRYNm51QVBNc3lhWFM5eHVyRVJiMFJ4eTZ4S2FtT2YtNE5nMjc3MUxZelBEQWYtUWJFVkFwRmJqSVlFOTJPZDhLNVkwRmoxSzlQV3NWWmhfa1RhTThwMHZXeFQ3c2taN25UeENvbnNBam1BQVo1UnQ1d0NwemR0Q2g1SGJQUWRBY2VuWmhKcG8tekpXeEoxd25hUHRrOGdmT2NQUjYyN0d6d2FCbUlmNVBnQnlHMXdSclNUN1BISGZyUi1xY3lNODhSSTN2X3VjbjV1OTZjTGFULV8xMWUxTVdYNGRMbEdPSlloc29jM25RdDRtc1NNc25rU3YyU1I3Wm9BX2t0U1JXZWNTOVcwWkRRMmFZNHVab3hTNEozRTZLQTE4WTU4aTdGU1JTMnBDUWQ4Um1TUy1IVktkWGtJQmFfYnlfQnYySk0tWlZseDk1a0gtby1OVEl5YlJyTVpjT2Z2QndlaURGQUlvbngyYndyNFZkQ3l6dDUyYnhkbU1GUTViUmRUZjAudEFYaVBTVjRtNWd5bG5rVmVRMGtPZyIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME5ERXhPV1JsTmpRdFptTTBNeTAwTWpVeExXSTJORGt0T1dRNU5XSXdPR0kzTkRrd04ySmpNR0UzTlRndE5USmoiLCJyZWZlcmVuY2VfaWQiOiI1YjgyZmVjZS0xYjYzLTRlYjctODBhNC0wMDg3NTYxMTFiMmMiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY1ODYyNzE1Njc3MSwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.b5tYUenGKhYO6unLcRuSQRfDBAUHBnV-YYgDt_wBBDLXt6eIQSMNv2nQRaOAG8DExvOTx6jwdUb_dwDyQg11qKx3e2l4cPi4gNSSjzWwagkwY2C-tx7PXlG2_SY6acA6jKdHuB5pBd5adeHZjNTgTdCseQltAh0OAz7AocA1nR67vluZTnnNKbPLeZd-BmkeDQ6BUW8JfQQW3hn-IFaE_VV025kJj0g2nuA7CxC9isFpNCEaRL7fnXPRTfTzGkMK5PY7f5qmYqeY8pemdqnCyPv7z-Wdza5eFj8jYrDqwV6y13-9Ww2KCLBG7jFdJZj6PH85TXT0yIJlMiyXAhv7wQ");
headers.put("X-ORGANIZATION-ID", "89b474a3-17d9-41ff-8fb0-534bebdfb160");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("agent-config api")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/219de9cd-1d68-46e2-8ea5-f1d29f8cbeeb")
    .headers(headers))
    .exec(http("desktop-layout api")
    .get("https://config-service.loadus1.ciscoccservice.com/cms/api/organization/89b474a3-17d9-41ff-8fb0-534bebdfb160/desktop-layout/96fb4233-a9e6-45b7-bf81-9d1f40bd21f2")
    .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(25).during(1000)
  ).protocols(httpProtocol)
);
}
}
