app.controller("employeeListController", function ($scope, employeeService) {
  var vm = this;

  // properties
  vm.employeeList = [];
  vm.search = "";
  vm.sort = "";
  vm.sortType = false;

  // methods
  vm.onAdd = onAdd;
  vm.onDelete = onDelete;
  vm.onEdit = onEdit;
  vm.onChangeSort = onChangeSort;

  this.$onInit = function () {
    vm.employeeList = employeeService.getList();
    console.log(vm.employeeList);
  };

  // add new employee
  function onAdd() {
    console.log("add");
  }

  // delete employee
  function onDelete(id) {
    vm.employeeList = employeeService.deleteCustomer(id);
  }

  // Edit employee
  function onEdit() {
    console.log("edit");
  }

  // change list sort
  function onChangeSort(columnName) {
    if (vm.sort === columnName) {
      vm.sortType = !vm.sortType;
    } else {
      vm.sortType = false;
      vm.sort = columnName;
    }
  }

  // style
  $("body").css("background-image", "");
});
