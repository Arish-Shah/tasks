class SavedTemplates {
  static init() {
    // we can even fetch templates here
    this.templates = [];
    this.render();
  }

  static add(template) {
    this.templates.push(template);
    this.render();
  }

  static render() {
    this.root = document.querySelector('.saved-templates');
    this.cleanNode(this.root);

    for (const template of this.templates) {
      const div = document.createElement('div');
      div.classList = 'saved-template';
      div.innerHTML = template;
      div.addEventListener('click', this.handleClick);
      this.root.appendChild(div);
    }
  }

  static handleClick() {
    const html = this.innerHTML;
    const viewFragment = editor.data.processor.toView(html);
    const modelFragment = editor.data.toModel(viewFragment);
    editor.model.insertContent(modelFragment);
  }

  static cleanNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }
}

export default SavedTemplates;