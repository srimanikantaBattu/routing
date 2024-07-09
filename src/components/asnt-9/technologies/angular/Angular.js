import React from "react";

function Angular() {
  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-4 text-dark">Angular</h1>
      <img
        className="d-block mx-auto rounded-2"
        src="https://wallpapercave.com/wp/wp5722051.jpg"
        style={{ width: "500px" }}
        alt=""
      />
      <p className="text-center text-dark mt-4">
        The rewrite of AngularJS was called "Angular 2", but this led to
        confusion among developers. To clarify, the Team announced that separate
        names should be used for each framework with "AngularJS" referring to
        the 1.X versions and "Angular" without the "JS" referring to versions 2
        and up.Since v9, the Angular team has moved all new applications to use
        the Ivy compiler and runtime. They will be working on Ivy to improve
        output bundle sizes and development speeds. Each version is expected to
        be backward-compatible with the prior release. The Angular development
        team has pledged to do twice-a-year upgrades. Support policy and
        schedule All the major releases are supported for 18 months. This
        consists of 6 months of active support, during which regularly-scheduled
        updates and patches are released. It is then followed by 12 months of
        long-term support (LTS), during which only critical fixes and security
        patches are released.Angular 6 was released on 4 May 2018.This is a
        major release focused less on the underlying framework and more on the
        toolchain and on making it easier to move quickly with Angular in the
        future, like: ng update, ng add, Angular Elements, Angular Material +
        CDK Components, Angular Material Starter Components, CLI Workspaces,
        Library Support, Tree Shakable Providers, Animations Performance
        Improvements, and RxJS v6.
      </p>
    </div>
  );
}

export default Angular;
