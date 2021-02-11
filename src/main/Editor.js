import React, {useState, useEffect} from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import {Controlled as ControlledEditor} from "react-codemirror2";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompressAlt, faExpandAlt} from "@fortawesome/free-solid-svg-icons";

export default function Editor(props) {
    let {language, displayName, value, onChange, socketVar} = props;
    const [open, setOpen] = useState(true);
    const [val,stVl] = useState(value);

    function handleChange(editor, data, value) {
        socketVar.emit(language, value);
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>
            <div className="editor-title">
                {displayName}
                <button
                    type="button"
                    className="expand-collapse-btn"
                    onClick={() => setOpen((prevOpen) => !prevOpen)}
                >
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt}/>
                </button>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true
                }}
            />
        </div>
    );
}
