import {
  DocumentEditorContainer,
  Toolbar
} from '@syncfusion/ej2-documenteditor';
import { serviceUrl } from './util/styles';
import { enableRipple } from '@syncfusion/ej2-base';
import TitleBar from './title-bar';

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
  titleBar.updateDocumentTitle();
  container.documentEditor.focusIn();
};
