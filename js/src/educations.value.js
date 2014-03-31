angular.module('educations.value', [])
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
