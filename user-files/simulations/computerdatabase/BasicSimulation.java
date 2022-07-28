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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLnI0THZyM1FDSHpyN0Z5NkQxNmhYZWcuS2FZaUIySzJKLWl6ekhxUGVtQ3J5U3IxRG9WTjZtRGhaTTZOekN2M3kxQmk4UWVmbzdyUmd6aHFjUlhDMXJ4ZFktallxb1BFWHQ5QzhvY0x4MGNpZDl0ejl6c3JqTllfZlFvMXdxd2VzOXh0OTlXc094TTNpVTdFNmp0Ql84c0xSYmstNU52elNCaFBIQ1U3blFLc25wM3k4bXdNVDg2Vi01RDFIcmdLVnlHTDVnazFNU1I5VWhsTWJ3YWtwNV9sUk1rSEZ6bkVhT2JfblJ4VFJramw1cWhGX3V2anAtSkZaOFlwMHpiNTlPa29YVWJXU1FRTkRwN1F3djZNZ3JrWmh6VVZZLVVoUmxPd3VweXBEUnFRSDkwSUFRdldXT0dnZ2E3TmV5V25OWlJUWXJaczRVeHFyNXliRk8yaE1CUl9mZ3lyaVlUY3E4R1Y0TDV5Ujh6MDN1N1IyVkJubFpDRmF0T2N3YVlzRElJcWNSb1JiMk95anBKekNTdWlBSHRkLXFETkU1NVQ0cjJGemVSRE91ZzZoQ2QwdGMyNE8tRjgySGEtX0RTdkZkVFBXdzJuVXhEZG1vRmFmUkd1ZDhRM3Jjdm91UVlMZDh1akRUQ1cxdGtZYV9iWlZHNmZwMngtMEh0WG5kUWtJalBFbEluXzVTWDVORjdobFAtN3NLd0R1X3RoQk5yNlo4YjdtWEpmenlhZi1Ncm9ENzV5NE1qakVDNXREZUR3OUR5VlNNSnRpQVl0SGdLWlkwUHp1S202TVpNTkN4NGhkNHcxQk1lR2o5WUYyUHcxZFZtNlMwdVU2bmJZNW5yR2lxUE1xX0ViQ3lJSWo3emVSQWhqOTNrRElkaW05TE9vY21lQmM4V2JpeF9qVkx2UzJ3MFFEaUUwQXpIeFR6dlV6T0NiRFVrWE80dTdYa1BzUFdxbzgzNE9Hdmt4NjJwUWZtelNQZHZqOEVnNk5yQ3VwMVlLeGg2OU94R2s4MGVjZzQ2c3Vya1d4ZUVTMVkweWpVdi1jY1VOWHJERnlfS3ZDRFlpaWI5TVJMd0ZsUzdsNUlQOU5DZDRHZk1ZN1ZTSlo2REg4Q09tSVptc3BuSDhrdVlCcVFRLTdOWjQ3VUdpT21hWXJWalVoMU55VldOQUNGdDVrS1VqVkh0VXdVNlROVGsuVFRqYnpIeXJRRktzS3hoTFFMRks4QSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME5EWXlaV0k1TlRFdE9UUmtaUzAwT1RSakxXRmpaV0V0T0RVME9EQXpaREU1WW1RNE1tUXpaR1F6TWpndE5UTXgiLCJyZWZlcmVuY2VfaWQiOiI5NzFlODgwNi0zNTE0LTQ3OTUtODcyNy0xMTM0MDI5MDAwY2IiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY1OTA2NDYzNDIyMiwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.PCHJxVH2dE8-TLF0cED8RlaCGJ8vGxBF14do6D_lNfPy7HIRaQs5Dg6APZicJ2CUVtXDFVqwBfjK8vhx4dnW-b0R1c-f_czeiQ6wePyk7U4U4h3jYDZi9Z5eYXOKTGfZ56l0iLeTPkLhyEoTgTh3dRbiOIrCuNSTg9DXRTbhLqaqWv1YWp86jAcLt7j6LHOIwMDUqQwsq78Nj5YEuPyheMU6VDuIkMN1MkPSTs6rZQ-Kau2LQuJJCukM695awvrWKxlMj2JAeDUDlxtefYhA8H2gfapXB96hKVfhriszjUP-ftZQ9sHM6-oQ7AsQXwlMnYU3vbh7ciZaojzDZ1G0bg");
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
