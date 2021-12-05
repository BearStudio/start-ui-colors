import { Fragment } from "react";
import {
  Button,
  Container,
  Checkbox,
  Stack,
  render,
  VerticalSpace,
  Text,
} from "@create-figma-plugin/ui";
import { emit } from "@create-figma-plugin/utilities";
import { h } from "preact";
import { useCallback, useState } from "preact/hooks";
import { highlight, languages } from "prismjs";
import Editor from "react-simple-code-editor";

import styles from "./styles.css";
import { InsertCodeHandler } from "./types";

function Plugin({
  colorStyles,
}: {
  colorStyles: Record<string, ColorStyle[]>;
}) {
  // const handleInsertCodeButtonClick = useCallback(
  //   function () {
  //     emit<InsertCodeHandler>("INSERT_CODE", code);
  //   },
  //   [code]
  // );
  return (
    <Container>
      <VerticalSpace space="small" />
      <Stack space="extraSmall">
        {Object.keys(colorStyles).map((color) => (
          <Fragment key={color}>
            <VerticalSpace space="small" />
            <Text bold>{color}</Text>
            <VerticalSpace space="small" />
            <Stack space="extraSmall">
              {colorStyles[color].length > 0 &&
                colorStyles[color].map((colorStyle) => (
                  <Checkbox
                    key={colorStyle.id}
                    onChange={() => {}}
                    value={false}
                  >
                    <Text>{colorStyle.name}</Text>
                  </Checkbox>
                ))}
            </Stack>
          </Fragment>
        ))}
      </Stack>
      <VerticalSpace space="large" />
      <Button fullWidth onClick={() => undefined}>
        Copy to clipboard
      </Button>
      <VerticalSpace space="small" />
    </Container>
  );
}

export default render(Plugin);
