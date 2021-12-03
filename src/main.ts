import { loadFontsAsync, once, showUI } from "@create-figma-plugin/utilities";

import { InsertCodeHandler } from "./types";

export default function () {
  once<InsertCodeHandler>("INSERT_CODE", async function (code: string) {
    const text = figma.createText();
    await loadFontsAsync([text]);
    text.characters = code;
    figma.closePlugin();
  });
  showUI({ width: 320, height: 240 });
}
