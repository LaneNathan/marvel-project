// // TO DO: 
// // Character Select - function to select character. once selected, the character goes to the selected box.
// //                    their info goes into the array from the fetch request. (this happens three times)
// //Function for random CPU choice
// // Fight Function - lock in function - CPU chooses their characters. both arrays of comic sales are compared
// // higher comic sales are the winner. Display results modal. 
// // Play Again - refresh page
// var selectedCharacter1El = document.getElementById('#characterBox1');
// var characterSelectbtnEl = document.getElementById('#selectbtn')
let choiceCount = 0;
let playerPower = []
var backgroundSFX = new Audio('./assets/game-sounds/player selection screen.mp3');
var kombatFightSFX = new Audio('./assets/game-sounds/faceoff sound-fight.mp3')
var fightMusic = new Audio('assets/game-sounds/fight music.mp3');
var hitSFX = new Audio('./assets/game-sounds/hit sound.wav');
var selectedPlayerSFX = new Audio('./assets/game-sounds/prefaceoff music.wav');
var winSFX = new Audio('./assets/game-sounds/up notification.wav');
var defeatSFX= new Audio('./assets/game-sounds/you-lose-101soundboards.mp3');
var victorySFX = new Audio('./assets/game-sounds/you-win-street-fighter-101soundboards.mp3');
var fightMusicShortSFX = new Audio('./assets/game-sounds/fight music short.mp3');


// // //youtube player display ---Needs to be implemented to fit in the HTML, Maybe put video in a modal?
// // function onYouTubeIframeAPIReady() {//latest push, Nate added parameters to 
  
// //   player = new YT.Player('player', {
// //     height: '390',
// //     width: '640',
// //     videoId: 'K1imOiVCgYM',  
// //     autoplay: 1,
// //     startSeconds: 14,
// //     enSeconds: 18,
// //   });
// // }


// let slot1 = false; //useful for removing selected charaters by user
// let slot2 = false; 
// let slot3 = false; 
// // -------------------------------------------------------------//

// function characterSelect () {
// //   //play background music---------------
// //   backgroundSFX.play();
// //     //upon clicking the character pic, the same image is displayed into the selected character box.
// //     console.log('Button VERY clicked!'); 
// //     console.log('----------------'); 
// // hitSFX.play();
// //     //get fetched picture and name and show them in the selected box. 
    
// const apiUrl = 'https://gateway.marvel.com/v1/public/characters'
// const hash = '685498cef61d5c0f1571a0d89fb966a0'; //find generator 
// const timestamp = '1';
// const apiKey = 'd4d97531c1e479bbe6e27b6f4139fa7e'; //my public key
// const url = `${apiUrl}?apikey=${apiKey}&ts=${timestamp}&hash=${hash}&name=Iron Man`;

//   // https://gateway.marvel.com/v1/public/characters?apikey=d4d97531c1e479bbe6e27b6f4139fa7e&ts=1&hash=685498cef61d5c0f1571a0d89fb966a0&name=Iron Man
//   // data.data.results[0].name.toLowerCase();


//   fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json'
//     }

//   }).then(response => response.json())
//     .then(data => {
//       console.log(data);

//       //Hero Img ----------------------------------------------------------
//       const thumbnail = data.data.results[0].thumbnail.path + '.jpg';
//       console.log(thumbnail);
//       var img = document.createElement('img');
//       img.src = thumbnail
//       img.setAttribute('id', 'myImage');
//       document.getElementById('characterBox1').appendChild(img);

//       //Hero Name ----------------------------------------------------------
//       const nameofHero = data.data.results[0].name;
//       console.log(nameofHero);

//       var paragraph = document.getElementById("namePlate");
//       var text = document.createTextNode(nameofHero);

//       paragraph.appendChild(text);

//       //Hero Power ----------------------------------------------------------
function fight() {
      const comicTotal = data.data.results[0].comics.available;
      console.log(comicTotal);


      playerPower.push(comicTotal);
      console.log(playerPower);

      let sum = 0;

      for (let i = 0; i < playerPower.length; i++)
        sum += playerPower[i];

      console.log(sum);
      selectedPlayerSFX.play();
      kombatFightSFX.play();
    };

//       //Hero Choice Count ----------------------------------------------------------

//       choiceCount++;
//       console.log(choiceCount);
//       if (choiceCount >= 3) {
//         alert('No choices left!')
//         slot1 = false;
//         slot2 = false;
//         slot3 = false;
//         choiceCount = 0
//         console.log('RESET_____');
//         console.log(slot1);
//         console.log(slot1);
//         console.log(slot1);
//         return;
//       }
//       else (choiceCount < 3)
//       return;

