app.controller("homeController", function ($scope, $state) {
  var vm = this;
  

  // properties

  // methods
  vm.onEnter = onEnter;

  function onEnter() {
    $state.go("/employeeList");
  }

  // style
  $("body").css("background-image", "url(assets/img/home.jpg)");
});
