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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLmtfdHd0NXZ6RmNXbU9EMVRRUjhVZGcuM3gyYlNEV3JpNGMwR2o1T19CWHhJbDMwM2NDbGh0NlEwOEFtMFJ1LUZUSVZkdkNoYlVrZW5mbWV2SDdDMWV6a2pERldkRDdjX29WdTZNemc0TmJCbktSS1p1eE4tSVNQbVo1eERPcE1LM1VNMU5MQ1dYVUFxU2k1U3lYVWxlc0MxODRWZDdDclhkQk1XTUFTVHNETmlrZ0NYc055dGR1U1ZJTWJ4SkN0UDR2UEk5WkFTUnVDMDc1Uk5XdG51ODZYVXB0VWd2QXp5UWhiZ0JDNm1LUDBDWmJZTU1iWGlVcnpUdmFRVlRpZ01zd0FzT2ljWWRjUUxCVWRaN0FGUUpLR3VmNEktemE5c1RYQzNNMmRzTFJ2dW5Ock1aX0ZMWjRQOU1zUmFFTHltTjk4ZVpHQ1pRWnJsOVhoZlBwenFfMzJfN2llaUl1UkN2S2NDMzV6VjhrWjhkdWNwbXh6MWo5cDI1TUxXTlA4ZTBnMDB0QlVuenlRYW11TmRfVHI1cV93WGYyZ1pObzMwMHBmRU1YVURkZTBDWWVJQndmU3RZc29WSVNEQXJGb2d6MTFOeVQ2VFQyNkxTUFJtS0RrV0RIYW5EMzBYLTM4bzdoazFFZjhlUzhlNlIxenFvX3BwMEJOTHBiUWRNcjJlTFhXdXhTWVRuTHVfTU1FWFhrM0Y3anRGYXZXZXNwbk1TYVpucHR0b0w3S05zMEViSllCbXdORkd3Z2Q4RF9QNHVXNkN3N2ZnR2J6TWlSeXNobHYxeVpZMDkwOXU1UU1tc191U0NEVGNDUFdsdXFjQ1lsN2lJYzA0Y09sU0d1Q0lXTloyWS1SWjBFdEJWYUwwcnFzdjlDeUY2bFhhZGxqWjRWSUQ1ckIwb2FnVUR0YVZCX1B1a1piUUdTazBha1VybnhZX2g2bkRVeG1iWmZfeVpJWkNySWxLOGs5NzlSNkFlSE9sNUpMSHI3Ri1ZN1BvWmpTWnE0NVl2el8xMXlxenNhVXNXdy04bmg2V0hrOENWM3dOejlIX2QyV3RrX05RM0RnWXZvTzZYbDVHYXlfcGwxeWJVbUF1b0NpdTh0dVBlWk9BRWhORFc2RFJOQnRnQkpqUEVRVUxnN19feG9ieWxwc2lIZlp2aW1rYnJ0b0xVRmF2LVJwd3JUQnYtd1gyZXBuZkFMdWRSVE42UWYtRlUxTEd1a18ubEwtWmlEOTNLSFdpU0JVRjIwbUpLQSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME5XTmxZV05tTldZdE1UYzNOaTAwTVRrMkxUazJZbVF0T0RZeE1HTmxNV001Tm1JeE9EQXlaV0l4TUdFdFpHSmkiLCJyZWZlcmVuY2VfaWQiOiI1M2I0ZmJjNi02YTBmLTQ2YmQtYjE3NC1iZjdlNjE3NGZmMjMiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2NDQyMDMxOTkwNCwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.glNH8RhjiC09iktB9UnP5Ps0Loz-6KNzqRDk2C66Iu0qsa7hAb91GS0YIeQ5bxCvo3vjYbHm7c-mML65g2mp7_6JDDFi6bCO9zfUra_RcytfuyAKSNUFB8LV77qm6rxvYiV7eEnuax85punmsevHMeXbe7aAKvKyq1p6KKkydQbii4z-fSY9T64A66ysr2YHA8yCC6HsVOweOwm9-D7iMpojyTgCcWwJjvwaoq1TEKyV8ZzfVbyDbQfJh0yciO3AdcEmzHpTf4Np0vlOr56Ri3jqQPCbEnWSkJ67p9Bdr1eYopIMaGKdyrtInzbh88sLBhuClRyv03XHZgCntgdybw");
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
