angular.module('experiences.value', [])
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
