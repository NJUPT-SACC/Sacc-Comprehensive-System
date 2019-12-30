import React from "react";

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
      <div>Editor</div>
    );
  }
}

export default Editor