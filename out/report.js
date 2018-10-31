$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("quick_connect.feature");
formatter.feature({
  "line": 1,
  "name": "Exercise Quick Connect through main functional path",
  "description": "\n  Description: As a test automation engineer, I want to validate that the quick connect functionality works with all\n      the supported protocols, namely ikev2, ipsec, tcp, udp and l2tp when exercised through the quick connect section\n      of IPVanish.",
  "id": "exercise-quick-connect-through-main-functional-path",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user selects \"\u003cprotocol\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "connection is attempted",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "connection should be  established through a secure tunnel",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;;",
  "rows": [
    {
      "cells": [
        "protocol"
      ],
      "line": 19,
      "id": "exercise-quick-connect-through-main-functional-path;;;1"
    },
    {
      "cells": [
        "ikev2"
      ],
      "line": 20,
      "id": "exercise-quick-connect-through-main-functional-path;;;2"
    },
    {
      "cells": [
        "ipsec"
      ],
      "line": 21,
      "id": "exercise-quick-connect-through-main-functional-path;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 7,
  "name": "User is Logged in.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I submit the username and the password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 2367134127,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 4283898337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1655533947,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user selects \"ikev2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "connection is attempted",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "connection should be  established through a secure tunnel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ikev2",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects(String)"
});
formatter.result({
  "duration": 10812884030,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "duration": 2344052,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.connection_is_attempted(StepDefinitions.java:46)\n\tat ✽.When connection is attempted(quick_connect.feature:15)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3318686620,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User is Logged in.",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "IPVanish is accessible",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I submit the username and the password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.ipvanish_is_accessible()"
});
formatter.result({
  "duration": 6420349,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 5071842937,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1154349322,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user selects \"ipsec\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "connection is attempted",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "connection should be  established through a secure tunnel",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ipsec",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects(String)"
});
formatter.result({
  "duration": 10810616156,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "duration": 298844,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.connection_is_attempted(StepDefinitions.java:46)\n\tat ✽.When connection is attempted(quick_connect.feature:15)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3705622724,
  "status": "passed"
});
});