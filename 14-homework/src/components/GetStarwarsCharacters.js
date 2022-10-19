import StormTrooper from '../assets/stormtrooper.jpeg';
import './GetStarwarsCharacters.css';

export function getCharactersInfoTable(filmUrl) {
  let displayContent = document.querySelector(".right");
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

  displayContent.append(table);

  fetch(filmUrl)
    .then((response) => response.json())
    .then((json) => {
      for (let characterLink of json.characters) {
        let character = fetch(characterLink);
        character
          .then((res) => res.json())
          .then((json) => {
            let tableBody = document.querySelector("#tableBody");
            let row = tableBody.insertRow(-1);
            row.insertCell(0).innerHTML = `<img src="${StormTrooper}" class="avatar">`;
            row.insertCell(1).innerHTML = json.name;
            row.insertCell(2).innerHTML = json.gender;
            row.insertCell(3).innerHTML = json.birth_year;
          });
      }
    });
}
