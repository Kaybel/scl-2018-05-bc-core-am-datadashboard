const btnCohort = document.getElementById('btn-cohort');

const usersJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/users.json';
const progressJSON = '../../../data/cohorts/lim-2018-03-pre-core-pw/progress.json';
const cohortsJSON = '../../../data/cohorts.json';

btnCohort.addEventListener('click', () => {
  alert('sjsj');

/* Variables que guardarán json */
let users = []; // Arreglo de usuarios de la data EN BRUTO

let progress = {}; // Objeto de progreso EN BRUTO, contiene un id para cada usuario con un objeto que contiene el progreso del usuario por cada curso

let cohorts = []; // Arreglo de cohorts con la data EN BRUTO

/* para armar courses, se debe acceder al objeto progress */
let courses = []; // Arreglo de strings con los ids de los cursos del cohort en cuestión. Esta data se puede extraer de la propiedad coursesIndex de los objetos que representan los cohorts.


/* Promesas (retorno de json) */
fetch(usersJSON)
  .then(response => response.json())
  .then(data => {
    users = data;
    console.log(users);
  });

fetch(progressJSON)
  .then(response => response.json())
  .then(data => {
    progress = data;
    console.log(progress);
  });

fetch(cohortsJSON)
  .then(response => response.json())
  .then(data => {
    cohorts = data;
    console.log(cohorts);
  });

  let lect = 0;
let quiz = 0;
for (let idEstudiante in progress) {
	  for (let idCurso in progress[idEstudiante]) {
    let completedlect = 0;
    let completedquiz = 0;
    let lect = 0;
    let quiz = 0;
    let exercises = 0;
    let completedexercises = 0;
    let scoreSum = 0;
    let scoreAvg = 0;
    for (let idUnits in progress[idEstudiante][idCurso]) {
      for (let indexParts in progress[idEstudiante][idCurso][idUnits]) {
        for (let indexCourses in progress[idEstudiante][idCurso][idUnits][indexParts]) {
          for (let indextype in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]) {
            let chapter = ((progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype])); 
            if (chapter.type === 'read') {
              lect++;
            }
            if (chapter.type === 'read' && chapter.completed === 1) {
              completedlect++;
            }                 
            if (chapter.type === 'quiz') {
              quiz++;
            } 
            if (chapter.type === 'quiz' && chapter.completed === 1) {
              completedquiz++;
              scoreSum += chapter.score;
            }
            if (chapter.type === 'practice') {
              exercises++;
            }
            if (chapter.type === 'practice' && chapter.completed === 1) {
              completedexercises++;
            }
          }               
        }
      }
    }
    let percentLect = Math.round((completedlect / lect) * 100); 
    let percentQuiz = Math.round((completedquiz / quiz) * 100);
    let percentExercises = Math.round((completedexercises / exercises) * 100);
    scoreAvg = scoreSum / completedquiz;
    console.log(idEstudiante + ' > ' + 'Lecturas totales: ' + lect + ' Lecturas completadas: ' + completedlect + ' % total realizado en lecturas: ' + percentLect + '%' + ' Quizzes totales: ' + quiz + ' Quizzes completados: ' + completedquiz + ' Suma de puntajes quizzes: ' + scoreSum + ' Promedio Quizzes: ' + scoreAvg + ' Ejercicios totales: ' + exercises + ' Ejercicios completados: ' + completedexercises)
    /*document.getElementById('contenido').innerHTML = (idEstudiante + ' > ' + 'Lecturas totales: ' + lect + ' Lecturas completadas: ' + completedlect + ' % total realizado en lecturas: ' + percentLect + '%' + ' Quizzes totales: ' + quiz + ' Quizzes completados: ' + completedquiz + ' Suma de puntajes quizzes: ' + scoreSum + ' Promedio Quizzes: ' + scoreAvg + ' Ejercicios totales: ' + exercises + ' Ejercicios completados: ' + completedexercises);*/
  }
}
});
  

/* Declaración de objetos globales (constructor) */
class Usuario {
  constructor(Stats) {
    this.stats = stats;
  }
}

class Stats {
  constructor(Percent, Exercises, Reads, Quizzes) {
    this.Percent = Percent,
    this.Exercises = Exercises,
    this.Reads = Reads,
    this.Quizzes = Quizzes;
  }
}

/* Construcción objeto Quizzes */
class Quizzes {
  constructor(total, completed, percent, scoreSum, scoreAvg) {
    this.total = total,
    this.completed = completed,
    this.percent = percent,
    this.scoreSum = scoreSum,
    this.scoreAvg = scoreAvg;
  }
}

/* Construcción objeto Reads */
class Reads {
  constructor(total, completed, percent) {
    this.total = total,
    this.completed = completed,
    this.percent = percent;
  }
}
/* Construcción objeto Exercises */
class Exercises {
  constructor(total, completed, percent) {
    this.total = total,
    this.completed = completed,
    this.percent = percent;
  }
}

/* % de progreso gral de cada estudiante, de todos sus cursos. Se encuentra como elemento en objeto progress > Objeto intro. Detalle: Hay usuarios que no tienen nada, está vacío */
class Percent {
  constructor(id, percent) {
    this.id = id,
    this.percent = percent;
  }
}


