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
  }
};
