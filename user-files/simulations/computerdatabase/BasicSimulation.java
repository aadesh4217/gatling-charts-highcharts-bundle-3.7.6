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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkpzeHBBakZ3dUZDaDFpZnJieG5pTVEuNUJKSDBoVTBuVmZQUGlqRFI0Z1lfdS16R3ZYOEZCTURlalNlZ1Jkal9LQmwxdTJFUUZYZmZvTDR1eHBuMWpMZmZrRGQ1UWI3R0UwWG1IcWxiYzJEajBZNG5YYmhjQVVTeDZxYUZhYkRiak5nQ0NmOWFvYkV6cGttWjdJN29nU2p0Q0FjeTdkUDlBTTNzZUNRS21jdjBLdnRxR3VsN2ozWTJidWRwYjZPX29uRnQ1cmVONldTbUhsMGdUbmtnYWNHekxYWGxkYnRKVnZad2xyZ09fUkdNRU9abUkyNDNLeUc5cE9tNmQ5ZzdVN0x2d20yczNnQlBLWWVkcnNpR3otbTBqam1CellXY0l3ZkpZMnkxX2NLM1cyT3JGZkJ3ZnlFenpCOEsycWdfdlo3elBzc3dvT1RVSm9aSERDMUZmY0ZGLXBDbVZFQU5tWDgyTXdPNVdWTktnaWpqWUIwV3VKdUhEWFlDWEhrZlZSdHNBcURMQXRNRVNPR3Ftck5lYnhpQXVWbVNvNk1YTWMybzh5Qk9YNlpiaVRUNUlZTm1aT1pQRDFMMVBNQTVjSE9HSl80RmNqb2dXbEZYVVZ4NDRVYWlCdnBoeUxCMTNOa1ZpZkkwNG9iZFllcXpqVGk5YnJCZXFNT2N0R1Y1TFJ0QV8ySG1QSUZ3SVRDU2pUOHlRZ194dUNjSE5CaUhiUGM5OXhZZkJkbDg2QVYwckZfZWx2bmdORnVVa3o4VlFLeGFkTlZSeTNFVWJqRUdwLWpraDZyYWVYZVJ1eVMxa2s1OGhsYzBhODhSZGtiSFVlT0JyS3RFNElTMVZDWHE0T041aXp2SXhJVEUtcFhmM1ZMTi1ReWEtdUNmSzJQRmNwVzRwMGxRN2FqTkdPU1VzYTExeTRTcFh3eUVvSnFPay1CY0hHcFpBc0RlWE14Z0VJbC1WQW5ramRTS1lYR1ZET0dDNXlwU09zalNXcUh4OXRLLXVPbEk0dTE0eGNkbnhVSDJFcXJNaFZqTmJpcVAzQkZyd0dHYmhLSjBLMXZwMjJJbWVLU2M2Q3c2eWVEM2dBQXZNOVZ1Q1UtWVhGYkRCaDBoTUFYVmtuT1pPV0o4N2xydlZKZE1pOGpqQ1ZtMndUMklMMlp5QTlRTXRTOUhCZTV6dzRvdWE1a0Vjcy1wdFItNEE4eGJPTmNxOU1WOHZHbDlHVWFVYlpmQjhJNUdCVE9vM3h0V3pXMkJyVk9fSWJrNkFfMmRCUDZ6Wmp2eC1RLm9vWWp2SnUwQXRvdVdXNWZUbjVSNUEiLCJ1c2VyX3R5cGUiOiJ1c2VyIiwidG9rZW5faWQiOiJBYVozcjBNbU5sTmpnNE5HRXRaV1F5T0MwME1EWm1MVGt6T1dZdFlqTTBOakZrT0dRNE9XTTRPVFF6WTJWbU5qa3RZVEZsIiwicmVmZXJlbmNlX2lkIjoiNGMwYjQ3ODgtNmFhNy00Mzg3LThmNjYtYmM3ODE1M2JjYzBhIiwiaXNzIjoiaHR0cHM6XC9cL2lkYnJva2VyYnRzLndlYmV4LmNvbVwvaWRiIiwidXNlcl9tb2RpZnlfdGltZXN0YW1wIjoiMjAyMzExMDgwOTMzMTIuNzYxWiIsInJlYWxtIjoiOGFkNDY4ZDItMjNkYi00OWViLWEyMWEtNzBhMWM5MTc0N2IzIiwiY2lzX3V1aWQiOiI3MDA4NGFhYS0yN2M0LTRkYTQtYTY1ZC1kMjljZDFkMTdmNGQiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJ5X3RpbWUiOjE2OTk2NTY0MDg3MTUsImNsaWVudF9pZCI6IkNlMDU5OTZhY2Y4ZjA1ZWE5NzQzNDNhYmEwODBkOGUxZDA1NzQwMWM5NTA2Y2E2OTgyNWEwOGVmNjljZmI4NzVhIn0.hh0GFCKL1V9ZK5hPz-Xn8_3_xQ9013t9S5Tex2cM1Fu3WBckKAgnM3Hb9LWUfS4DfnheMMJdsGRh5azz_InAcT4vim3qLhjn5r3OtGMM49u0M8Dh2Ueg0TulFAWIpPkOFfmZ_d-hf829xjQfP4Srjp0YFeZXoPYLBk_SZgPWQb88T-h0yz3R3MSfnqMVcRPftKN4RU2azY3X3bhKkz1FUxsqkm5wYw9fQJ8inI_gtOBKojs1pwDbz94nnNPjviXTge_g7xNQ4z7fy9rCVIj19FEvzbWT4Q-UIY7bv29y_JYLRMsIeXvcDBqZBiuOXQ0xFO5kswoFvoS0dx-eq5ZrRg");
headers.put("X-ORGANIZATION-ID", "8ad468d2-23db-49eb-a21a-70a1c91747b3");

  ScenarioBuilder scn = scenario("Desktop APIs load test 50k")
    .exec(http("agent-config api load 10 nov 50k")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/70084aaa-27c4-4da4-a65d-d29cd1d17f4d")
    .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(50).during(1000)
  ).protocols(httpProtocol)
);
}
}
