app.component("home", {
  templateUrl: "src/views/home.html",
  controllerAs: "vm",
  controller: [
    "$state",
    function ($state) {
      var vm = this;

      // methods
      vm.onEnter = onEnter;

      function onEnter() {
        $state.go("employeeList");
      }
    },
  ],
});
