let app = angular.module("app", ["ui.router"]);

// router setup
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    // Home State
    $stateProvider.state("home", {
        url: "/home",
        component: "home",
    });

    // employeeList State using component
    // $stateProvider.state("employeeList", {
    //   url: "/employeeList",
    //   component: "employeeList",
    //   resolve: {
    //     data: function (employeeService) {
    //       return employeeService.setList().then((data) => {
    //         return data;
    //       });
    //     },
    //   },
    // });

    // employeeList State without  component
    $stateProvider.state("employeeList", {
        url: "/employeeList",
        templateUrl: "src/views/employeeList/employeeList.html",
        controller: "employeeListController",
        controllerAs: "vm",
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
        component: "employeeSetup",
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
        component: "employeeSetup",
    });

    // url not found redirect to home
    $urlRouterProvider.otherwise("/home");

    // removing the # from url
    $locationProvider.html5Mode(true).hashPrefix("!");
});
