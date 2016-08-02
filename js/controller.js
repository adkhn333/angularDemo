app
.controller('homeCtrl', function($scope) {
    $scope.title = 'Home Page';
})
.controller('studentsCtrl', function($scope, $http, $state) {
    $scope.title = 'Students Page';
    $http.get('data/students.json').then(function(data) {
        $scope.students = data.data;
    });
    $scope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        console.log(event);
        console.log(toState);
        console.log(toParams);
        console.log(fromState);
        console.log(fromParams);
        if(toState.name != 'studentDetails' && toState.name != 'students') {
            if(!confirm('Are You Sure You Want To Navigate Away From This Page To ' + toState.name)) {
                event.preventDefault();
            }
        }
    })
    $scope.reload = function() {
        $state.reload();
    }
})
.controller('studentDetailsCtrl', function($scope, $stateParams, $http) {
    $http.get('data/students.json').then(function(data){
        angular.forEach(data.data, function(obj) {
            if(obj.id === $stateParams.id) {
                $scope.student = obj;
            }
        });
    });
})
.controller('coursesCtrl', function($scope) {
    $scope.title = 'Courses Page';
    $scope.courses = ['C#', 'ASP.NET', 'JAVA', 'AngularJS'];
})
.controller('oldCtrl', function($scope) {
    $scope.hideSalary = false;
    var employees = [
        {name: 'Ben', dateOfBirth: new Date('November 11, 1992'), gender: 'Male', salary: '52000'},
        {name: 'Sara', dateOfBirth: new Date('August 03, 1952'), gender: 'Female', salary: '92000'},
        {name: 'Mack', dateOfBirth: new Date('January 30, 1960'), gender: 'Male', salary: '65000'},
        {name: 'Todd', dateOfBirth: new Date('December 21, 1950'), gender: 'Male', salary: '75000'},
    ];
    $scope.employees = employees;
    $scope.sortColumn = "name";
    $scope.reverseSort = false;
    $scope.sortData = function(column){
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }
    $scope.getSortClass = function(column) {
        if($scope.sortColumn == column) {
                return $scope.reverseSort ? 'arrow-down' : 'arrow-up';
        }
        return '';
    }
    $scope.search = function(item) {
        if($scope.searchText == undefined) {
            return true;
        }
        else {
            if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.salary.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    }
})