import $ from 'jquery';


// Using require if its buggy with es6
// ----------
// require('./components/testPlugin');
// $('body').logWidth();
//
// const test = 'test';


import {foo, logWidth} from './components/testPlugin';
logWidth();

import {toolBar} from './components/testing';
toolBar();
