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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLjBjZ2dKb2VzeHloRkhsbXVDeVJnLWcub2NTMnRfUzhXWm5HelItWGdvYmMxa2x0cGdSVnlKd3puVm9QTm1XVVVzY2szOHNwWER3VGZ5bmxqTTZaNHZGdG9Wa0Z4NEZFUGt2a0VFSmNMcEluX2xVaUoxdERKMEFCdnhUNC1aOHR5N29QS3FISzFxZjc1SFI0ajRjMFh5MTlIZElMYS1GWmZoZlpmb2FxQVM1bFdLckxPOXFja0hMaFc3NHctOV84WTQxTTZUajlXQXN5STktcGM4LTdIb1V0SlYyalhBX3dWdzdqOFE4YW80OVRLUWVjdzRKVlFIYTFaYklaSVBNR3praGh5MDZQRTlTWGtPczhQZEhlaHYwRFZhUXZvUE5Cc1JtcVpHeHFsSzNDNTlzN2FacDliM0RTUk1GRzBzTS1Kbm1RbHE1LWhnM241U3Z6RzZzV2RaZ29sRUNXbllNTDBESHJIcDI2TmRTN0hQVUNpVE1mT1FrNlRObHZLYWk0Q3NaYnVzbWx0OVBmWDdzQVdDdGljdkVWZWhvT0hWcVh6YnJNSW9ZSElxNFZCcjhKeHdYbEpyNzh0QXlBWnM4b1dLQXlfaVFOTFJPQVNsMU5ueE56dllqR0ZTd0JtQXhvWmtfbERNQ3kyeGxVbkpZMzFtN0d2RC1HNXhSbE9BX09BZDh5SzIzQUxZaGhCMm1penRBUmtqSXMxb2dtSjN0YVJKdmpqTWdjX3ZyaWwyQXJVdWxBRkNwbE5HYUVRNjBzclNVbHZ6ZlZrZW56UWswWUQtWjVNR3BkQTF5MU5BcG9JajByT0tvaEY2OWVxVU94ZUc5dEdqbzFYdDAzOUo5V2pCemRKNW53UzNlQUtRcnFaOGt6b0d3aHNaLWIzdmF4dk83RmFZOHZQcUNwZVNwWlRZbWxIcGpLeFZkaWk1dGQtaTk4WXJwVElFUDlna2tWUDlYckFFZkNhT2tqb090RW1EVUtYSmlDc0lQYW1rV29EYWdEMFV6T05mRXVvTkgyWlNMOWRlcERWWDJaTV9SdmMyamx2OXgzM1dwbG10NUVtOFVIZ1NLR19UbWR1TUw2TFpxZ0J3UmRVTXlieHE2STZJdzNOemFpMGJITVl4dDJUSU9QUUhPVWNfYzVudkNWc2hSMWxCUXdWSEdUMWpiOExGOUs3LW9EQzNITWotaUpCYTh4WVFvMEgwRGxFYVg2WVNIVURna3E2WldvTW02dkw4RVFmdE5pUldieFJnLnNNV1g2eV81YWZqMVZQSHRvVW9oS3ciLCJ1c2VyX3R5cGUiOiJ1c2VyIiwidG9rZW5faWQiOiJBYVozcjBOekF6WkdKaVlqVXRPV0ZtWlMwMFltTmpMV0k0WXpBdFlXUTVZV0pqWVdWak5tSXlNV1JtTTJZNU0yRXROMlkzIiwicmVmZXJlbmNlX2lkIjoiZTY0ZjMwYTUtMjIyMC00YjZkLTkzNWMtYzJkN2E3OGM4OTlkIiwiaXNzIjoiaHR0cHM6XC9cL2lkYnJva2VyYnRzLndlYmV4LmNvbVwvaWRiIiwidXNlcl9tb2RpZnlfdGltZXN0YW1wIjoiMjAyMzA1MzExODE5NTEuNTg2WiIsInJlYWxtIjoiOGFkNDY4ZDItMjNkYi00OWViLWEyMWEtNzBhMWM5MTc0N2IzIiwiY2lzX3V1aWQiOiJlZDE2ZDYzZi0wZjZjLTRmYjYtODAzNC1hMjk3ZDIzMzc2MTkiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJ5X3RpbWUiOjE2ODg2ODU1NjUyODMsImNsaWVudF9pZCI6IkNlMDU5OTZhY2Y4ZjA1ZWE5NzQzNDNhYmEwODBkOGUxZDA1NzQwMWM5NTA2Y2E2OTgyNWEwOGVmNjljZmI4NzVhIn0.EjFemlmOPHTJbXda1KqdswVhuMk7dCych6AJ7kja_qY-H6FZJby0LvKkMfc3BKC5n7o_RogRYmq3xNXqQ8ZnDUFVnmS6a8fo4_0GjGg94dWUj9IxYnu0V_i_lxT9xyNEaQk0bcvzaedqXQ5oxsD07olCSrTJKUGTlV2vcmkYBMXel2DeJVQ2vCfMeA6uQI7Ufh8roHwHX50TAl9lO5Zesco3YWaCNuSV2GqBSbKs-OO7pziz4LgOy8JcqwrSQFw7Pw32O7i29CA0pcOzytqT1_5P8L8Auq4jC4hxnzUmBxrFu6MLIFsW8d0vlw_9BEu6ygl5gS4tsqnz47ipT1mSwg");
headers.put("X-ORGANIZATION-ID", "8ad468d2-23db-49eb-a21a-70a1c91747b3");

  ScenarioBuilder scn = scenario("Desktop APIs load test")
    .exec(http("agent-config api")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/ed16d63f-0f6c-4fb6-8034-a297d2337619")
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
