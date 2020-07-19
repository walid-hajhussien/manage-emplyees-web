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
  vm.headerClass = {
    "name.first": "",
    email: "",
    phone: "",
    address: "",
  };

  // methods
  vm.onAdd = onAdd;
  vm.onDelete = onDelete;
  vm.onEdit = onEdit;
  vm.onChangeSort = onChangeSort;

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
    setClassSort(columnName);
  }

  function setClassSort(columnName) {
    vm.headerClass.email = "";
    vm.headerClass.phone = "";
    vm.headerClass.address = "";
    vm.headerClass["name.first"] = "";
    vm.headerClass[columnName] = vm.sortType ? "sortUp" : "sortDown";
  }
});
