import React from "react";

function Vue() {
  return (
    <div className="container">
      <h1 className="text-center mt-2 mb-4 text-dark">Vue</h1>
      <img
        className="d-block mx-auto rounded-2"
        src="https://swansoftwaresolutions.com/wp-content/uploads/2020/01/Benefits-of-Using-VUE.JS.jpeg"
        style={{ width: "500px" }}
        alt=""
      />
      <p className="text-center text-dark mt-4">
        Vue.js is a progressive JavaScript framework for building user
        interfaces. Created by Evan You, Vue is designed to be incrementally
        adoptable, making it easy to integrate into existing projects or use as
        the foundation for new ones. At its core, Vue focuses on the view layer
        of an application and is commonly used to build single-page applications
        (SPAs). One of Vue's key features is its declarative rendering system.
        With Vue, you create templates that describe the structure of your UI,
        and the framework takes care of efficiently updating the DOM when the
        underlying data changes. This is achieved through a reactive
        data-binding system, where changes to data automatically trigger updates
        to the user interface. Vue components are a fundamental building block.
        A component encapsulates a piece of functionality or a UI element and
        can be reused throughout the application. Components in Vue can
        communicate with each other through a well-defined props and events
        system, facilitating a modular and maintainable code structure. Vue also
        provides a powerful directive system, allowing you to extend HTML with
        additional behavior. Directives are prefixed with "v-" and are used to
        manipulate the DOM, handle events, or conditionally render elements
        based on data. State management is simplified in Vue with the Vuex
        library, which provides a centralized store for managing application
        state. This helps in handling complex data flows and maintaining a clear
        separation of concerns.
      </p>
    </div>
  );
}

export default Vue;
