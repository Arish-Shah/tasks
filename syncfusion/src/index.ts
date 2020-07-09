import {
  DocumentEditorContainer,
  Toolbar
} from '@syncfusion/ej2-documenteditor';
import './style.css';
import { TitleBar } from './title-bar';

DocumentEditorContainer.Inject(Toolbar);

let editor = new DocumentEditorContainer({
  enableToolbar: true,
  height: document.documentElement.clientHeight + 'px'
});

editor.appendTo('#DocumentEditor');

const titleBar = new TitleBar(
  document.getElementById('documenteditor_titlebar') as HTMLElement,
  editor.documentEditor,
  true
);
editor.documentEditor.documentName = 'Sample';
titleBar.updateDocumentTitle();

editor.onDocumentChange = () => {
  titleBar.updateDocumentTitle();
  editor.documentEditor.focusIn();
};
