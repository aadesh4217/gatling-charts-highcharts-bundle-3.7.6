package computerdatabase;
import java.time.Duration;
import java.util.*;
import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import io.gatling.javaapi.jdbc.*;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;
import static io.gatling.javaapi.jdbc.JdbcDsl.*;

public class BasicSimulation2 extends Simulation{
{
HttpProtocolBuilder httpProtocol = http
.baseUrl("https://agentx.intgus1.ciscoccservice.com")
.inferHtmlResources(AllowList(), DenyList(".*\\.js", ".*\\.css", ".*\\.gif", ".*\\.jpeg", ".*\\.jpg", ".*\\.ico", ".*\\.woff", ".*\\.woff2", ".*\\.(t|o)tf", ".*\\.png", ".*detectportal\\.firefox\\.com.*"))
;

Map<CharSequence, String> headers_0 = new HashMap<>();
headers_0.put("cache-control", "no-cache, no-store, must-revalidate");

// ScenarioBuilder scn = scenario("Agent Backend API load test")
//   .exec(http("request_1")
//   .get("/ab/api/cms/agent-config/219de9cd-1d68-46e2-8ea5-f1d29f8cbeeb")
//   .headers(headers_0));

  ScenarioBuilder scn = scenario("Agentx health API load test")
  .repeat(5).on(
    exec(http("health API")
    .head("/health")
    .headers(headers_0))
    
);


setUp(
  scn.injectOpen(atOnceUsers(5000))
  //.throttle(reachRps(100).in(10))
  .protocols(httpProtocol)
);

// setUp(
//   scn.injectOpen(
//     rampUsers(10).during(120)
//   ).protocols(httpProtocol)
// );
}
}
