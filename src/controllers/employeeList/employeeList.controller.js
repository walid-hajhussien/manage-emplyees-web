app.controller("employeeListController", function (
  $scope,
  employeeService,
  $state,
  data
) {
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
  vm.getClassSort = getClassSort;

  this.$onInit = function () {
    vm.employeeList = employeeService.getList();
    console.log(data);
  };

  // add new employee
  function onAdd() {
    $state.go("new");
  }

  // delete employee
  function onDelete(index) {
    vm.employeeList = employeeService.deleteCustomerByIndex(index);
  }

  // Edit employee
  function onEdit(employeeId) {
    console.log(employeeId);
    $state.go("edit", {
      id: employeeId,
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

  function getClassSort(column) {
    console.log("getClassSort");
    if (column === vm.sort) {
      return vm.sortType ? "sortUp" : "sortDown";
    } else {
      return "";
    }
  }
});
