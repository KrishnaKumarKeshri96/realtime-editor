import { useEffect, useRef } from "react";
import Codemirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/closetag";
import "codemirror/addon/edit/closebrackets";

const Editor = () => {
  const editorRef = useRef(null);
  useEffect(() => {
    async function init() {
      Codemirror.fromTextArea(editorRef.current, {
        mode: { name: "javascript", json: true },
        theme: "monokai",
        autoCloseTags: true,
        autoCloseBrackets: true,
        lineNumbers: true,
      });
    }
    init();
  }, []);
  return <textarea id="realtimeEditor" ref={editorRef}></textarea>;
};

export default Editor;
