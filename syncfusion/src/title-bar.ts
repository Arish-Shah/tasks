import { createElement, Event, KeyboardEventArgs } from '@syncfusion/ej2-base';
import { DocumentEditor, FormatType } from '@syncfusion/ej2-documenteditor';
import { Button } from '@syncfusion/ej2-buttons';
import { DropDownButton, ItemModel } from '@syncfusion/ej2-splitbuttons';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

import { buttonStyles, documentTitleStyles } from './util/styles';

export class TitleBar {
  private title: HTMLElement;
  private documentTitleContentEditor: HTMLElement;
  private print: Button;
  private open: Button;
  private export: DropDownButton;

  constructor(
    private container: HTMLElement,
    private editor: DocumentEditor,
    private isShareNeeded: boolean
  ) {
    this.init();
    this.wireEvents();
  }

  init() {
    this.title = createElement('label', {
      id: 'documenteditor_title_name',
      styles: documentTitleStyles
    });
    this.documentTitleContentEditor = createElement('div', {
      id: 'documenteditor_title_contentEditor',
      className: 'single-line'
    });

    this.documentTitleContentEditor.appendChild(this.title);
    this.container.appendChild(this.documentTitleContentEditor);

    this.documentTitleContentEditor.setAttribute(
      'title',
      'Document Name. Click or tap to rename this document.'
    );

    this.print = this.addButton(
      'e-de-icon-Print e-de-padding-right',
      'Print',
      buttonStyles,
      'de-print',
      'Print this document (Ctrl + P)',
      false
    ) as Button;

    this.open = this.addButton(
      'e-de-icon-Open e-de-padding-right',
      'Open',
      buttonStyles,
      'de-open',
      'Open',
      false
    ) as Button;

    const items = [
      { text: 'Microsoft Word (.docx)', id: 'word' },
      { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' }
    ];

    this.export = this.addButton(
      'e-de-icon-Download e-de-padding-right',
      'Download',
      buttonStyles,
      'documenteditor-share',
      'Download this Document',
      true,
      items
    ) as DropDownButton;

    if (!this.isShareNeeded) {
      this.export.element.style.display = 'none';
    } else {
      this.export.element.style.display = 'display';
    }
  }

  addButton(
    iconClass: string,
    btnText: string,
    styles: string,
    id: string,
    tooltipText: string,
    isDropDown: boolean,
    items?: ItemModel[]
  ): Button | DropDownButton {
    let button: HTMLButtonElement = createElement('button', {
      id: id,
      styles: styles
    }) as HTMLButtonElement;
    this.container.appendChild(button);
    button.setAttribute('title', tooltipText);

    if (isDropDown) {
      let dropButton: DropDownButton = new DropDownButton(
        {
          select: this.onExportClick,
          items: items,
          iconCss: iconClass,
          cssClass: 'e-caret-hide',
          content: btnText,
          open: (): void => {
            this.setTooltipForPopup();
          }
        },
        button
      );
      return dropButton;
    } else {
      let ejButton: Button = new Button(
        { iconCss: iconClass, content: btnText },
        button
      );
      return ejButton;
    }
  }

  private wireEvents = (): void => {
    this.print.element.addEventListener('click', this.onPrint);
    this.open.element.addEventListener('click', (e: Event) => {
      if ((e.target as HTMLInputElement).id === 'de-open') {
        let fileUpload: HTMLInputElement = document.getElementById(
          'uploadfileButton'
        ) as HTMLInputElement;
        fileUpload.value = '';
        fileUpload.click();
      }
    });
    this.documentTitleContentEditor.addEventListener(
      'keydown',
      (e: KeyboardEventArgs) => {
        if (e.keyCode === 13) {
          e.preventDefault();
          this.documentTitleContentEditor.contentEditable = 'false';
          if (this.documentTitleContentEditor.textContent === '') {
            this.documentTitleContentEditor.textContent = 'Document1';
          }
        }
      }
    );
    this.documentTitleContentEditor.addEventListener('blur', (): void => {
      if (this.documentTitleContentEditor.textContent === '') {
        this.documentTitleContentEditor.textContent = 'Document1';
      }
      this.documentTitleContentEditor.contentEditable = 'false';
      this.editor.documentName = this.title.textContent;
    });
    this.documentTitleContentEditor.addEventListener('click', (): void => {
      this.updateDocumentEditorTitle();
    });
  };

  private setTooltipForPopup(): void {
    document
      .getElementById('documenteditor-share-popup')
      .querySelectorAll('li')[0]
      .setAttribute(
        'title',
        'Download a copy of this document to your computer as a DOCX file.'
      );
    document
      .getElementById('documenteditor-share-popup')
      .querySelectorAll('li')[1]
      .setAttribute(
        'title',
        'Download a copy of this document to your computer as an SFDT file.'
      );
  }

  private onExportClick = (args: MenuEventArgs): void => {
    let value: string = args.item.id;
    switch (value) {
      case 'word':
        this.save('Docx');
        break;
      case 'sfdt':
        this.save('Sfdt');
        break;
    }
  };

  private updateDocumentEditorTitle = (): void => {
    this.documentTitleContentEditor.contentEditable = 'true';
    this.documentTitleContentEditor.focus();
    window.getSelection().selectAllChildren(this.documentTitleContentEditor);
  };

  public updateDocumentTitle = (): void => {
    if (this.editor.documentName === '') {
      this.editor.documentName = 'Untitled';
    }
    this.title.textContent = this.editor.documentName;
  };

  private save = (format: string): void => {
    this.editor.save(
      this.editor.documentName === '' ? 'sample' : this.editor.documentName,
      format as FormatType
    );
  };

  private onPrint = (): void => {
    this.editor.print();
  };
}
