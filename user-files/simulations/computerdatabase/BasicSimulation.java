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
headers.put("Authorization", "Bearer eyJhbGciOiJSUzI1NiJ9.eyJjbHVzdGVyIjoiQTUyRCIsInByaXZhdGUiOiJleUpqZEhraU9pSktWMVFpTENKbGJtTWlPaUpCTVRJNFEwSkRMVWhUTWpVMklpd2lZV3huSWpvaVpHbHlJbjAuLkhybk5FSHFIRmRrMGUxSkZmZ1JJTncua0hnV01QbjNlT3JPOHdSTzk3cnk3bVVhVWdYWDNsSUY4MzRINk5adzk3WmVwRUlyVTVHTGpfOG1oaVNCbGRPak1WOGhQTllmOXhRUmtoYmpsWW5fMFV5Z0JtVUFwRVZic0dMeDNTVjlXWldxeXRFNnZxRE41S05XbmtmV1JMbDlHMkQycnJ3S2FBUjhmV2M5NFFWRWRhMVlzZ1BvN0kyRkZjWVBHT2RqejJaYXV3VFlBTVBob3BmSGhBay1FLUFhOFRZWG41SlVTLWN2bkVKQ2dBUWxEeVhCcWxKVmN0TDBnaVVUd3Y5X0ZiSU9UcHRoRHh3ZklOemUyT21GMVhBSmdnbDg4SU9DYXIzLXlTS1VrLWRBU2h2WEVpZkRuOGRsNEdUbVAzSTMxRzRXRFBoS2doWkhhNnNFY2kxYU40bk5rSkVkNi15MlpYdFpkV0tQNG1ISUc1QTYwaDBkek1MZ1hhQWtoWVV3UW05UEo5UTNMY1hwSnA0UHJUZ292V0wzYi1ybEhFN1J0RDBRM3BDV0JuczhHdV9zMTVfU0I0VGlZRWpIRnI1NmVlQWNrZU1nLUt6ckhPRFlMNFVOcFJKdU5ZSnlOMVFJc2VrcU9GNVdyWkxhN3YyTHlvbVJCOHBDN2Vfb2dtSW12eDJyOThuZGxScG9xU2Znclk3Q1RiSk1QX2VPWmo3bjg0cEczNlR3NWR6UnkxMFhIVzBSWmtRSGQyTGtxWTZHbEpfUzFYREdpRzFldjlMb0hfT2xEQldhX2Z2NjRTOThWWFllRWsxanZLdE1XZXctRlJNeTM1c09EOXhRdm5uQXhDQTVaakxhMzBiV0ozbnNYNVhwZU95ZmpfNmctWFFlZU04bXEtNGd1cjJTUkFBRTlSWTI5UmhRVU9uZkVxekxfd1htZUdJdGRpblVpdkhXdW1YbXpzbWxObEhTWWFPQUdFTENHNG9aNUswc29xTW84QVJWVjgyVk1YZTkwS0ZXWFkxZExfS3NORXVHeVlqS3pCSVRlZ1hSWFcweHFRNURILTlLRWlRdWI2Z05EVjRxRFl2MkhoNnRwNzhpWE4tTFRlR0c2MzZSNURCckpZUHZHNUVCbG0wTEM2VkZ1aVN3bnY4WGFFQ0FNeDBucFFWX3otV1o0dEpNOFIxc2JOa25SbU0ueUMwU1AyOUdqOXRtc1ktLUxKcjdLUSIsInVzZXJfdHlwZSI6InVzZXIiLCJ0b2tlbl9pZCI6IkFhWjNyMFlUZzVZekl4WVRjdE1qTTRNQzAwWVRBeUxUaGxNVFV0WVdSak0ySTFOV1EzTldabFpUQmlPR1k0TkRjdE1qZGwiLCJyZWZlcmVuY2VfaWQiOiIwODQ1OWRkNi0xZGQ1LTQyYWUtODM0OS1mYjQwMWE1Mjg5MDQiLCJpc3MiOiJodHRwczpcL1wvaWRicm9rZXJidHMud2ViZXguY29tXC9pZGIiLCJ1c2VyX21vZGlmeV90aW1lc3RhbXAiOiIyMDIyMDYyMjE3NDM0NC40MDVaIiwicmVhbG0iOiI4OWI0NzRhMy0xN2Q5LTQxZmYtOGZiMC01MzRiZWJkZmIxNjAiLCJjaXNfdXVpZCI6IjIxOWRlOWNkLTFkNjgtNDZlMi04ZWE1LWYxZDI5ZjhjYmVlYiIsInRva2VuX3R5cGUiOiJCZWFyZXIiLCJleHBpcnlfdGltZSI6MTY2MzE5NTU0NDgzMCwiY2xpZW50X2lkIjoiQ2UwNTk5NmFjZjhmMDVlYTk3NDM0M2FiYTA4MGQ4ZTFkMDU3NDAxYzk1MDZjYTY5ODI1YTA4ZWY2OWNmYjg3NWEifQ.bLbHU8_DurhvDT7682r5rUjutT3w1UDdQZrhMFkgOWPT9RU1mbjfKbqbbyyKqLe1pwRI39SUEB4oFASVit_q_zEk2Gc2WLGQcV7VADqOpo9qDYoubPEsH1Cz_rlVGx8BBp2Gec2S9oStsaUcmsvk_tAXakl9wnqN6exHn_tHAQpZQ1Qg0uWLsJjsMCF5gIMK1_SGrhGcDPi8ktIbphkNRd_f9nGSniaz-5mk7z05pwuCoWP3be8nlX2UmhmZT4Z44L6p74MRa2wtwDKyme-WHjAp9a45ojvpLRf8ipdi2r-oi3_Iy2_k1szk-utGKunZDOQ_Dm7dg8E3kHxJuT1yjw");
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
