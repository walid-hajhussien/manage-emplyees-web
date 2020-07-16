app.controller("employeeSetupController", function ($state, $stateParams) {
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
      console.log(vm.employee);
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

  function onSave(form) {
    console.log(form);
  }
});
