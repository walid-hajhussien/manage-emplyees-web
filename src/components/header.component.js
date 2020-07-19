app.component("header", {
  templateUrl: "src/views/header.html",
  controller: "headerController",
  controllerAs: "vm",
  bindings: {
    title: "=",
    mode: "=",
  },
});
