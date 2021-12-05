import {
  formatWarningMessage,
  loadFontsAsync,
  once,
  showUI,
} from "@create-figma-plugin/utilities";
import { groupBy } from "lodash";

import { InsertCodeHandler } from "./types";
import { getNameParts } from "./utils/PaintStylesUtils";

export default function () {
  once<InsertCodeHandler>("INSERT_CODE", async function (code: string) {
    const text = figma.createText();
    await loadFontsAsync([text]);
    text.characters = code;
    figma.closePlugin();
  });

  const colorStyles: Record<string, ColorStyle[]> = groupBy(
    figma.getLocalPaintStyles().map((paintStyle) => {
      const [color, shade] = getNameParts(paintStyle.name);

      return {
        id: paintStyle.id,
        color,
        shade,
        name: paintStyle.name,
        hexa: "",
      };
    }),
    "color"
  );

  showUI({ width: 360, height: 400 }, { colorStyles });
}
