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
    },
    {
      "cells": [
        "l2tp"
      ],
      "line": 22,
      "id": "exercise-quick-connect-through-main-functional-path;;;4"
    },
    {
      "cells": [
        "tcp"
      ],
      "line": 23,
      "id": "exercise-quick-connect-through-main-functional-path;;;5"
    },
    {
      "cells": [
        "udp"
      ],
      "line": 24,
      "id": "exercise-quick-connect-through-main-functional-path;;;6"
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
  "duration": 2675619674,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 4527687538,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1184634930,
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
  "duration": 3080136,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.user_selects(StepDefinitions.java:32)\n\tat ✽.Given user selects \"ikev2\"(quick_connect.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3658945143,
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
  "duration": 5406330,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 5314127541,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1210733010,
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
  "duration": 221083,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.user_selects(StepDefinitions.java:32)\n\tat ✽.Given user selects \"ipsec\"(quick_connect.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3603909579,
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
  "duration": 6677693,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 5731889719,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1148463681,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user selects \"l2tp\"",
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
      "val": "l2tp",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects(String)"
});
formatter.result({
  "duration": 240628,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.user_selects(StepDefinitions.java:32)\n\tat ✽.Given user selects \"l2tp\"(quick_connect.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3641152852,
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
  "duration": 8942784,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 5258919023,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1195682517,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user selects \"tcp\"",
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
      "val": "tcp",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects(String)"
});
formatter.result({
  "duration": 231633,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.user_selects(StepDefinitions.java:32)\n\tat ✽.Given user selects \"tcp\"(quick_connect.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3623774496,
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
  "duration": 7832454,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_submit_the_username_and_the_password()"
});
formatter.result({
  "duration": 5278332935,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_should_be_logged_in()"
});
formatter.result({
  "duration": 1201297971,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "",
  "description": "",
  "id": "exercise-quick-connect-through-main-functional-path;;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user selects \"udp\"",
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
      "val": "udp",
      "offset": 14
    }
  ],
  "location": "StepDefinitions.user_selects(String)"
});
formatter.result({
  "duration": 229173,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat sp.steps.StepDefinitions.user_selects(StepDefinitions.java:32)\n\tat ✽.Given user selects \"udp\"(quick_connect.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "location": "StepDefinitions.connection_is_attempted()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitions.connection_should_be_established_through_a_secure_tunnel()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3618991739,
  "status": "passed"
});
});