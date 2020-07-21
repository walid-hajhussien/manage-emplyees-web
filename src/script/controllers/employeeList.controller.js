app.controller("employeeListController", [
  "$scope",
  "employeeService",
  "$state",
  "data",
  function ($scope, employeeService, $state, data) {
    // properties
    $scope.employeeList = [];
    $scope.search = "";
    $scope.sort = "name.first";
    $scope.sortType = true;
    $scope.headerClass = {
      "name.first": "",
      email: "",
      phone: "",
      address: "",
    };

    // methods
    $scope.onAdd = onAdd;
    $scope.onDelete = onDelete;
    $scope.onChangeSort = onChangeSort;

    this.$onInit = function () {
      $scope.employeeList = employeeService.getList();
      console.log($scope.employeeList);
    };

    // add new employee
    function onAdd() {
      $state.go("new");
    }

    // delete employee
    function onDelete(id) {
      $scope.employeeList = employeeService.deleteCustomerById(id);
    }

    // change the list sort
    function onChangeSort(columnName) {
      if ($scope.sort === columnName) {
        $scope.sortType = !$scope.sortType;
      } else {
        $scope.sortType = false;
        $scope.sort = columnName;
      }
    }
  },
]);
