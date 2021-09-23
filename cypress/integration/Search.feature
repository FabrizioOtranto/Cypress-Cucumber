Feature: Search Feature

    As an User, I can search for any product and verify its price, title and description

    Scenario Outline: Search Scenario
    Given The user is in the home page
    When The user searchs for a "<product>"
    Then The user can verify its "<title>", "<descripcion>" and "<price>"

    Examples:
        | product | title | descripcion | price |
        | HP Spectre XT Pro UltraBook  | HP Spectre XT Pro UltraBook | HP Spectre XT Pro UltraBook / Intel Core i5-2467M / 13.3 / 4GB / 128GB / Windows 7 Professional / Laptop  |$1,350.00|
        | Levi's 511 Jeans | Levi's 511 Jeans | Levi's Faded Black 511 Jeans |$43.50|
        | Night Visions | Night Visions | Night Visions is the debut studio album by American rock band Imagine Dragons.| $2.80 | 