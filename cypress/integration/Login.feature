Feature: Login Feature

    I want to log successfuly

Scenario Outline: login Scenario
    Given The user is on the login page
    When The user enters the "<email>" and "<password>"
    And the user clicks on the login button
    Then A successfull message is displayed

Examples:
| email | password |
| testing@gmail.com | testing | 
| tester@gmail.com | testing |
