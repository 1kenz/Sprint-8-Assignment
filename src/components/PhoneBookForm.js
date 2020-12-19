import React from "react";

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
  

  function PhoneBookForm(props) {
    return (
      <form style={style.form.container}>
        <label>First name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userFirstname"
          name="firstName"
          type="text"
          id="firstName"
          placeholder="Clarus"
          required
        />
        <br />
        <label>Last name:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userLastname"
          name="lastName"
          id="lastname"
          type="text"
          placeholder="Way"
          required
        />
        <br />
        <label>Phone:</label>
        <br />
        <input
          style={style.form.inputs}
          className="userPhone"
          name="phone"
          id="phone"
          type="text"
          placeholder="0189654752"
          required
        />
        <br />
        <input
          style={style.form.submitBtn}
          className="submitButton"
          type="submit"
          value="Add User"
        />
      </form>
    );
  }

  export default PhoneBookForm;