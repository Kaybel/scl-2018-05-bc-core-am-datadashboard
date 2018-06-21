const usersJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const cohortsJSON = '../../../data/cohorts.json';
const progressJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/progress.json';

fetch(usersJSON)
  .then(response => response.json())
  .then(users => {
    console.log(users);
  })

fetch(cohortsJSON)
  .then(response => response.json())
  .then(cohorts => {
    console.log(cohorts);
  })

fetch(progressJSON)
  .then(response => response.json())
  .then(progress => {
    console.log(progress);
  })
}


class Reads {
  constructor (total, completed, percent) {
    this.total = total,
    this.completed = gender,
    this.percent = percent,
    
  }
}

/* */

let courses = Object.entries(progress).find(element => element[0] == users.id)[1];



window.computeUsersStats = (user, progress, courses) => {
  
};
window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};
window.processCohortData = (options) => {

};