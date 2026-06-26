### What is CSS

Cascading Style Sheets (CSS) is used to format the layout of a webpage.

With CSS, you can control the color, font, the size of text, the spacing between elements,
how elements are positioned and laid out, what background images or background colors are to be used,
different displays for different devices and screen sizes, and much more!

# inline css are seperated by ;

stylee="width:250px;height:400px;"

What it is:

- Core CSS concepts: box model, cascade, specificity, inheritance, display, position, units.

Why it matters:

- Foundation for layout, responsive design and predictable styling.

Key properties / syntax:

- box-sizing, display, position, margin, padding, border, width/height, z-index, units (px, %, rem)

Interview questions:

1. Q: What does box-sizing: border-box do?
   A: Includes padding and border in the element's width/height.
2. Q: How does specificity work?
   A: Inline > ID > class/attribute/pseudo-class > element.
3. Q: What is the cascade?
   A: Order of rules determines final computed style with specificity and importance.
4. Q: When to use rem vs em?
   A: rem is root-relative; em is relative to the current font-size.
5. Q: How to center a block horizontally?
   A: Use margin:0 auto with an explicit width or use flexbox.

Common gotchas:

- Forgetting box-sizing causes sizing surprises; mixing units without thought.

Pro tips:

- Set global box-sizing: border-box; prefer rems for scalable typography.
