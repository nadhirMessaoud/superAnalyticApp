angular.module('ionicApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    .state('tabs.home', {
      url: "/home",
      views: {
        'home-tab': {
          templateUrl: "templates/home.html",
          controller: 'HomeTabCtrl'
        }
      }
    })
    .state('tabs.cat', {
      url: "/cat",
      views: {
        'home-tab': {
          templateUrl: "templates/cat.html"
        }
      }
    })
    .state('platforms', {
      url: "/platforms",
     // views: {
      //  'home-tab': {
        templateUrl: "../criterias/platforms.html"
      //  }
    //  }
    })
    .state('tabs.users', {
      url: "/users",
      views: {
        'home-tab': {
          templateUrl: "templates/users.html"
        }
      }
    })
    .state('tabs.support', {
      url: "/support",
      views: {
        'home-tab': {
          templateUrl: "templates/support.html"
        }
      }
    })
    .state('tabs.price', {
      url: "/price",
      views: {
        'home-tab': {
          templateUrl: "templates/price.html"
        }
      }
    }) 
    .state('tabs.result', {
      url: "/result",
      views: {
        'home-tab': {
          templateUrl: "templates/result.html"
        }
      }
    })
    .state('tabs.about', {
      url: "/about",
      views: {
        'about-tab': {
          templateUrl: "./pages/about/about.html"
        }
      }
    })
    .state('tabs.navstack', {
      url: "/navstack",
      views: {
        'about-tab': {
          templateUrl: "templates/nav-stack.html"
        }
      }
    })
    .state('tabs.contact', {
      url: "/contact",
      views: {
        'contact-tab': {
          templateUrl: "templates/contact.html"
        }
      }
    });


   $urlRouterProvider.otherwise("/tab/home");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});

function displayMsg(){
  console.log("nothing to display");
}