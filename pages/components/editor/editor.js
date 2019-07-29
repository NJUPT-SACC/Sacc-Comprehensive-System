import React from 'react'
import './editor.less'
let monaco;

if (typeof window !== 'undefined') {
  monaco = require("monaco-editor/esm/vs/editor/edcore.main");
  import('monaco-themes/themes/Amy.json')
    .then(data => {
      monaco.editor.defineTheme('amy', data);
      monaco.editor.setTheme('amy');
  })
}

class MonacoEditor extends React.Component {

  constructor (props) {
    super (props);
  }

  componentDidMount() {
    this.monacoEditor = monaco.editor.create(this._editor, {
      value: `/* edit your code below this line */`,
      language: this.props.language || "",
      automaticLayout: this.props.automaticLayout || false,
      autoIndent: this.props.autoIndent || false,
      fontSize: this.props.fontSize || 14,
      scrollBeyondLastLine: this.props.scrollBeyondLastLine || false,
      scrollbar: this.props.scrollbar
    });
  }

  componentWillUnmount() {
    this.monacoEditor.editor.dispose();
  }

  render () {
    return (
      <div className="editor_container" ref={c => this._editor = c} />
    )
  }
}

export default MonacoEditor