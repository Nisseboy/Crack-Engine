let WinScreen = {
  start() {
    PauseScreen.start();
  },

  keyPressed() {
    if (keyCode == getKey("Pause")) WinScreen.exitButton();
  },
  
  update() {
    Renderer.buffer = lastGameFrame.map(e=>e);

    Renderer.renderText("wow you're so good at this", screenw / 2, screenh * 0.2, "cc", 0, [200, 200, 50, 255]);

    buttons = [
      {
        text: "main menu", 
        x: screenw / 2,
        y: screenh * 0.8,
        align: "tr",
        callback: WinScreen.exitButton
      },
    ];
    if (Game.chapter.levels.indexOf(Game.level) < Game.chapter.levels.length - 1) {
      buttons.push({
        text: "next level", 
        x: screenw / 2 + 1,
        y: screenh * 0.8,
        callback: WinScreen.nextButton
      });
    }
  },
  nextButton(e) {
    Game.level = Game.chapter.levels[Game.chapter.levels.indexOf(Game.level) + 1];
    Game.world = new World(Game.level.data);
    setScene(Game);
  },
  exitButton(e) {
    Game.world = undefined;
    setScene(MainMenu);
  },
};