import angular from 'angular';
import tinymce from 'tinymce';
import mammoth from 'mammoth';

import { exportDoc } from './util/export-doc';

angular.module('tinymceApp', []).controller('tinyMceCtrl', $scope => {
  tinymce.init({
    selector: '#editor',
    plugins:
      'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
    menubar: 'file edit view insert format tools table',
    toolbar:
      'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
    toolbar_sticky: true,
    templates: [
      {
        title: 'New Table',
        description: 'creates a new table',
        content:
          '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>'
      },
      {
        title: 'Starting my story',
        description: 'A cure for writers block',
        content: 'Once upon a time...'
      },
      {
        title: 'New list with dates',
        description: 'New List with dates',
        content:
          '<div class="mceTmpl"><h2>My List</h2><ul><li></li><li></li></ul></div>'
      }
    ],
    height: document.documentElement.clientHeight - 50,
    image_caption: true,
    quickbars_selection_toolbar:
      'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
    noneditable_noneditable_class: 'mceNonEditable',
    toolbar_mode: 'sliding',
    contextmenu: 'link image imagetools table'
  });

  $scope.handleClick = function () {
    exportDoc(tinymce.activeEditor.getContent());
  };

  fetch('https://transportalqa-api.azurewebsites.net/Templates/123.docx')
    .then(res => res.arrayBuffer())
    .then(arrayBuffer => {
      mammoth.convertToHtml({ arrayBuffer }).then(res => {
        console.log(res);
      });
    });
});
