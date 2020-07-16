app.component("header", {
  templateUrl: "src/views/header/header.html",
  controller: "headerController",
  controllerAs: "vm",
  bindings: {
    title: "=",
    mode: "=",
  },
});
