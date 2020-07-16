let app = angular.module("app", ['ui.router']);

// router setup
app.config(function($stateProvider, $urlRouterProvider,$locationProvider){

    // Home State
    $stateProvider.state("/home",{
        url:"/home",
        component:"home",
    });

    // Home State
    $stateProvider.state("/employeeList",{
        url:"/employeeList",
        component:"employeeList",
        resolve:{
            data:function(employeeService){
            
                return employeeService.setList().then((data)=>{
                    return data
                  })
            }
        }
    });

    // url not found redirect to home
    $urlRouterProvider.otherwise('/home');

    // removing the # from url
    $locationProvider.html5Mode(true).hashPrefix('!');


});