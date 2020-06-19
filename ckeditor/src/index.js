import DecoupledEditor from '@ckeditor/ckeditor5-editor-decoupled/src/decouplededitor';
import BalloonToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/balloon/balloontoolbar';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import StrikeThrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import List from '@ckeditor/ckeditor5-list/src/list';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';

import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';

import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';

import SaveAsTemplate from './plugins/save-as-template';
import SavedTemplates from './plugins/saved-templates';
import DocumentExport from './plugins/doc-export';

DecoupledEditor.create(document.querySelector('.document-editor__editable'), {
  plugins: [
    Essentials,
    BalloonToolbar,
    Paragraph,
    Bold,
    Italic,
    Underline,
    StrikeThrough,
    Heading,
    Alignment,
    List,
    Indent,
    Table,
    TableToolbar,
    BlockQuote,
    HorizontalLine,
    Undo,
    PageBreak,
    EasyImage,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    SaveAsTemplate,
    DocumentExport
  ],
  toolbar: [
    'docExport',
    '|',
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    '|',
    'alignment',
    '|',
    'numberedList',
    'bulletedList',
    '|',
    'indent',
    'outdent',
    '|',
    'blockquote',
    'imageUpload',
    'insertTable',
    'horizontalLine',
    '|',
    'undo',
    'redo',
    '|',
    'pageBreak',
  ],
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },
  balloonToolbar: ['bold', 'italic', '|', 'saveAsTemplate'],
  image: {
    toolbar: [
      'imageTextAlternative',
      '|',
      'imageStyle:alignLeft',
      'imageStyle:full',
      'imageStyle:alignRight'
    ],
    styles: ['full', 'alignLeft', 'alignRight']
  },
  cloudServices: {
    // To Upload Images
    tokenUrl: '',
    uploadUrl: ''
  }
})
  .then(editor => {
    const toolbarContainer = document.querySelector(
      '.document-editor__toolbar'
    );
    toolbarContainer.appendChild(editor.ui.view.toolbar.element);
    window.editor = editor;
    SavedTemplates.init();
  })
  .catch(error => console.error(error.stack));
