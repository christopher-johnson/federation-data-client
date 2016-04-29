"use strict";

require('./ldf-client-jquery-url.js');
require('./ldf-client-widget.js');
var $ = require('jquery');
require('./chosen-1.1.0.js');
require('bootstrap');
module.exports.$ = $;

$(function ($) {
    $('.ldf-client').queryui({ settings: 'queries.json' });
});
