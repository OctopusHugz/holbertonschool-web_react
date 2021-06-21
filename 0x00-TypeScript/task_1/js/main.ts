interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

let printTeacher: printTeacherFunction;
printTeacher = function (firstName: string, lastName: string): string {
	return `${firstName.slice(0, 1)}. ${lastName}`
}
