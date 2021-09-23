Feature: Login Feature

    I want to log successfuly

Scenario Outline: login Scenario
    Given The user is on the login page
    When The user enters the "<email>" and "<password>"
    And The user clicks on the login button
    Then The user is redirected to home page

Examples:
| email            | password |
| tester@gmail.com | testing |
