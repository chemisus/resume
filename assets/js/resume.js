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
;angular.module('App', [
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
;angular.module('contact.value', [])
    .value('contact', {
        full_name: 'Terrence Howard',
        title: 'Software Developer',
        address: {
            street: '595 W Church St #438',
            city: 'Orlando',
            state: 'FL',
            zip: '32805'
        },
        phone: '(239) 222-1246',
        email: 'terrence.l.howard@gmail.com',
        qrcode: 'qrcode-resume.png',
        linkedin: 'http://lnkd.in/FU-9EV',
        github: 'http://github.com/chemisus'
    })
;
;angular.module('educations.value', [])
    .value('educations', [
        {
            degree: 'Bachelor\'s of Computer Science',
            organization: 'University of Central Florida',
            city: 'Orlando',
            state: 'Florida',
            from: 'Spring 2007',
            to: 'Fall 2012',
            publish: true,
            description: 'Graduated Fall 2012',
            accomplishments: [
                'Member of Theta Tau, Professional Engineering Fraternity',
                'Member of Phi Theta Kappa, Academic Honor Society'
            ]
        }
    ])
;
;angular.module('experiences.value', [])
    .value('experiences', [
        {
            publish: true,
            position: 'Software Developer',
            organization: 'Promo Only',
            city: 'Orlando',
            state: 'Florida',
            from: '2014-01-01',
            to: 'Current',
            description: 'Critical member of a development team which replaced a faulty system reliant on failing hardware and end-of-life software. Result was a significant improvement in system performance coupled with reduced operating costs. ',
            accomplishments: [
                'Reduced report generation time by 83% by restructuring database tables and optimizing queries',
                'Created a tool that would import spreadsheets containing a radio station\'s track spins information, then generate reports. This eliminated a weeks worth of calculations previously performed by hand',
                'Currently working on a cart and billing system to handle both online and disc-by-mail subscriptions. The system is being built as a single page app with Laravel and AngularJS, and tested using Karma, Protractor and PHPUnit.'
            ],
            keywords: ['PHP', 'PHPUnit', 'PostgreSql', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'REST', 'git']
        },
        {
            publish: true,
            position: 'Senior Developer',
            organization: 'Xulon Press',
            city: 'Orlando',
            state: 'Florida',
            from: '2013-04-01',
            to: '2013-07-01',
            description: 'Served on a specific task contract to restructure the organization’s internal website. The project followed agile and pair programming strategies.',
            accomplishments: [
                'Performed as lead developer and coach: mentored other team members; explained and clarified concepts; assisted with milestone definition and progress assessment.',
                'Created a spreadsheet for sprint planning; including assigning points to tasks, sprint length estimation, and generating burn-down charts',
                'Implemented Authorize.net API for payment processing and OAuth for quick login with Google profiles',
                'Unit and integration tested the application with PHPUnit',
                'Used Laravel and AngularJS for the backend and frontend frameworks, respectively',
            ],
            keywords: ['PHP', 'PHPUnit', 'MySql', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'git']
        },
        {
            publish: true,
            position: 'Web Developer',
            organization: 'University of Central Florida',
            city: 'Orlando',
            state: 'Florida',
            from: '2011-06-01',
            to: '2012-12-01',
            description: 'Was the sole developer working directly for the Dean of Engineering and the Director of Engineering Outreach: created and maintained websites explaining and publicizing UCF Engineering programs and activities.',
            accomplishments: [
                'Developed the website for UCF\'s program for Innovation through Institutional Integration',
                'Maintained the websites for the outreach programs Young Entrepreneur Scholars (YES) and Girls Excelling in Math and Science (GEMS)'
            ],
            keywords: ['PHP', 'MySql', 'HTML5', 'CSS3', 'git']
        },
        {
            publish: true,
            position: 'Web Developer',
            organization: 'Theta Tau',
            city: 'Orlando',
            state: 'Florida',
            from: '2009-08-01',
            to: '2012-12-01',
            description: 'Created and maintained the chapter\'s website until graduation. Still involved in mentoring those maintaining it.',
            accomplishments: [
                'Prepared the site using Linux, Apache, MySql, and PHP',
                'Mentor new students on how to update the site using ssh and git',
                'Used as a test environment to learn about custom frameworks and dependency injection libraries'
            ],
            keywords: ['PHP', 'CouchDB', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'git']
        },
        {
            publish: true,
            position: 'Web Developer',
            organization: 'AKT Enterprises',
            city: 'Orlando',
            state: 'Florida',
            from: '2010-11-01',
            to: '2011-06-01',
            description: 'Lead the development of mintees.com. Collaborated with project manager to create or update several sites for various clients.',
            accomplishments: [
                'Lead developer in the creation of mintees.com: successfully met a demanding three week deadline.',
                'Created and updated sites and e-commerce stores for several clients using PHP and a proprietary content management system'
            ],
            keywords: ['PHP', 'HTML5', 'CSS3', 'jQuery', 'git']
        },
        {
            publish: true,
            position: 'Software Developer',
            organization: 'Centrix Networks',
            city: 'Orlando',
            state: 'Florida',
            from: '2010-05-01',
            to: '2010-11-01',
            description: 'Created a customer relation management system',
            accomplishments: [
                'Developed a portal for technical support to organize communications with customers',
                'Created a module that imported e-mails between customers and the tech support team',
                'Maintained the company\'s main website'
            ],
            keywords: ['PHP', 'HTML', 'CSS', 'jQuery', 'git']
        },
        {
            publish: true,
            position: 'Website Administrator',
            organization: 'Volunteers in Florida',
            city: 'Orlando',
            state: 'Florida',
            from: '2008-01-01',
            to: '2009-12-01',
            description: 'In charge of maintaining both the organization\'s internal and external websites.',
            accomplishments: [
                'Resolved long standing system faults',
                'Doubled as network admin for network and computer issues'
            ],
            keywords: ['PHP', 'HTML', 'CSS']
        },
        {
            publish: true,
            position: 'Software Developer',
            organization: 'Total Custom Solutions',
            city: 'Cape Coral',
            state: 'Florida',
            from: '2003-08-01',
            to: '2006-12-01',
            description: 'Serviced the needs of numerous clients; principal among these was to migrate databases from Access 98 to MsSql 2000',
            accomplishments: [
                'Designed and maintained databases for multiple clients',
                'Coded custom modules for databases depending on client\'s requests',
                'Created server and client applications for various users',
                'Completed unfinished websites'
            ],
            keywords: ['VBA', 'Access', 'VB6', 'ASP']
        },
        {
            publish: true,
            position: 'Computer & Network Technician',
            organization: 'Chemisus Inc',
            city: 'Fort Myers',
            state: 'Florida',
            from: '2003-08-01',
            to: '2006-12-01',
            description: 'Responded to house calls to provide services for computer and network issues or requests',
            accomplishments: [
                'Experience significant word of mouth advertisement from satisfied clients',
                'Tutored clients, mostly seniors, on the use of cameras, printers and software programs',
                'Built custom high performance computers for customers to save money',
                'Repaired several computers, laptops, and network devices in clients\' homes'
            ],
            keywords: ['Networking', 'Tech Support']
        }
    ])
;
;angular.module('objective.value', [])
    .value('objective', 'To employ my significant experience as a software developer to work large, challenging projects; to deliver quality products on time and within budget; to continue to grow my technical, leadership and managerial skills.')
;
;angular.module('projects.value', [])
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
;angular.module('skills.value', [])
    .value('skills', [
        {
            title: 'Administration',
            values: [
                'MSSql',
                'MySql',
                'CouchDB',
                'Apache',
                'IIS',
                'PureFTP',
                'OpenSSH',
                'Gitolite',
                'cPanel',
                'phpMyAdmin'
            ]
        },
        {
            title: 'Languages and APIs',
            values: [
                'C',
                'C++',
                'C#',
                'VB6',
                'VB.net',
                'Java',
                'ASP',
                'ASP.net',
                'PHP',
                'Javascript',
                'jQuery',
                'AngularJS'
            ]
        },
        {
            title: 'Platforms',
            values: [
                'Fedora',
                'Ubuntu',
                'Android',
                'Windows 95, 98, 2000, XP, 7'
            ]
        },
        {
            title: 'Tools',
            values: [
                'Visual Studio',
                'Netbeans',
                'SSH',
                'SFTP',
                'git',
                'Various office software'
            ]
        }
    ])
;
