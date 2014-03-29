angular.module('contact.value', [])
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
