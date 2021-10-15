
{{site.requires_jsspelling_war_2_118_0v}}

Adding the `num-incorrect-words-in-suggestions-request-limit` element and setting it to a number instructs the spelling service to reject any requests for `/2/` suggestions where the number of **incorrect** words exceeds the specified limit. The default is to have no limit.

Example:

```conf
ephox {
  spelling {
    num-incorrect-words-in-suggestions-limit = 100
  }
}
```