interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne: Student = {
	firstName: 'Malcolm',
	lastName: 'Miller',
	age: 27,
	location: 'Los Angeles'
}

const studentTwo: Student = {
	firstName: 'Bill',
	lastName: 'Hicks',
	age: 32,
	location: 'Chicago'
}

const studentsList: Array<Student> = [studentOne, studentTwo];
const table: HTMLTableElement = document.createElement('table');
const tBody: HTMLTableSectionElement = table.createTBody();

studentsList.forEach((student) => {
	const newRow: HTMLTableRowElement = tBody.insertRow();
	const newRowFirstName: HTMLTableCellElement = newRow.insertCell();
	const newRowLocation: HTMLTableCellElement = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})

document.body.appendChild(table);
