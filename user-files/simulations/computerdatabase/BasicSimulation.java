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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLjR5VFNpSmJPU0N5MUdPN3gyTmNaWEEuaFhwVVZXcURMUHdzdFNkRmd6emhpNHJFbjd6Q0hxMHlfX2tTdlh5WkFkdXhzQkNQUUJ0cC1zaElwUUtQb09iMDZVMEY1cDVGOVJkNFdDTDNHcWJzaVl5OFpRc0hTTWwzRXRvbUZPTVNNU21mSGdEYk1QNGNqRThSc1dIc0tyUDdmUDlxVkh2WTc3S0RoVzdmTnUydzFQSHNsSlJ3LWUtSzNoSTgwc1RXLVY3Tkxmdm5uOEJnTEUwemRPSldqWVZjZGJoVDZiNFJNVGtXRERsQXRTSTllZ1N4b0pHRHNFLVFqd1VTRk5xZEs1THg4QWdhdUgyOW9zZnd3NHFHekZyVEJVX0hndjJyWGZKcGRCOHdYeGV4OUpxUlJac2treXQ2VmhxZWpkc0N3b1I2TUg5SkJndFUtWE5MRnMxNmxmVHY5dklpSUtabzhoSmFnZEtNa2ctX2V2b25mRVpaN0dkUTUtRHBUbGJGV3lINEcwSFRTUUtmTE1ETDBpWjRzZDNFVDZJY0hkMVlNVnhzZ0hGaEw3eXVyeWd0VkJ5ZVM5LTN3dXFSMjhQMXd2NXdHZzZHZDVIdDV6SFU5Ukw1Z1dNajc2WU80SHFqaC1pM2c5MnQwS2xjOVo3dEtWNnVoS3dLWExGaG5VWmc4MkdfZTdHODk2Qmk0M0p6Wlg0NXdkdTdXWWlqT2Rycmhrd3VNRUNXZktRbXBCSVA0YnY0VnVoeHNpT2luYmt3Q3pxblZqd0pkekxselJKS2o2cnVUZHVoSVV5VFNCcmhiT2RsdkpSUFVNbzdBcnR6VldpNjAyLTFkdno3RDZ6bEZ3MzJJdlFnaU5vT1NlU0p4SWJTbU85ZTExdGxjblVsZTFLZTIxeEtHQjdGR1VEalVoV3Fjc1NOaERWdjh5R1B6RGljZTVERjNnTGg2UE9HY2dTbWp0b090em9YaTMyVXJjbTBtUHhTTFp0bTFQYjBhZVVGSjVtV0U4Ri1xNzlhSmUyTzBBY0NvOXQzU21wRnlkbUgzSmkyODBkWEdBVXRfM3Q1cHhNMlRIZHNvSW1kQVVLSjN5c3J0aFNROEdkM05UaHlvZDNRempHeWUwVjF3aDJtWmZhWDd0RGJGcDFzUmlVa1FQUHI5SlF3NVNvUlB2ek5sREdIU0J1Z1VoVUhnZklMdEl6UXNhaGxQdzZpSkstQ3F4X3AuZlZzekFPUHdFd1FWNFBhZ2RVZnowUSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyME9XVXhObVJqT0dJdFpqazJNQzAwTldFMExUbGxOMlV0TkRFd1pqQm1NVEV4TkdReE1XSTNaamt4WVdVdFpUSTAiLCJyZWZlcmVuY2VfaWQiOiI3NDhlOTUwMC1iZTg1LTRiNzEtYjhkOC0zOGRlMGRhMWNkYjgiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2NzExMzUzMzU0MiwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.OiNDlOewlg1tEET2GXYnbu6yTJrLAUhEsi37y4lEd5XBKOP8K8fAoZZO3KkHyf7KOPcalh73rkyeuwIVk-t24VETd82VHg34orldhdYx2k6GbfszqZe8CWVPCKZfKZunRaYqqzaixfFo8YhsqHiD7j9R2btGUCZbgnKNiUBQvtz5tO0XuA-e-I3CJu4C31sgm_U1JKmUkI26K6R4shfTeTr3680zeippV0crBZ4CyRmZyhJwrp-ZtjVz7n-kknF96Y-l7i2zAUis9nE2uspYNN6mj06rz5axyArIATewAjG2xal87AZsfhwFehI5jVAwK0fFT_ovreajwkfG-EPUAA");
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

