app
.filter('gender', function() {
    return function(gender) {
        switch(gender) {
            case 'Male':
                return 2;
            case 'Female':
                return 1;
        }
    }
});