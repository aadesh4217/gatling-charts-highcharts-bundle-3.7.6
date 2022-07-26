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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLm5sSlZoQjd5M0lCRVhoRFRoaFRjTGcuU05TYkdueGRROVdybjNoY0lOczd0WU5rZ3V3SDNmRFhYdHpGV0VUQ3Z6T2hlOXptTFNHM2VKdVFIZjJ2QXJaeC1HZS16MEFCZ0hyTmRTWFBjcW1MaWhWUDZFcnZuMFoxcmRQd3lqVHpHSlFSVC1Wb0txSWZkTXh1NWxFakF2X0JYd19ER1BsVGNUbHl2QUh3dEdrY2I4eGd5Q2tsVmFOT3FqQTZ6SEotLXB6T2ZBajQyVHhEMEVLSVhUWG5IQU9ueGxuZ184TVNSMDVwT3FVTFhBTDUyanFlQ1FNZXJiS1VlZ2gxaHpjQURjY05BZUhhSVZEV3IyUDNnWkJPUEdFLWt3WE9PY21kcnJPM2RfNnRKV0lXTFdDclVTcUhvaUpPcXpEbzRkSG16TDdYSWZkMVUwVzhYaUlRSjBLQ1VrTTh5aVFDZmZsR3J0bmQyYWxCR0U3aFJjcVB4QWc3aTZQSC1KcWxKOEpJbXN6ZkVxRUt3Y0FzOVZIRWJ5WEhkUi1CbEY2V1hvbkpPd2hRMFNxXzdfUlVOZVhrTEhuT1kxSDdVbWxHVlJJMXRrVEhaWDFqbVVfdnliaEs2dFVBOXNQUjgtM2x4QVpHOVNZV19NdE1ia01yS19FQXhaWlNvVE95a1dqVm45VDNJblpYWkxZVWdSRXNIQk9sSWVoNmExSVY0NEs1QnRrVEVzRTBQQlVfUHJXYk82ejM1ODJVVDlzRmhoWVA2NGdhMy15eXFDbVBiQzlXS2tYdS1qZ3B4SVpQTXJaNTYwMG45cWtWUkZWb1hkcXUtMVRRbzVmcDd5NzVERlYzWGlreHVsU2RUTWd1WTlyd0w0MGJzQ0hpZ3VqY0dMeHI2THUwQ2hydnNaRjNmcFV2QkdMTGMwMGNiMS1waDczT0pvLWI2QnlQX2VqLTdwOGlSU2JwVUNDVmg0cEhBUnFEQm1CM2VwQ1R5dFFlTm5vYmRwRHhVYWRneTlfaXlpenB0UHpDVEpBZTFqVUNkcWNhT1RTMFJCOHVBRkRpWlk2MFZwS3JrLXFYSXFDV2ZJTzBTYkFEcVE0R3Z5YVpHdXpXZ2hRbGpCYXM1ZnU3Wi14SWJMMk5xcnJNbEg2elJNaEVwdmFvejR3Z3lyNmpaaFFxM2dLVW5NV2F5alJJbXNuV051M2dnTEUuT2tzb0lOQTUxMnFRQ0JCU0NOVzc3dyIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME1XSmtObVl5TTJNdFl6STRZeTAwT0RJM0xUaG1aV1F0TVdJMU5qTmpabVJsTUdRM05USTRaakEzTURNdE1EQTQiLCJyZWZlcmVuY2VfaWQiOiJhZjNiMmQ1YS04MjFjLTQ1YWMtYWM5OC00MTZlZDNjM2ViNDYiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY1ODkyMDg3MjA3MywiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.cXD8gyUzD4r6b0qKSWQcZj1ZWicQ2Jfui_4znFMMPGSAclLlYmfQVHof1sHkgLZQdejMJ2UH4tQ-kixYTG3ry09fLTCVaxnd3Yr1_6km2OxHnqXlbbWZuTyOWrdBqA_aVq0ypk7PFBj_S9nnd4jmV3vwdk7cMIHXiuF83hAREiBqB_7r6jS35MVaH-pioCgrXVMeObjD2nBqU_i3AgBz2lLTDcC0m-PEfD7YuFmbptF8JC83cfqr0uraP54lsXq5Vn6K0ltOh2WsUOKCD2zIKcxM-RxPMdWdTdUCN2RjB0k5SdlRVu81ikb8gs3R9gK6ctgwzi4NnA7jGpbxMsjB0Q");
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
    constantUsersPerSec(25).during(1000)
  ).protocols(httpProtocol)
);
}
}
