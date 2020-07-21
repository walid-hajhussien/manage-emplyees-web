app.component("header", {
  templateUrl: "src/views/header.html",
  controllerAs: "vm",
  bindings: {
    title: "=",
    mode: "=",
  },
  controller: [
    "$state",
    function ($state) {
      var vm = this;

      // methods

      // navigate to the new route
      vm.onNavigate = function onNavigate() {
        if (vm.mode === "list") {
          $state.go("home");
        } else {
          $state.go("employeeList");
        }
      };
    },
  ],
});
