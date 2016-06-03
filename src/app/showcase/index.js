'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../dashboard'),
        require('../signup'),
        require('../login')

    ])
    .config(require('./config'))
    .config(require('./route'));
