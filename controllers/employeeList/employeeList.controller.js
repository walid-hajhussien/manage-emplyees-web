app.controller("employeeListController", function ($scope,employeeService) {
  var vm = this;


  // properties
  vm.employeeList = [];

  // methods


  this.$onInit = function(){
    vm.employeeList = employeeService.getList();
    console.log(vm.employeeList);
  }

  // style
  $("body").css("background-image", "");
});
