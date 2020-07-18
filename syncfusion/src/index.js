import {
  DocumentEditorContainer,
  Toolbar
} from '@syncfusion/ej2-documenteditor';
import { serviceUrl } from './util/constants';
import { enableRipple } from '@syncfusion/ej2-base';
import TitleBar from './title-bar';
import Templates from './util/templates';

import '@syncfusion/ej2/fabric.css';
import './global.css';

enableRipple(true);
DocumentEditorContainer.Inject(Toolbar);
const container = new DocumentEditorContainer({
  enableToolbar: true,
  height: document.documentElement.clientHeight - 37 + 'px',
  serviceUrl
});
container.appendTo('#container');

let titleBar = new TitleBar(
  document.getElementById('documenteditor_titlebar'),
  container.documentEditor
);
titleBar.updateDocumentTitle();

container.documentChange = () => {
  container.documentEditor.focusIn();
};

const menuItems = [
  {
    text: 'Save as Template',
    id: 'save_as_template'
  }
];

container.documentEditor.contextMenu.addCustomMenu(menuItems, false);

let templates = new Templates(
  'https://syncfusion-poc.firebaseio.com/templates.json',
  titleBar,
  container.documentEditor
);

container.documentEditor.customContextMenuSelect = async (args) => {
  if (args.id === container.documentEditor.element.id + 'save_as_template') {
    const selection = container.documentEditor.selection;
    templates.add(selection);

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
    const content = `
      <html>
        <head></head>
        <body>${html}</body>
      </html>
    `;

    let response = await fetch(
      'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/SystemClipboard',
      {
        method: 'POST',
        body: JSON.stringify({ content, type: '.html' }),
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      }
    );

    response = await response.json();
    await container.documentEditor.editor.pasteContents(response);

    // This method is pasting at the same place so it is not visible, but its working
  }
};
