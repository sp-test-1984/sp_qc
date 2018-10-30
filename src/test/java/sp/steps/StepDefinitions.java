package sp.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import sp.util.TestConf;

public class StepDefinitions {

    @Given("^IPVanish is accessible$")
    public void ipvanish_is_accessible() throws Throwable {
        System.out.println(TestConf.getTestConf().getIpvUser());
        System.out.println(TestConf.getTestConf().getIpvPassword());
    }

    @When("^I submit the username and the password$")
    public void i_submit_the_username_and_the_password() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^I should be logged in$")
    public void i_should_be_logged_in() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Given("^user selects \"([^\"]*)\"$")
    public void user_selects(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^connection is attempted$")
    public void connection_is_attempted() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^connection should be  established through a secure tunnel$")
    public void connection_should_be_established_through_a_secure_tunnel() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
