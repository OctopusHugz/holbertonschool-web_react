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

const studentsList = [student1, student2];
const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((student) => {
	const newRow = table.insertRow();
	const newRowFirstName = newRow.insertCell();
	const newRowLocation = newRow.insertCell();
	newRowFirstName.innerHTML = student.firstName;
	newRowLocation.innerHTML = student.location;
})
