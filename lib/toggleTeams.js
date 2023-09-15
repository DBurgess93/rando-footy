// Fetch Footy Team Data
let dataLoaded = false
let teamsData = null
let isDataShowing = false

const showButton = document.querySelector('.btn-show');
const hideButton = document.querySelector('.btn-hide')
const url = 'https://api.squiggle.com.au/?q=teams';

const insertTeam = (data) => {
  const teamListElement = document.getElementById("team-list")
  teamListElement.innerHTML = ""
  allTeams = data.teams;
  allTeams.forEach(team => {
    const listItem = document.createElement("div")
    listItem.textContent = team.name
    teamListElement.appendChild(listItem);
  })

  teamListElement.style.display = "block";
  dataLoaded = true
}
showButton.addEventListener('click', () => {
  if (!isDataShowing) {
    if (!dataLoaded) {
      if (teamsData) {
        insertTeam(teamsData)
      } else {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            teamsData = data
            insertTeam(data);
          })
      }
    } else {
      const teamListElement = document.getElementById("team-list")
      teamListElement.style.display = "block"
    }
    isDataShowing = true
  } else {
    const teamListElement = document.getElementById("team-list")
    teamListElement.style.display = 'none'
    dataLoaded = false
    isDataShowing = false
  }
});
