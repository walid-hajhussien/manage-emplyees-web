angular.module("app").service("employeeService", function ($http, $q) {
  let self = this;

  // properties
  let _list = [];
  let _counter = 0;
  let _isRetrieve = false;

  // methods
  self.setList = setList;
  self.getList = getList;
  self.getCustomerById = getCustomerById;
  self.addCustomer = addCustomer;
  self.editCustomer = editCustomer;
  self.deleteCustomerById = deleteCustomerById;

  // get the data from a backend then saves the data to a local list
  function setList() {
    let deferred = $q.defer();
    if (_isRetrieve) {
      deferred.resolve(angular.copy(_list));
    } else {
      $http.get("src/assets/mock-data/data.json").then(
        (response) => {
          _list = response.data;
          _isRetrieve = true;
          deferred.resolve(angular.copy(_list));
        },
        (error) => {
          _list = [];
          deferred.reject(angular.copy(_list));
        }
      );
    }

    return deferred.promise;
  }

  // get the data from saved list
  function getList() {
    return angular.copy(_list);
  }

  // retrieves a customer from the saved list, filter should be using customer ID
  function getCustomerById(id) {
    return angular.copy(_list).find((value) => {
      return value._id === id;
    });
  }

  function addCustomer(newCustomer) {
    newCustomer._id = _counter++;
    _list.push(newCustomer);
  }

  function editCustomer(updateCustomer) {
    var index = _list.findIndex((element) => {
      return element._id === updateCustomer._id;
    });
    _list.splice(index, 1, updateCustomer);
  }

  function deleteCustomerById(id) {
    _list = _list.filter((value) => {
      return value._id !== id;
    });

    return angular.copy(_list);
  }
});
