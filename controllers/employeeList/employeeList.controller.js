app.controller("employeeListController", function ($scope, employeeService,$state) {
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
    $state.go("/new");
  }

  // delete employee
  function onDelete(id) {
    vm.employeeList = employeeService.deleteCustomer(id);
  }

  // Edit employee
  function onEdit(employeeId) {
    console.log(employeeId)
    $state.go("/edit",{
      id:employeeId
    });
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
