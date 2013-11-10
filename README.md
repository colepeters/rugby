# Rugby

[colepeters.github.io/rugby](http://colepeters.github.io/rugby)

Rugby converts RGB colour swatches from 8-bit integer values (0–255) to percentages (0–1). This means designers, who often work with RGB values like `r255 g0 b180` can easily translate these colour values for instant integration into Objective-C (where the standard syntax for the same swatch would be `colorWithRed:1 green:0 blue:0.706`).

Rugby is particularly useful when authoring design specs or style guides, as it offers unlimited batch conversion with colour swatch naming.

## Current status

10 November 2013 — Rugby 2.0 is complete! Currently implemented:

- Convert any number of colour swatches at once (Rugby 1.0 did conversions one at a time)
- Instant conversion — no page reloading (1.0 ran on Rails and thus required a reload every time)
- Colour naming (since we can now convert in batch, naming clarify which swatches are which)
- All-new design. Yum.

## Up next

- Copying converted swatches to your clipboard
- Export converted swatches as a Markdown file
- More input options (RGBa, HSL, HSLa, hex)

## Development logs

I've been keeping track of progress in updating Rugby to 2.0; take a look [in the Wiki](https://github.com/colepeters/rugby/wiki/_pages) for more info. More entries coming soon, too!

## Colophon

Rugby is built with:

- [Middleman](http://middlemanapp.com)
- [SASS](http://sass-lang.com)
- [Bourbon](http://bourbon.io)
- [cloud.Typography](http://www.typography.com/cloud/welcome/)
- [Bower](http://bower.io)
- And of course, a little HTML and jQuery

## Your input

I'd love to hear more about any features you would find useful, or needs you have that aren't being solved by existing tools. Pass your ideas my way [on Twitter](http://www.twitter.com/cole_peters) or [email](mailto:cole@colepeters.com?subject=Rugby).