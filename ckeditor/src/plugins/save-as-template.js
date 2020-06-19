import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';
import SavedTemplates from './saved-templates';

class SaveAsTemplate extends Plugin {
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add('saveAsTemplate', locale => {
      const view = new ButtonView(locale);

      view.set({
        label: 'Save as Template',
        withText: true
      });

      view.on('execute', () => {
        const selection = editor.model.document.selection;
        const fragment = editor.model.getSelectedContent(selection);

        SavedTemplates.add(editor.data.stringify(fragment), true);

        editor.model.change(writer => {
          const position = selection.isBackward
            ? selection.getFirstPosition()
            : selection.getLastPosition();
          writer.setSelection(writer.createPositionAt(position));
        });
      });
      return view;
    });
  }
}

export default SaveAsTemplate;
