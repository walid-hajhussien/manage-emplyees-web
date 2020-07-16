app.controller("employeeListController", function ($scope, employeeService) {
  var vm = this;

  // properties
  vm.employeeList = [];
  vm.search = "";

  // methods
  vm.onAdd = onAdd;
  vm.onDelete = onDelete;
  vm.onEdit = onEdit;

  this.$onInit = function () {
    vm.employeeList = employeeService.getList();
    console.log(vm.employeeList);
  };

  // add new employee
  function onAdd() {
    console.log("add");
  }

  // delete employee
  function onDelete() {
    console.log("delete");
  }

  // Edit employee
  function onEdit() {
    console.log("edit");
  }

  // style
  $("body").css("background-image", "");
});
