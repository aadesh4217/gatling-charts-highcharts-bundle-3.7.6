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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLm1Lbkk3YmVHMXBHRlBMdTJmTWU3V1EuRk93d3JPcC04SHJQSHZEQTZtV3hfaGhlVUJCbldlZ2dtMU40NWtmajBzWVdjQ3plenY3NlRBTHhsa0tzdnowMWZ1SFNIWlBwVkZBTHJTejk3ZWpRU2hWeW9YMzNsMUpibHBpbW5QdWxPN0I2eE5rakxuZVA0WGVMT3l6MXBmOXZfU1FjZ2xLcFM3M2ZMQ08zSVhCNXdMUTRkb1MxQWZkRTNEV25Sb1JaNnVBY1RQdjZVanpTUEZ6Yl9vclVueTkxVTB3UGs0M3cyR3pkQmhEZ1FkOGNqUENWSWNwemZjRUQzclZzdnN2V3hLcHVzcWE5VHd2YXN6NlRDVFRDRm1ybFRjdzFsNjZFci1Kb2REOWU5QkdwWVlLR25MWkJYWnYtdFRNenU0VWp6MHdGcGNWRVc4d00xSjh4UnptSl93ODBfRzNnVXEzZGg5bFAtaEE3M00xUk80UHlsY1pIcGVwaWVfclg2RTFhYkVPZmtrLThlNThBVXlOdnpZSzNiTUVPMXJjWHBWR0c2bThINWNTa2M1dUp3a0REaERPbVdVYTNzaXUzcTBiNG55YnZZUTFZN2FYWGhIdXpadkQ0RjlhZDJjQXZaQXZIYTBCekVGSkw2Z3BaZjdHWGwzVEh6c2F0eFN4aGxTaEtCUWJJbllNcmtRM2duS3dBaGdaaG91Z094N2JrRDE5UjFLMnFKTElmOVB4bkhBNDQyY3hxUUZYblcweHZsWnp4Q1RFQUc1ZnF6WFFKZkFkQUNvZFBLNTQzWmVjWGhDaE9taFF2cDd4RnVDZFV0RkhFZnlxdlJMZmpGZHJMQnBlYl9qR0hkS0xqbHJNcmxtSEJ3Tm96S2hjUGFkSkx1NDVzM0ltaFBpdXBKWVNxOU9SQmxRN2NralVPMGZvUExMZEVLc0E0QlZLdDdBdXhnZW9kQ3Rqb0ZmczJRc1JYa3NBak9RNHJ5ZDNEYTVPTU0yRllpQjgzZm01dlRFQzNBSndQdzZULTFfSG1jeXoxMC1pTmt4OEQtcEFqaHFnNVRWa3Zfc3hNUlpWZ2NWd01nSXdqeUMzUWNtNHpFcUdad2JXX1lSR05WamJjX2p1VXlBY3pqRGZQWWJueGdxTmVPMkRyRlB2aFhYY2dieWhiclowOWxralBEWjVncFlfOGthWHN5ak0uOXY0cTU2YzJYLTIwVjFtRmlIU3ZVUSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME0yWTBaVEF4WWpZdE5qUTBPUzAwWkdWbExXSTJaRGd0TURZMk1tTmtaVE5oTmpKaFlqRm1NRGN3TnprdFlqRTQiLCJyZWZlcmVuY2VfaWQiOiIwOTU1MDJmYy1mZGZlLTRhOGItOGFjYS1lODNlOTYwMzhiMTciLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2MTU2NDc1ODg2NywiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.D3bF_-KB1Paj4W_MwAmDBwraLIGoVPNfqOTUFaiFo_WcD1-0lsT-Fk9XcXsXe6Awl59ZX3G77RIjYwIplmtK9Ma0FpvA3fOjizAn3pU88hgZSJGPH74QEs168u9mqFxANaTswqYAT9_RhEgfyym63FVApxErGYZckabOrc1fr76Rkk90Efa7iF8SDyq0iFd6iceOHxIl2gInNNGcmPp33hcXnKkcd7b7NzrRgaERcIjKKA1rDKvrnLAX8ZGeF9607gmmrCDfwxMSehv58ziMG5oGt3zpiOcIicvuuFhM4XPocSQpvAsrA0Vb7-C6krx9-sX-HHxe0pRnXK-G8sxXhA");
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
