import { DocumentEditor } from '@syncfusion/ej2-documenteditor';
import { createElement } from '@syncfusion/ej2-base';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { Button } from '@syncfusion/ej2-buttons';
import { titleStyles, buttonStyles, fetchUrl } from './util/constants';
import Placeholder from './util/placeholder';

export default class TitleBar {
  /**
   * @param {HTMLElement} element
   * @param {DocumentEditor} docEditor
   */
  constructor(element, docEditor) {
    this.titleBarDiv = element;
    this.documentEditor = docEditor;
    this.initializeTitleBar();
    this.wireEvents();
  }

  initializeTitleBar = () => {
    this.fileUpload = document.getElementById('fileUpload');
    this.fileUpload.setAttribute(
      'accept',
      '.dotx,.docx,.docm,.dot,.doc,.rtf,.txt,.xml,.sfdt'
    );

    this.documentTitle = createElement('label', {
      id: 'documenteditor_title_name',
      styles: titleStyles
    });

    this.documentTitleContentEditor = createElement('div', {
      id: 'documenteditor_title_contentEditor',
      className: 'single-line'
    });

    this.documentTitleContentEditor.appendChild(this.documentTitle);
    this.titleBarDiv.appendChild(this.documentTitleContentEditor);
    this.documentTitleContentEditor.setAttribute(
      'title',
      'Document Name. Click to Change'
    );

    let items = [
      { text: 'Microsoft Word (.docx)', id: 'word' },
      { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' }
    ];

    this.download = this.addButton(
      '',
      'Download',
      buttonStyles,
      'documenteditor-share',
      'Download this document.',
      true,
      items,
      this.onExportClick
    );

    this.placeholder = this.addButton(
      '',
      'Placeholder',
      buttonStyles,
      'documenteditor-placeholder',
      'Placeholder Example',
      false
    );

    this.saveBtn = this.addButton(
      '',
      'Save',
      buttonStyles,
      'documenteditor-save',
      'Save this Document',
      false
    );

    // this.fetchFiles();
  };

  fetchFiles = () => {
    fetch(getFiles, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((res) => {
        let items = this.getItems(res);
        this.filesButton = this.addButton(
          '',
          'Files',
          buttonStyles,
          'documenteditor-files',
          'Saved Files',
          true,
          items
        );
      })
      .catch((error) => console.log(error));
  };

  getItems = (response) => {
    /* This function is called to make the response object look similar to .NET api */
    // const obj = this.firebase(response); // set this to -> const obj = response;
    const obj = this.firebase(response);

    const items = [];
    Object.keys(obj).forEach((key, index) => {
      items.push({
        text: key,
        id: index,
        content: obj[key]
      });
    });
    return items;
  };

  firebase = (response) => {
    const ret = {};
    Object.keys(response).forEach((key) => {
      ret[response[key].docName] = response[key].contentsfdt;
    });
    return ret;
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

    this.saveBtn.element.addEventListener('click', () => {
      const docName = this.documentEditor.documentName;
      const contentsfdt = this.documentEditor.serialize();
      fetch(postFiles, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          docName,
          contentsfdt
        })
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    });

    this.fileUpload.addEventListener('change', (e) => {
      if (!e.target.files[0]) return;
      const formData = new FormData();
      formData.append('files', e.target.files[0]);

      fetch(fetchUrl, {
        method: 'POST',
        body: formData
      })
        .then((res) => res.text())
        .then((res) => {
          const ph = new Placeholder(res);
          this.documentEditor.open(
            ph.fill({
              company: 'ABC Corporation',
              country: 'India',
              date: new Date().toDateString(),
              year: 2018
            })
          );
        })
        .catch((err) => console.log(err));
    });

    this.placeholder.element.addEventListener('click', (e) => {
      this.fileUpload.click();
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

  addButton(
    iconClass,
    btnText,
    styles,
    id,
    tooltipText,
    isDropDown,
    items,
    clickCallback
  ) {
    let button = createElement('button', { id: id, styles: styles });
    this.titleBarDiv.appendChild(button);
    button.setAttribute('title', tooltipText);

    if (isDropDown) {
      let dropButton = new DropDownButton(
        {
          select: clickCallback,
          items: items,
          iconCss: iconClass,
          cssClass: '',
          content: btnText
        },
        button
      );
      return dropButton;
    } else {
      let ejButton = new Button(
        { iconCss: iconClass, content: btnText },
        button
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

  onFileClick = (args) => {
    const content = args.item.content;
    const docName = args.item.text;
    this.documentEditor.open(content);
    this.documentEditor.documentName = docName;
    this.updateDocumentTitle();
  };

  save = (format) => {
    this.documentEditor.save(
      this.documentEditor.documentName === ''
        ? 'Untitled'
        : this.documentEditor.documentName,
      format
    );
  };
}

const getFiles = 'http://localhost:50845/api/DocumentEditor/GetDocuments';

const postFiles = 'http://localhost:50845/api/DocumentEditor/SaveDocument';
