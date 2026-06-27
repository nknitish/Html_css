## What is pseudo-class :

A pseudo-class is a selector that selects elements that are in a specific state, for example, they are the first element of their type, or they are being hovered over by the mouse pointer. They tend to act as if you had applied a class to some part of your document, often helping you cut down on excess classes in your markup, and giving you more flexible, maintainable code.

Why it matters:

- Enables styling based on state without JS and for structural patterns.

Key properties / syntax:

- :hover, :focus, :active, :checked, :first-child, :nth-child(), :not(), :is()

Interview questions:

1. Q: What is :focus used for?
   A: Style elements when they receive keyboard focus.
2. Q: How to select odd list items?
   A: li:nth-child(2n+1) or li:nth-child(odd).
3. Q: What is :not() useful for?
   A: Exclude elements from a selector.
4. Q: Can :hover be used on touch devices?
   A: It may not behave the same; test for touch interactions.
5. Q: What is :is()?
   A: A specificity-friendly way to match any of a group of selectors.

Common gotchas:

- Relying on :hover for critical functionality prevents keyboard users from accessing it.

Pro tips:

- Use :focus-visible where supported for better focus outlines.
