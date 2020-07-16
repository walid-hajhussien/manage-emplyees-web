app.controller("headerController", function ($scope, $state, $state) {
  var vm = this;

  // properties

  // methods
  vm.onNavigate = onNavigate;

  this.$onInit = function () {};

  // navigate to the new route
  function onNavigate() {
    if (vm.mode === "list") {
      $state.go("home");
    } else {
      $state.go("employeeList");
    }
  }
});
