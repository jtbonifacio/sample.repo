angular
    .module("bobaApp")
    .controller("accountEmpController", function ($scope) {

        var AccountEmp = function (firstName, lastName, dob, addressLine1, addressLine2, city, state, zip, phone, transportation, driversLicense, licensePlate, availability) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = dob;
            this.addressLine1 = addressLine1;
            this.addressLine2 = addressLine2;
            this.city = city;
            this.state = state;            
            this.zip = zip;
            this.phone = phone;
            this.transportation = transportation;
            this.driversLicense = driversLicense;
            this.licensePlate = licensePlate;
            this.availability = availability;
        }

        $scope.accountsEmp = []

$scope.firstName = "";
$scope.lastName = "";
$scope.dob = "";
$scope.addressLine1 = "";
$scope.addressLine2 = "";
$scope.city = "";
$scope.state = "";
$scope.zip = "";
$scope.phone = "";
$scope.transportation = "";
$scope.driversLicense = "";
$scope.licensePlate = "";
$scope.availability = "";

        $scope.submitEmpAccount = function () {
            $scope.accountsEmp.push(new AccountEmp($scope.firstName, $scope.lastName, $scope.dob, $scope.addressLine1, $scope.addressLine2, $scope.city, $scope.state, $scope.zip, $scope.phone,$scope.transporation, $scope.driversLicense, $scope.licensePlate, $scope.availability))

            console.log($scope.accountsEmp);
        }
        $scope.submitButton = true;
    })
