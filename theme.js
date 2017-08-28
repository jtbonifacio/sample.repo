angular
  .module("bobaApp")
  .controller("theme", function($scope, $state, $stateParams, aboutService){

  $scope.items = [];
  $scope.cart = [];

  $scope.quantity = 0;
  $scope.name = "";
  $scope.price = "";

  function Item(quantity, name, price, id) {

    this.quantity = quantity;
    this.name = name;
    this.price = price;
    this.id = id;
  }

  $scope.items.push(new Item(1, "Milk Tea", 4.50, 1));
  $scope.items.push(new Item(1, "Thai Tea", 4.50, 2));
  $scope.items.push(new Item(1, "Strawberry Hibiscus Tea", 4.50, 3));
  $scope.items.push(new Item(1, "Herbal Tea", 4.50, 4));
  $scope.items.push(new Item(1, "Taro Slush", 5.50, 5));
  $scope.items.push(new Item(1, "Strawberry", 5.50, 6));
  $scope.items.push(new Item(1, "Honey Dew", 5.50, 7));
  $scope.items.push(new Item(1, "Mango Peach", 5.50, 8));
  $scope.items.push(new Item(1, "Cafe Latte", 3.50, 9));
  $scope.items.push(new Item(1, "Caramel Machiatto", 4.50, 10));
  $scope.items.push(new Item(1, "Hazelnut Coffee", 4.50, 11));
  $scope.items.push(new Item(1, "Cappuccino", 3.50, 12));
  $scope.items.push(new Item(1, "Boba", 0.50, 13));
  $scope.items.push(new Item(1, "Lychee", 0.50, 14));
  $scope.items.push(new Item(1, "Mango Jelly", 0.50, 15));
  $scope.items.push(new Item(1, "Egg Pudding", 0.50, 16));

  console.log($scope.items);


  var inames = [];
  var iqtyp = [];
  var iprice = [];
  var total = 0;

  function addItem() {
    $scope.cart.push( new Item(1, $scope.name, $scope.price, 0));
    console.log($scope.cart);
  }

  function displayCart() {


    cartdata = "";
    var total = 0;


    for (i = 0; i < inames.length; i++) {

      total += iqtyp[i] * iprice[i];
      cartdata += "Food/Beverage Name: " + inames[i] + "     Quantity: " + iqtyp[i] + "     Price: " + iprice[i] + "     Sub-total:" + iqtyp[i] * iprice[i]
    }



    document.getElementById('cart').innerHTML = cartdata + "Order Total: " + total

  }
})
