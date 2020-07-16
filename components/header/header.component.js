app.component("header", {
    templateUrl: "/views/header/header.html",
    controller: "headerController",
    controllerAs: "vm",
    bindings:{
      title:'=',
      mode:'='
    }
  });