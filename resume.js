(function () {
    var resume = angular.module('ResumeApp', ['ngRoute']);

    resume.config(
        [
            '$routeProvider',
            function ($routeProvider) {
                $routeProvider.when('/', {
                    templateUrl: '/partials/web.html'
                });

                $routeProvider.when('/text', {
                    templateUrl: '/partials/text.html'
                });

                $routeProvider.when('/print', {
                    templateUrl: '/partials/print.html'
                });

                $routeProvider.otherwise({

                });
            }
        ]
    );

    resume.run(
        [
            '$rootScope',
            'resume',
            function ($scope, resume) {
                $scope.resume = resume;
            }
        ]
    );

    resume.value('resume', {
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
        github: 'http://github.com/chemisus',
        objective: 'I intend to employ my experience as a software developer in handling of large assignments with ability to deliver outcome within the deadline, looking forward to serve a respectable organization with my dedication & extensive experience and interested to build a long term career.',
        experiences: [
            {
                title: 'Software Developer',
                organization: 'Promo Only',
                city: 'Orlando',
                state: 'Florida',
                from: 'January 2014',
                to: 'Current',
                description: '',
                publish: false,
                accomplishments: [

                ],
                skills: [
                    'PHP',
                    'PHPUnit',
                    'Postgres Sql',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'AngularJS',
                    'REST',
                    'git'
                ]
            },
            {
                title: 'Web Developer & Owner, imgphile.com',
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
                skills: [
                    'PHP',
                    'PHPUnit',
                    'CouchDB',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'AngularJS',
                    'REST',
                    'git'
                ]
            },
            {
                title: 'Senior Developer',
                organization: 'Xulon Press',
                city: 'Orlando',
                state: 'Florida',
                from: 'April 2013',
                to: 'September 2013',
                description: 'Xulon Press is an on-demand book publisher. I was contracted for six months to help with a complete restructure of their internal company website. The project included management, quotes, orders, payment scheduling and processing, accounting, and was developed using Laravel 4 and AngularJS.',
                publish: true,
                accomplishments: [
                    'Created a spreadsheet for sprint planning; including assigning points to tasks, sprint length estimation, and generating burn-down charts.',
                    'Used Asana to track sprint progression.',
                    'Used git and GitHub to keep track of changes to the project.',
                    'Implemented Authorize.net for payment processing.',
                    'Implemented OAuth for quick login with Google information.',
                    'Implemented responsive designs using CSS3 and Bootstrap based themes.',
                    'Created unit and integration tests to be ran by phpunit and phing.',
                    'Used composer to install, update, and load third party packages.',
                    'Used Laravel 4 for the backend and AngularJS for the frontend frameworks.',
                    'Frequently used pair programming strategies.',
                    'Developed using PhpStorm',
                    'Created a script that would generate classes to tie Laravel 4\'s facades and PhpStorm\'s autocomplete functionality.',
                    'Performed as lead developer and coach by mentoring or explaining concepts.'
                ],
                skills: [
                    'PHP',
                    'PHPUnit',
                    'MySql',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'AngularJS',
                    'git'
                ]
            },
            {

                title: 'Web Developer',
                organization: 'University of Central Florida',
                city: 'Orlando',
                state: 'Florida',
                from: 'June 2011',
                to: 'December 2012',
                description: 'I was brought on to help develop the website for Innovation through Institutional Integration (ICubed), then later to take over maintenance of the websites for Young Entrepreneur Scholarships (YES) and GEMS. ICubed is an program pairs students from artistic and STEM majors collaborate to produce scientifically influenced art.',
                publish: true,
                accomplishments: [
                    'Developed the website for ICubed',
                    'Maintained the websites for outreach programs YES and GEMS'
                ],
                skills: [
                    'PHP',
                    'MySql',
                    'HTML5',
                    'CSS3',
                    'git'
                ]
            },
            {
                title: 'Web Developer, Theta Tau',
                city: 'Orlando',
                state: 'Florida',
                from: 'August 2009',
                to: 'December 2012',
                description: 'Created the chapter\'s website and maintained it for several years until graduation. I still make occasional modifications and mentor those currently in charge of it.',
                publish: true,
                accomplishments: [
                    'Created Slinpins (Dependency Injector)',
                    'Developed Dragon (PHP Framework)',
                    'Implemented Twitter\'s Bootstrap for a responsive design'
                ],
                skills: [
                    'PHP',
                    'CouchDB',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'AngularJS',
                    'git'
                ]
            },
            {
                title: 'Web Developer',
                organization: 'AKT Enterprises',
                city: 'Orlando',
                state: 'Florida',
                from: 'November 2010',
                to: 'June 2011',
                description: 'AKT specializes in marketing and promotions for bands and brands.',
                publish: true,
                accomplishments: [
                    'Recreated a site that had announced it was closing in a three week period',
                    'Created bash scripts to import all content from the closing site',
                    'Implemented a method for users to claim their account on the new site',
                    'Worked on several Content Management Systems for clients.'
                ],
                skills: [
                    'PHP',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'git'
                ]
            },
            {
                title: 'Software Developer',
                organization: 'Centrix Networks',
                city: 'Orlando',
                state: 'Florida',
                from: 'May 2010',
                to: 'November 2010',
                description: 'Centrix Networks is a VoIP telephony provider for Orlando, Florida.',
                publish: true,
                accomplishments: [
                    'Developed a portal for technical support to organize communications',
                    'Created a module that imported emails between the tech support team and customers into the system',
                    'Maintained the company\'s main website'
                ],
                skills: [
                    'PHP',
                    'HTML',
                    'CSS',
                    'jQuery',
                    'git'
                ]
            },
            {
                title: 'Website Administrator',
                organization: 'Volunteers in Florida',
                city: 'Orlando',
                state: 'Florida',
                from: 'January 2008',
                to: 'December 2009',
                description: 'Volunteers in Florida is a nonprofit organization that sends volunteers to help in social work, shelters, health care, food banks, legal services, teaching, working with farm workers, senior citizens and in other fields.',
                publish: true,
                accomplishments: [
                    'Resolved long standing bugs by previous developers',
                    'Doubled as network admin for network and computer issues.'
                ],
                skills: [
                    'PHP',
                    'HTML',
                    'CSS'
                ]
            },
            {
                title: 'Software Developer',
                organization: 'Total Custom Solutions',
                city: 'Cape Coral',
                state: 'Florida',
                from: 'August 2003',
                to: 'December 2006',
                publish: true,
                accomplishments: [
                    'Designed and maintained databases for multiple clients',
                    'Coded custom modules for databases depending on client\'s requests',
                    'Created server and client applications for various users',
                    'Completed websites abandoned from previous developers'
                ],
                skills: [
                    'VBA',
                    'Access',
                    'VB6',
                    'ASP'
                ]
            },
            {
                title: 'Computer & Network Technician',
                organization: 'Chemisus Inc.',
                city: 'Fort Myers',
                state: 'Florida',
                from: 'August 2003',
                to: 'December 2006',
                publish: true,
                accomplishments: [
                    'Responded to house calls to provide services for computer and network issues.',
                    'Tutored clients, mostly seniors, on the use of cameras, printers and software programs.'
                ],
                skills: [
                ]
            }
        ],
        projects: [
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
                    'Used an Arduino Uno and relays to control motor and linear actuator functions.',
                ],
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
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
                skills: [
                    'PHP',
                    'CouchDB',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'AngularJS',
                    'git'
                ]
            },
            {
                title: 'fodszqu.com',
                city: 'Orlando',
                state: 'Florida',
                from: 'February 2013',
                to: 'Current',
                description: '',
                publish: false,
                accomplishments: [
                ],
                skills: [
                    'PHP',
                    'CouchDB',
                    'HTML5',
                    'CSS3',
                    'jQuery',
                    'AngularJS',
                    'git'
                ]
            }
        ],
        education: [
            {
                title: 'Bachelor\'s of Computer Science',
                organization: 'University of Central Florida',
                city: 'Orlando',
                state: 'Florida',
                from: 'Spring 2007',
                to: 'Fall 2012',
                accomplishments: [
                    'Member of Theta Tau, Professional Engineering Fraternity',
                    'Member of Phi Theta Kappa, Academic Honor Society'
                ]
            }
        ],
        skills: [
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
        ]
    });

    resume.directive(
        'resume',
        [
            function () {
                return {
                    replace: true,
                    template: '' +
                        '<div data-resume-header></div>' +
                        '<div data-resume-objective></div>' +
                        '<div data-resume-experience></div>' +
                        '<div data-resume-education></div>' +
                        '<div data-resume-projects></div>' +
                        '<div data-resume-skills></div>'
                };
            }
        ]
    );

    resume.directive(
        'resumeHeader',
        [
            function () {
                return {
                    replace: true,
                    template: '<h1>{{ resume.full_name }}</h1>'
                };
            }
        ]
    );

    resume.directive(
        'resumeObjective',
        [
            function () {
                return {
                    replace: true,
                    template: '<h1>Objective</h1>'
                };
            }
        ]
    );

    resume.directive(
        'resumeExperience',
        [
            function () {
                return {
                    replace: true,
                    template: '<h1>Experience</h1>'
                };
            }
        ]
    );

    resume.directive(
        'resumeEducation',
        [
            function () {
                return {
                    replace: true,
                    template: '<h1>Education</h1>'
                };
            }
        ]
    );

    resume.directive(
        'resumeProjects',
        [
            function () {
                return {
                    replace: true,
                    template: '<h1>Projects</h1>'
                };
            }
        ]
    );

    resume.directive(
        'resumeSkills',
        [
            function () {
                return {
                    replace: true,
                    template: '<h1>Skills</h1>'
                };
            }
        ]
    );

    resume.filter(
        'implode',
        [
            function () {
                return function (array, glue) {
                    var value = '';

                    for (var i = 0; i < array.length - 1; i++) {
                        value += array[i] + glue;
                    }

                    if (array.length > 0) {
                        value += array[array.length - 1];
                    }

                    return value;
                };
            }
        ]
    )
})();
