(function () {
    var resume = angular.module('ResumeApp', []);

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
                    'Used Laravel 4 for the backend framework.',
                    'Used AngularJS for the frontend framework.',
                    'Frequently used pair programming strategies.',
                    'Developed using PhpStorm',
                    'Created a script that would generate classes to tie Laravel 4\'s facades and PhpStorm\'s autocomplete functionality.',
                    'Performed as lead developer and coach; having in many cases to teach or explain concepts.'
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
                description: 'I was brought on to help develop the website for ICubed, then later to take over maintenance of the websites for YES and GEMS.',
                publish: true,
                accomplishments: [
                    'Developed the website for ICubed',
                    'Maintained the website for YES and GEMS'
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
                description: 'Created the chapter\'s website and maintained it for several years til graduation.Even after graduation I still make occasional modifications to the website.',
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
                description: 'AKT specializes in marketing and promotions for bands and brands.My tasks were to implement and update the content management systems for a wide variety of clients.',
                publish: true,
                accomplishments: [
                    'Created mintees.com; from start to finish within a four week deadline',
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
                description: 'Centrix Networks is a VoIP telephony provider for Orlando, Florida.My main purpose was to create a portal for the technical support team to organize emails and keep track of phone calls in regards to support tickets.',
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
                description: 'Hired to maintain the organization\'s internal database and website.',
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
                    'Made house calls to provide services for computer and network issues.',
                    'Tutored clients on the use of cameras, printers and software programs.'
                ],
                skills: [
                ]
            }
        ],
        projects: [
            {
                title: 'Knight Krawler',
                description: 'A senior design project aimed at creating an electric mobile platform to turn wheelchairs into ATV\'s. I was asked to write the software to control the steering, platform lift, and motor functions. The project used an Arduino and C++.',
                publish: true,
                resources: [
                    {
                        type: 'website',
                        location: 'http://knightkrawler.net'
                    }
                ],
                accomplishments: [
                    'Used an Arduino Mega to control motor and actuator functions.',
                    'Developed code using C++'
                ],
                skills: [
                    'Arduino', 'C++'
                ]
            },
            {
                title: 'Slinpin',
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
                    'PHP', 'PHPUnit'
                ]
            },
            {
                title: 'Android Presentation',
                description: '',
                publish: false,
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
                description: 'Let\'s a user use a PS3 controller as a keyboard and mouse combination.',
                publish: true,
                resources: [
                    {
                        type: 'github',
                        location: 'http://github.com/chemisus/ps3board'
                    }
                ],
                accomplishments: [
                    'Right joystick can move the mouse.',
                    'Pressing left and right joysticks will perform left and right mouse clicks.',
                    'Combination of left joystick, and the four main buttons are mapped to almost the equivalent of a full keyboard.'
                ],
                skills: [
                    'C++'
                ]
            },
            {
                title: 'Awesome Defense',
                description: '',
                publish: false,
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
})();
