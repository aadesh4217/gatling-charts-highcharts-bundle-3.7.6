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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkNGT1pzME41Q2tmYVVUQnNBLU5tcHcuMUZDTUt4cndWS3NDQVQyTVkzaU1xTERJclYzcDdBc1d2aFZ3d1RVR3ZUc3VnWDdZMVBmN1BTTzlIYlAzYVdtbEdFdmhPaGVReUE4UlZjaTlWRmRaYVZqWlB2dVdyeFk0SURYRFNJTHlFUzh3WEZ5Yy1uT3ZVQllCNnRtYVJRX2VMcFFCOTctOWg1RTh3cU05N29RQzk2aWpYWC1FOG5GTEp6M0N2TV91Q0lybElNR0RSaTVpdlVOalAtRkRMenMzY1FLT2dxUnV6NVZNY1NjOGE4UkpISmh4X3RkelRQOWNKOXN6NHV2NHY4cWlsTXdzS1ppbTJxbzRqd2s3cjBaLUllYVFKVVMwTnJyNTFzT29nLVRMalgwN3E0RG8zekg3WEpsQmkzYWZsNW9xdndqR0lyemxlYlFkeVQxTmN4Y0hZSVBxNkJIVGpLMTdGVHgwdW1vdG01Smd1bEFoY2tZRUFrenBXVmZjYjdDSGQ1Z1QzZEZNMEtrSXNHMDVGMTN2ZFZoNXJlRkR3bm9TMGRzQ1Z0RUE2R2JlU2JsVTVlMDA1dXNRc0dvd0c5Tm5YOG9QUjE3cHJ5X29MUVZ5bGVYX1dnSG50QkMtOGppSjZ6Mkh0UXhDcnNvSFhZUzVUUlQ4OGtXdXVDM1pBRWJRQ1lxZ21zNVhGU3JOSjNiNWdfaG81ckpFUi1BbXVBLTFXRnM4YkdsN3JsRUFCTFJnNDZOXzQ3OG9rYVVreU1pQ0ZyZUhpcGRRdWFITWZrWTZNMU1Ial9obVVDS3pxMWQ0dlBEWkxXeXl0b00xY1NmVm1WcFBHVEtYaXRzUDRKYnNkSzZCMkdIUVNFZDhKSE12dkphcmFIbkVuc1dpVHhFcGNHYVdHR2wxRU5OVk1iTVBnQzlQU0VhX0g2TEZhRVMwTHkzNVkzQmcyakdBSFB4TER4ejNTLVlmNUZqbnI3WUJoNVU0UGpseFN3dVVaY0wtQklQUG1WNEUwREdoMnI2ME9ibjd5VUhwZHMwYldyUkl4a3RjYU1kaldDZF9fclEyQlk0ODBQa1g4eDY0WlJHVG1MNVB4RXd5R1Z6bHNtVmRHOUhJM1VwYXhmbXRfQVJkSnNPbzNjWlh6ekhMWXhxNndQTHAxRjJnc1k4THAzaDlma0hSdS13UE4tcDhZbUUuMVYyTkpNLXgxSzItVEJ1alFiU0pDdyIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME1qYzBOakJpWm1FdE9UVmtPUzAwWkdZd0xUZ3lNREF0TUdVMU5UQXdaV1EwTWpFMVpXSXlNVEl4T1RrdE5HUmoiLCJyZWZlcmVuY2VfaWQiOiI0MjM3ZjEwOS03ZjQ4LTQ5MTItODMwZi0yNTBlZTc5YTkzNmIiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY1ODQyNjYzMzgyNSwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.PbggJqw1ukgHSyDO4OM99Nq8To4AHxj2V-SEa5WR6OyO2VzjhvaQFwtgOn7UkZtsrIx3MDX7Q0r560KpC-oOBFa0YB-uFDbY_2NA27xAsN-NWWP-MqBGZiFI3mtOliaDRP-pDBe49h3TWweLUJ5hpBw5zEuZkvn9mgzdhpLJteVUq80ZmYZTLmDRCEE12RWYt6LQHNdM52c9PJLQ4xLi0IJ242THRK5FvL9DgYeC7fVXEa-_pOMqbsgmzKmf2lqdJjAytK8_pqsJgHQ0Yb4lf8KcOcS4mPYYCsGK3TSGiqMU6YRWzFwwCnx-Md-3dfO-zxqKljupvlGvqf2ano5cjQ");
headers.put("X-ORGANIZATION-ID", "89b474a3-17d9-41ff-8fb0-534bebdfb160");

  ScenarioBuilder scn = scenario("Agent Backend API load test")
    .exec(http("agent-config api")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/219de9cd-1d68-46e2-8ea5-f1d29f8cbeeb")
    .headers(headers))
    .exec(http("desktop-layout api")
    .get("https://config-service.loadus1.ciscoccservice.com/cms/api/organization/89b474a3-17d9-41ff-8fb0-534bebdfb160/desktop-layout/96fb4233-a9e6-45b7-bf81-9d1f40bd21f2")
    .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(500).during(10)
  ).protocols(httpProtocol)
);
}
}