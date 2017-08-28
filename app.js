var app = angular.module("bobaApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "./views/home.html",
      controller: "homeController"
    })

    .state("menu", {
      url: "/menu",
      templateUrl: "./views/menu.html",
      controller: "menuController"
    })

    .state("order", {
      url: "/menu/order",
      templateUrl: "./views/menu_order.html",
      controller: "menuController"
    })

    .state("customer", {
      url: "/customer",
      templateUrl: "./views/customer.html",
      controller: "customerController"
    })

    .state("customerProfile", {
      url: "/customer/:id",
      templateUrl: "./views/customer.html",
      controller: "customerController"
    })

    .state("server", {
      url: "/server",
      templateUrl: "./views/server.html",
      controller: "serverController"
    })

    .state("serverProfile", {
      url: "/server/:id",
      templateUrl: "./views/server.html",
      controller: "serverController"
    })

    .state("serverOrders", {
      url: "/server/:id/orders",
      templateUrl: "./views/server_orders.html",
      controller: "serverController"
    })

    .state("about", {
      url: "/about",
      templateUrl: "./views/about.html",
      controller: "aboutController"
    })

    .state("cart", {
      url: "/cart",
      templateUrl: "./views/cart.html",
      controller: "cartController"
    })
    // Added by Jay to test error page
    .state("rejectPage", {
      url: "/rejectPage",
      templateUrl: "./views/rejectPage.html",
      controller: "rejectPageController"
    })
    // Added by Jay to test customer form page
    .state("account", {
      url: "/account",
      templateUrl: "./views/account.html",
      controller: "accountController"
    })
    // Added by Jay to new employee account page
    .state("accountEmp", {
      url: "/accountEmp",
      templateUrl: "./views/accountEmp.html",
      controller: "accountEmpController"
    })
})