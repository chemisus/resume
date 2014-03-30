angular.module('experiences.value', [])
    .value('experiences', [
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
                'Created a tool that would import spreadsheets containing a radio station\'s track spins information, then generate reports. This eliminated a weeks worth of calculations previously performed by hand',
                'Currently working on a cart system to replace the current software, which is no longer supported'
            ],
            keywords: ['PHP', 'PHPUnit', 'PostgreSql', 'HTML5', 'CSS3', 'jQuery', 'AngularJS', 'REST', 'git']
        },
        {
            position: 'Senior Developer',
            organization: 'Xulon Press',
            city: 'Orlando',
            state: 'Florida',
            from: 'April 2013',
            to: 'September 2013',
            description: 'Served six month contract to restructure the organization\'s internal website. The project followed agile and pair programming strategies.',
            publish: true,
            accomplishments: [
                'Performed as lead developer and coach by mentoring or explaining concepts to other members of the team',
                'Created a spreadsheet for sprint planning; including assigning points to tasks, sprint length estimation, and generating burn-down charts',
                'Implemented Authorize.net API for payment processing',
                'Implemented OAuth for quick login with Google profiles',
                'Unit and integration tested the application with phpunit',
                'Used Laravel for the backend and AngularJS for the frontend frameworks',
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
            description: 'Worked with the Dean of Engineering and the Director of Engineering Outreach to create or maintain websites related to engineering at UCF.',
            publish: true,
            accomplishments: [
                'Developed the website for UCF\'s program for Innovation through Institutional Integration',
                'Maintained the websites for the outreach programs Young Entrepreneur Scholars (YES) and Girls Excelling in Math and Science (GEMS)'
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
            description: 'Created the chapter\'s website and maintained it until graduation. Still involved in the site, and mentor those maintaining it.',
            publish: true,
            accomplishments: [
                'Prepared the site using Linux, Apache, MySql, and PHP',
                'Mentor new students on how to update the site using ssh and git',
                'Used as a test environment to learn about custom frameworks and dependency injection libraries'
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
            description: 'Developed mintees.com as well as several sites for various clients.',
            publish: true,
            accomplishments: [
                'Performed as the lead developer in the creation of mintees.com, which came with a three week deadline that was successfully met. Created bash scripts to mine and import 13,000 user profiles and content of a site that was shutting down. This allowed users to transition to mintees.com with minimal disruptions.',
                'Created or updated sites or e-commerce stores for several clients using PHP and a proprietary content management system'
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
            description: 'Centrix Networks is a VoIP telephony provider for Orlando, Florida',
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
            description: 'Volunteers in Florida is a nonprofit organization that sends volunteers to help in social work, shelters, health care, food banks, legal services, teaching, working with farm workers, senior citizens and in other fields',
            publish: true,
            accomplishments: [
                'Resolved long standing bugs by previous developers',
                'Doubled as network admin for network and computer issues'
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
            organization: 'Chemisus Inc',
            city: 'Fort Myers',
            state: 'Florida',
            from: 'August 2003',
            to: 'December 2006',
            publish: true,
            description: '',
            accomplishments: [
                'Responded to house calls to provide services for computer and network issues',
                'Tutored clients, mostly seniors, on the use of cameras, printers and software programs'
            ],
            keywords: [
            ]
        }
    ])
;
