import {
  Button,
  Container,
  render,
  VerticalSpace,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { highlight, languages } from "prismjs";
import Editor from "react-simple-code-editor";

import styles from "./styles.css";
import { InsertCodeHandler } from "./types";

import "prismjs/components/prism-clike.js";
import "prismjs/components/prism-javascript.js";
import "!prismjs/themes/prism.css";

function Plugin() {
  const [code, setCode] = useState(`function add(a, b) {\n  return a + b;\n}`);
  const handleInsertCodeButtonClick = useCallback(
    function () {
      emit<InsertCodeHandler>("INSERT_CODE", code);
    },
    [code]
  );
  return (
    <Container>
      <VerticalSpace space="small" />
      <div class={styles.container}>
        <Editor
          highlight={function (code: string) {
            return highlight(code, languages.js, "js");
          }}
          onValueChange={setCode}
          preClassName={styles.editor}
          textareaClassName={styles.editor}
          value={code}
        />
      </div>
      <VerticalSpace space="large" />
      <Button fullWidth onClick={handleInsertCodeButtonClick}>
        Insert Code my code
      </Button>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
