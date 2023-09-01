# Cypress-Example 
This repository was created for a Test Automation exercise. 

The webpage used for testing was [Coin Market Cap](https://coinmarketcap.com/es/)

The idea is to switch the page language from Spanish to English using Cypress.

Here are some test cases (the 1st one was chosen to be automated):

Feature: Language Switching

### Test Case #1: Verify Switching Webpage Language from Spanish to English
```
  Scenario: User switches webpage language from Spanish to English

    Given the user is on the webpage in Spanish
    When the user selects "English" from the language switcher
    Then the webpage content should be displayed in English
```

### Test Case #2: Test Language Dropdown Functionality


```
  Scenario: Test the functionality of the language switcher

    Given the user is on the webpage in Spanish
    When the user clicks on the language switcher
    Then a dropdown menu with language options should appear
    And the user selects "English" from the dropdown
    And the webpage content should be displayed in English
```
### Test Case #3: Verify Language Persistence Across Pages

```
  Scenario: Verify language persistence when navigating to other pages

    Given the user is on the webpage in Spanish
    When the user selects "English" from the language switcher
    Then the webpage content should be displayed in English
    And the URL should reflect "/en/" indicating the English language
    When the user navigates to another page on the website
    Then the selected language (English) should persist
    And the content on the new page should also be displayed in English
```







