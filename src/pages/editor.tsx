import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

const CodeEditor = ({ value , onChange }) => {
  return (
    <AceEditor
      width='100%'
      mode="javascript"
      theme="monokai"
      value={value}
      defaultValue='//start writing your code here'
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      fontSize={14}
      focus={true}
      enableSnippets={true}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      style={{border: "1px solid white",
  }}
    />
  );
};

export default CodeEditor;
