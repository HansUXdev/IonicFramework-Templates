angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  //stateProvider 1
  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  });
  $urlRouterProvider.otherwise("/");

  //
  $stateProvider
    // Left Sidebar
    .state('search', {
      url: '/search',
      templateUrl: 'templates/search.html'
    })
    .state('settings', {
      url: '/settings',
      templateUrl: 'templates/settings.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
    })
    // Tabs
    .state('tabs', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })
    // Home
      .state('tabs.home', {
        url: "/home",
        views: {
          'home-tab': {
            templateUrl: "templates/home.html",
            controller: 'HomeTabCtrl'
          }
        }
      })
      // inside home
      .state('tabs.facts', {
        url: "/facts",
        views: {
          'home-tab': {
            templateUrl: "templates/facts.html"
          }
        }
      })
      // 
      .state('tabs.facts2', {
        url: "/facts2",
        views: {
          'home-tab': {
            templateUrl: "templates/facts2.html"
          }
        }
      })
      // Remote
      .state('tabs.remote', {
        url: "/remote",
        views: {
          'remote-tab': {
            templateUrl: "templates/remote.html"
            // controller: 'HomeTabCtrl'
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
// end config

/////////////                    \\\\\\\\\\\\\\\\\\\\\\\
//            Slider Controllers
////////////                     \\\\\\\\\\\\\\\\\\\\\\\\
  .controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
   
    // Called to navigate to the main app
    $scope.startApp = function() {
      $state.go('main');
    };
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };
    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  })

  .controller('MainCtrl', function($scope, $state) {
    console.log('MainCtrl');
    
    $scope.toIntro = function(){
      $state.go('intro');
    }
  });

/////////////                     \\\\\\\\\\\\\\\\\\\\\\\
//            SideMenu Controller
////////////                      \\\\\\\\\\\\\\\\\\\\\\\\
  .controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.showMenu = function () {
      $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.showRightMenu = function () {
      $ionicSideMenuDelegate.toggleRight();
    };
  })
  .controller('HomeTabCtrl', function($scope) {
  })