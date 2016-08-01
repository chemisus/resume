(function () {

    var app = angular.module('ResumeApp', ['ngRoute']);

    app.constant('partials', 'partials/');

    app.config(['$routeProvider', 'partials', function ($routeProvider, partials) {
        $routeProvider.when('/web', {
            templateUrl: partials + '/default/index.html',
            controller: 'ResumeCtrl',
            controllerAs: 'resume'
        });

        $routeProvider.when('/print', {
            templateUrl: partials + '/print/index.html',
            controller: 'ResumeCtrl',
            controllerAs: 'resume'
        });

        $routeProvider.when('/restyle', {
            templateUrl: partials + '/restyle/index.html',
            controller: 'ResumeCtrl',
            controllerAs: 'resume'
        });

        $routeProvider.when('/', {
            redirectTo: '/print'
        });
    }]);

    app.factory('resume_request', ['$http', function ($http) {
        var resume_request = $http.get('data/resume.json');

        resume_request.ready = false;
        resume_request.data = {};

        resume_request.success(function (response) {
            angular.extend(resume_request.data, response);
            resume_request.ready = true;
        });

        return resume_request;
    }]);

    app.factory('resume', ['resume_request', function (resume_request) {
        return resume_request.data;
    }]);

    app.controller('ResumeCtrl', ['resume_request', function (resume_request) {
        var me = this;

        this.show = false;

        resume_request.success(function () {
            me.contact = resume_request.data.contact;
            me.objective = resume_request.data.objective;
            me.experiences = resume_request.data.experiences;
            me.educations = resume_request.data.educations;
            me.projects = resume_request.data.projects;

            me.show = true;
        });
    }]);

    app.directive('contact', function () {
        return {
            restrict: 'E',
            templateUrl: 'contact',
            replace: true,
            scope: {
                contact: '='
            }
        }
    });

    app.directive('objective', function () {
        return {
            restrict: 'E',
            templateUrl: 'objective',
            replace: true,
            scope: {
                objective: '='
            }
        }
    });

    app.directive('experiences', function () {
        return {
            restrict: 'E',
            templateUrl: 'experiences',
            replace: true,
            scope: {
                experiences: '='
            }
        }
    });

    app.directive('experience', function () {
        return {
            restrict: 'E',
            templateUrl: 'experience',
            replace: true,
            scope: {
                experience: '='
            }
        }
    });

    app.directive('educations', function () {
        return {
            restrict: 'E',
            templateUrl: 'educations',
            replace: true,
            scope: {
                educations: '='
            }
        }
    });

    app.directive('education', function () {
        return {
            restrict: 'E',
            templateUrl: 'education',
            replace: true,
            scope: {
                education: '='
            }
        }
    });

    app.directive('projects', function () {
        return {
            restrict: 'E',
            templateUrl: 'projects',
            replace: true,
            scope: {
                projects: '='
            }
        };
    });

    app.directive('project', function () {
        return {
            restrict: 'E',
            templateUrl: 'project',
            replace: true,
            scope: {
                project: '='
            }
        };
    });

    app.directive('accomplishments', function () {
        return {
            restrict: 'E',
            templateUrl: 'accomplishments',
            replace: true,
            scope: {
                accomplishments: '=list'
            }
        }
    });

    app.directive('keywords', function () {
        return {
            restrict: 'E',
            templateUrl: 'keywords',
            replace: true,
            scope: {
                keywords: '=list'
            }
        }
    });
})();
