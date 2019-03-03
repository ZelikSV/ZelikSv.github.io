/* global angular, firebase */
(function() {
  const myApp = angular.module('myApp', ['firebase', 'ui.router']);
  const config = {
    apiKey: 'AIzaSyCGSVRREJFH1OxxcgB0nSrabmaEKG6KvwQ',
    authDomain: 'currency-converter-c1ee0.firebaseapp.com',
    databaseURL: 'https://currency-converter-c1ee0.firebaseio.com',
    projectId: 'currency-converter-c1ee0',
    storageBucket: 'currency-converter-c1ee0.appspot.com',
    messagingSenderId: '1034697496097'
  };

  firebase.initializeApp(config);

  myApp.config(['currencyServiceProvider', '$stateProvider', '$urlRouterProvider',
    function(currencyServiceProvider, $stateProvider, $urlRouterProvider) {
      $stateProvider
        .state({
          name: 'main',
          url: '/main',
          templateUrl: '/components/main/main.html'
        })
        .state('main.home', {
          url: 'main/home',
          templateUrl: '/components/homePage/template/homePage.html'
        })
        .state('main.converter', {
          url: 'main/converter',
          component: 'myConverter'
        })
        .state('main.contacts', {
          url: 'main/contacts',
          templateUrl: '/components/contactsPage/template/contactsPage.html'
        })
        .state({
          name: 'login',
          url: '/login',
          controller: 'myFormlogin',
          controllerAs: 'fc',
          templateUrl: '/components/loginForm/template/loginForm.html'
        })
        .state('login.logout', {
          url: 'login/logout',
          controller: 'myFormlogin',
          controllerAs: 'fc',
          templateUrl: '/components/loginForm/template/registration.html'
        })
        .state('login.loginenter', {
          url: '/loginenter',
          controller: 'myFormlogin',
          controllerAs: 'fc',
          templateUrl: '/components/loginForm/template/login.html'
        });

      $urlRouterProvider.otherwise('/login/loginenter');

      currencyServiceProvider.setAPI('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5');
    }])
    .run(function($window, $rootScope) {
      $rootScope.netActive = navigator.onLine;
      $window.addEventListener('offline', function() {
        $rootScope.$apply(function() {
          $rootScope.netActive = false;
        });
      });
      $window.addEventListener('online', function() {
        $rootScope.$apply(function() {
          $rootScope.netActive = true;
        });
      });
    });
  window.myApp = myApp;
}());
/* global myApp, angular*/
(function() {
  myApp.provider('currencyService', function() {
    let API = '';

    return {
      setAPI: apiUrl => (API = apiUrl),

      $get: ['$http', '$firebase', function($http, $firebase) {
        return {
          loadCache: () => {
            const list = [];
            $http.get(API)
              .then(({ data }) => {
                angular.copy([...data, { ccy: 'UAH', buy: '1', sale: '1' }], list);
              });
            return list;
          },

          convertToUa(from, to) {
            const result = from * to;

            return result;
          },

          convertFromUa(from, to) {
            const res = from / to;

            return res;
          },

          countTax(sum, pr) {
            const res = sum * pr / 100;

            return res;
          }
        };
      }]
    };
  });

  myApp.constant('mainConstants', {
    'percentageTax': [0, 1, 2, 3, 4, 5],
    'cities': ['Kiev', 'Dnieper', 'Kharkov', 'Lvov', 'Zaporozhye', 'Krivoy Rog'],
    'currency': [{ ccy: 'USD', buy: '26.80000', sale: '27.10000', $$hashKey: 'object:5' },
      { ccy: 'EUR', buy: '30.30000', sale: '30.80000', $$hashKey: 'object:9' }]
  });
}());

/* global myApp */
(function() {
  myApp.directive('netChecker', function() {
    return {
      restrict: 'A'
    };
  });
}());
/* global myApp */
(function() {
  myApp.component('myConverter', {
    templateUrl: '/components/myConverter/template/my-converter.html',
    replace: false,
    controller: 'myController',
    controllerAs: 'mc'
  });
}());
/* global myApp */
(function() {
  myApp.filter('currencyFilter', function() {
    return function(array, comp) {
      return array.filter(item => item.ccy !== comp);
    };
  });
}());
/* global myApp, angular, firebase */
(function() {
  myApp.controller('myFormlogin', ['$state', '$firebaseAuth', function($state, $firebaseAuth) {
    const firebaseAuthObject = $firebaseAuth();
    this.activeTab = true;
    this.userMail = '';
    this.userPassword = '';
    this.mailReg = null;
    this.passReg = null;
    this.passRegCheck = null;

    this.registration = function() {
      if (this.passReg === null || this.mailReg === null || this.passRegCheck === null) {
        alert('Please fill all fields of form');
      } else if (this.passReg !== this.passRegCheck) {
        alert('Passwords do not match');
      } else {
        register({ email: this.mailReg, password: this.passReg });
        $state.go('main.home');
      }
    };

    this.checker = function() {
      login({ email: this.userMail, password: this.userPassword })
        .then(() => $state.go('main.home'))
        .catch(error => alert(error));
    };

    function register(user) {
      return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
    }
    function login(user) {
      return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
    }
  }]);
}());
/* global myApp, Firebase */
(function() {
  myApp.controller('myController', [
    'currencyService',
    'mainConstants',
    '$scope', function(currencyService, mainConstants, $scope) {
      this.countVal = null;
      this.costVal = null;
      this.currency = currencyService.loadCache();
      this.currencyFrom = mainConstants.currency[0];
      this.currencyTo = mainConstants.currency[1];
      this.percentageTax = mainConstants.percentageTax;
      this.citiesLocation = mainConstants.cities;
      this.city = mainConstants.cities[0];
      this.taxValue = mainConstants.percentageTax[0];

      $scope.$watchGroup(['mc.currencyFrom', 'mc.currencyTo', 'mc.countVal'], () => {
        this.convertValue();
      });

      $scope.$watch('mc.taxValue', () => {
        this.takeFee();
      });

      this.changeValues = () => {
        [this.countVal, this.costVal] = [this.costVal, this.countVal];
        [this.currencyFrom, this.currencyTo] = [this.currencyTo, this.currencyFrom];
      };

      this.convertValue = () => {
        const res = currencyService.convertToUa(this.countVal, this.currencyFrom.buy);
        this.costVal = currencyService.convertFromUa(res, this.currencyTo.sale);
      };

      this.takeFee = () => {
        this.convertValue();
        this.costVal -= currencyService.countTax(this.costVal, this.taxValue);
      };
    }]);
}());