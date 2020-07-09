import { createElement } from '@syncfusion/ej2-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { Button } from '@syncfusion/ej2-buttons';
import { titleStyles, buttonStyles } from './util/styles';

export default class TitleBar {
  constructor(element, docEditor) {
    this.titleBarDiv = element;
    this.documentEditor = docEditor;
    this.initializeTitleBar();
    this.wireEvents();
  }

  initializeTitleBar = () => {
    this.documentTitle = createElement('label', {
      id: 'documenteditor_title_name',
      styles: titleStyles,
    });

    this.documentTitleContentEditor = createElement('div', {
      id: 'documenteditor_title_contentEditor',
      className: 'single-line',
    });

    this.documentTitleContentEditor.appendChild(this.documentTitle);
    this.titleBarDiv.appendChild(this.documentTitleContentEditor);
    this.documentTitleContentEditor.setAttribute(
      'title',
      'Document Name. Click to Change',
    );

    let items = [
      { text: 'Microsoft Word (.docx)', id: 'word' },
      { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' },
    ];

    this.export = this.addButton(
      'e-de-icon-Download e-de-padding-right titlebar-icon',
      'Download',
      buttonStyles,
      'documenteditor-share',
      'Download this document.',
      true,
      items,
    );
  };

  setTooltipForPopup = () => {
    document
      .getElementById('documenteditor-share-popup')
      .querySelectorAll('li')[0]
      .setAttribute(
        'title',
        'Download a copy of this document to your computer as a DOCX file.',
      );
    // tslint:disable-next-line:max-line-length
    document
      .getElementById('documenteditor-share-popup')
      .querySelectorAll('li')[1]
      .setAttribute(
        'title',
        'Download a copy of this document to your computer as an SFDT file.',
      );
  };

  wireEvents = () => {
    this.documentTitleContentEditor.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        this.documentTitleContentEditor.contentEditable = 'false';
        if (this.documentTitleContentEditor.textContent === '') {
          this.documentTitleContentEditor.textContent = 'Document1';
        }
      }
    });
    this.documentTitleContentEditor.addEventListener('blur', () => {
      if (this.documentTitleContentEditor.textContent === '') {
        this.documentTitleContentEditor.textContent = 'Document1';
      }
      this.documentTitleContentEditor.contentEditable = 'false';
      this.documentEditor.documentName = this.documentTitle.textContent;
    });
    this.documentTitleContentEditor.addEventListener('click', () => {
      this.updateDocumentEditorTitle();
    });
  };

  updateDocumentEditorTitle = () => {
    this.documentTitleContentEditor.contentEditable = 'true';
    this.documentTitleContentEditor.focus();
    window.getSelection().selectAllChildren(this.documentTitleContentEditor);
  };

  updateDocumentTitle = () => {
    if (this.documentEditor.documentName === '') {
      this.documentEditor.documentName = 'Untitled';
    }
    this.documentTitle.textContent = this.documentEditor.documentName;
  };

  addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
    let button = createElement('button', { id: id, styles: styles });
    this.titleBarDiv.appendChild(button);
    button.setAttribute('title', tooltipText);

    if (isDropDown) {
      let dropButton = new DropDownButton(
        {
          select: this.onExportClick,
          items: items,
          iconCss: iconClass,
          cssClass: 'e-caret-hide',
          content: btnText,
          open: () => {
            this.setTooltipForPopup();
          },
        },
        button,
      );
      return dropButton;
    } else {
      let ejButton = new Button(
        { iconCss: iconClass, content: btnText },
        button,
      );
      return ejButton;
    }
  }

  onPrint = () => {
    this.documentEditor.print();
  };

  onExportClick = (args) => {
    let value = args.item.id;
    switch (value) {
      case 'word':
        this.save('Docx');
        break;
      case 'sfdt':
        this.save('Sfdt');
        break;
    }
  };

  save = (format) => {
    this.documentEditor.save(
      this.documentEditor.documentName === ''
        ? 'Untitled'
        : this.documentEditor.documentName,
      format,
    );
  };
}
