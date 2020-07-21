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

    // methods

    this.$onInit = function () {
      $scope.employeeList = employeeService.getList();
    };

    // add new employee
    $scope.onAdd = function onAdd() {
      $state.go("new");
    };

    // delete employee
    $scope.onDelete = function onDelete(id) {
      $scope.employeeList = employeeService.deleteCustomerById(id);
    };

    // change the list sort
    $scope.onChangeSort = function onChangeSort(columnName) {
      if ($scope.sort === columnName) {
        $scope.sortType = !$scope.sortType;
      } else {
        $scope.sortType = false;
        $scope.sort = columnName;
      }
    };
  },
]);
