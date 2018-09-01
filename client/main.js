import { Template } from 'meteor/templating';

import './main.html';
import renderedChecker from './renderedChecker.js';

Template.hello.onRendered(function helloOnCreated() {
  (async function waitForElement() {
    let rendered = await renderedChecker('#js-change-color')
    if (rendered) {
      let elem = document.querySelector('#js-change-color');
      elem.style.color = 'red';
    }
  }());
});
