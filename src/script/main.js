let app = angular.module("app", ["ui.router"]);

// router setup
app.config([
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider",
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
      template: "<add-edit employee='$resolve.employee'></add-edit>",
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
      template: "<add-edit></add-edit>",
    });

    // url not found redirect to home
    $urlRouterProvider.otherwise("/home");

    // removing the # from url
    $locationProvider.html5Mode(true);
  },
]);
