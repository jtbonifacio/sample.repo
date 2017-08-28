// angular
//   .module("bobaApp")
//   .controller("accountController", function($scope, $state, $stateParams, accountService) {
//   })

angular
    .module("bobaApp")
    .controller("accountController", function ($scope) {

        var Account = function (firstName, lastName, email, phone, dob, addressLine, zip, city, state, ccNum, ccType, expDate, secCode) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.dob = dob;
            this.addressLine = addressLine;
            this.zip = zip;
            this.city = city;
            this.state = state;
            this.ccNum = ccNum;
            this.ccType = ccType;
            this.expDate = expDate;
            this.secCode = secCode;
        }

        $scope.accounts = []

        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.phone = "";
        $scope.dob = "";
        $scope.addressLine = "";
        $scope.zip = "";
        $scope.city = "";
        $scope.state = "";
        $scope.ccNum = "";
        $scope.ccType = "";
        $scope.expDate = "";
        $scope.secCode = "";

        $scope.submitAccount = function () {
            $scope.accounts.push(new Account($scope.firstName, $scope.lastName, $scope.email, $scope.phone, $scope.dob, $scope.addressLine, $scope.zip, $scope.city, $scope.state, $scope.ccNum, $scope.ccType, $scope.expDate, $scope.secCode))

            console.log($scope.accounts);
        }
        $scope.submitButton = true;
    })
