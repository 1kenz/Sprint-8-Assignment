import React from "react";
// import section from "./";


const style = {
cw: {
width: "8%",
marginTop: "20px",
},
table: {
borderCollapse: "collapse",
},
tableCell: {
border: "1px solid gray",
margin: 0,
padding: "5px 10px",
width: "max_content",
minWidth: "150px",
},
section: {
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
},
form: {
container: {
padding: "20px",
border: "1px solid #F0F8FF",
borderRadius: "15px",
width: "max_content",
marginBottom: "40px",
marginTop: 50,
},
inputs: {
marginBottom: "10px",
width: "200px",
height: "20px",
},
submitBtn: {
marginTop: "10px",
padding: "10px 15px",
border: "none",
backgroundColor: "lightseagreen",
fontSize: "14px",
borderRadius: "5px",
color: "white",
fontWeight: "bold",
},
},
};

function PhoneBookForm(props) {
return (
<form style={style.form.container} >
<label>First name:</label>

<input
style={style.form.inputs}
className="userFirstname"
name="firstName"
type="text"
id="firstName"
placeholder="Clarus"
required
/>

<label>Last name:</label>

<input
style={style.form.inputs}
className="userLastname"
name="lastName"
id="lastname"
type="text"
placeholder="Way"
required />

<label>Phone:</label>

<input
style={style.form.inputs}
className="userPhone"
name="phone"
id="phone"
type="text"
placeholder="0189654752"
required 
/>
<input
style={style.form.submitBtn}
className="submitButton"
type="submit"
value="Add User"
/>

</form>
);
} 

function InformationTable(props) {
return (
<table style={style.table} className="informationTable">
<thead>
<tr>
<th style={style.tableCell}>First name</th>
<th style={style.tableCell}>Last name</th>
<th style={style.tableCell}>Phone</th>
</tr>
<tr>
<td style={style.tableCell}>f_rstName</td>
<td style={style.tableCell}>lastName</td>
<td style={style.tableCell}>phone</td>
</tr>
</thead>
</table>
);
}

function App(props) {
return (
<section style={style.section} 
<img
style={style.cw}
src="https:secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
alt="clarusway" 
/>
>
<section />
{/* <PhoneBookForm/> */}
)}
