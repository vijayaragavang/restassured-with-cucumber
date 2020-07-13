package options;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
		monochrome = true,
	/* Uncomment this for reporting using Custom Event Listener
		plugin = {"eventListeners.ReportTestListener"},
	*/
		// Reporting using Cucumber 4 adapter
		plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:", "json:target/cucumber-report.json"},
		glue = {"stepdefs", "eventListeners"},
		features = {"src/test/features"})
public class CucumberTests {
}
