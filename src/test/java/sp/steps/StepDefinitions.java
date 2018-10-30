package sp.steps;

import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import sp.AppHelper;


public class StepDefinitions {

    @Given("^IPVanish is accessible$")
    public void ipvanish_is_accessible() throws Throwable {
        Assert.assertTrue("application is not accessible - ", AppHelper.isAccessible());
    }

    @When("^I submit the username and the password$")
    public void i_submit_the_username_and_the_password() throws Throwable {
        AppHelper.login();
    }

    @Then("^I should be logged in$")
    public void i_should_be_logged_in() throws Throwable {
        Assert.assertTrue("unsuccessful loging attempt - ", AppHelper.isLogged());
    }

    @Given("^user selects \"([^\"]*)\"$")
    public void user_selects(String protocol) throws Throwable {
        takeANap();
        AppHelper.launchPreferences();
        switch (protocol.toLowerCase()){
            case "ikev2":
                AppHelper.selectIkev2();
                break;
            case "ipsec":
                AppHelper.selectIpsec();
                break;
        }
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

    public void takeANap(){
        try{
            Thread.sleep(3000);
        }catch (InterruptedException interruptedException){

        }
    }

    @After
    public void tearDown(){
        AppHelper.tearDown();
    }

}