//     })
//     .catch(error => {
//       // Handle errors here
//       console.error('Error:', error);
//     });
  //add character's comic sales to power array. check to see if three characters have been chosen, if not allow more choices
  //if selected character is clicked, clear selection box OR replace oldest character in array with new one. -----maybe save to add after mvp


// };

// -------------------------------------------------------------//


function fight() {
  //lock in function - CPU chooses their characters. both arrays of comic sales are compared
  function cpuChoice() {
    //from array of characters. [0-20] choose three random ones and display them in the selected boxes.
    
    selectedPlayerSFX.play();
    kombatFightSFX.play();
    }
    
}



//loop replaces the fetchChoices()function which retrieves the characters individually//
fetchMultipleCharacters([
  "Iron Man",
  "Doctor Strange",
  "Wolverine",
  "Hulk",
  "Spider-Man (Peter Parker)",
  "Jean Grey"
]);

function fetchMultipleCharacters(characters) {
  allCharacters =[];
  characters.forEach((character, index) => {
      fetch(`https://gateway.marvel.com/v1/public/characters?apikey=d4d97531c1e479bbe6e27b6f4139fa7e&ts=1&hash=685498cef61d5c0f1571a0d89fb966a0&name=${encodeURIComponent(character)}`)
          .then(res => res.json())
          .then(data => {
              const nameofHero = data.data.results[0];
              const image = nameofHero.thumbnail.path + "." + nameofHero.thumbnail.extension;
              const comicTotal = nameofHero.comics.available;
              const id = nameofHero.id
              console.log(nameofHero);
              console.log(comicTotal);
              console.log(image);

                            //Puts all of the character stats in the array
                              allCharacters.push({
                              characterName: character,
                              imageUrl: image,
                              comicTotal: comicTotal,
                              id: id
                          });
            
                          // Check if all characters have been fetched
                          if (allCharacters.length === characters.length) {

                              // Store allCharacters array in local storage
                              localStorage.setItem('allCharacters', JSON.stringify(allCharacters));
                          }
              if (index < 3) {
                  document.querySelector(`#Good${index + 1} figure`).style.backgroundImage = `url(${image})`;
              } else {
                  document.querySelector(`#Evil${index - 2} figure`).style.backgroundImage = `url(${image})`;
              }
          });
  })};

  // Function to retrieve character data from local storage and use it
function characterSelect(boxNumber) {
  // Retrieve character data from local storage
  const allCharacters = JSON.parse(localStorage.getItem('allCharacters'));

  // Check if character data exists
  if (allCharacters && allCharacters.length > 0) {
      // Get character for the specified boxNumber
      // const character = allCharacters[boxNumber - 1]; // Assuming boxNumber starts from 1
      const character = allCharacters.filter(c => c.id == boxNumber)
      console.log(character);
      console.log(boxNumber);
      // Create and append image to character box
      var img = document.createElement('img');
      img.src = character[0].imageUrl;
      img.setAttribute('data-character-name', character[0].characterName); // Store character name as a data attribute

      // Append the image to the appropriate box based on boxNumber
      choiceCount++;
      console.log(choiceCount);
      if (choiceCount > 3) { 
        alert('No choices left!')
        // slot1 = false;
        // slot2 = false;
        // slot3 = false;
        // choiceCount = 0
        // console.log('RESET_____');
        // console.log(slot1);
        // console.log(slot1);
        // console.log(slot1);
        return;
      }
      // else (choiceCount < 3)
      else{
      const characterBox = document.getElementById(`characterBox${choiceCount}`);
      characterBox.appendChild(img); 
      }
      return;


      // Save selected choice to local storage (if needed)
      // const selectedChoices = JSON.parse(localStorage.getItem('selectedChoices')) || {};
      // selectedChoices[`characterBox${boxNumber}`] = character.characterName;
      // localStorage.setItem('selectedChoices', JSON.stringify(selectedChoices));
  } else {
      console.log("No character data found in local storage.");
  }
};
// }
// function characterSelect(characters, boxNumber) {
//   characters.forEach((character, index) => {
//       const { characterName, imageUrl } = character;

//       // Create and append image to character box
//       var img = document.createElement('img');
//       img.src = imageUrl;
//       img.setAttribute('data-character-name', characterName); // Store character name as a data attribute

//       // Append the image to the appropriate box based on boxNumber
//       const characterBox = document.getElementById(`characterBox${boxNumber}`);
//       characterBox.appendChild(img); 

//       // Save selected choice to local storage
//       const selectedChoices = JSON.parse(localStorage.getItem('selectedChoices')) || {};
//       selectedChoices[`characterBox${boxNumber}`] = characterName;
//       localStorage.setItem('selectedChoices', JSON.stringify(selectedChoices));
//   });

//   choiceCount++;
//   console.log(choiceCount);
//   if (choiceCount >= 3) {
//       alert('No choices left!');
//       resetSelection(); // Call a function to reset selection
//       return;
//   })