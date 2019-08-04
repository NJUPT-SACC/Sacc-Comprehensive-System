import React from "react";
import MonacoEditor from "../../../../../../../components/editor/editor";

class Editor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      langType: "javascript,python,csharp,html,css,java,cpp",
      theme: 'vs-dark',
      automaticLayout: true,
      scrollbar: {
        arrowSize: 6,
        verticalScrollbarSize: 6,
        horizontalSliderSize: 6
      },
    }
  }
  render() {
    return (
      <MonacoEditor
        language={this.state.langType}
        automaticLayout={true}        /* 默认是 false */
        theme={this.state.theme}      /* 默认是 vs */
        autoIndent={true}
        fontSize={16}                 /* 默认是 14px */
        filenames="index.js"
        scrollBeyondLastLine={false}  /* 是否在最后一行下面还可以滚动一屏的距离， 默认是 false */
        scrollbar={this.state.scrollbar}
      />
    );
  }
}

export default Editor