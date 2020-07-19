app.component("employeeSetup", {
  templateUrl: "src/views/employeeSetup.html",
  controller: "employeeSetupController",
  controllerAs: "vm",
  bindings: {
    employee: "<",
  },
});
