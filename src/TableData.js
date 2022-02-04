import React, { useState } from 'react';
import StudentForm from './StudentForm';
import jsonData from './data.json';

function TableData() {
const [employeeData, setemployeeData] = useState(jsonData);
const [isUpdate,setIsUpdate] = useState(false)
const [info,setInfo] =useState({})

function editComponent(info){
	console.log("Edit Component Clicked")
	setIsUpdate(true)
	console.log(info)
	setInfo(info)
}

function deleteComponent(info){
	console.log("inside delete component")
	let empData=employeeData;
	console.log(empData,info)
	let data=[]
	for(let i=0;i<empData.length;i++){
		console.log(empData[i].id,info.id)
		if(empData[i].id!=info.id){
			data.push(empData[i])
		}
	}
	setemployeeData(data)

}

const tableRows = employeeData.map((info) => {
	return (
		
	<tr>
		<td>{info.id}</td>
		<td>{info.Name}</td>
		<td>{info.EmailId}</td>
		<td>{info.Phone}</td>
		<td>{info.Street}</td>
		<td>{info.City}</td>
		<td>{info.State}</td>
		<td>{info.Country}</td>
		<td>{info.Postalcode}</td>
		<button onClick={()=>{
			editComponent(info)
		}} >edit</button>
		<button onClick={()=>{
			deleteComponent(info)
		}}>delete</button>
	</tr>
	
	);
});

const addRows = (data) => {
	console.log("inside addrows",data)
	console.log(employeeData)
	if(data.id){
		console.log("inside update logic method")
		let data1=[...employeeData]
		for(let i=0;i<data1.length;i++){
			if(data1[i].id===data.id){
				data1[i]=data;
			}
		}
		console.log("Data 1 ",data1)
		setemployeeData(data1)
		setIsUpdate(false)
	}
	else{
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
		<thead>
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
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{tableRows}</tbody>
	</table>
	<StudentForm func={addRows} isUpdate={isUpdate} info={info}/>
	</div>
);
}

export default TableData;