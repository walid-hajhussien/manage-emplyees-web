app.component("employeeList", {
    templateUrl: "/views/employeeList/employeeList.html",
    controller: "employeeListController",
    controllerAs: "vm",
    bindings: {data: '<'}
  });