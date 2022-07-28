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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLndHdDRNMHV5RlVhdVJXXzUweGI1WGcuNUZ4TkpacmF1QmxLcEtuMkpUd2FydzR6bUh0aS1QbDVWZWI2ZjhJY2s2Rnp6T2E1OVFlNVltOFZPc1JqOUo1VDFFZWgxRE1HbWFSaGdEY2M1REFWa2lldVF5SjdtN01oc1owcW9VRlJnSDBnZjhYN1dYMEdsbW14cGNFa203TzREWThuYlVFNVVnbWRmOTdnRXB2VW5veVdpUGJwcjBhcHhnWXIxeTBiek5VdzNwMkl3YlFrN0NkZTJUcDRhMTdFRTBVcll1RVpGRDcyUWRfUDNpZ0VtS1R6WHlySnE0MUJWTlZYd1d6Q3UtTFp6NTJRUWxsZVdnRlE2N01YVEJrQTc1aU9LcU5DLUZmTFBjbFRwUDMwVzRFZW1yVHgyS0NUWndrb2QwUVpLaUtXTXJZRkFkb09UUDVwaGE5Z3lFaU5oaGREemR0ZGlhZVVhWHd1cUJMUGF3Z2taQ3BHT2FqeXZpNmt4YTdSZWhFZ1FrSE5qM0QxQl96S3hqUlpVNE9PUV8yZTdHdkRHWU5HYWw1c3FDOXdIb3gyTWk5OW9PdmttZW52VkdvTUtMYm1xT3hfRDZueHlMUzMyNVdDMjBVQTVKQjJIbXQ4RkJSeDQxNnhHdEtlaWhBVENIS294enBra3Q1bUcxeS1RYi1TTU5waTNudTZYcHlMUVRvWkZKd2dSY3Zxd1U5TGcwTGl4Sk43elF3RWxUYVpGSGJRWFpMUzNwQ2hsRGNEaDlUblVSNGlyZVNyWlc1cTVUWWdXUkR2Q3Q3NWp4M0F3RExpWTBGZWx3RzhyZGMwVXpJTjFOeHZLazNOLXJiMXdmaklZZmhINjNOeWNnYjhYczRRZUMyMHNtdjhMNXRQV1RvOXFST0RJVktacDlCMm5EemxDVlhKRUpKYW5FNXl5c0p1Vm8yblVCZU9ONktzNUNiLXZtV1VnZ2JfRHBKcW1pckVmS1RFejRIU2xhcDFFRDg0aWxMeEtwZm9sRjV0eVhNU0NpWlBRT0VYU0tPczVrdi1rQUpRZ0tUWWFPTHhoZVFxWjMxZnBrWVJWX1kzNUoybWhUMG0zVUhaNGp5RmlqdE1IaVM0elFLQWN4elBRYlNkYUkzcF9RaEliNmxEMUFDVlF0b1otV3ducmIxLXNldzdRVmFsYWZqSDlXWEt1ek0uS2VJaHhSSHBZSDBXZjZ4NmVXeDg0USIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyMFpUVmxOV1F5TWpJdE9HUTRZaTAwT0dKakxUZzFOemt0TlRNME9EVmhaVGsxTnpreU56YzBNR1V5TWprdFpXVmwiLCJyZWZlcmVuY2VfaWQiOiJjODA4NTEyNy04NTIwLTRjNzQtYjBmNy02NTZlNjlmNzA3NDkiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY1ODk3MDY3OTk3NiwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.ZToIvcHpB3q86RMKliBaYguXRK9rKK20KqmKFYLvhrkltSewDPUygWHupVlTDIRao-SeWJWt3lFhRNPW42EFM7U-SQ1DcXnOL3Ml7ZCUSBN4P6Ld0lVXY8AWpt-8U_hvGX0F6s1yr5Cyox-VqY0NeZTnXKSxEyhDi6uG4pv41gSCrDMjtE6tt__dqVWekwUNb7xmaxQKHu2I3pA9TwGNsraR5v0lpQrziYU6hv9qlm4JTjktDMThTYtjv8z7wWrtY_K0vBERYJppvBogqQGXEolDg6xQgicHTjE5sElIV_zYNjtApUnqg-b2F_JeIf3ttRfYjwymTKjV1W0TTZzfvQ");
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
    constantUsersPerSec(50).during(1000)
  ).protocols(httpProtocol)
);
}
}
