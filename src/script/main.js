let app = angular.module("app", ["ui.router"]);

// router setup
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider.state("home", {
    url: "/home",
    template: "<home></home>",
  });

  $stateProvider.state("employeeList", {
    url: "/employeeList",
    templateUrl: "src/views/employeeList.html",
    controller: "employeeListController",
    resolve: {
      data: function (employeeService) {
        return employeeService.setList().then((data) => {
          return data;
        });
      },
    },
  });

  // editEmployee
  $stateProvider.state("edit", {
    url: "/edit/:id",
    template: "<employee-setup employee='$resolve.employee'></employee-setup>",
    resolve: {
      employee: function (employeeService, $stateParams) {
        let id = $stateParams.id;
        return employeeService.getCustomerById(id);
      },
    },
  });

  // add new Employee
  $stateProvider.state("new", {
    url: "/new",
    template: "<employee-setup></employee-setup>",
  });

  // url not found redirect to home
  $urlRouterProvider.otherwise("/home");

  // removing the # from url
  $locationProvider.html5Mode(true).hashPrefix("!");
});
