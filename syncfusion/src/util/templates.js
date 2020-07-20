import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
import TitleBar from '../title-bar';
import { buttonStyles } from './constants';

import prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';

export default class Templates {
  /**
   * @param {DocumentEditor} documentEditor
   * @param {TitleBar} titleBar
   * @param {String} url
   */
  constructor(templatesUrl, titleBar, documentEditor) {
    this.templatesUrl = templatesUrl;
    this.titleBar = titleBar;
    this.documentEditor = documentEditor;
    this.templateBtn = this.titleBar.addButton(
      '',
      'Templates',
      buttonStyles,
      'documenteditor-templates',
      'Add Template to Document',
      true,
      [],
      this.onItemClick
    );
    this.init();
  }

  async init() {
    let response = await fetch(this.templatesUrl);
    response = await response.json();
    await this.renderDropdown(response);
  }

  renderDropdown(response) {
    const items = response && this.getItems(response);
    this.templateBtn = this.titleBar.addButton(
      '',
      'Templates',
      buttonStyles,
      'documenteditor-templates',
      'Add template to Document',
      true,
      items,
      this.onItemClick
    );
  }

  onItemClick = (args) => {
    this.documentEditor.editor.pasteContents(JSON.parse(args.item.content));
  };

  getItems(response) {
    const items = [];
    Object.keys(response).forEach((key) => {
      items.push({
        text: response[key].text,
        content: response[key].content
      });
    });
    return items;
  }

  async add(selection) {
    /* Unique name for the template */
    let text = window.prompt('Enter template name');
    if (!text) return;

    let start = selection.start;
    let end = selection.end;
    if (!selection.isForward) {
      start = selection.end;
      end = selection.start;
    }

    const documentContent = selection.owner.sfdtExportModule.write(
      start.currentWidget,
      start.offset,
      end.currentWidget,
      end.offset,
      true
    );
    if (selection.owner.editorModule) {
      selection.owner.editorModule.copiedData = JSON.stringify(documentContent);
    }

    const html = selection.htmlWriter.writeHtml(documentContent);
    let fullHtml = `<html><head></head><body>${html}</body></html>`;
    fullHtml = fullHtml.replace('</img>', '');

    const content = prettier.format(fullHtml, {
      plugins: [htmlParser],
      parser: 'html'
    });

    try {
      const sfdtRequest = await fetch(
        'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/SystemClipboard',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            content: content,
            type: '.html'
          })
        }
      );
      const sfdtResponseText = await sfdtRequest.text();

      const obj = await JSON.stringify({
        content: sfdtResponseText,
        text: text
      });

      await fetch(this.templatesUrl, {
        method: 'POST',
        body: obj
      });
      await this.init();
    } catch (err) {
      console.log(err);
    }
  }
}
