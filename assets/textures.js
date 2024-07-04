let folders = [
  "ui", "crosshair,snapping,segments,plus",
  "ui/propertytabs", "walls,segments,entities",
  "brick/wall", "1,2,3,4,5,6,window",
  "metal/wall", "1,2,3",
  "metal/floor", "1",
  "metal/ceiling", "1",
  "entities/rat", "1",
];


let textures = {
  empty: {pixels: [0, 0, 0, 0], width: 1, height: 1},
}

for (let i = 0; i < folders.length; i += 2) {
  let path = folders[i];
  let names = folders[i + 1].split(",");
  for (let j of names) {
    textures[path + j] = `assets/images/${path}/${j}.png`;
  }
}