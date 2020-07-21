app.component("addEdit", {
  templateUrl: "src/views/addEdit.html",
  controllerAs: "vm",
  bindings: {
    employee: "<",
  },
  controller: [
    "$state",
    "employeeService",
    function ($state, employeeService) {
      var vm = this;

      // properties

      // methods
      vm.onSave = onSave;

      this.$onInit = function () {
        if (vm.employee) {
          vm.mode = "edit";
          vm.title = "Edit Employee";
        } else {
          vm.employee = {};
          vm.employee.isActive = true;
          vm.mode = "new";
          vm.title = "Add Employee";
        }
      };

      // add & update the employee based on the mode
      function onSave(form) {
        if (vm.mode === "edit") {
          employeeService.editCustomer(vm.employee);
          $state.go("employeeList");
        } else {
          employeeService.addCustomer(vm.employee);
          $state.go("employeeList");
        }
      }
    },
  ],
});
