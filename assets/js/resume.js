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
            description: '',
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
            description: 'Collaborated with other developers to initiate a replacement for a system reliant on failing hardware and end-of-life software. Improved performance in various applications.',
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
            description: 'Served six month contract to restructure the organization\'s internal website. The project followed agile and pair programming strategies.',
            accomplishments: [
                'Performed as lead developer and coach by mentoring or explaining concepts to other members of the team',
                'Created a spreadsheet for sprint planning; including assigning points to tasks, sprint length estimation, and generating burn-down charts',
                'Implemented Authorize.net API for payment processing',
                'Implemented OAuth for quick login with Google profiles',
                'Unit and integration tested the application with PHPUnit',
                'Used Laravel for the backend and AngularJS for the frontend frameworks',
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
            description: 'Worked with the Dean of Engineering and the Director of Engineering Outreach to create or maintain websites related to engineering at UCF.',
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
            description: 'Created the chapter\'s website and maintained it until graduation. Still involved in the site, and mentor those maintaining it.',
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
                'Performed as the lead developer in the creation of mintees.com, which came with a three week deadline that was successfully met. Created bash scripts to mine and import 13,000 user profiles and content of a site that was shutting down. This allowed users to transition to mintees.com with minimal disruptions.',
                'Created or updated sites or e-commerce stores for several clients using PHP and a proprietary content management system'
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
            description: 'Headed the creation of a customer relation management system.',
            accomplishments: [
                'Developed a portal for technical support to organize communications with customers',
                'Created a module that imported emails between the tech support team and customers into the system',
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
                'Resolved long standing bugs by previous developers',
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
            description: 'Migrated the database for several clients from Access 98 to MsSql 2000.',
            accomplishments: [
                'Designed and maintained databases for multiple clients',
                'Coded custom modules for databases depending on client\'s requests',
                'Created server and client applications for various users',
                'Completed websites abandoned from previous developers'
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
                'Repaired in-home several computers, laptops, or network devices'
            ],
            keywords: ['Networking', 'Tech Support']
        }
    ])
;
;angular.module('objective.value', [])
    .value('objective', 'I intend to employ my experience as a software developer in handling of large assignments with ability to deliver outcome within the deadline, looking forward to serve a respectable organization with my dedication & extensive experience and interested to build a long term career.')
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
