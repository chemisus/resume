(function () {
    const app = angular.module('resume', []);

    app.value('resume', {
        "name": "Terrence Howard",
        "email": "terrence.howard@knights.ucf.edu",
        "phone": "(239) 222-1246",
        "github": "https://github.com/chemisus",
        "occupation": "Software Developer",
        "experiences": [
            {
                "organization": "ProQuest",
                "title": "Senior Software Developer",
                "start": "2015-01-26",
                "city": "Alexandria",
                "state": "VA",
                "roles": [
                    "Maintained & optimized web services used by various applications",
                ],
                "tasks": [
                    "Handled critical issues experienced on live environments; fixed bugs and/or data issues reported by QA or customer service; patched bugs found in solr and solr plugins; created and executed import scripts for customers, users, or internal staff",
                    "Created and maintained docker containers for developer sandboxes",
                    "Participated in standup meetings and architecture review board; reviewed code changes submitted by other developers; generated usage and performance reports",
                ],
                "accomplishments": [
                    "Reduced response times for searches submitted by end users at an average of 75% (extreme cases reduced by 87%) by refactoring or replacing components responsible for building solr queries; daily number of searches submitted increased by 183% over the same time period",
                    "Enhanced data retrieval for client applications by creating & implementing an open source graphql library (github.com/chemisus/graphql) that replaced several REST endpoints; optimized database usage by building smarter, asynchronous, and concurrent solr & mysql queries",
                    "Added vpn and proxy detection to meet contractual requirements to host content for IP holders",
                    "Introduced multi-site behavior allowing content hosting for other vendors",
                    "Reduced time required to resolve bugs and performance issues by adding tracing info throughout the stack",
                ],
                "keywords": [
                    "php",
                    "solr",
                    "java",
                    "git",
                    "python",
                    "node",
                    "mysql",
                    "xml",
                    "docker",
                    "jenkins",
                    "linux",
                    "html",
                    "css",
                    "angular.js",
                ],
            },
            {
                "organization": "Promo Only",
                "title": "Software Developer",
                "start": "2014-01-01",
                "end": "2014-12-31",
                "city": "Orlando",
                "state": "FL",
                "roles": [
                    "Original developer of promoonly.ca, an e-cart & billing system for online & by-mail subscriptions",
                ],
                "tasks": [],
                "accomplishments": [
                    "Created tools to import monthly product information, eliminating a weeks worth of manual data entry",
                    "Reduced track stats report generation time by 83% by restructuring data storage and refactoring queries",
                ],
                "keywords": [
                    "php",
                    "postgresql",
                    "html",
                    "css",
                    "jquery",
                    "angular.js",
                    "git",
                    "linux",
                ],
            },
            {
                "organization": "Xulon Press",
                "title": "Lead Software Developer",
                "start": "2013-04-01",
                "end": "2013-10-01",
                "city": "Orlando",
                "state": "FL",
                "roles": [
                    "Independently contracted as lead developer and tutor to other team members",
                ],
                "tasks": [
                    "Assisted project manager with milestone definitions, sprint planning, and team progress assessment",
                    "Implemented components for quick login via OAuth, and payment processing via Authorize.net",
                ],
                "accomplishments": [],
                "keywords": [
                    "php",
                    "mysql",
                    "html",
                    "css",
                    "jquery",
                    "angular.js",
                    "git",
                ],
            },
            {
                "organization": "University of Central Florida",
                "title": "Software Developer",
                "start": "2011-06-01",
                "end": "2012-12-12",
                "city": "Orlando",
                "state": "FL",
                "roles": [],
                "tasks": [],
                "accomplishments": [
                    "Maintained program websites for Innovation through Institutional Integration, Young Entrepreneur Scholars, and Girls Excelling in Math and Science"
                ],
                "keywords": [
                    "php",
                    "mysql",
                    "html",
                    "css",
                    "linux",
                ],
            },
            {
                "organization": "AKT Enterprises",
                "title": "Software Developer",
                "start": "2010-11-01",
                "end": "2011-06-01",
                "city": "Orlando",
                "state": "FL",
                "roles": [
                    "Created and updated sites and e-commerce stores for several clients",
                ],
                "tasks": [],
                "accomplishments": [
                    "Original developer of mintees.com; up and running within three weeks to fill demand for niche market",
                ],
                "keywords": [
                    "php",
                    "html",
                    "css",
                    "jquery",
                ],
            },
            {
                "organization": "Centrix Networks",
                "title": "Software Developer",
                "start": "2010-05-01",
                "end": "2010-11-01",
                "city": "Orlando",
                "state": "FL",
                "roles": [],
                "tasks": [],
                "accomplishments": [
                    "Created a system to organize phone & email communications between customers and staff",
                    "Maintained the company's external website",
                ],
                "keywords": [
                    "php",
                    "html",
                    "css",
                    "jquery",
                    "git",
                ],
            },
            {
                "organization": "CVIF",
                "title": "Website Administrator",
                "start": "2008-01-01",
                "end": "2009-12-01",
                "city": "Orlando",
                "state": "FL",
                "roles": [],
                "tasks": [
                    "Responsible for maintaining the office's internal & external websites",
                    "Handled network, computer, and internet issues experienced by staff members",
                ],
                "accomplishments": [],
                "keywords": [
                    "php",
                    "html",
                    "css",
                ],
            },
            {
                "organization": "Total Custom Solutions",
                "title": "Software Developer",
                "start": "2003-08-01",
                "end": "2006-12-01",
                "city": "Cape Coral",
                "state": "FL",
                "roles": [
                    "Improved databases & database modules to meet the needs of customers",
                ],
                "tasks": [],
                "accomplishments": [],
                "keywords": [
                    "vba",
                    "access98",
                    "vb6",
                    "asp",
                ],
            },
        ],
        "educations": [
            {
                "organization": "University of Central Florida",
                "title": "Bachelor's of Computer Science",
                "end": "2012-12-12",
                "city": "Orlando",
                "state": "FL",
                "tasks": [],
                "accomplishments": [
                    "Member of Theta Tau, Professional Engineering Fraternity",
                    "Member of Phi Theta Kappa, Academic Honor Society",
                ],
                "keywords": [],
            },
            // {
            //     "organization": "Florida South Western",
            //     "title": "Associate of Science",
            //     "end": "2006-12-12",
            //     "city": "Fort Myers",
            //     "state": "FL",
            //     "tasks": [],
            //     "accomplishments": [
            //     ],
            //     "keywords": [],
            // }
        ],
    });

    app.config(function ($locationProvider) {
        $locationProvider.html5Mode(true);
    });

    app.run(function ($rootScope, resume) {
        $rootScope.resume = resume;
    });

    app.factory('terms', function ($location) {
        return ($location.search().search || '').toLowerCase().split(' ');
    });

    app.filter('duration', function () {
        return function (start, end) {
            start = new Date(start);
            end = new Date(end || new Date());

            const months = end.getMonth() - start.getMonth() + (12 * (end.getFullYear() - start.getFullYear()));
            const m = months % 12;
            const y = Math.floor(months / 12);

            let s = `${m}m`;

            if (y > 0) {
                s = `${y}y ${s}`;
            }

            return s;
        };
    });

    app.filter('search', function (terms) {
        return function (items) {
            if (!terms.length) {
                return items;
            }

            return items.filter(item => terms.filter(term => item.toLowerCase().indexOf(term) !== -1).length > 0);
        };
    });

    app.directive('listing', function () {
        return {
            templateUrl: 'listing.html',
            scope: {
                listing: '=',
            },
        };
    });
})();
