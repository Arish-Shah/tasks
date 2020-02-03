import { icon } from './icon';

export function createSideBar(container, items) {
  const ul = document.createElement('ul');
  ul.className = 'nav flex-column';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'nav-item';
    li.setAttribute('data-index', index);

    li.innerHTML = `
      <a class="nav-link text-center text-muted mb-3" href="#!">
        <span class="fa ${icon[item.icon]}"></span>
      </a>
    `;

    ul.appendChild(li);
  });

  container.appendChild(ul);
  return ul.childNodes;
}

export function createSideList(container, element) {
  cleanNode(container);

  // Showing the title in the SideList
  const h4 = document.createElement('h4');
  h4.className = 'text-uppercase lead ml-3';
  h4.textContent = element.name;
  container.appendChild(h4);

  const anchors = [];
  container.appendChild(createSideListItems(element.subModules, anchors));
  return anchors;
}

function cleanNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function createSideListItems(subModules, arr) {
  const ul = document.createElement('ul');
  ul.className = 'nav flex-column';

  subModules.forEach(subModule => {
    const li = document.createElement('li');
    li.className = 'nav-item';

    const a = document.createElement('a');
    a.href = '#!';
    a.className = 'nav-link';

    // If icon exists
    let iconFlag = false;
    if (subModule.icon.trim() !== '') {
      a.innerHTML = `
        <i class="fa ${icon[subModule.icon]} mr-3"></i>${subModule.name}
      `;
      iconFlag = true;
    }

    // If children exists
    if (subModule.subModules && subModule.subModules.length) {
      a.setAttribute('data-target', `#${subModule.menuId}`);

      if (!iconFlag) {
        a.innerHTML = `
          <i class="fa fa-chevron-right mr-3"></i>${subModule.name}
        `;
      }

      const div = document.createElement('div');
      div.className = 'collapse ml-3';
      div.id = subModule.menuId;
      div.appendChild(createSideListItems(subModule.subModules, arr));

      arr.push(a);
      li.appendChild(a);
      li.appendChild(div);
    } else if (subModule.subModulesApps && subModule.subModulesApps.length) {
      a.setAttribute('data-target', `#${subModule.menuId}`);

      if (!iconFlag) {
        a.innerHTML = `
          <i class="fa fa-chevron-right mr-3"></i>${subModule.name}
        `;
      }

      const div = document.createElement('div');
      div.className = 'collapse ml-3';
      div.id = subModule.menuId;
      div.appendChild(createSideListItems(subModule.subModulesApps, arr));

      arr.push(a);
      li.appendChild(a);
      li.appendChild(div);
    } else {
      if (!iconFlag) {
        a.classList.add('ml-3');
        a.textContent = subModule.name;
      }

      li.appendChild(a);
    }

    ul.appendChild(li);
  });

  return ul;
}
