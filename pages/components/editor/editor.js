import React from 'react'
import './editor.less'
import { ace } from './theme/ace'
let monaco;

if (typeof window !== 'undefined') {
  monaco = require("monaco-editor/esm/vs/editor/edcore.main");
  import('monaco-themes/themes/Sacc.json')
    .then(data => {
      monaco.editor.defineTheme('sacc', data);
      monaco.editor.setTheme('sacc');
  })
}

class MonacoEditor extends React.Component {

  constructor (props) {
    super (props);
    console.log(props);
  }

  componentDidMount() {
    console.log(monaco);
    this.monacoEditor = monaco.editor.create(this._editor, {
      value: `/* edit your code below this line */`,
      language: this.props.language,
      automaticLayout: this.props.automaticLayout || false,
      autoIndent: this.props.autoIndent || false,
      fontSize: this.props.fontSize || 14
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