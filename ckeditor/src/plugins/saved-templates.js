import { 
  createDropdown, 
  addListToDropdown
} from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';

class SavedTemplates {
  static init() {
    this.templates = [];
    this.items = new Collection();
    this.createPlugin();
  }

  static createPlugin() {
    const toolbar = document.querySelector('.ck-toolbar__items');

    for (const template of this.templates) {
      this.addToDropdown(template);
    }

    this.dropdown = createDropdown(editor.locale);
    this.dropdown.buttonView.set({
      label: 'Templates',
      withText: true
    });
    addListToDropdown(this.dropdown, this.items);
    this.dropdown.render();
    
    const items = this.getChildNodes();
    items.forEach((item, index) => {
      this.hydrate(item, this.templates[index]);
    });
    
    toolbar.appendChild(this.dropdown.element);
  }

  static add(template) {
    this.templates.push(template);
    this.addToDropdown(template);
    this.hydrate(this.getAddedNode(), template);
  }

  static addToDropdown(template) {
    this.items.add({ 
      type: 'button', 
      model: new Model({
        withText: true,
        label: template
      }) 
    });
  }

  static hydrate(listItem, template) {
    const span = listItem.querySelector('.ck-button__label');
    span.innerHTML = template;
    listItem.addEventListener('click', () => this.handleClick(template));
  }

  static handleClick(html) {
    const viewFragment = editor.data.processor.toView(html);
    const modelFragment = editor.data.toModel(viewFragment);
    editor.model.insertContent(modelFragment);
  }

  static getAddedNode() {
    const childNodes = this.getChildNodes();
    return childNodes[childNodes.length - 1]; 
  }

  static getChildNodes() {
    return this.dropdown.listView.element.childNodes
  }
}

export default SavedTemplates;