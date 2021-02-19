import React, { useState, useEffect, useCallback } from "react";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css";

interface Props {
  onChange: (content: any) => void;
  value: any;
}

interface EditorUtils {
  modules: any;
  formats: any;
}

const Editor: React.FC<Props> & EditorUtils = ({
  onChange,
  value,
  ...rest
}) => {
  const handleChange = useCallback((value) => {
    onChange(value == "<p><br></p>" ? "" : value);
  }, []);

  return (
    <ReactQuill
      value={value}
      onChange={(val) => {
        handleChange(val);
      }}
      modules={Editor.modules}
      formats={Editor.formats}
      bounds={".app"}
    />
  );
};
export default Editor;

Editor.modules = {
  toolbar: [
    [
      { header: [1, 2, 3, 4, 5, false] },
      "bold",
      "italic",
      "underline",
      "clean",
    ],
  ],
  clipboard: {
    matchVisual: true,
  },
};

Editor.formats = ["header", "bold", "italic", "underline"];
