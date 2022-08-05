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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkJOeEc3bmJVQl9tN0swZFlPZHVocXcubW4tYmpvdWw3OEFNR2R3UHV5Rl9SUXMtbnRjUDZnS2V5YzZSNU9iMGRVNHpWT0ZIcUlaYV83NjE1WU85N1ZVek5QVzR6LWJCV3QycGNyX2R4U2p4Qy14YXBXVzE4bFhGTk9VWDl1b2Q3cGJuM3M0M2FSaExINU9SWWhkdzhaNjRMTVlNMVlVNU1NcHo3b3hIZUoyNGRjei1lcFFQMUlmX01wY0Z2amNwWTdJSHlFbEZxMFFkcGpjN0tkNzk4TmE1WEZFWjZGaVVwMEkxWDV2SEkycE9kbDBGcmN2cmxBNUNaX2l2blJ2Ulp5TmQzdFQtSkNzT0M4NWVuWFhuTkM1VWExRnhXTnNtVDMtRlhPZjRrVlJyRUtvM0FIUmh5RWxnYVBtYUJCaG0tSmJLWmZSbFdNTF9tRVAtQVRPUWVyZm85SjZ5N0F1Wjh4a2gyYkhoMnRMWEUyTGlteE9oTEdNMHFmdnVvdUE5QlFlZ3FPYmRkOFZhUFQyMlNIUjJEQXRuS2dfRE5WYVB4Yy1PQkljdzUtNE5uOEV0d0lFYTBCRGQzU3pQRXp5bXMxQnA4Wkcwek9tNFFzZG9Rbkw3bmlYektvdXhkUVA2M2xVdFE5bmlHTzlvNGIzRGRvQXpwNktxRTdNMlBxb2V6aUtLV2pjV2M4TmIwN2pzRE1paWtqRXVJVU1faVhRejRsUmpxdGpWZDY2SHpZSW1vNWRqczNqbWJNVUVyY191ZjhhWk9qZHBWVVJyU1Rfclp0a0FEZGlzTzJnanAyQzBzSnNkSjVGX2gyWXJ6cUNnUWk5bnJBbXFBQklIdzRSNWpIMzBNTzV2M0hJbXV6MWdKNDEtWnJpZlVEZkxrVmppWFVJYnZObjFFOTZ6cnRrLTdiWGdkNlJWWHVXM3RiMXJqWndsVmFrNTBsZmZacDk4Q1YwbkwyQkFGbHlkTjRKcUZIdHlxMHBkUWg3bzkwcm9TLUhONjlIeXVqRmZqT2ZoZGtxc3hva0ZwRVExeExWUmVjSFI3SHFpRXpOQjFDYnFKa3BjTnkzMFhsU0ROcHk5bkM0ZjJkWjN5R3lwTUcxNXR6OFJvU1JUM2c2UnpJMVJ1bEdsN3BwaklycnBiNlFBNTRzVWk4dGlMb3dYRUtOSTBaUkgwV0o3M3pOSGtKdGNxUjQuQ25mdU14Q1hIdWk3eng1R1Jvbmx2QSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME5HVTNPRGN3WkdVdFlUUm1NUzAwTnpRNUxXRmlaamd0TVdVNE5qUTJOR1V5TmprNE5UWmtZV05sWkRVdE0yUmkiLCJyZWZlcmVuY2VfaWQiOiJhNzRkYTc1ZC0yMjBlLTQxMmEtODJhOC1lNWVkMDhiMDAzNzQiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY1OTc0Njg0MzQ0MCwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.D4uMa1fJn-fgcUbT8wC9M7zd85xX-LxFDIM5tYdLJ7EcxeBtbPpS1DaIK4W6AcOkdM7PDP35Q5MtEeyAC0LTxvi3hqhxj1GbEODnmtxgFbSPQjqyunOrCHOTSKorc1zpZyI9t_bhLldvU-RU88CRAEhUXfcFKlP4aWT2qgB3oeOphbN_bJjoCrP4wep05HscL0c1_L3LHxTtMf-K2vHnaFnMiVB4b-QWnHz4cc_CpmDFV0OL2v0jnKa3Bn7Zvv0S5E1oN6c5hqi4J86JMgHzAAwNOB0Xv4D3XkJAl4Ya-0pjGBoToDK70X4zCPMm7ZFiv_PYP6GiZZBDFhjh_naiJA");
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
