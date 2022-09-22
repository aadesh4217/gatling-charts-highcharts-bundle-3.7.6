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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkhROXBZUW9PYWh1cV9oemJhNkZ2bEEuRmR4a1Q0U25Yd1hxSzI0bmdTR1BsTjkzZFFzY2QwMmRUR3JYUDlCY0lFdmVNZFlocmlqUmt3Y18wRkJ0QTF0ZDh4TTJDSWQ4eUJiQ3RmcDhuVFBkcUR6M05VRzRVaFBLNlpyZk5rOGU1cXN5ek1Kb1lsb05ybm1NZXQwZ1dYVThjQTJjSFZUQVdRQ0k2MDVIYzh1NklfeWRzTWRraG5pN2k5RlFoNl92YzdkZXNNRklWNjRzMHJBUWQtLVA3MXNfWmNpOFJRYVJ5TTNqZ25WZTJWRlVTV2h6OF80RlpCTlpxbTd6WXNhZVlPTzVjVmlPdzRBT193UHBTNkN2NXpheE9ORUVVZzR3NDVIU0UyQ0FMemtyVTBHekctMURlQ3ZsejNBZ3pfOTZEOUJrM2JyX2FVbEFiRFhWbzY5UjYwZmk2aS1DY0hTRWtHSFBFZklFZEg4YkVuUkNINkVzNGxYMm1oQjZtY29MOVBFNU96RTA0b3dXOUdubmhHZVd6M0hCc3VLQkFKTll5RGxPYWV2NWxIRHYwWFRXRWw1Nnc0OFZuUHNQRmozNGhrejc3YlliVnVac3NLanhmbjRRMkgtb0xfSWZ6MFBJVnBzYlNUWUsyYTd4dGVlNThlM1FTcmpNMWRnOFVvZnB2VDRLdTFIUkFWN0ZkTGtYeGRmQ01yNzZIdnRXX3JLaGdOOEtSRVIxci0xb2xoeW9DVFpBbjllX0JwR0ZiZWRvbHFHV05PRnR4cUJCRHZtajNVSTl0aS1RV2x3WnhKX3NmN2Y2R3VPaFVqa0E5U1gwZjlNb0gxRTdnMU5QUjctSGR1MG9LNXJJZjNndTJkR0o2MmM3UzB1d0llM0xtN3N2Nnc2RUtmT3RFdHAxV0d3QlpSUDdNUlRPRWx4bDZBVTd3VHpYbm4wRXBISi1JV29YYnZtd1ZYVU91LWdNN05vX18tUG15dGtFb1RKbmhQMTJ1dVRaRXNTTm44b3d6S04wQW84NHZtWWlHakU0bDdsS2VRRUtla3JSR1FkRlFfaVd2Y29HQW5CYXh6VG04RlJleGFOcC1RM0laQWVTRVJvMVptcGVuakNQcGsyLUpmU0hIZVVGbGczR0dtLUVJcXloX2xpeDExMnFLdDh3ZGpGNjdsSS1SbEttMFh2MFpYaWsxSUEuWmIxczAyYjdSWU4zODJsX1czQVJjQSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME9EVXhPR0UwT0dRdE5qYzROQzAwTWpNNExUazVZV1l0TXpaa04yUTRaVGRpWW1abU5EbGtZell3WTJFdE56bGwiLCJyZWZlcmVuY2VfaWQiOiI1M2I0ZmJjNi02YTBmLTQ2YmQtYjE3NC1iZjdlNjE3NGZmMjMiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2Mzg4NzIxMTMzMiwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.eMLDJHyLiUj0l9zgGK8z100gsGdkhV4PAFxZu7SEYT-SoZXOL1pZCtqO9Okq5oJ7wm08gdXIFzxIifGlwJrryTYoUdHM6AlJb1Zx260nt9T1XWItDXtsC186d-E8yl9OC2sQPhIUG-pkyiNDniHwZ5VUlfLrehq9Ri-lY9vcWqaY-whMSGYnmgi87eLbKFQBifNQgKxEgLfyDDlzIGKVIKQcEUiTn8WCGGr0LZuLzM1_-TOj8Wk5A0XEUUiTaHZGeP5TGvvhN58Xlpf9ByQILz1ITRSLBplNX9MXwp4B3E6aqA8-vz3XtfVz3rk71kdrybRAnZw-uKsSLr8trivzwQ");
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
