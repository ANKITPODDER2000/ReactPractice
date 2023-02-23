import chroma from "chroma-js";

let getAllColorShade = (hexColor, noOffColors) => {
  return chroma
    .scale([chroma(hexColor).brighten(1.2), chroma(hexColor).darken(1.4)])
    .mode("lch")
    .colors(noOffColors);
};
let getUpdatedPalette = (palette) => {
  let colorPalette = {
    paletteName: palette.paletteName,
    id: palette.id,
    emoji: palette.emoji,
    colorShade: {},
  };

  let colorRange = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  for (let colorLevel of colorRange) {
    colorPalette.colorShade[colorLevel] = [];
  }

  console.log(colorPalette);

  for (let color of palette.colors) {
    let hexColor = color.color;
    let allShades = getAllColorShade(hexColor, colorRange.length);
    for (let i = 0; i < colorRange.length; i++) {
      colorPalette.colorShade[colorRange[i]].push({
        name: `${color.name} ${colorRange[i]}`,
        hex: allShades[i],
        rgb: chroma(allShades[i]).css(),
        rgba: chroma(allShades[i])
          .css()
          .replace("rgb(", "rgba(")
          .replace(")", ",1)"),
      });
    }
  }

  return colorPalette;
};

export default getUpdatedPalette;
