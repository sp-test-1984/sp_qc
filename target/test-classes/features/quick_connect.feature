Feature: Exercise Quick Connect through main functional path

    Description: As a test automation engineer, I want to validate that the quick connect functionality works with all
        the supported protocols, namely ikev2, ipsec, tcp, udp and l2tp when exercised through the quick connect section
        of IPVanish.

        Background: User is Logged in.
            Given IPVanish is accessible
            When I submit the username and the password
            Then I should be logged in


        Scenario Outline:
            Given user selects "<protocol>"
            When connection is attempted
            Then connection should be  established through a secure tunnel

         Examples:
         |protocol|
         |ikev2   |
         |ipsec   |
         |l2tp    |
         |tcp     |
         |udp     |