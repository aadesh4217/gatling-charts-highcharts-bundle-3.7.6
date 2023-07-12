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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkJEZ0JSWmItdzZKYmVvZ2FjeVZKVWcuNHBvYlNiUmtWeW1OQlY5aGp0VTBXNFZ6MWRJbUpHa0NfbEJOOUJoemV2QkNCcHZndjhULW11Xzl3RTluQXAzNGNHWDFSYjRSNUVQdkdERURnRi1qSl94SENCc3V2dEZOdUdYcnNraXpVMmd0NFFwYTBKSldxajN0RW1hdVVta2hxbHlEVmM3bXVXTkRFbW56OEJRbDRIZ2kydG1uTVRBNnowX0ROZ1dQTHNCY0lkR2R3ZlM3MVdndnBhUjVpeGxoaXFPdS1EQ0dVSnI0ZDhzN0YtaXBmV1dRT1VYbGQyMDZ1RlVzTjVHWGhMNzJIaHVwNHN2eER0Yy1lUmJSVlppRVNWS2JoWk5LMVVPS1hPNlFKMWNhc2FIZXRka2JIUFFMSWtzTWtoMFJKLVVxaVpHQ3VTTU0xd1JyUmRBUDJBQzd2RVFRcW83WkJoQjQyUGxIaWFrMG82QnV2UnpDOTNRb3VDek15VTR5Ym9TZ3piV0VXSHJKOF9kYVVpYXNlbDBUV2tPZ3NMcUF0ZzhlRnd2SENxYWs4Tk1XV0xUVE9NQmJVMnoybThyOEd0TVo1VEttMzVhRE1VVEZMZS1IaWNCeTBQY1hKdGl4U1N2RmR0SzcyREFxRlpjZ3laMnpJQWJENFllNkFGMTFNS2tuZ21pU0FCcF9seGQwMkkta3dobFJxSzdDUGh2VHJwNTl0OFBpZEJBdmxNMWNIbDhhdW5NaTNFUjNWQ2ZDSGxZYkVBVXJaSVp4VUxUNkFtVDdVY1VSNy1JX1NKQ3ZnWk90Sm55b3lIcDVrS3VMZzFRMjZsczdXLVZyY0t1WjNiQ3ZVZTl1cEZhbVNtMmFqWmlnMGQ3aDBWRmlRNHB1X2dwV1FKdUZ4aElSbjVTQUd1SUs5eXYzTklwSUptY1dGWmUyb2FFMGdYQjE0c0Q1YzFNQ1VmalpCTkJza0huMHZ0RWdLd2ItVWU3cEVnT29XVzVYQjZsZFIzU3J2V0d1Rk52cWlMYnJVVkMtUVQ1YkVvbzd6TmtrNmoxSzFMY2QyTDF5MnBUUUlUVVY5VjdMX0JhakpJd19aZzBjOXl3TXVadE1qMEhKX2habGlSeTR2dkE5emIwVml1X0VqMm5XcElvdXZ2TlFVNEhwd2ZBdWtobTJiTEotMl9hNi1jY3luT0EuTUhSQS10OGJLS0V6Q2xWcWV2aVdadyIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyMFpHVTNNamRpTURRdE1EWTNaaTAwWm1aaExUZ3pPV010TW1WalptRXhZVEJqTnpRek9XSm1NMlE0TTJVdE5tUXkiLCJyZWZlcmVuY2VfaWQiOiIyZTM5NmI5My1kNzgzLTQzOGEtOTIyMi0xNWFiOGIxNjU2MWMiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIzMDUzMTE4MjYwMy4xODVaIiwicmVhbG0iOiI4YWQ0NjhkMi0yM2RiLTQ5ZWItYTIxYS03MGExYzkxNzQ3YjMiLCJjaXNfdXVpZCI6ImQxOWY2ZTU4LTg4MzQtNDk2OC1iNzhlLTE3ODE5YjQ4OGJiNSIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY4OTIxMTk0MTY4MywiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.SgvOl1bbQ-dBIsIv6T2RPYrF2FWi7tcoiRpK0GG4IAmEAqSe-h4gVmny6ceqtwriBW4HociJ4fC-0am2nqhhUhHuX-n2NzcWWMoqig4vBeaR9JOrCzsDlbow8g0-yvkCAzLFAf6cEKZIwW9esqcz98JozHmQP-8ILuI-QQgEMallR7piiXSRTpO_ZzP-E381KxTojYKkPkJTIJqJbBCF3B0Iu-loB6Dp0y-Q607ayC3QJ2fhxUocBOupy3f2992Kng26B55fUuU7BOkSOTkr7cP9pHHmw962fSy9pUT8AkN0c0_kN2SDAuad7ISqgQgbyWZpbkHOQPwoSbU708LEQQ");
headers.put("X-ORGANIZATION-ID", "8ad468d2-23db-49eb-a21a-70a1c91747b3");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("agent-config api")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/d19f6e58-8834-4968-b78e-17819b488bb5?isMaerskEnabled=true")
    .headers(headers));
    // .exec(http("desktop-layout api")
    // .get("https://api.loadus1.ciscoccservice.com/organization/89b474a3-17d9-41ff-8fb0-534bebdfb160/desktop-layout/96fb4233-a9e6-45b7-bf81-9d1f40bd21f2")
    // .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(25).during(1000)
  ).protocols(httpProtocol)
);
}
}
