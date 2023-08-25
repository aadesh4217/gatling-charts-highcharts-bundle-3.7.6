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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLnVyd2lsWHNTY1hXV0tpVzlabDI2RFEuRTE2ejFwdzBkSUlQWkFQSk5sZ2dQWFQ0YVhvTmFoY1hzaHYyY1I0eWdMZTYybWJQZVg5d29hREFvdWNsTE95YmVaMHVYUXpPZ2t3RDZfSTNadFlvRjAyLVYtX3ozaXN6YWtHMWg5Y1gySHpmVGxmY2ExNUZSN3hPVWpObDRtZVp4bnBILTlTMmRVYmczTWhUV2hUN0p6QmFXLVJlY3hEVVRPWXNMYVAwU0VBVFhHUkxBcUV6RWNTNHNzU2M4SU1QSW1JaVE2cW1fMkRoMWxZZFhqakdQS3lYeWlHcWRWRUlobEJCVV9KeDgwRWpDaHdUNDltOXZTX0FyWUs5U3dTOUxmZmNIRVkxa1BLSTNheGFVeFh3c1NJY1pFcElOdk5ZT0ZFeVRFM2V0R2RwcEk0V2NuU2dOYTEwRDlGYngydTFoRUF0dDBPMHhKMTlZQVRfVmJoME5QVkJRbUlyQ09LVnBXeFU4dGVLUk93anlTcjItdnRqRUFhc3B2clNEbXpZdTdPeTkwb3hBNGRyUU5zSkNzUnpPcS0wTWhhcjBJbjY4SVV1RTRNbjFwcXdfSTZXODc5U1gtV2JOUzcweVJEd1ozV282WEV3dnloYlBZR295b0VkRGpHblBuMjhCRWRVZ3gzWU1aUjBwckZGWHBoM2l4QUZ1OUNmRW5ZVU5yMVdnaG1wb0UzeVg3MVY3eTlweUVxaE83VmE3aDROQ3puZkRJUXhON1VEMzh6SWVJcGpFSzNmbWZqS1o1dFJ0NlpEckgwUlNOT0NsQ1N5RGRJcVdzbVpWNHVvOS1ZNnpPcTlPdXdodkRNNXQ5TS1RLTJyREw5d2dZUXFIUHVsQW5JNnh0TVdiYkxWWWpMWEFmbThxQnJmbFpUbGRHMVJCM3cwRUU3NGltdV9ySWRUX2tWV1pQY2h3cGk2ZF8yRzVNSk9NMXpFczNobWt4dnBOYTNaUmJBckRFNVFBT1FldDYzR0JTd3NtUmdYUl9SUXh2RE5qczVUUFVSWUJiSlU2Z0RhVnVCY21sOHRBblU0UV9CVEQxaGM5SFpsMkpuNm5udWFHT1FLYS1xN0VOeVUtX0FPRXZMS2pHOGxGZC1FZ1dCb3ZtQS1tVERSREoxLTY1eGstOXhHNjIwN2t3bmM5Wmk5SUo4Q0MxYjIzT1NVblFUbmFXZG5tT2w2NlVwbm0zeWFWbTNBOGR5ZVRPUlh3NG5lT3UyN3NnLm9XWnZhQmVjbTYxa09mZ0NBYWd3TUEiLCJ1c2VyX3R5cGUiOiJ1c2VyIiwidG9rZW5faWQiOiJBYVozcjBPR1kzTTJFek9HVXRPVEUyWkMwME5tTTRMV0prWVdNdFlUUTJPRGsxWXpVelpqQmlZelk0Wm1RMU5XUXRPRGxrIiwicmVmZXJlbmNlX2lkIjoiNGI0OTA5ZmMtNTNhZS00NTNiLWE1MGUtYTEyNDQyZDUxNGExIiwiaXNzIjoiaHR0cHM6XC9cL2lkYnJva2VyYnRzLndlYmV4LmNvbVwvaWRiIiwidXNlcl9tb2RpZnlfdGltZXN0YW1wIjoiMjAyMzA1MzExODQ0NDkuMTA0WiIsInJlYWxtIjoiOGFkNDY4ZDItMjNkYi00OWViLWEyMWEtNzBhMWM5MTc0N2IzIiwiY2lzX3V1aWQiOiIyYWExNDEwMS0zODQzLTRiYzQtYTI0Yy00YTQ3Njc5MzUyYzkiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJ5X3RpbWUiOjE2OTMwMjA2NDE5NjgsImNsaWVudF9pZCI6IkNlMDU5OTZhY2Y4ZjA1ZWE5NzQzNDNhYmEwODBkOGUxZDA1NzQwMWM5NTA2Y2E2OTgyNWEwOGVmNjljZmI4NzVhIn0.iGF0BX2tJfWk8FrtJv4fc9qq8mx7wle0saT4bPMpARCJbbSNufpYaDhl7QsQ4q4wVGEgrwvzUh3OH8nCsWPIPogzQxThc340IqlJxNwTsItja6QnezcxDTInmkh83WVCRBZ0WEiAbeRYQMYsxoP2OISwO2qOf6_z11AyPR9P3pA80BpnfBAHLw5YK4chVVXu9DGRDb8Q1ukgs-nM3wTVtdG9v8WVDQUTR07YyIncxXtpfsGBBuG1TfO-Pl-2kbHwyktcOtaoVzuqL2-dC2W1nAwsT_oOt53uFX8HfOU-aVi_DQRsSNaJLwhP23c2M1v278ovZ8pii8Lfo89e7SzzvQ");
headers.put("X-ORGANIZATION-ID", "8ad468d2-23db-49eb-a21a-70a1c91747b3");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("outdial-ani api")
    .get("https://autobots-agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/outdial-ani/21aeb0d5-2cd9-4068-8d5a-5c657ffce77a?isProjectionOutdialANIEnabled=false")
    .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(25).during(1000)
  ).protocols(httpProtocol)
);
}
}
