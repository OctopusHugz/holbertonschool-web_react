interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: 'Malcolm',
	lastName: 'Miller',
	age: 27,
	location: 'Los Angeles'
}

const student2: Student = {
	firstName: 'Bill',
	lastName: 'Hicks',
	age: 32,
	location: 'Chicago'
}

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const studentsList: Student[] = [student1, student2];
const table: HTMLTableElement = document.createElement('table');
body.appendChild(table);

studentsList.forEach((student: Student): void => {
	const newRow: HTMLTableRowElement = table.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
