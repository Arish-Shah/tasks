import tinymce from 'tinymce';

tinymce.init({
  selector: '#editor',
  setup(editor) {
    editor.on('keyup', (e) => console.log(e.getContents()));
  }
});
