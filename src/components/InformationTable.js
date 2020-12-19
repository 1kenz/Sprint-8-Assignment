import React from "react";

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

export default InformationTable;
