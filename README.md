# RX Heroes
## The Angular 2 Tour of Heroes Tutorial app rewritten with @ngrx/store

See my [post about this](https://bodiddlie.github.io/ng-2-toh-with-ngrx-suite/) for the full
story.

## Update - 09/25/2016
This repo has been updated to work with the final release of Angular 2 final. It's not perfect, and I would suggest that you NOT consider this
as an example of best practices, but it will give you an idea of how these pieces fit together. Here's a quick rundown of what changed:

- Updated to use final 2.0.0 version of Angular 2
- Removed `@ngrx/router` and switched to using new `@angular/router`
- Updated code to use NgModule
  - Not all code has been modularized, and to make this update more simple, I moved all components from `hero-detail` into the `heroes` module.
- Updated `@ngrx/effects` to the lastest beta build.
  - Effects code had to be changed to work with breaking changes in beta.

Again, this was done quickly so that I could demonstrate it working in the final release. There's probably a LOT of wrongness in here.
