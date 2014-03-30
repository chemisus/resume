angular.module('activities.value', [])
    .value('activities', {
        publish: true,
        position: 'Web Developer',
        organization: 'Theta Tau',
        city: 'Orlando',
        state: 'Florida',
        from: '2009-08-01',
        to: '2012-12-01',
        description: 'Created the chapter\'s website and maintained it until graduation. Still involved in the site, and mentor those maintaining it.',
        accomplishments: [
            'Prepared the site using Linux, Apache, MySql, and PHP',
            'Mentor new students on how to update the site using ssh and git',
            'Used as a test environment to learn about custom frameworks and dependency injection libraries'
        ],
        keywords: ['PHP', 'CouchDB', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'git']
    })
;
