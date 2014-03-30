angular.module('App', [
        'ngRoute',
        'contact.value',
        'objective.value',
        'experiences.value',
        'educations.value',
        'projects.value',
        'skills.value'
    ])
    .config(function ($routeProvider) {
        $routeProvider.when('/test1', {
            templateUrl: 'assets/html/resume/test1.html'
        });

        $routeProvider.when('/text', {
            templateUrl: 'assets/html/resume/text.html'
        });

        $routeProvider.when('/markdown', {
            templateUrl: 'assets/html/resume/markdown.html'
        });

        $routeProvider.when('/print', {
            templateUrl: 'assets/html/resume/print.html'
        });

        $routeProvider.otherwise({
            templateUrl: 'assets/html/resume/default.html'
        });
    })
    .run(function ($rootScope, contact, objective, experiences, educations, projects, skills) {
        $rootScope.contact = contact;
        $rootScope.objective = objective;
        $rootScope.experiences = experiences;
        $rootScope.educations = educations;
        $rootScope.projects = projects;
        $rootScope.skills = skills;
    })
;
