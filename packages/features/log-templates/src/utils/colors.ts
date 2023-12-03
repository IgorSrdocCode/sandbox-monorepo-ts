import chroma from "chroma-js";

export function colorScaleWithOpacity(
  scale: string[] = ["#FAFA6E", "#2A4858"]
) {
  return chroma
    .scale(scale)
    .mode("lch") // Set the color mode to LCH for better opacity control
    .colors(100)
    .map((color: string) => chroma(color).alpha(0.7)); // Set the opacity value (0.7 in this example)
}
