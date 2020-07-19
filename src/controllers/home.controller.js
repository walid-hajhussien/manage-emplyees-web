app.controller("homeController", function ($scope, $state) {
    var vm = this;

    // properties

    // methods
    vm.onEnter = onEnter;

    function onEnter() {
        $state.go("employeeList");
    }
});
