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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLjJWeThHMDJhZ1l4RHY2dnNwTWNQZlEuUlk1NnJjSkwwX2wyUzhoYjdNVUk0bHNpRjRib3dzelNjX195bXBtd09IOFVLSlk2Sy1wclo5bmJkenBuNVdrVGYyYm94N0tYYmVUVDVkLXV5aWM4U0VtZzBvOUFtUXZvSGM0cWlySk52YjI0T0JwQm9rOExWT3I2QXZtMDltZjRGTU5Pc2ptTVE0ZkQtR2N1N3dJbDIxeDBfcFRRRXl5S0ZtQmpPRkpQRnFGVGoyRGpvV0FaVWRnZ1lPLW9PZU11dmpBSURxWTJRMHJYUHd5RjcyN1FYbTNrMmNSSDhydTA4XzZZSDlVa2tSTTZPZVgzRjlXV3o1YVYzV3E5ZDhHY2FNSTlmWFRPbW5SQnE2REplNVExWmtKVUs5ZmNLY3h5d2R4TG05bzFwOGlhTEpkeUJMVk9WTGpBUGJmM2w3YVF4WVkzbHlMOXZ3Z1ZjTjctcGFWY2ZIOUJMVTk4d0Z4ZDBXRWkxRnc1LXlGMFNKRGhBSm01WTdkSTNISUdZUm11M2tubU93ZGthLWx1d2k0YXRiSUowNDQwckEzX2FITmNoM2RTODlDTmgwZ3M0dmRPVWR2NnhjR0YzVlNUUGxTTXpyRENSWjhyNjR3QklHVjY1Tmp1Y1R2SXlIdzVqX0tUV2UyV3FjRjJPQUE2UXFheWdocmo5bUhGNjFOaHp2R0EwajRBd1I3RjVSMktnYUJldll4Z0lpQnMwV0h0aWpWdWxvN1BGQ09qUWMtTENpaUNTVXJPZzdmRlFJeUZxVDlJNlBkNjFySDlBdzllNEoxTGsxU0ZUcXVsSTM5b2pHS2oxcDlBQ3BLQTRydWRmSFFaYnYwc1NZYUFqMXFuUWZtSF9pZ09tNFZRWHBrN1NJMXA4ZnNlajRSUF9jVHJod0RLMkhLWFN6NlFJbWRtcXFlWFhzbXFhSVV6ZDcwM1BLZ0ZiWGkwb1pteUtlell1dTNsdlk2eTVFNklCQUxBY25YcmIwbjhYYTJkYWloaVpCUkZSVFdHX1lETkZtU09vUGhvbVlNS0k0VU04Mlh0WXRPLWhPOUIyY205WkNEdE04aDgybWNCOGswZ3h1dGxaeHdTR2NvaWx6QWJiRlQ1QXM1Vzl5WGgta29uZHo0SUdoY0lLcHMwMW5DcHdTWkdMRnpNVTRTcjJkY1Z5QWcuZXV0TDMyWlpWaW1IMHNUVlhMa2FoUSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyMFlXSTRPVGxoTkdJdE5UTXdPQzAwWmpSakxUZzBaVGN0TURBME5tWTJaamxqT0RObFlqUTFNalU1T0RRdE5qWXkiLCJyZWZlcmVuY2VfaWQiOiI1M2I0ZmJjNi02YTBmLTQ2YmQtYjE3NC1iZjdlNjE3NGZmMjMiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2MzcyODkwMzA1OSwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.RTZnVxG-2w4h9NfGat7jmBeZNUoABsRmmZbKgqFFutSejUSuwNbkg_pyp9qpia_T_HyvJjLcuJMPb6GyM_enPEjtR994-m4YsDnghW8vZ4vzfoLbyTRCGvn77-IgSl2ZoaVA6REGRZFs7532qe2qaQ_zoww9FykUOzJ1jv0nFNv9ME-m4VIGhT4-4bLzAcHgZKwAx66VaNbTOXz0t_-0JCEvVycgSb1bjA5P3crwGdFT8PenhpwQppA-aWKpqlP8B9wi6vnFGmkFKSh9qjgOIltGzINcKBOqs6bWObieM9kwfFKkDGr0dbTeeVELkuVPXCtoWxg7IaaLEYDn_78d-g");
headers.put("X-ORGANIZATION-ID", "89b474a3-17d9-41ff-8fb0-534bebdfb160");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("agent-config api")
    .get("https://sv-agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/219de9cd-1d68-46e2-8ea5-f1d29f8cbeeb")
    .headers(headers))
    .exec(http("desktop-layout api")
    .get("https://api.loadus1.ciscoccservice.com/organization/89b474a3-17d9-41ff-8fb0-534bebdfb160/desktop-layout/96fb4233-a9e6-45b7-bf81-9d1f40bd21f2")
    .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(25).during(1000)
  ).protocols(httpProtocol)
);
}
}
