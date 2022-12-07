import { Activity } from "./entities/activity.entity";
import { Courses } from "./entities/courses";
import { GradeBookSetup } from "./entities/gradeBookSetup.entity";
import { gradeFinal } from "./entities/gradeFinal.entity";
import { Student } from "./entities/student.entity";
import { Teacher } from "./entities/teacher.entity";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities: Activity[] = [];
let gradeBooksSetup: GradeBookSetup[] = [];
let courses: Courses[] = [];
let gradesFinal: gradeFinal[] = [];

enum Area {
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
    Diseno = "Diseño de Modas",
}
/*enum Course {
    Programacion = 'Programcion Visual',
    baseDatos = 'Base de Datos',
    Metodologias = 'Metodologias',
}*/

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),

    }
    students.push(currentStudent);
    console.table(students);
    initSelect();
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher"),
    }
    teachers.push(currentTeacher);
    console.table(teachers);
    initSelect();
}

function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity"),
    }
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximun-gradebook")),
    }
    gradeBooksSetup.push(currentGradeBookSetup);
    console.table(gradeBooksSetup);
}
function addCourseForm(): void {
    let currentCourse: Courses = {
        nameCourses: readFormHtml("name-courses1")
    }
    courses.push(currentCourse);
    console.table(courses);
    initSelect();
}
function addGradefinal(): void {
    let currentFinalgrade: gradeFinal = {
        nameGradefinal: readFormHtml("grade-final-name"),
        teacherGradefinal: readFormHtml("grade-final-teacher"),
        courseGrdefinal: readFormHtml("course-gradebook"),
        finalGrade: parseInt(readFormHtml("final-grade"))

    }
    gradesFinal.push(currentFinalgrade);
    console.table(gradesFinal)
}

function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}
function initSelect(): void {

    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
    areas.forEach(
        (area1) => {
            let option = document.createElement("option");
            option.value = area1;
            option.text = area1,
                area.add(option);
        }
    );
    let activityGradebook = document.getElementById("activity-gradebook") as HTMLSelectElement;
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove())
    activities.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name,
            option.text = value.name,
                activityGradebook.add(option);
        }
    );
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    courses.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.nameCourses;
            option.text = value.nameCourses,
                courseGradeBook.add(option);
        }
    )
    let nameGradefinal = document.getElementById("grade-final-name") as HTMLSelectElement;
    students.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName;
            option.text = value.fullName,
                nameGradefinal.add(option);
        }

    )
    let teacherGradefinal = document.getElementById("grade-final-teacher") as HTMLSelectElement;
    teachers.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName;
            option.text = value.fullName,
                teacherGradefinal.add(option);
        }

    )
    let courseGradefinal = document.getElementById("grade-final-course") as HTMLSelectElement;
    courses.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.nameCourses;
            option.text = value.nameCourses,
                courseGradefinal.add(option);
        }
    )
}
initSelect();