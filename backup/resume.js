(function () {
    const app = angular.module('app', []);

    app.directive('date', ['$rootScope', 'dateFilter', function ($rootScope, dateFilter) {
        $rootScope.format = 'MMM yyyy';

        return {
            link: function (scope, element, attributes) {
                element.text(dateFilter(element.text() || 'Current', $rootScope.format));
            },
        };
    }]);
})();