app.controller("employeeSetupController", function ($state, $stateParams) {
  var vm = this;

  console.log($stateParams);
  // properties
  vm.goBack = goBack;

  // methods
  function goBack() {
    $state.go("employeeList");
  }
});
