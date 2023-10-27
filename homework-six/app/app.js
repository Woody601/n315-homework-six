var GAMES = [
    {
      "gameTitle": "The Legend of Zelda: Breath of the Wild",
      "gameThumbImg": "botw_150.png",
      "gameFullImg": "botw_300.png",
      "gameBriefDescription": "Embark on an epic adventure in the kingdom of Hyrule.",
      "gameDescription": "Explore a vast open world, solve puzzles, and battle foes in this critically acclaimed action-adventure game.",
      "gameRating": "E10+"
    },
    {
      "gameTitle": "The Witcher 3: Wild Hunt",
      "gameThumbImg": "witcher3_150.jpg",
      "gameFullImg": "witcher3_300.jpg",
      "gameBriefDescription": "Join Geralt of Rivia in his quest to find his adopted daughter in a war-torn world.",
      "gameDescription": "An open-world RPG with a gripping storyline, stunning visuals, and deep character development.",
      "gameRating": "M"
    },
    {
      "gameTitle": "Minecraft",
      "gameThumbImg": "minecraft_150.jpg",
      "gameFullImg": "minecraft_300.jpg",
      "gameBriefDescription": "Build, explore, and survive in a blocky world of limitless creativity.",
      "gameDescription": "A sandbox game that allows players to craft and shape their own unique adventures.",
      "gameRating": "E10+"
    },
    {
      "gameTitle": "Red Dead Redemption 2",
      "gameThumbImg": "rd2_150.jpg",
      "gameFullImg": "rd2_300.jpg",
      "gameBriefDescription": "Experience the wild west as Arthur Morgan, an outlaw on the run.",
      "gameDescription": "An open-world action-adventure game with a rich narrative and stunning graphics.",
      "gameRating": "M"
    },
    {
      "gameTitle": "Overwatch",
      "gameThumbImg": "ow_150.jpg",
      "gameFullImg": "ow_300.jpg",
      "gameBriefDescription": "Join a team of heroes and battle it out in fast-paced multiplayer matches.",
      "gameDescription": "A team-based first-person shooter with a diverse cast of characters and abilities.",
      "gameRating": "T"
    },
    {
      "gameTitle": "Fortnite",
      "gameThumbImg": "fortnite_150.jpg",
      "gameFullImg": "fortnite_300.jpg",
      "gameBriefDescription": "Drop into a battle royale and outlast your opponents in a colorful world.",
      "gameDescription": "A popular battle royale game known for its building mechanics and in-game events.",
      "gameRating": "T"
    },
    {
      "gameTitle": "Dark Souls III",
      "gameThumbImg": "ds3_150.jpg",
      "gameFullImg": "ds3_300.jpg",
      "gameBriefDescription": "Face relentless challenges and powerful foes in a dark fantasy world.",
      "gameDescription": "An action-RPG with punishing difficulty and rewarding gameplay mechanics.",
      "gameRating": "M"
    },
    {
      "gameTitle": "Super Mario Odyssey",
      "gameThumbImg": "mario_150.png",
      "gameFullImg": "mario_300.png",
      "gameBriefDescription": "Join Mario on a globe-trotting adventure to save Princess Peach from Bowser.",
      "gameDescription": "A beloved platformer with creative level design and memorable characters.",
      "gameRating": "E"
    },
    {
      "gameTitle": "Grand Theft Auto V",
      "gameThumbImg": "gta5_150.jpg",
      "gameFullImg": "gta5_300.jpg",
      "gameBriefDescription": "Explore the fictional city of Los Santos and get involved in criminal activities.",
      "gameDescription": "An open-world action game with a sprawling city and multiple protagonists.",
      "gameRating": "M"
    },
    {
      "gameTitle": "The Elder Scrolls V: Skyrim",
      "gameThumbImg": "skyrim_150.jpg",
      "gameFullImg": "skyrim_300.jpg",
      "gameBriefDescription": "Embark on an epic fantasy adventure as the Dragonborn in the land of Skyrim.",
      "gameDescription": "An open-world RPG with a rich lore, mod support, and endless exploration.",
      "gameRating": "M"
    }
  ];  

function loadData() {
  $.each(GAMES, function(index, game) {
    console.log(game.gameTitle);
    $("#app").append(`<div id="${index}" class="game-holder">
    <h4>${game.gameTitle}</h4>
    <div class="game-image">
    <img src="images/${game.gameThumbImg}" alt="${game.gameTitle}" />
    </div>
    <div class="brief-rating">
    <div class="brief-des">
    ${game.gameBriefDescription}
    </div>
    <div class="rating">Rating: ${game.gameRating}</div>
    </div>
    </div>`);
  });
  initListeners();
    // for(let i = 0; i < GAMES.length; i++) {
    //     console.log(GAMES[i].gameTitle);
    // }
}

function initListeners() {
  $(".game-holder").click(function (e){
    let gameIndex = e.currentTarget.id;
    console.log(gameIndex);
    $("#app").html(`<div class="gameInfoContainer">
    <h1 class="gameTitle">${GAMES[gameIndex].gameTitle}</h1>
    <img class="gameImg" src="images/${GAMES[gameIndex].gameFullImg}" alt="${GAMES[gameIndex].gameTitle}" />
    <div class="gameDescription">
      ${GAMES[gameIndex].gameDescription}
    </div>
    <div class="gameRating">Rating: ${GAMES[gameIndex].gameRating}</div>
    <div class="close">Close</div>
  </div>
  `);

  addCloseListener();
  });
}

function addCloseListener() {
  $(".close").click(function () {
    $("#app").html("");
    loadData();
  })
}

$(document).ready(function () {
    loadData();
});