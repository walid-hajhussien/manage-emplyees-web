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

      this.$onInit = function () {
        if (vm.employee) {
          vm.mode = "edit";
          vm.title = "Edit Employee";
          vm.fullName = vm.employee.name.first + " " + vm.employee.name.last;
        } else {
          vm.employee = {};
          vm.employee.isActive = true;
          vm.mode = "new";
          vm.title = "Add Employee";
        }
      };

      // methods

      // add & update the employee based on the mode
      vm.onSave = function onSave(form) {
        if (vm.mode === "edit") {
          var index = vm.fullName.indexOf(" ");
          vm.employee.name.first = vm.fullName.slice(0, index);
          vm.employee.name.last =
            index !== -1 ? vm.fullName.slice(index + 1) : "";
          employeeService.editCustomer(vm.employee);
          $state.go("employeeList");
        } else {
          employeeService.addCustomer(vm.employee);
          $state.go("employeeList");
        }
      };
    },
  ],
});
