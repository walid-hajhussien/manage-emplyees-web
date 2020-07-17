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
    self.deleteCustomerByIndex = deleteCustomerByIndex;

    // get the data from a backend then saves the data to a local list
    function setList() {
        let deferred = $q.defer();
        if (_isRetrieve) {
            deferred.resolve(_list);
        } else {
            $http.get("/assets/mock-data/data.json").then(
                (response) => {
                    _list = response.data;
                    _isRetrieve = true;
                    deferred.resolve(_list);
                },
                (error) => {
                    _list = [];
                    deferred.reject(_list);
                }
            );
        }

        return deferred.promise;
    }

    // get the data from saved list
    function getList() {
        return _list;
    }

    // retrieves a customer from the saved list, filter should be using customer ID
    function getCustomerById(id) {
        return _list.find((value) => {
            return value._id === id;
        });
    }

    // Add Customer: add a customer to the list
    function addCustomer(newCustomer) {
        newCustomer._id = _counter++;
        _list.push(newCustomer);
    }


    function editCustomer(updateCustomer) {
        _list = _list.map((customer) => {
            return updateCustomer._id === customer._id ? updateCustomer : customer;
        });
    }


    function deleteCustomerByIndex(index) {
        console.log(index);
        _list.splice(index, 1);
        return _list;
    }


    function deleteCustomerById(id) {
        _list = _list.filter((value) => {
            return value._id !== id;
        });
        return _list;
    }
});
