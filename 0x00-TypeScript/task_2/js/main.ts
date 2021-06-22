interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

class Director implements DirectorInterface {
	workFromHome() { return 'Working from home'; }
	getCoffeeBreak() { return 'Getting a coffee break'; }
	workDirectorTasks() { return 'Getting to director tasks'; }
}

class Teacher implements TeacherInterface {
	workFromHome() { return 'Cannot work from home'; }
	getCoffeeBreak() { return 'Cannot have a break'; }
	workTeacherTasks() { return 'Getting to work'; }
}

interface createEmployeeFunction {
	(salary: number | string): Director | Teacher
}

let createEmployee: createEmployeeFunction;

createEmployee = function (salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) return new Teacher();
	return new Director();
}

function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
	return employee instanceof Director;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
	if (isDirector(employee)) return employee.workDirectorTasks();
	else return employee.workTeacherTasks();
}

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') return 'Teaching Math';
	else if (todayClass === 'History') return 'Teaching History';
}
