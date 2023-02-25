import getUpdatedPalette from "./GetUpdatedPalette";

const getAllShadesofColor = (palette, color) => {
  let allShades = [];
  palette = getUpdatedPalette(palette[0]);
  for (let shades = 100; shades <= 1000; shades += 100) {
    let allcolors = palette.colorShade[shades];
    allShades.push(
      allcolors.filter(
        (colorShade) => colorShade.name.split(" ")[0] === color
      )[0]
    );
  }

  return {
    allShades: allShades,
    emoji: palette.emoji,
    paletteName: palette.paletteName,
  };
};

export default getAllShadesofColor;
