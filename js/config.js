/// <reference path="angular.min.js" />
/// <reference path="angular-ui-router.min.js" />


app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('home');
    // $locationProvider.html5Mode(true);
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/templates/home.html',
            controller: 'homeCtrl'
        })
        .state('students', {
            url: '/students',
            templateUrl: '/templates/students.html',
            controller: 'studentsCtrl'
        })
        .state('courses', {
            url: '/courses',
            templateUrl: '/templates/courses.html',
            controller: 'coursesCtrl'
        })
        .state('old', {
            url: '/old',
            templateUrl: '/templates/old.html',
            controller: 'oldCtrl'
        })
        .state('studentDetails', {
            url: '/students/:id',
            templateUrl: '/templates/studentDetails.html',
            controller: 'studentDetailsCtrl'            
        })
        ;
        // .state('students/:id', {
        //     templateUrl: '/templates/studentDetails.html',
        //     controller: 'studentDetailsCtrl'
        // })
        // .otherwise({
        //     redirectTo: '/home'
        // });
});


// app
// .config(function($routeProvider, $locationProvider) {
//     $routeProvider
//         .when('/home', {
//             templateUrl: '/templates/home.html',
//             controller: 'homeCtrl'
//         })
//         .when('/students', {
//             templateUrl: '/templates/students.html',
//             controller: 'studentsCtrl'
//         })
//         .when('/courses', {
//             templateUrl: '/templates/courses.html',
//             controller: 'coursesCtrl'
//         })
//         .when('/old', {
//             templateUrl: '/templates/old.html',
//             controller: 'oldCtrl'
//         })
//         .when('/students/:id', {
//             templateUrl: '/templates/studentDetails.html',
//             controller: 'studentDetailsCtrl'
//         })
//         .otherwise({
//             redirectTo: '/home'
//         });
//     // $locationProvider.html5Mode(false);
// });

