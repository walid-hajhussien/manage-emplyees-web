app.component("employeeList", {
    templateUrl: "src/views/employeeList/employeeList.html",
    controller: "employeeListController",
    controllerAs: "vm",
    bindings: {data: "<"},
});
