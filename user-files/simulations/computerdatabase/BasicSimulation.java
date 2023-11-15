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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLm5JU0JncUw2Y05rczFXNmlGcmtnRGcuN05Pb0VFbllreW1ZNlQxM3hXMGx5LXZhanR4aXhRQ1RFRWl5UEdqZEN1Sy1GaDJPcTBSbXVhN3oyelQ2Ym1YTzZmUWktN0pROXZkcXZhZ19Nck5UYnhMSG04b0VyajNFWW5uNllHMXBETk9NRk1uQVA4THJLMFBITTZ2MDBRR2xZUEZhcUZ6TDRNdW1GQTFvU3BmSm50cUp6dUE2U3RoNVh0UGYwZXpUX1k1NHl1UnItVXAtWUhISWM4aWk0SkdPRk9LSEUzU0VSWFdUMzFlMUlOVXV5amVYVkVmdlduMFFELWpoUElYNlo1UmczWU1JNy0ycmha…lbl90eXBlIjoiQmVhcmVyIiwiZXhwaXJ5X3RpbWUiOjE3MDAxMjEwOTcxMTcsImNsaWVudF9pZCI6IkNlMDU5OTZhY2Y4ZjA1ZWE5NzQzNDNhYmEwODBkOGUxZDA1NzQwMWM5NTA2Y2E2OTgyNWEwOGVmNjljZmI4NzVhIn0.ee_kWw9Bj_xDKgq1GzVJDhrAxGJqW2AjYkGMAlltaZfYW-khH4awec3SJ1sjxrE-CBL4lmcpyKLYH6KIZYIN2h5oVCbUU9y1HhPnJwizgWVP0FR8cdagN6As2BHn8R5YassuvurDh3USCNGFguI9iMShNUAEtZoQyHpFAsYP5FkrHrfjtR8le1OF8kZvUp-TTJ_55dpKmkL3zWFrC5vr23K5NA056wNXc226Fi1Zr56P6L5oeIDM4XOCDSSEjG-mEBrcdVNzlZGVU0vDUVqA4IKn9hKuGV4-iW72BkGmGZNtNNEB0PpV9YewSQMjvXZK-oYMUpoAS9_vpjVemPIIzA");
headers.put("X-ORGANIZATION-ID", "8ad468d2-23db-49eb-a21a-70a1c91747b3");

  ScenarioBuilder scn = scenario("Desktop APIs load test 25k")
    .exec(http("agent-config api load 10 nov 25k")
    .get("https://agentx-backend.loadus1.ciscoccservice.com/ab/api/cms/agent-config/70084aaa-27c4-4da4-a65d-d29cd1d17f4d")
    .headers(headers));

setUp(
  scn.injectOpen(
    constantUsersPerSec(25).during(1000)
  ).protocols(httpProtocol)
);
}
}
