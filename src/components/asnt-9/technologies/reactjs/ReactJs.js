import React from "react";

function ReactJs() {
  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-4 text-dark">ReactJS</h1>
      <img
        className="d-block mx-auto rounded-2"
        src="https://www.krishnakantyadav.com/blog/wp-content/uploads/2022/03/ReactJS-Everything-You-Should-Know-About-It.png"
        style={{ width: "500px" }}
        alt=""
      />
      <p className="text-center text-dark mt-4">
        React.js is an open-source JavaScript library, crafted with precision by
        Facebook, that aims to simplify the intricate process of building
        interactive user interfaces. Imagine a user interface built with React
        as a collection of components, each responsible for outputting a small,
        reusable piece of HTML code.In React, you develop your applications by
        creating reusable components that you can think of as independent Lego
        blocks. These components are individual pieces of a final interface,
        which, when assembled, form the application’s entire user interface.
        React’s primary role in an application is to handle the view layer of
        that application just like the V in a model-view-controller (MVC)
        pattern by providing the best and most efficient rendering execution.
        Rather than dealing with the whole user interface as a single unit,
        React.js encourages developers to separate these complex UIs into
        individual reusable components that form the building blocks of the
        whole UI. In doing so, the ReactJS framework combines the speed and
        efficiency of JavaScript with a more efficient method of manipulating
        the DOM to render web pages faster and create highly dynamic and
        responsive web applications. Back in 2011, Facebook had a massive user
        base and faced a challenging task. It wanted to offer users a richer
        user experience by building a more dynamic and more responsive user
        interface that was fast and highly performant. Jordan Walke, one of
        Facebook’s software engineers, created React to do just that. React
        simplified the development process by providing a more organized and
        structured way of building dynamic and interactive user interfaces with
        reusable components.
      </p>
    </div>
  );
}

export default ReactJs;
