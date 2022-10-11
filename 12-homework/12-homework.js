const avatarsObject = {
  "https://swapi.dev/api/people/1/":"./images/luke_skywalker.jpeg",
  "https://swapi.dev/api/people/2/":"./images/c3po.jpeg",
  "https://swapi.dev/api/people/3/":"./images/R2-D2.jpeg",
  "https://swapi.dev/api/people/4/":"./images/darth_vader.jpeg",
  "https://swapi.dev/api/people/5/":"./images/leia_organa.jpeg",
  "https://swapi.dev/api/people/6/":"./images/Owen Lars.jpeg",
  "https://swapi.dev/api/people/7/":"./images/Beru Whitesun lars.jpeg",
  "https://swapi.dev/api/people/8/":"./images/R5-D4.jpeg",
  "https://swapi.dev/api/people/9/":"./images/Biggs Darklighter.jpeg",
  "https://swapi.dev/api/people/10/":"./images/obi-wan_kenobi.jpeg",
  "https://swapi.dev/api/people/11/":"./images/Anakin Skywalker.jpeg",
  "https://swapi.dev/api/people/12/":"./images/Wilhuff Tarkin.jpeg",
  "https://swapi.dev/api/people/13/":"./images/chewbacca.jpeg",
  "https://swapi.dev/api/people/14/":"./images/han_solo.jpeg",
  "https://swapi.dev/api/people/15/":"./images/han_solo.jpeg",
  "https://swapi.dev/api/people/16/":"./images/Jabba Desilijic Tiure.jpeg",
  "https://swapi.dev/api/people/18/":"./images/wedge_antilles.jpeg",
  "https://swapi.dev/api/people/19/":"./images/Jek Tono Porkins.jpeg",
  "https://swapi.dev/api/people/20/":"./images/Yoda.jpeg",
  "https://swapi.dev/api/people/21/":"./images/Palpatine.jpeg",
  "https://swapi.dev/api/people/22/":"./images/Boba_Fett.jpeg",
  "https://swapi.dev/api/people/23/":"./images/IG-88.jpeg",
  "https://swapi.dev/api/people/24/":"./images/Bossk.jpeg",
  "https://swapi.dev/api/people/25/":"./images/Lando_Calrissian.jpeg",
  "https://swapi.dev/api/people/26/":"./images/Lobot.jpeg",
  "https://swapi.dev/api/people/27/":"./images/Ackbar.jpeg",
  "https://swapi.dev/api/people/28/":"./images/Mon Mothma.jpeg",
  "https://swapi.dev/api/people/29/":"./images/Arvel Crynyd.jpeg",
  "https://swapi.dev/api/people/30/":"./images/Wicket Systri Warrick.jpeg",
  "https://swapi.dev/api/people/31/":"./images/Nien Nunb.jpeg",
  "https://swapi.dev/api/people/32/":"./images/Qui-Gon Jinn.jpeg",
  "https://swapi.dev/api/people/33/":"./images/Nute Gunray.jpeg",
  "https://swapi.dev/api/people/34/":"./images/Finis Valorum.jpeg",
  "https://swapi.dev/api/people/35/":"./images/Padme Amidala.jpeg",
  "https://swapi.dev/api/people/36/":"./images/Jar Jar Binks.jpeg",
  "https://swapi.dev/api/people/37/":"./images/Roos Tarpals.jpeg",
  "https://swapi.dev/api/people/38/":"./images/Rugor Nass.jpeg",
  "https://swapi.dev/api/people/39/":"./images/Ric Olie.jpeg",
  "https://swapi.dev/api/people/40/":"./images/Watto.jpeg",
  "https://swapi.dev/api/people/41/":"./images/Sebulba.jpeg",
  "https://swapi.dev/api/people/42/":"./images/Quarsh Panaka.jpeg",
  "https://swapi.dev/api/people/43/":"./images/Shmi Skywalker.jpeg",
  "https://swapi.dev/api/people/44/":"./images/Darth Maul.jpeg",
  "https://swapi.dev/api/people/45/":"./images/Bib Fortuna.jpeg",
  "https://swapi.dev/api/people/46/":"./images/Ayla Secura.jpeg",
  "https://swapi.dev/api/people/47/":"./images/Ratts Tyerel.jpeg",
  "https://swapi.dev/api/people/48/":"./images/Dud Bolt.jpeg",
  "https://swapi.dev/api/people/49/":"./images/Gasgano.jpeg",
  "https://swapi.dev/api/people/50/":"./images/Ben Quadinaros.jpeg",
  "https://swapi.dev/api/people/51/":"./images/Mace Windu.jpeg",
  "https://swapi.dev/api/people/52/":"./images/Ki-Adi-Mundi.jpeg",
  "https://swapi.dev/api/people/53/":"./images/Kit Fisto.jpeg",
  "https://swapi.dev/api/people/54/":"./images/Eeth Koth.jpeg",
  "https://swapi.dev/api/people/55/":"./images/Adi Gallia.jpeg",
  "https://swapi.dev/api/people/56/":"./images/Saesee Tiin.jpeg",
  "https://swapi.dev/api/people/57/":"./images/Yarael Poof.jpeg",
  "https://swapi.dev/api/people/58/":"./images/Plo Koon.jpeg",
  "https://swapi.dev/api/people/59/":"./images/Mas Amedda.jpeg",
  "https://swapi.dev/api/people/81/":"./images/Raymus Antilles.jpeg",
}

