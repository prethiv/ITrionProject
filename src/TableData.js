import React, { useState } from 'react';
import StudentForm from './StudentForm';
import jsonData from './data.json';
import './StudentForm.css'

function TableData() {
const [employeeData, setemployeeData] = useState(jsonData);
const [SelectedData, setSelectedData] = useState(false);

const tableRows = employeeData.map((info) => {
	return (
	<tr id='tbox'>
		<td>{info.id}</td>
		<td>{info.Name}</td>
		<td>{info.EmailId}</td>
		<td>{info.Phone}</td>
		<td>{info.Street}</td>
		<td>{info.City}</td>
		<td>{info.State}</td>
		<td>{info.Country}</td>
		<td>{info.Postalcode}</td>
	<td><button onClick={() =>setSelectedData(info)}>Edit</button></td>
	<td><button onClick={() =>setSelectedData(info)}>Delete</button></td>
	
	</tr>
	);
});

const addRows = (data,method) => {
	if(method ==='Add'){
	const totalemployees = employeeData.length;
	data.id = totalemployees + 1;
	const updatedemployeeData = [...employeeData,data];
	updatedemployeeData.push(data);
	setemployeeData(updatedemployeeData);
	}
	else {
		const totalemployees = employeeData.length;
	data.id = totalemployees + 1;
	const updatedemployeeData = [...employeeData];
	updatedemployeeData.push(data);
	setemployeeData(updatedemployeeData);
	
	}

};

return (
	<div>
	<table class="table table-striped">
		<thead id='tbox'>
		<tr>
			<th>Sr.NO</th>
			<th>Name</th>
			<th>EmailId</th>
			<th>Phone</th>
			<th>Street</th>
			<th>City</th>
			<th>State</th>
			<th>Country</th>
			<th>Postalcode</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<StudentForm func={addRows} />

	</div>
);
}

export default TableData;
