# Feature: Is it Friday yet?
#     Everybody wants to know when it's Friday

#     Scenario: Sunday isn't Friday
#         Given today is Sunday
#         When I ask whether it's Friday yet
#         Then I should be told 'Nope'

#     Scenario: Friday is Friday
#         Given today is Friday
#         When I ask whether it's Friday yet
#         Then I should be told "TGIF"


Feature: Is it Friday yet?
    Everybody wants to know when it's Friday

    Scenario: Sunday isn't Friday
        Given today is '<day>'
        When I ask whether it's Friday yet
        Then I should be told '<answer>'

    Examples:
        | day             | answer |
        | Friday          | TGIF  |
        | Saturday        | Nope  |
        | Sunday          | Nope  |
        | anything else!  | Nope  |


Scenario: Some cukes
  Given I have 48 cukes in my belly

Scenario: Given array different animals
  Given the following animals:
  | cow   |
  | horse |
  | sheep |