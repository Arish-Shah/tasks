import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.min.js';

import data from '../data/menu3.json';
import { createSideBar, createSideList } from './ui';

const sideBar = document.querySelector('#side-bar');
const sideList = document.querySelector('#side-list');
const sidebarIcons = createSideBar(sideBar, data);

sidebarIcons.forEach(icon => {
  icon.addEventListener('mousedown', function() {
    const a = this.querySelector('a');

    if (a.classList.contains('text-light')) {
      sideList.style.transform = 'translateX(-100%)';
    } else {
      sidebarIcons.forEach(sbIcon => {
        sbIcon.querySelector('a').classList.remove('text-light');
      });

      sideList.style.transform = 'translateX(0)';

      const index = this.getAttribute('data-index');
      const sideListAnchors = createSideList(sideList, data[index]);

      addOpenListener(sideListAnchors);
    }
    a.classList.toggle('text-light');
  });
});

function addOpenListener(anchorArr) {
  anchorArr.forEach(a => {
    a.addEventListener('click', function() {
      const insideItems = this.nextElementSibling;

      if (insideItems.classList.contains('show')) {
        insideItems.classList.remove('show');
        const svg = this.querySelector('svg');
        svg.classList.remove('fa-chevron-down');
        svg.classList.add('fa-chevron-right');
      } else {
        insideItems.classList.add('show');
        const svg = this.querySelector('svg');
        svg.classList.remove('fa-chevron-right');
        svg.classList.add('fa-chevron-down');
      }
    });
  });
}

window.addEventListener('click', function(event) {
  if (event.target.classList.contains('html')) {
    sideList.style.transform = 'translateX(-100%)';

    const anchors = this.document.querySelectorAll('a');
    anchors.forEach(a => {
      if (a.classList.contains('text-light')) {
        a.classList.remove('text-light');
      }
    });
  }
});
