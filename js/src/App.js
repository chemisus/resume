angular.module('App', ['ngRoute'])
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
    .value('objective', 'I intend to employ my experience as a software developer in handling of large assignments with ability to deliver outcome within the deadline, looking forward to serve a respectable organization with my dedication & extensive experience and interested to build a long term career.')
    .value('experiences', [
        {
            title: 'Software Engineer',
            organization: 'Fodszqu',
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
            title: 'Software Developer',
            organization: 'Promo Only',
            city: 'Orlando',
            state: 'Florida',
            from: 'January 2014',
            to: 'Current',
            description: '',
            publish: true,
            accomplishments: [
                'Reduced report generation time by 83% by restructuring database tables and optimizing queries',
                'Created a tool that would import spreadsheets containing a radio station\'s track spins information, then generate reports',
                'Currently working on a replacement for a cart system where the current system\'s software is no longer supported'
            ],
            keywords: ['PHP', 'PHPUnit', 'Postgres Sql', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'REST', 'git']
        },
        {
            title: 'Web Developer & Owner',
            organization: 'imgphile.com',
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
                'Implemented Authorize.net for payment processing.',
                'Implemented OAuth for quick login with Google information.',
                'Created unit and integration tests to be ran by phpunit and phing.',
                'Used composer to install, update, and load third party packages.',
                'Used Laravel for the backend and AngularJS for the frontend frameworks.',
                'Frequently used pair programming strategies.',
                'Created a script that would generate classes to tie Laravel 4\'s facades and PhpStorm\'s autocomplete functionality.',
                'Performed as lead developer and coach by mentoring or explaining concepts.'
            ],
            keywords: ['PHP', 'PHPUnit', 'MySql', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'git']
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
            keywords: ['PHP', 'MySql', 'HTML5', 'CSS3', 'git']
        },
        {
            title: 'Web Developer',
            organization: 'Theta Tau',
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
            keywords: ['PHP', 'CouchDB', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'git']
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
            keywords: ['PHP', 'HTML5', 'CSS3', 'jQuery', 'git']
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
            keywords: ['PHP', 'HTML', 'CSS', 'jQuery', 'git']
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
            keywords: ['PHP', 'HTML', 'CSS']
        },
        {
            title: 'Software Developer',
            organization: 'Total Custom Solutions',
            city: 'Cape Coral',
            state: 'Florida',
            from: 'August 2003',
            to: 'December 2006',
            publish: true,
            description: '',
            accomplishments: [
                'Designed and maintained databases for multiple clients',
                'Coded custom modules for databases depending on client\'s requests',
                'Created server and client applications for various users',
                'Completed websites abandoned from previous developers'
            ],
            keywords: ['VBA', 'Access', 'VB6', 'ASP']
        },
        {
            title: 'Computer & Network Technician',
            organization: 'Chemisus Inc.',
            city: 'Fort Myers',
            state: 'Florida',
            from: 'August 2003',
            to: 'December 2006',
            publish: true,
            description: '',
            accomplishments: [
                'Responded to house calls to provide services for computer and network issues.',
                'Tutored clients, mostly seniors, on the use of cameras, printers and software programs.'
            ],
            keywords: [
            ]
        }
    ])
    .value('projects', [
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
    .value('educations', [
        {
            title: 'Bachelor\'s of Computer Science',
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
    .directive('contact', function (contact) {
        return {
            replace: true,
            template: '<section>' +
                '<h1>' + contact.full_name + '</h1>' +
                '</section>'
        };
    })
    .directive('objective', function (objective) {
        return {
            replace: true,
            template: '<section>' +
                '<h1>Objective</h1>' +
                '<p>' + objective + '</p>' +
                '</section>'
        };
    })
    .directive('experience', function (experiences) {
        return {
            replace: true,
            template: '<section>' +
                '<h1>Experience</h1>' +
                experiences.filter(function (experience) {
                    return experience.publish;
                }).map(function (experience) {
                    return '<section>' +
                        '<h1>' + experience.title + ', ' + experience.organization + '</h1>' +
                        '<div>' + experience.city + ', ' + experience.state + '</div>' +
                        '<div>' + experience.from + ' - ' + experience.to + '</div>' +
                        '<p>' + experience.description + '</p>' +
                        '<section data-accomplishments>' +
                        '<h1>Accomplishments</h1>' +
                        '<ul>' +
                        experience.accomplishments.map(function (value) {
                            return '<li>' + value + '</li>';
                        }).join('') +
                        '</ul>' +
                        '</section>' +
                        '<section data-keywords>' +
                        '<h1>Keywords</h1>' +
                        '<ul>' +
                        experience.keywords.map(function (value) {
                            return '<li>' + value + '</li>';
                        }).join('') +
                        '</ul>' +
                        '</section>' +
                        '</section>';
                }).join('') +
                '</section>'
        };
    })
    .directive('education', function (educations) {
        return {
            replace: true,
            template: '<section>' +
                '<h1>Education</h1>' +
                educations.filter(function (education) {
                    return education.publish;
                }).map(function (education) {
                    return '<section>' +
                        '<h1>' + education.title + ', ' + education.organization + '</h1>' +
                        '<div>' + education.city + ', ' + education.state + '</div>' +
                        '<div>' + education.from + ' - ' + education.to + '</div>' +
                        '<p>' + education.description + '</p>' +
                        '<section data-accomplishments>' +
                        '<h1>Accomplishments</h1>' +
                        '<ul>' +
                        education.accomplishments.map(function (value) {
                            return '<li>' + value + '</li>';
                        }).join('') +
                        '</ul>' +
                        '</section>' +
                        '</section>';
                }).join('') +
                '</section>'
        };
    })
    .directive('projects', function (projects) {
        return {
            replace: true,
            template: '<section>' +
                '<h1>Projects</h1>' +
                projects.filter(function (project) {
                    return project.publish;
                }).map(function (project) {
                    return '<section>' +
                        '<h1>' + project.title + '</h1>' +
                        '<p>' + project.description + '</p>' +
                        '<section data-accomplishments>' +
                        '<h1>Accomplishments</h1>' +
                        '<ul>' +
                        project.accomplishments.map(function (value) {
                            return '<li>' + value + '</li>';
                        }).join('') +
                        '</ul>' +
                        '</section>' +
                        '<section data-keywords>' +
                        '<h1>Keywords</h1>' +
                        '<ul>' +
                        project.keywords.map(function (value) {
                            return '<li>' + value + '</li>';
                        }).join('') +
                        '</ul>' +
                        '</section>' +
                        '</section>';
                }).join('') +
                '</section>'
        };
    })
    .directive('skills', function (skills) {
        return {
            replace: true,
            template: '<section>' +
                '<h1>Skills</h1>' +
                skills.map(function (category) {
                    return '<section>' +
                        '<h1>' + category.title + '</h1>' +
                        '<ul>' +
                        category.values.map(function (skill) {
                            return '<li>' + skill + '</li>';
                        }).join('') +
                        '</ul>' +
                        '</section>';
                }).join('') +
                '</section>'
        };
    })
;
