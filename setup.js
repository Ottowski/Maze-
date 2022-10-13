document.addEventListener("keydown", move);

let newMaze = new Maze(500, 10, 10);
newMaze.setup();
newMaze.draw();

function move(event) {

  let arrows = event.key;
  let key = event.key
  let row = current.rowNum;
  let col = current.colNum;

  switch (arrows) {
    case "ArrowUp":
      if (!current.walls.topWall) {
        let next = newMaze.grid[row - 1][col];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);

      }
      break;

    case "ArrowRight":
      if (!current.walls.rightWall) {
        let next = newMaze.grid[row][col + 1];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);
    
      }
      break;

    case "ArrowDown":
      if (!current.walls.bottomWall) {
        let next = newMaze.grid[row + 1][col];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);
        
      }
      break;

    case "ArrowLeft":
      if (!current.walls.leftWall) {
        let next = newMaze.grid[row][col - 1];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);
      }
      break;
  }
  switch (key) {
    case "w":
      if (!current.walls.topWall) {
        let next = newMaze.grid[row - 1][col];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);

      }
      break;

    case "d":
      if (!current.walls.rightWall) {
        let next = newMaze.grid[row][col + 1];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);
    
      }
      break;

    case "s":
      if (!current.walls.bottomWall) {
        let next = newMaze.grid[row + 1][col];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);
    
      }
      break;

    case "a":
      if (!current.walls.leftWall) {
        let next = newMaze.grid[row][col - 1];
        current = next;
        newMaze.draw();
        current.Player(newMaze.columns);
      }
      break;
  }
}