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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkltcld1VGRzbzhhUkZOY3hvQkphcmcuc09fYzMyaUxIbUNDMjZpV2J3OFYxUkhUYVRsdjdnU2FVT0xsa1VNcnJwaUZLNWExb21JdHdEcnI5UFByVFlOejFxS3k3aXR4bGgwd3hBaXFnWU8teURtWUFLc0JsUDdyc1V1aldteWdCNTB2eHJ1N2FhdFJMVnpQNlRKejR2djRDTkZrcTZfSFRTUGRYcG1QcDRQRnh6REp5TE5KbVY3eDdpRURHWWdGQnUtS2lxQmdseDByTkdEdXVOUnZ0eU1yY0pLaTlZWTg5SlVyU05sR3dhUEdVU29TWWZZdW5KTGswdkU0ODRZLWx6eTBLUnJKUmtBVE41UFVxUHBrZDBIcVcwTmtVVGlfcWtZSGJhVjBFUXJuaHlxQVBwdmV5VUtJUktIbFJDTnpJakJMSDdrQjM2X0xHWW54bEtnSXd0SlpLS3NJT3h1SUZ3WmJRTVlPM0Jla01Zank4eE1KT1E3YWs1Y2E2NVpGejh6SWZsYkgwMWhOeFFuYjg3c3pacXEzYm1zeGxkU0NlY00wdWtSazJkS0pfWFROZG9OUVdsOXlEY1dVTHF1aGV2Rmd4SzhIOE5VczVDbXA4My1DVjgxcFctekt0d1hnRnBIa3J0NlJSS3lfdExYZGthTlo5UkZYZGpXem5kckJySDlLSWdQQ1VXTzZOcGFGRS1HT0plc3VxQlRYWlpGYkluZ3haUG1HVkJXdDdUZWhPc2RMLW4zR21BOGFrODRmelM0V1VOZ2xCejliblJHUGFrTGJmdjlLLVIyTVNhQXY0Z0R0U1RpZXluS2pkaWZBTlQ2eWNUTVc1QXNuVVNoOVRFUDc3MVFkaGZ5ZDJ4aUtfZzg0RDJUajFJbG40RkFqeTRueHo5UnVRVlJIUmRBRl80dTcxWGw2cHc1Y2UyQWdpLVVzSGZiYWl4VHF6SG15a1RXOElkWURpMjZjMXdpLTMwWjh6cU9sazZLQ0Z4UENoaGE3N3paaDk3bXhHaW9WY3FaV2VuMzBGUndOQmJFTl80Q1U5WHowLXVSM1hmQXQwOXZPYUwxQ3hXRGdoT1o1eU1FaUZ1MkJXQkhLR1ZtUEpEWGo0V25mVEFLRU1xODZVQnFPSWg2UFcwSkZmUjBRVXRjcVJqOGZDYVR6cUh4V0YtQTBidkJ4UmlxUk5fTmJMYlZLRmg2UGdSZVI0Z3lSM2JnU2hxWmsuUnNFc0RKOXFyS3JlQXNvR2ZlVnJ1USIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyMFptSmxabUpsT1dZdE5USmpPUzAwTURBd0xXRm1NelV0TjJaaFpEWXpNR1k0WVdSallUTXhNVGcyTnpFdFlXWmgiLCJyZWZlcmVuY2VfaWQiOiI3NDhlOTUwMC1iZTg1LTRiNzEtYjhkOC0zOGRlMGRhMWNkYjgiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2NzI2MjkwNzQ4MCwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.WGvKSBwrFXrBdv-QggUExhAROBiUqMYfjm-sf95vyei-9h-HBNEqxEzdr5PfQnEXf3E6jsgPIVcm8jbhMW_vnACRhTxc18xQjsg0EGTKsXnHDUg3p0lF-WB9_HcgQzqfUAHj1DkWOO7itnco1TXs3hjlOxhjVYk3M3_XCIrcH3vW6iyTEke1dKchn_1EUGBAYUfmlau4JHW09UQh8amJIk5h5WJdloDFH-jq4pEasGgBVBYrdCuV0JQvn5PAn_56xf8yEXXWEjo2oMvshirIDc_Givq9bcnJ1Rnvj6jJsRM0gZHMYGHZPfOof0hqhKG8KMe81YRNjlyxrYYHVwVcQA");
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
