package options;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		strict = true,
		monochrome = true,
		plugin = {"pretty", "html:target/cucumber-html-report" },
		glue = {"stepdefs"},
		features = {"src/test/features"})
public class CucumberTests {}
