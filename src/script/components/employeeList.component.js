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
        setClassSort(columnName);
      }

      // change the class based on the sort
      function setClassSort(columnName) {
        $scope.headerClass.email = "";
        $scope.headerClass.phone = "";
        $scope.headerClass.address = "";
        $scope.headerClass["name.first"] = "";
        $scope.headerClass[columnName] = $scope.sortType
          ? "sortUp"
          : "sortDown";
      }
    },
  ],
});
