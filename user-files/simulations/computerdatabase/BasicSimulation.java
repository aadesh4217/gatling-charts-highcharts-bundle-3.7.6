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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLm9PUTd6M3huU25FTC1OZzJhZzdKd3cuU0dvUWI5Y2gzYTE1ZHFwelM5cmFTcEJqak5ldFJLaGtpWGtCNVcxV09iZXEyTS1waXludjVPN1Yxb1U2aHRGOVVQRERlMXV2S1M5SnhvcDR3aHh5cFZKajhpaVhWdWdUNEwzM1lpYk9TeGxTamtYSEdFQWU5d1V5N2NWUTd0dHFJQldvVDVKMEZKWDV1VldRYTl5dWtzWUQ2aTZONEdUVFM3bWxQdmhNMWFTSVZMRHpJZ3N1cWhET0g0QUFBODF1b1hVS1F2M202REdlUk16aU9WbDQ5U1VEUVR4SjhKaFFJdlhBajdmV2VXMGdkankydGtVOE9aVThqZk02MGR1VzBaVFdUWkxBbWtDR19Deng2cHlYNGJPc0JJY3ZQTVVpd3RDVFdhZlRaVW5ncVd1a0pzQXpELV94bXJFNkw2OHRLYnJ3RURmRHVVSlVWdzNWaFRHbWd5MlZ3a1BKTGhyaC1vR3JYV3dNM0lveEcxSURlaG55T19Ca1BUbk9VRHg4V1RWU09uVUxnRzBuLWZVbDU1Z0hUcnpYVzU3dm5HOG56cllsLVhiSERFTXBHTjJ1NGh1cWVaNnRlSXg5Ql9CbXE1RFAtcU1Dbk1tbkQyRExzM3lHOS14TWVLclZVMGRudXIwbDloZmY4U010WXhGN19BdlpfSXd6NmdlRndFNnpZbHZ0Y003LXV4SW5ueFUxYWdBdVMtU2p6V2hjR2x6WVdVMkF0X0x2VWJjQ09pcGtuQURwdDhBNnNPRDkzRElZYVQyd2FIc0U3TlY0djRybHNuaE1WdHBZSW1jUkRQWWZ6alRLdlJUdWxJaTZKeFlHMUw2T1lWbFI0TmRkbjJiaTBtelNDenQ3dUdrM0xtb0JkbzZGcDVlRTJQN0QxM2hSNTJhZ1cxQWR4eXBlTU1idHhxX3pQWFVvcHNSVnoxaDRtNTJZNE5JNUQxRjQxQ3Z6ZkNhbVByNjBFRWQyemRxaS15UnZtQVpEbG93M1UxQkRBd1A1N1NhaHZZSUpPNVEzZUJKZXNvcXdGcTNpaXRsS0htdkpiNktoS3EyNkxVbXFDYWIzN2laT3I5cEZ4QXlRUGl4Um10MVRYLXVKUW9fU0I5SmNTcWF1VEdFZFptempESTdDdnhxVC1jVWZnOGNkaWVXVHFDYTVteFUueGNJbXg3ZWpqcko0T0VwOC14MTB3dyIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME9EZG1ZelV6TjJRdE9ESTBOUzAwWXpGaUxUaGpPR1l0TlRNNE16WTFOelJsTURneVltSmtZMkUzT1RndE9UQmkiLCJyZWZlcmVuY2VfaWQiOiJiYjg3MDQwYy02YTdkLTQ1MGItYjQwYi0wNWU5MzFlZDk1NjQiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIzMDUzMTE4MjkxNS45MjlaIiwicmVhbG0iOiI4YWQ0NjhkMi0yM2RiLTQ5ZWItYTIxYS03MGExYzkxNzQ3YjMiLCJjaXNfdXVpZCI6IjFiOWUwNmVlLTQ4MTItNDM5MC04YWZkLWMzNzU1YmFhZWRlNyIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY4ODc4MDk4ODU3MiwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.aNAOL1QzBm7-I0QtW0bU_lYshtCPimTQAtgYGWs3raUaQBRw0an_5Eyt8ri6UgFTAO5BIe6oKGaT_uLDTqsINGvlQhbzeAqLZqWu7KJyEgpSTTd0LeojF02oz6eN3ryxnCG-Wb37hMV0rDNxiK62Kc219OztB3KSB2rBGPNWOCE0Y_WRgColiRriXOhN6cRnzdKBGusJuAQAC6C5HNyKjg2HbXYughOSWFwfYQUwcDVWK8SJQdmJHfphC-c_BzUtaZh_L0yUuOsu1XC9npO-dQldUsbxreGjBn_yaAlasUk8hyk2kIYrGJHaU7wb754XDS-zFkxZT-51rMr94O_OrQ");
headers.put("X-ORGANIZATION-ID", "8ad468d2-23db-49eb-a21a-70a1c91747b3");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("ep-dn-mapping api")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/ep-dn-mapping?isMaerskEnabled=true")
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
