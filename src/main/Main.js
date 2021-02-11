import Editor from "./Editor";
import Output from "./Output";
import React, {useState, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Main({socket}) {
    const [html, setHtml] = useLocalStorage("html", "");
    const [css, setCss] = useLocalStorage("css", "");
    const [js, setJs] = useLocalStorage("js", "");
    const [srcDoc, setSrcDoc] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);

        }, 250);

        return () => clearTimeout(timeout);
    }, [html, css, js]);

    socket.on('xml', (serverData) => {
        setHtml(serverData)
    })
    socket.on('css', (serverData) => {
        setCss(serverData)
    })
    socket.on('javascript', (serverData) => {
        setJs(serverData)
    })

    return (
        <div className="main">
            <div className="pane top-pane">
                <Editor
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                    socketVar={socket}
                />
                <Editor
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                    socketVar={socket}
                />
                <Editor
                    language="javascript"
                    displayName="JS"
                    value={js}
                    onChange={setJs}
                    socketVar={socket}
                />
            </div>
            <Output src={srcDoc}/>
        </div>
    );
}
