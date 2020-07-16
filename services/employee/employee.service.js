angular.module("app").service("employeeService", function ($http) {
  let vm = this;

  // properties
  vm.list = [];

  // methods
  vm.setList = setList;
  vm.getList = getList;
  vm.getCustomerById = getCustomerById;
  vm.addCustomer = addCustomer;
  vm.editCustomer = editCustomer;
  vm.deleteCustomer = deleteCustomer;

  // get the data from a backend then saves the data to a local list
  function setList() {
    return new Promise((resolve, reject) => {
      $http.get("/assets/mock-data/data.json").then(
        (response) => {
          vm.list = response.data;
          resolve(vm.list);
        },
        (error) => {
          vm.list = [];
          reject(vm.list);
        }
      );
    });
  }

  // get the data from saved list
  function getList() {
    return vm.list;
  }

  // retrieves a customer from the saved list, filter should be using customer ID
  function getCustomerById(id) {
    return vm.list.find((value) => {
      return value._id === id;
    });
  }

  // Add Customer: add a customer to the list
  function addCustomer(newCustomer) {
    vm.list.push(customer);
  }

  // edit an existing customer
  function editCustomer(updateCustomer) {
    vm.list = vm.list.map((customer) => {
      return updateCustomer._id === customer._id ? updateCustomer : customer;
    });
  }

  //delete Customer
  function deleteCustomer(id) {
    vm.list = vm.list.filter((value) => {
      return value._id !== id;
    });
    return vm.list;
  }
});
