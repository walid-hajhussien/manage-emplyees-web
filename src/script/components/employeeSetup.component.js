app.component("employeeSetup", {
  templateUrl: "src/views/employeeSetup.html",
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
      vm.mode = "";
      vm.title = "";
      vm.firstName = "";
      vm.lastName = "";
      vm.address = "";
      vm.email = "";
      vm.phone = "";
      vm.age = "";
      vm.eyeColor = "";
      vm.about = "";

      // methods
      vm.onSave = onSave;

      this.$onInit = function () {
        if (vm.employee) {
          vm.mode = "edit";
          vm.title = "Edit Employee";
          vm.firstName = vm.employee.name.first;
          vm.lastName = vm.employee.name.last;
          vm.address = vm.employee.address;
          vm.email = vm.employee.email;
          vm.phone = vm.employee.phone;
          vm.age = vm.employee.age;
          vm.eyeColor = vm.employee.eyeColor;
          vm.about = vm.employee.about;
        } else {
          vm.mode = "new";
          vm.title = "Add Employee";
        }
      };

      // add & update the employee based on the mode
      function onSave(form) {
        if (vm.mode === "edit") {
          vm.employee.name.first = vm.firstName;
          vm.employee.name.last = vm.lastName;
          vm.employee.address = vm.address;
          vm.employee.email = vm.email;
          vm.employee.phone = vm.phone;
          vm.employee.age = vm.age;
          vm.employee.eyeColor = vm.eyeColor;
          vm.employee.about = vm.about;
          employeeService.editCustomer(vm.employee);
          $state.go("employeeList");
        } else {
          let obj = { name: {} };
          obj.name.first = vm.firstName;
          obj.name.last = vm.lastName;
          obj.address = vm.address;
          obj.email = vm.email;
          obj.phone = vm.phone;
          obj.age = vm.age;
          obj.eyeColor = vm.eyeColor;
          obj.about = vm.about;
          employeeService.addCustomer(obj);
          $state.go("employeeList");
        }
      }
    },
  ],
});
