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
