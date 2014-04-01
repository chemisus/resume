angular.module('projects.value', [])
    .value('projects', [
        {
            publish: true,
            title: 'Fodszqu',
            city: 'Orlando',
            state: 'Florida',
            from: 'September 2013',
            to: 'Current',
            description: 'A site that allows users to anonymously upload messages or files. It is encouraged, but not required, that the user encrypt the messages as they see fit.',
            resources: [
                {type: 'Website', location: 'http://fodszqu.com'},
                {type: 'GitHub', location: 'http://github.com/chemisus/fodszqu'}
            ],
            accomplishments: [
                'Constructed the site using PHP, Laravel, and CouchDB',
                'Created integration tests to ensure that the site\'s API works as intended',
                'Developed a bash script for both Linux and OSX to utilize the features on the site. This includes encrypting and decrypting messages via openssl and rsa, and sending and retrieving messages via curl.',
                'Implemented a process to accept bitcoin payments for amounts depending on message sizes'
            ],
            keywords: ['PHP', 'Laravel', 'CouchDB', 'HTML5', 'CSS3', 'REST', 'git', 'bash', 'encryption', 'curl', 'bitcoin']
        },
        {
            publish: true,
            title: 'Gym Tracker',
            city: 'Orlando',
            state: 'Florida',
            from: 'September 2013',
            to: 'Current',
            description: 'A single page application to track workouts and provide lessons for exercises.',
            resources: [
                {type: 'Website', location: 'http://chemisus.github.io/gymtracker'},
                {type: 'GitHub', location: 'http://github.com/chemisus/gymtracker'}
            ],
            accomplishments: [
                'Created the front end using AngularJS',
                'Currently uses the browser\'s localStorage so it could be hosted on GitHub'
            ],
            keywords: ['AngularJS', 'HTML5', 'CSS3', 'git']
        },
        {
            publish: false,
            title: 'Imgphile',
            city: 'Orlando',
            state: 'Florida',
            from: 'February 2013',
            to: 'Current',
            description: 'Imgphile.com is a website that will allow its members to upload images and discuss with other members of the community. I am the lead developer for the project. The site will feature an “endless scroll” and continuous update of content as it arrives.',
            accomplishments: [
                'Designed front end to minimize connections and bandwidth',
                'Developed back end framework to process REST commands',
                'Created a CouchDB driver for PHP'
            ],
            keywords: ['PHP', 'PHPUnit', 'CouchDB', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'REST', 'git']
        },
        {
            publish: false,
            title: 'Projx',
            city: 'Orlando',
            state: 'Florida',
            from: 'February 2013',
            to: 'Current',
            description: '***',
            accomplishments: ['***'],
            keywords: ['***']
        },
        {
            publish: true,
            title: 'Knight Krawler',
            description: 'A senior design project aimed at creating an electric mobile platform to transport the user and wheelchair over all terrain.',
            resources: [
                {type: 'GitHub', location: 'https://github.com/chemisus/knightkrawler'}
            ],
            accomplishments: [
                'Developed the software in C++ to control the steering, platform lift, and drive functions',
                'Successfully implemented the Ackerman Steering Principle into the drive-control system',
                'Used an Arduino Uno and relay module to control motor and linear actuator functions'
            ],
            keywords: ['Arduino', 'C++']
        },
        {
            publish: true,
            title: 'Euphoria',
            description: 'A custom built PHP Model-View-Controller framework.',
            resource: [
            ],
            accomplishments: [
                'Used PHP reflection to get parameter types and inject appropriate data.',
                'Routes any request to a callback, controller, or command',
                'Bootstraps an application',
                'Makes use of the Slinpin and Dragon packages'
            ],
            keywords: []
        },
        {
            publish: false,
            title: 'OpenAuth',
            description: '***',
            resources: [
                {type: 'composer', location: 'https://packagist.org/packages/chemisus/openauth'},
                {type: 'GitHub', location: 'http://github.com/chemisus/openauth'}
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'PHPUnit']
        },
        {
            publish: false,
            title: 'Moolah',
            description: '***',
            resources: [
                {type: 'composer', location: 'https://packagist.org/packages/chemisus/moolah'},
                {type: 'GitHub', location: 'http://github.com/chemisus/moolah'}
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'PHPUnit']
        },
        {
            publish: true,
            title: 'Snuggie',
            description: 'A CouchDB driver written for PHP.',
            resources: [
                {type: 'GitHub', location: 'http://github.com/chemisus/snuggie'}
            ],
            accomplishments: [
                'Developed connection module that connects to CouchDB using curl',
                'Unit tested modules using PHPUnit'
            ],
            keywords: ['PHP', 'PHPUnit', 'CouchDB', 'NoSql', 'REST']
        },
        {
            publish: true,
            title: 'Android Presents',
            description: 'An Android application to help given presentations by allowing the speaker to control and see the slides on their Android device.',
            resources: [
            ],
            accomplishments: [
                'Developed the client to run on an android device to connect',
                'A server running on a computer with powerpoint.',
                'The client can control the server and move the presentation forward/backwards',
                'The server will send a screenshot to the client so that the presenter knows which slide he is on without having to turn around and look at the screen.'
            ],
            keywords: ['Java', 'Android']
        },
        {
            publish: false,
            title: 'Group Text',
            description: '***',
            resources: [
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['Java']
        },
        {
            publish: true,
            title: 'PS3board',
            description: 'Allows a user to substitute a keyboard and mouse with a PS3 controller.',
            resources: [
                {type: 'GitHub', location: 'http://github.com/chemisus/ps3board'}
            ],
            accomplishments: [
                'Programmed the right joystick to move the cursor, acting as a mouse',
                'Assigned the left and right joysticks to perform left and right mouse clicks',
                'Combined the left joystick and the four main buttons to simulate a keyboard'
            ],
            keywords: ['C++']
        },
        {
            publish: true,
            title: 'Awesome Defense',
            description: 'A multiplayer android tower defense game that was created for a senior design project.',
            resources: [
                {type: 'GitHub', location: 'http://github.com/chemisus/slinpin'}
            ],
            accomplishments: [
                'Developed the game client that runs on Android devices',
                'Programmed the game server in Java that would listen and accept requests, then start a game between two clients'
            ],
            keywords: ['Java', 'Android']
        },
        {
            publish: false,
            title: 'sprintguide.com',
            city: 'Orlando',
            state: 'Florida',
            from: 'February 2013',
            to: 'Current',
            description: '',
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'CouchDB', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'git']
        }
    ])
;
