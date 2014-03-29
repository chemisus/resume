angular.module('experiences.value', [])
    .value('experiences', [
        {
            position: 'Software Engineer',
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
            position: 'Software Developer',
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
            position: 'Web Developer & Owner',
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
            position: 'Senior Developer',
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
            position: 'Web Developer',
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
            position: 'Web Developer',
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
            position: 'Web Developer',
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
            position: 'Software Developer',
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
            position: 'Website Administrator',
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
            position: 'Software Developer',
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
            position: 'Computer & Network Technician',
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
;
