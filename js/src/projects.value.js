angular.module('projects.value', [])
    .value('projects', [
        {
            title: 'fodszqu.com',
            city: 'Orlando',
            state: 'Florida',
            from: 'September 2013',
            to: 'Current',
            description: 'Fodszqu is a site that allows users to anonymously upload messages or files. It is encouraged, but not required, that the user encrypt the messages as they see fit.',
            publish: true,
            resources: [
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/fodszqu'
                }
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
            title: 'gymbrute.com',
            city: 'Orlando',
            state: 'Florida',
            from: 'September 2013',
            to: 'Current',
            description: '',
            publish: true,
            resources: [],
            accomplishments: [],
            keywords: []
        },
        {
            title: 'imgphile.com',
            city: 'Orlando',
            state: 'Florida',
            from: 'February 2013',
            to: 'Current',
            description: 'Imgphile.com is a website that will allow its members to upload images and discuss with other members of the community. I am the lead developer for the project. The site will feature an “endless scroll” and continuous update of content as it arrives.',
            publish: false,
            accomplishments: [
                'Designed front end to minimize connections and bandwidth',
                'Developed back end framework to process REST commands',
                'Created a CouchDB driver for PHP'
            ],
            keywords: ['PHP', 'PHPUnit', 'CouchDB', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'REST', 'git']
        },
        {
            title: 'projx.io',
            city: 'Orlando',
            state: 'Florida',
            from: 'February 2013',
            to: 'Current',
            description: '',
            publish: false,
            accomplishments: [],
            keywords: []
        },
        {
            title: 'Knight Krawler - ATV Wheelchair Attachment',
            description: 'A senior design project aimed at creating an electric mobile platform to transport the user and wheelchair over all terrain.',
            publish: true,
            resources: [
                {
                    type: 'website',
                    location: 'http://knightkrawler.net'
                },
                {
                    type: 'github',
                    location: 'https://github.com/chemisus/knightkrawler'
                }
            ],
            accomplishments: [
                'Developed the software in C++ to control the steering, platform lift, and drive functions.',
                'Successfully implemented the Ackerman Steering Principle.',
                'Used an Arduino Uno and relays to control motor and linear actuator functions.'
            ],
            keywords: [
                'Arduino', 'C++'
            ]
        },
        {
            title: 'Slinpin - Dependency Injection Container',
            description: 'A PHP dependency injection container.',
            publish: true,
            resources: [
                {
                    type: 'composer',
                    location: 'https://packagist.org/packages/chemisus/slinpin'
                },
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/slinpin'
                }
            ],
            accomplishments: [
                'Used PHP reflection to get parameter types and inject appropriate data.',
                'Developed unit tests with 100% code coverage.'
            ],
            keywords: [
                'PHP', 'PHPUnit'
            ]
        },
        {
            title: 'Dragon',
            description: 'PHP MVC Framework',
            publish: false,
            resources: [
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/dragon'
                }
            ],
            accomplishments: [
            ],
            keywords: [
                'PHP', 'PHPUnit'
            ]
        },
        {
            title: 'OpenAuth',
            description: 'PHP OpenAuth Package',
            publish: true,
            resources: [
                {
                    type: 'composer',
                    location: 'https://packagist.org/packages/chemisus/openauth'
                },
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/openauth'
                }
            ],
            accomplishments: [
                'Implemented OpenAuth for Google.'
            ],
            keywords: [
                'PHP', 'PHPUnit'
            ]
        },
        {
            title: 'Moolah',
            description: 'PHP Authorize.Net Package',
            publish: true,
            resources: [
                {
                    type: 'composer',
                    location: 'https://packagist.org/packages/chemisus/moolah'
                },
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/moolah'
                }
            ],
            accomplishments: [
                'Implemented Authorize.Net payment gateway.'
            ],
            keywords: [
                'PHP', 'PHPUnit'
            ]
        },
        {
            title: 'Snuggie',
            description: 'PHP CouchDB ODM',
            publish: true,
            resources: [
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/snuggie'
                }
            ],
            accomplishments: [
                'Allows freeze and thaw capability when storing in a CouchDB database.',
            ],
            keywords: [
                'PHP', 'PHPUnit', 'CouchDB'
            ]
        },
        {
            title: 'Android Presentation',
            description: 'Includes a client which runs on an android device, and a server running on a computer with powerpoint. The client can control the server and move the presentation forward/backwards, and the server will send a screenshot to the client so that the presenter knows which slide he is on without having to turn around and look at the screen.',
            publish: true,
            resources: [
            ],
            accomplishments: [
            ],
            keywords: [
                'Java',
                'Android',
            ]
        },
        {
            title: 'Group Text',
            description: '',
            publish: false,
            resources: [
            ],
            accomplishments: [
            ],
            keywords: [
                'Java'
            ]
        },
        {
            title: 'PS3board',
            description: 'Allows a user to replace a keyboard and mouse with a PS3 controller.',
            publish: true,
            resources: [
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/ps3board'
                }
            ],
            accomplishments: [
                'Programmed the right joystick to move the cursor, acting as a mouse.',
                'Assigned the left and right joysticks to perform left and right mouse clicks.',
                'Combined the left joystick and the four main buttons to simulate a keyboard.'
            ],
            keywords: [
                'C++'
            ]
        },
        {
            title: 'Awesome Defense',
            description: 'A multiplayer android tower defense game. Developed both the clients running on android devices, and the server in java which ran on a laptop.',
            publish: true,
            resources: [
                {
                    type: 'github',
                    location: 'http://github.com/chemisus/slinpin'
                }
            ],
            accomplishments: [
            ],
            keywords: [
                'Java',
                'Android'
            ]
        },
        {
            title: 'sprintguide.com',
            city: 'Orlando',
            state: 'Florida',
            from: 'February 2013',
            to: 'Current',
            description: '',
            publish: false,
            accomplishments: [
            ],
            keywords: [
                'PHP',
                'CouchDB',
                'HTML5',
                'CSS3',
                'jQuery',
                'AngularJS',
                'git'
            ]
        }
    ])
;
