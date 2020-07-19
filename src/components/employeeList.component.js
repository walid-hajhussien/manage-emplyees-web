app.component("employeeList", {
  templateUrl: "src/views/employeeList.html",
  controller: "employeeListController",
  controllerAs: "vm",
  bindings: { data: "<" },
});
