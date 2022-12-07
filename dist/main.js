"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let gradeBooksSetup = [];
let courses = [];
let gradesFinal = [];
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
    Area["Diseno"] = "Dise\u00F1o de Modas";
})(Area || (Area = {}));
/*enum Course {
    Programacion = 'Programcion Visual',
    baseDatos = 'Base de Datos',
    Metodologias = 'Metodologias',
}*/
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
    initSelect();
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    };
    teachers.push(currentTeacher);
    console.table(teachers);
    initSelect();
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximun-gradebook")),
    };
    gradeBooksSetup.push(currentGradeBookSetup);
    console.table(gradeBooksSetup);
}
function addCourseForm() {
    let currentCourse = {
        nameCourses: readFormHtml("name-courses1")
    };
    courses.push(currentCourse);
    console.table(courses);
    initSelect();
}
function addGradefinal() {
    let currentFinalgrade = {
        nameGradefinal: readFormHtml("grade-final-name"),
        teacherGradefinal: readFormHtml("grade-final-teacher"),
        courseGrdefinal: readFormHtml("course-gradebook"),
        finalGrade: parseInt(readFormHtml("final-grade"))
    };
    gradesFinal.push(currentFinalgrade);
    console.table(gradesFinal);
}
function readFormHtml(id) {
    return document.getElementById(id).value;
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((area1) => {
        let option = document.createElement("option");
        option.value = area1;
        option.text = area1,
            area.add(option);
    });
    let activityGradebook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activities.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name,
            option.text = value.name,
            activityGradebook.add(option);
    });
    let courseGradeBook = document.getElementById("course-gradebook");
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.nameCourses;
        option.text = value.nameCourses,
            courseGradeBook.add(option);
    });
    let nameGradefinal = document.getElementById("grade-final-name");
    students.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.fullName;
        option.text = value.fullName,
            nameGradefinal.add(option);
    });
    let teacherGradefinal = document.getElementById("grade-final-teacher");
    teachers.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.fullName;
        option.text = value.fullName,
            teacherGradefinal.add(option);
    });
    let courseGradefinal = document.getElementById("grade-final-course");
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.nameCourses;
        option.text = value.nameCourses,
            courseGradefinal.add(option);
    });
}
initSelect();
