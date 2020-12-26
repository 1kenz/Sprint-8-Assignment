import React, { useState } from "react";

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

const image =
  "https:secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg";

function PhoneBookForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);

  const onSubmit = () => {
    const data = { firstName, lastName, phoneNumber };
  };

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
        onChange={(value) => setFirstName(value)}
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
        onChange={(value) => setLastName(value)}
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
        onChange={(value) => setPhoneNumber(value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
        onSubmit={onSubmit}
      />
    </form>
  );
}

function InformationTable({ data, ...props }) {
  console.log("🚀 ~ file: App.js ~ line 122 ~ InformationTable ~ data", data);
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
        {/* {data.map((value) => {
          <tr>
            <td style={style.tableCell}>{value.firstName}</td>
            <td style={style.tableCell}>{value.lastName}</td>
            <td style={style.tableCell}>{value.phoneNumber}</td>
          </tr>;
        })} */}
      </thead>
    </table>
  );
}

function App(props) {
  return (
    <section style={style.section}>
      <img style={style.cw} src={image} alt="clarusway" />
      <PhoneBookForm />
      Clarusway
      <InformationTable />
    </section>
  );
}

export default App;
