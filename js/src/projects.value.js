angular.module('projects.value', [])
    .value('projects', [
        {
            publish: true,
            title: 'Fodszqu',
            city: 'Orlando',
            state: 'Florida',
            from: 'September 2013',
            to: 'Current',
            description: 'Fodszqu is a site that allows users to anonymously upload messages or files. It is encouraged, but not required, that the user encrypt the messages as they see fit.',
            resources: [
                {type: 'github', location: 'http://github.com/chemisus/fodszqu'}
            ],
            accomplishments: [
                'Constructed the site using PHP, Laravel, and CouchDB',
                'Created integration tests to ensure that the site\'s api works as intended',
                'Developed a bash script for both Linux and OSX to utilize the features on the site. This includes encrypting and decrypting messages via openssl and rsa, along with sending and retrieving messages via curl.',
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
            description: '***',
            resources: [],
            accomplishments: ['***'],
            keywords: ['***']
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
                {type: 'website', location: 'http://knightkrawler.net'},
                {type: 'github', location: 'https://github.com/chemisus/knightkrawler'}
            ],
            accomplishments: [
                'Developed the software in C++ to control the steering, platform lift, and drive functions.',
                'Successfully implemented the Ackerman Steering Principle.',
                'Used an Arduino Uno and relays to control motor and linear actuator functions.'
            ],
            keywords: ['Arduino', 'C++']
        },
        {
            publish: true,
            title: 'Slinpin',
            description: '***',
            resources: [
                {type: 'composer', location: 'https://packagist.org/packages/chemisus/slinpin'},
                {type: 'github', location: 'http://github.com/chemisus/slinpin'}
            ],
            accomplishments: [
                'Used PHP reflection to get parameter types and inject appropriate data.',
                'Developed unit tests with 100% code coverage.'
            ],
            keywords: ['PHP', 'PHPUnit']
        },
        {
            publish: true,
            title: 'Dragon',
            description: '***',
            resources: [
                {type: 'github', location: 'http://github.com/chemisus/dragon'}
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'PHPUnit']
        },
        {
            publish: true,
            title: 'OpenAuth',
            description: '***',
            resources: [
                {type: 'composer', location: 'https://packagist.org/packages/chemisus/openauth'},
                {type: 'github', location: 'http://github.com/chemisus/openauth'}
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'PHPUnit']
        },
        {
            publish: true,
            title: 'Moolah',
            description: '***',
            resources: [
                {type: 'composer', location: 'https://packagist.org/packages/chemisus/moolah'},
                {type: 'github', location: 'http://github.com/chemisus/moolah'}
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'PHPUnit']
        },
        {
            publish: true,
            title: 'Snuggie',
            description: '***',
            resources: [
                {type: 'github', location: 'http://github.com/chemisus/snuggie'}
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['PHP', 'PHPUnit', 'CouchDB']
        },
        {
            publish: true,
            title: 'Android Presentation',
            description: 'Includes a client which runs on an android device, and a server running on a computer with powerpoint. The client can control the server and move the presentation forward/backwards, and the server will send a screenshot to the client so that the presenter knows which slide he is on without having to turn around and look at the screen.',
            resources: [
            ],
            accomplishments: [
                '***'
            ],
            keywords: ['Java', 'Android']
        },
        {
            publish: true,
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
            description: 'Allows a user to replace a keyboard and mouse with a PS3 controller.',
            resources: [
                {type: 'github', location: 'http://github.com/chemisus/ps3board'}
            ],
            accomplishments: [
                'Programmed the right joystick to move the cursor, acting as a mouse.',
                'Assigned the left and right joysticks to perform left and right mouse clicks.',
                'Combined the left joystick and the four main buttons to simulate a keyboard.'
            ],
            keywords: ['C++']
        },
        {
            publish: true,
            title: 'Awesome Defense',
            description: 'A multiplayer android tower defense game. Developed both the clients running on android devices, and the server in java which ran on a laptop.',
            resources: [
                {type: 'github', location: 'http://github.com/chemisus/slinpin'}
            ],
            accomplishments: [
                '***'
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
