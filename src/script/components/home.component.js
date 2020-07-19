app.component("home", {
  templateUrl: "src/views/home.html",
  controllerAs: "vm",
  controller: [
    "$state",
    function () {
      var vm = this;
    },
  ],
});
