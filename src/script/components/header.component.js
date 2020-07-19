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
      vm.onNavigate = onNavigate;

      // navigate to the new route
      function onNavigate() {
        if (vm.mode === "list") {
          $state.go("home");
        } else {
          $state.go("employeeList");
        }
      }
    },
  ],
});
