import {
  DocumentEditorContainer,
  Toolbar,
} from '@syncfusion/ej2-documenteditor';
// import { TitleBar } from './title-bar';
import { serviceUrl } from './util';
import '@syncfusion/ej2/fabric.css';
import './global.css';

DocumentEditorContainer.Inject(Toolbar);
const editor = new DocumentEditorContainer({
  enableToolbar: true,
  height: document.documentElement.clientHeight - 37 + 'px',
  serviceUrl,
});

editor.appendTo('#editor');
