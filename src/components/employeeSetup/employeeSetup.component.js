app.component("employeeSetup", {
  templateUrl: "src/views/employeeSetup/employeeSetup.html",
  controller: "employeeSetupController",
  controllerAs: "vm",
  bindings: {
    employee: "<",
  },
});
