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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLlBwaGpJUnlfNWhWTHBoQWRMQ1gtY1EuXzNURWctTl9UWFBFYlhBY3lsa2twZTFFSWhqMTlMY184am9WbGtuUFo5R1RqeGtDd3E5RE90OEZyTXNCNVNybUxuSkVQZmhCZDNTSnRFcHRIak02LVU5MWVsbDRVV2s3M1ZQelRDZ1k1cEpmbnVRd2ROS296ZmpCV1M3cm8zNGdiYkN6Vzc0a29KTkxVNUlpNWtVT1RYUzBtRjJ6eUwyX3R0TlhINW1UNE9OOUVibG4yalY2ajJEVUdRaGlZcXc2eEs5NkEtQ2lISFQwSFYwLWJYVkpoWmVQYzhlZzZxMDdhLVlRNWRtUlo5dkp2LXNhbjRWWUtuYWlnYk10T3J2WGphZ053SThLUmNtQkJuU3liVjBFaTU3TXlFN1JaNTg2SUlnUnRuQUZCa01vREI2enNYTy1idXBRMWYwOU1oN3RMZjh4UGh4SUtsc2d6TXNFYnRRN2JUbnNiUnVXcEJfaTA4Q3V2c3R1YXJ4VDFfNzMtY2NkSndZcHRPS3MycGo2N2pQY3RnUGd1UXVia1MyNUo4X0ZnMk0yMGZMRUtQa0FtOTF2U2VlVWpJdXM2QmNSbjNIQzFVWFhVTEswX1V3VG5nN2g3cXNVTFdWdm9FR2VGY0JDMVQ5TXN1OXM3ejBLUmh2X2x1Qmp2ZFdPT0JJa3diNTk0TG1YS3JaM1dkWXRCUGZHdkRVd25ZZVBKRlhIUmpCc1lwRmZkX2ZLY0tiQ19YSkFmWVRJSGZNXzdmWVllUlZUZlZ0S1BQTWQ5eDM2S1o5UW5qNXo2NlVDQXZnZFlaWkR1YjNuR2ZzRlJSUnJUWl8wMThMdXdOOGFScU4yamg5WXgzZkgyb0dlNWZWdF84YVhhQkZfZWhwVDJ2NWRpR0hhdmFVRFh5bnpYOG1ISGt6anMzNHAwWmZ0eFhmdlIxa2kyVklTS0NoRzdWSHFCck9KYW9KRUN3QXV5dU5oTFU0S19CLWt4eDJSV3VwUHVaSzVGWmJCcVhxd3FiOGpnNmcwVWN2Z19zUjhpajdlc29fT1pfLVFWOXkxeHdIWXZHd3FEMFd1a0xPQUY1eldES2ZsYl8wbjNDSkpxLVUwZk1WWUhIVTZpY0c5WVR6dzYyUmRITWdPdDU1OWZuS2dHZkNUS2Y2UWktLUtfc19CbXllRGhpSVEtUkkuWWc0T1YwempKSFhhU1psRWlUVXRWQSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME1XVXlaVGd5TXpRdE9HWmpaaTAwTTJKa0xUZ3lOalV0WW1SbU5qazNPRGxoTkdFMk1EUTNObU13WTJJdFkyUTEiLCJyZWZlcmVuY2VfaWQiOiI5NWFkNTNkZC0yZTE4LTRjZjctOTc4YS1jMWRhMDRiNTgyMTMiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2MDA0NTYxNTEyOSwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.ES2k98guq6Gd7TIfK3m3uRhZZhVS8Cd8lm07LYur2iaClIIJvtyYwgzKqtW6tcNxDPxfek-bO8BNR0Vx2U5s_0APmiVpeiZ6IU010XkuimkIyKPANkqdlLFg3TU84LBP9ntPNMcMJcHvjGQ0zE76MY4dyzYMiB6KXJ8-eagBdooCHN4QPFetMBeX4EJC_9hp4JD2WteBBmgfM6CySTDXMFGFdV71-IillzaUqPIQ1SJh7BluSwYQ1gTUo46s678VpoWyEPawnSy2iedN25tNAfLd7IIaoDEITKgoSlkQjbjVnbIh_9vEbW-EmglbSjOjk4BN6KLEastwaWaMgBQIeQ");
headers.put("X-ORGANIZATION-ID", "89b474a3-17d9-41ff-8fb0-534bebdfb160");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("agent-config api")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/219de9cd-1d68-46e2-8ea5-f1d29f8cbeeb")
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
