import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ value , onChange }) => {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      value={value}
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
    />
  );
};

export default CodeEditor;