function displayAvatar(obj, character) {
  if (obj.hasOwnProperty(character)) {
      return obj[character];
  } else {
      return "./images/stormtrooper.jpeg";
  }
  
}
/* const wookieFormat = "?format=wookiee";
let wookie = null;

let chbx = document.querySelector("#wookie");
chbx.addEventListener("click", () => {
  wookie = chbx.checked;
}); */

let filmUrl = "https://swapi.dev/api/films/2";
let input = document.querySelector("#episodeNumber");

if(input.value){
  filmUrl = "https://swapi.dev/api/films/" + Number(input.value);
}

let h1 = null;
input.addEventListener("change", () => {
  if(input.value > 0 && input.value < 7){
      filmUrl = "https://swapi.dev/api/films/" + Number(input.value);
  } else {
      h1 = document.createElement("h1");
      h1.innerHTML = "<u>Please enter number in range from 1 to 6!</u><br> By default, site shows Star Wars Characters from Episode 5 (it's number 2).";
      filmUrl = "https://swapi.dev/api/films/2";
  }
});

let btn = document.querySelector("#getInfoTable");
btn.addEventListener("click", getCharactersInfoTable);

function getCharactersInfoTable() {
  let displayContent = document.querySelector("#displayContent");
  displayContent.innerHTML = "";
  let table = document.createElement("table");
  table.setAttribute("id", "charactersTable");
  table.innerHTML = `<thead>
                     <tr>
                          <td>Avatar</td>
                          <td>Name</td>
                          <td>Gender</td>
                          <td>Birth year</td>
                     </tr>
                     </thead>
                     <tbody id="tableBody"></tbody>`;
  if(h1){
      displayContent.append(h1);
      h1 = null;
  }
  displayContent.append(table);

  fetch(filmUrl)
      .then(response => response.json())
      .then(json => {
          for (let characterLink of json.characters) {
              // if(wookie) { characterLink += wookieFormat; }
              let character = fetch(characterLink);
              // console.log("characterLink: ", characterLink)
              character.then(res => res.json())
                       .then(json => { 
                          // console.log("json ", json) //certain hero object!
                          let tableBody = document.querySelector("#tableBody");
                          let row = tableBody.insertRow(-1);
                          row.insertCell(0).innerHTML = `<img src="${ displayAvatar(avatarsObject, characterLink) }" class="avatar">`;
                          row.insertCell(1).innerHTML = json.name;
                          row.insertCell(2).innerHTML = json.gender;
                          row.insertCell(3).innerHTML = json.birth_year;
                      }); 
          } //end of "for"
      });
}  //end of getCharactersInfoTable function

let btnGetPlanetsList = document.querySelector("#getPlanetsList");
btnGetPlanetsList.addEventListener("click", getPlanetsInfo);

function getPlanetsInfo() {
  let displayContent = document.querySelector("#displayContent");
  let div = document.createElement("div");
  div.className = "planets_container";
  displayContent.innerHTML = "";
  h1 = document.createElement("h1");
  h1.innerHTML = "Here is the list of all planets from Star Wars";
  displayContent.append(h1);
  displayContent.append(div);

  fetch("https://swapi.dev/api/planets/")
      .then(response => response.json())
      .then(json => {
          // console.log(json.results) //json.results[0].name
          let counter = 1;
          for (const planetObject of json.results) {
              let span = document.createElement('span');
              counter !== json.results.length 
                  ? span.textContent = planetObject.name + ", " 
                  : span.textContent = planetObject.name;
              div.append(span);
              counter++;
              console.log(planetObject.name) //certain planet
              h1 = null;
          } //end of "for"
      })//end of "json" object  
}//end of getPlanetsInfo function
