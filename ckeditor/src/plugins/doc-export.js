import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import htmlDocx from 'html-docx-js/dist/html-docx';

import { saveAs } from 'file-saver/dist/FileSaver';
import { createFile } from './util';
import juice from 'juice';

class DocumentExport extends Plugin {
  init() {
    const editor = this.editor;
    
    editor.ui.componentFactory.add('docExport', locale => {
      const view = new ButtonView(locale);
      
      view.set({
        label: 'Export',
        withText: true
      });
      
      view.on('execute', () => {
        const htmlText = editor.getData();
        this.exportHTML(htmlText);
      });
      return view;
    });
  }

  exportHTML(htmlString) {
    const { html, css } = createFile(htmlString);
    const styledHtml = juice.inlineContent(html, css);
    const docx = htmlDocx.asBlob(styledHtml);
    saveAs(docx, 'document.doc');
  }
}

export default DocumentExport;