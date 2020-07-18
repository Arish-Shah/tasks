import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
import TitleBar from '../title-bar';

export default class Templates {
  /**
   * @param {DocumentEditor} documentEditor
   * @param {TitleBar} titleBar
   * @param {String} url
   * @param {any} menuItems
   */
  constructor(templatesUrl, titleBar, documentEditor, menuItems) {
    this.templatesUrl = templatesUrl;
    this.titleBar = titleBar;
    this.documentEditor = documentEditor;
    this.menuItems = menuItems;
    this.initialize();
  }

  async initialize() {
    let response = await fetch(this.templatesUrl);
    response = await response.json();
    await this.getItems(response);
  }

  getItems(response) {}
}
