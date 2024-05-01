// array of employee objects
const employees = [
	{
		name: 'Atticus',
		employeeNumber: '2405',
		annualSalary: '47000',
		reviewRating: 3,
	},
	{
		name: 'Jem',
		employeeNumber: '62347',
		annualSalary: '63500',
		reviewRating: 4,
	},
	{
		name: 'Scout',
		employeeNumber: '6243',
		annualSalary: '74750',
		reviewRating: 5,
	},
	{
		name: 'Robert',
		employeeNumber: '26835',
		annualSalary: '66000',
		reviewRating: 1,
	},
	{
		name: 'Mayella',
		employeeNumber: '89068',
		annualSalary: '35000',
		reviewRating: 1,
	},
];

console.log('array of employee data: ', employees);

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!
//

function calculateIndividualEmployeeBonus(employee) {
	let employeeBonus = {
		name: employee.name,
		bonusPercentage: 0,
		totalCompensation: 0,
		totalBonus: 0,
	};
	// your logic here

	if (employee.reviewRating === 3) {
		employeeBonus.bonusPercentage = 0.04;
	} else if (employee.reviewRating === 4) {
		employeeBonus.bonusPercentage = 0.06;
	} else if (employee.reviewRating === 5) {
		employeeBonus.bonusPercentage = 0.1;
	} else {
		employeeBonus.bonusPercentage = 0;
  }

	if (employee.employeeNumber < 10000) {
		employeeBonus.bonusPercentage += 0.05;
	}

  if (employee.annualSalary > 65000) {
		employeeBonus.bonusPercentage -= 0.01;
	}
  
	if (employeeBonus.bonusPercentage > 0.13) {
		employeeBonus.bonusPercentage = 0.13;
	} else if (employeeBonus.bonusPercentage < 0) {
	  employeeBonus.bonusPercentage = 0;
  }

  employeeBonus.totalBonus = Math.round(employeeBonus.bonusPercentage * Number(employee.annualSalary));
  employeeBonus.totalCompensation = employeeBonus.totalBonus + Number(employee.annualSalary);
return employeeBonus;
}

for (let emp of employees) {
	console.log(calculateIndividualEmployeeBonus(emp));
}