/*const lecturasStudens = () => { 
for (let idEstudiante in progress) {
	  for (let idCurso in progress[idEstudiante]) {
    let completedlect = 0;
    let lect = 0;
    for (let idUnits in progress[idEstudiante][idCurso]) {
      for (let indexParts in progress[idEstudiante][idCurso][idUnits]) {
        for (let indexCourses in progress[idEstudiante][idCurso][idUnits][indexParts]) {
          for (let indextype in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]) {
            let chapter = ((progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype])); 
            if (chapter.type === 'read') {
              lect++;
            }
            if (chapter.type === 'read' && chapter.completed === 1) {
              completedlect++;
            }                 
          }               
        }
      }
    }
    let percentLect = Math.round((completedlect / lect) * 100); 
    console.log(idEstudiante + ' > ' + 'Lecturas totales: ' + lect + ' Lecturas completadas: ' + completedlect + ' % total realizado en lecturas: ' + percentLect);
    reads = new Reads (lect, completedlect, percentlect);
  }
}
return reads;
}


const quizzesStudents = () => {
for (let idEstudiante in progress) {
  for (let idCurso in progress[idEstudiante]) {
  let completedquiz = 0;
  let quiz = 0;
  let scoreSum = 0;
  let scoreAvg = 0;
  for (let idUnits in progress[idEstudiante][idCurso]) {
    for (let indexParts in progress[idEstudiante][idCurso][idUnits]) {
      for (let indexCourses in progress[idEstudiante][idCurso][idUnits][indexParts]) {
        for (let indextype in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]) {
          let chapter = ((progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype])); 
          if (chapter.type === 'quiz') {
            quiz++;
          } 
          if (chapter.type === 'quiz' && chapter.completed === 1) {
            completedquiz++;
            scoreSum += chapter.score;
          }
        }               
      }
    }
  }
  let percentQuiz = Math.round((completedquiz / quiz) * 100);
  scoreAvg = scoreSum / completedquiz;
  console.log(idEstudiante + ' > ' + ' Quizzes totales: ' + quiz + ' Quizzes completados: ' + completedquiz + ' Suma de puntajes quizzes: ' + scoreSum + ' Promedio Quizzes: ' + scoreAvg);
  quizzes = new Quizzes (quiz, completedquiz, percentQuiz, scoreSum, scoreAvg);
}
}
return quizzes;
}


const exercisesStudents = () => {
  for (let idEstudiante in progress) {
	  for (let idCurso in progress[idEstudiante]) {
    let exercises = 0;
    let completedexercises = 0;
    for (let idUnits in progress[idEstudiante][idCurso]) {
      for (let indexParts in progress[idEstudiante][idCurso][idUnits]) {
        for (let indexCourses in progress[idEstudiante][idCurso][idUnits][indexParts]) {
          for (let indextype in progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses]) {
            let chapter = ((progress[idEstudiante][idCurso][idUnits][indexParts][indexCourses][indextype])); 
            if (chapter.type === 'practice') {
              exercises++;
            }
            if (chapter.type === 'practice' && chapter.completed === 1) {
              completedexercises++;
            }
          }               
        }
      }
    }
    let percentExercises = Math.round((completedexercises / exercises) * 100);
    console.log(idEstudiante + ' > ' + ' Ejercicios totales: ' + exercises + ' Ejercicios completados: ' + completedexercises);
    practice = new Exercises (exercises, completedexercises, percentExercises);
  }
}
return practice;
}


window.computeUsersStats = (user, progress, courses) => {
  
let processed = [];
let progressInArray = Object.entries(progress);
let user = users;
for (let idEstudiante in progress) {
  user = users[idEstudiante].id;
  if (user === idEstudiante) {
    let userCourses = Object.entries(progressInArray[i][1]);
    if (userCourses.length === 0) {
      processed.push('Usuario sin información');
    } else {
      let intro = userCourses[0][1];
      let percent = intro.percent;
      let userStats = new Stats(percent, lecturasStudens(), exercisesStudents(), quizzesStudents());
      let users = new User(userStats);
      processed.push(users);
    }
  }
}
return processed
};


const renderUsers = (user, processed) => {
  let rankingNumber = 0;
  for (let i = 0; i < processed.length; i++) {
    rankingNumber++;
    if (processed[i] === 'Usuario sin información' && user[i].role === 'student') {
      tableName.innerHTML += '<tr>' +
        '<td>' + rankingNumber + '</td>' +
        '<td>' + user[i].name.toUpperCase() + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '<td class="numbers">' + '-' + '</td>' +
        '</tr>';
    } else if (user[i].role === 'student') {
      tableName.innerHTML += '<tr>' +
        '<td>' + rankingNumber + '</td>' +
        '<td>' + user[i].name.toUpperCase() + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.reads.percent) + '%' + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.quizzes.percent) + '%' + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.practice.percent) + '%' + '</td>' +
        '<td class="numbers">' + Math.round(processed[i].stats.percent) + '%' + '</td>' +
        '</tr>';
    };
  };
};

const totalStats = (processed) => {
  let totalReadings = 0;
  let totalQuizzes = 0;
  let totalExercises = 0;
  let totalCohorts = 0;
  for (let i = 0; processed.length; i++) {
    if (processed[i] === 'Usuario sin información') {
      totalReadings += 0;
      totalQuizzes += 0;
      totalExercises += 0;
      totalCohorts += 0;
    } else {
      totalReadings += processed[i].stats.reads.percent;
      totalQuizzes += processed[i].stats.quizzes.percent;
      totalExercises += processed[i].stats.practice.percent;
      totalCohorts += processed[i].stats.percent;
    }
    document.getElementById('totalReadings').innerHTML = Math.round(totalReads / processed.length) + '%';
    document.getElementById('totalQuizzes').innerHTML = Math.round(totalQuiz / processed.length) + '%';
    document.getElementById('totalExercises').innerHTML = Math.round(totalExercize / processed.length) + '%';
    document.getElementById('totalCohorts').innerHTML = Math.round(totalCohort / processed.length) + '%';
  };
};*/


window.sortUsers = (users, orderBy, orderDirection) => {

};
window.filterUsers = (users, search) => {

};

window.processCohortData = (options) => {

};