app.component("employeeList", {
  templateUrl: "src/views/employeeList.html",
  controllerAs: "vm",
  bindings: { data: "<" },
  controller: [
    "$scope",
    "employeeService",
    "$state",
    "data",
    function ($scope, employeeService, $state) {
      // properties
      $scope.employeeList = [];
      $scope.search = "";
      $scope.sort = "";
      $scope.sortType = false;

      // methods
      $scope.onDelete = onDelete;
      $scope.onChangeSort = onChangeSort;

      this.$onInit = function () {
        $scope.employeeList = employeeService.getList();
      };

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
  ],
});
