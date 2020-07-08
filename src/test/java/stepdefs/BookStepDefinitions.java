package stepdefs;

import static com.github.tomakehurst.wiremock.core.WireMockConfiguration.wireMockConfig;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.hamcrest.Matchers.equalTo;

import java.util.Map;

import com.github.tomakehurst.wiremock.WireMockServer;
import io.restassured.RestAssured;
import org.apache.commons.lang3.StringUtils;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import wiremock.net.minidev.json.JSONObject;

import static com.github.tomakehurst.wiremock.client.WireMock.*;

public class BookStepDefinitions {

	private Response response;
	private ValidatableResponse json;
	private RequestSpecification request;

	private final static String PROTOCOL = "http://";
	private final static String HOST_NAME = "localhost";
	private final static int    PORT = 8888;
	private final static String POST_PATH_NAME = "/rest/api/customer/";
	private final static String GET_PATH_NAME = "/rest/api/get_customer/";

	private final static String ENDPOINT_POST_CUSTOMER = PROTOCOL+HOST_NAME+":"+PORT+POST_PATH_NAME ;
	private final static String ENDPOINT_GET_CUSTOMER = PROTOCOL+HOST_NAME+":"+PORT+GET_PATH_NAME;

	private final static int STATUS_CODE_200 = 200;
	private final static int STATUS_CODE_201 = 201;
	private final static int STATUS_ERROR_CODE_401 = 401;
	private final static int STATUS_ERROR_CODE_404 = 404;

	private JSONObject requestBody = new JSONObject();
	String response_id;
	String customer_id;

	private String ENDPOINT_GET_BOOK_BY_ISBN = "https://www.googleapis.com/books/v1/volumes";


	@Given("a book exists with an isbn of (.*)")
	public void a_book_exists_with_isbn(String isbn){
		request = given().param("q", "isbn:" + isbn);
	}

	@When("a user retrieves the book by isbn")
	public void a_user_retrieves_the_book_by_isbn(){
		response = request.when().get(ENDPOINT_GET_BOOK_BY_ISBN);
		System.out.println("response: " + response.prettyPrint());
	}

	@Then("the status code is (\\d+)")
	public void verify_status_code(int statusCode){
		json = response.then().statusCode(statusCode);
	}

	@And("response includes the following$")
	public void response_equals(Map<String,String> responseFields){
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				json.body(field.getKey(), equalTo(Integer.parseInt(field.getValue())));
			}
			else{
				json.body(field.getKey(), equalTo(field.getValue()));
			}
		}
	}

	@And("response includes the following in any order")
	public void response_contains_in_any_order(Map<String,String> responseFields){
		for (Map.Entry<String, String> field : responseFields.entrySet()) {
			if(StringUtils.isNumeric(field.getValue())){
				json.body(field.getKey(), containsInAnyOrder(Integer.parseInt(field.getValue())));
			}
			else{
				json.body(field.getKey(), containsInAnyOrder(field.getValue()));
			}
		}
	}

	@And("^press submit")
	public void submitCreateCustomerWithValidData() {
		WireMockServer wireMockServer = new WireMockServer(wireMockConfig().port(PORT));
		wireMockServer.start();

		configureFor(HOST_NAME, wireMockServer.port());
		stubFor(post(urlEqualTo(POST_PATH_NAME))
//				.withRequestBody(matchingJsonPath("$.id"))
//				.withRequestBody(matchingJsonPath("$.first_name"))
//				.withRequestBody(matchingJsonPath("$.last_name"))
				.willReturn(aResponse()
						.withStatus(STATUS_CODE_201)
						.withStatusMessage("successfully created")
						.withBody("{\n" +
								"      \""+response_id+"\": int,\n" +
								"      \"status\": \"successfully created\"\n" +
								"     }")));

		RequestSpecification request = RestAssured.given();
		request.body(requestBody.toString());

		response = request.post(ENDPOINT_POST_CUSTOMER);
		response.then().statusCode(401);
		System.out.println("response: " + response.prettyPrint());

		wireMockServer.stop();
	}

}


