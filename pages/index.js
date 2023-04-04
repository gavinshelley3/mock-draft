import React, { useState } from "react";
// import "./styles.css";

export default function Home() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [picks, setPicks] = useState({
    user1pick1: "",
    user2pick1: "",
    user1pick2: "",
    user2pick2: "",
    user1pick3: "",
    user2pick3: "",
    user1pick4: "",
    user2pick4: "",
    user1pick5: "",
    user2pick5: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPicks((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUser1Change = (event) => {
    setUser1(event.target.value);
  };

  const handleUser2Change = (event) => {
    setUser2(event.target.value);
  };

  const handleSaveDraft = (event) => {
    event.preventDefault();
    const draft = { user1, user2, picks };
    const dbRef = firebase.database().ref("drafts");
    dbRef.push(draft, (error) => {
      if (error) {
        console.error("Failed to save draft:", error);
      } else {
        console.log("Draft saved!");
      }
    });
  };

  const handleReset = (event) => {
    event.preventDefault();
    setUser1("");
    setUser2("");
    setPicks({
      user1pick1: "",
      user2pick1: "",
      user1pick2: "",
      user2pick2: "",
      user1pick3: "",
      user2pick3: "",
      user1pick4: "",
      user2pick4: "",
      user1pick5: "",
      user2pick5: "",
    });
  };

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "5px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    horizontalBox: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "20px",
    },
    userLabels: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginBottom: "20px",
    },
    label: {
      display: "flex",
      flexDirection: "column",
    },
    input: {
      padding: "8px",
      width: "100%",
      borderRadius: "4px",
      border: "1px solid #ccc",
      marginBottom: "10px",
    },
    picksList: {
      listStyle: "number",
      paddingLeft: "0",
    },
    listItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "10px",
    },
    versus: {
      margin: "0 5px",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "4px",
      backgroundColor: "#007BFF",
      color: "#fff",
      fontWeight: "bold",
      border: "none",
      cursor: "pointer",
      marginRight: "10px",
    },
    resetButton: {
      backgroundColor: "#ccc",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Create Your Mock Draft</h1>
      <form style={styles.form}>
        <div style={styles.userLabels}>
          <label style={styles.label}>
            User 1:
            <input
              style={styles.input}
              type="text"
              name="user1"
              value={user1}
              onChange={handleUser1Change}
            />
          </label>
          <label style={styles.label}>
            User 2:
            <input
              style={styles.input}
              type="text"
              name="user2"
              value={user2}
              onChange={handleUser2Change}
            />
          </label>
        </div>
        <h2>Picks:</h2>
        <ol style={styles.picksList}>
          <li>
            <div style={styles.horizontalBox}>
              <input
                type="text"
                name="user1pick1"
                value={picks.user1pick1}
                onChange={handleInputChange}
              />{" "}
              vs{" "}
              <input
                type="text"
                name="user2pick1"
                value={picks.user2pick1}
                onChange={handleInputChange}
              />
            </div>
          </li>
          <li>
            <div style={styles.horizontalBox}>
              <input
                type="text"
                name="user1pick2"
                value={picks.user1pick2}
                onChange={handleInputChange}
              />{" "}
              vs{" "}
              <input
                type="text"
                name="user2pick2"
                value={picks.user2pick2}
                onChange={handleInputChange}
              />
            </div>
          </li>
          <li>
            <div style={styles.horizontalBox}>
              <input
                type="text"
                name="user1pick3"
                value={picks.user1pick3}
                onChange={handleInputChange}
              />{" "}
              vs{" "}
              <input
                type="text"
                name="user2pick3"
                value={picks.user2pick3}
                onChange={handleInputChange}
              />
            </div>
          </li>
          <li>
            <div style={styles.horizontalBox}>
              <input
                type="text"
                name="user1pick4"
                value={picks.user1pick4}
                onChange={handleInputChange}
              />{" "}
              vs{" "}
              <input
                type="text"
                name="user2pick4"
                value={picks.user2pick4}
                onChange={handleInputChange}
              />
            </div>
          </li>
          <li>
            <div style={styles.horizontalBox}>
              <input
                type="text"
                name="user1pick5"
                value={picks.user1pick5}
                onChange={handleInputChange}
              />{" "}
              vs{" "}
              <input
                type="text"
                name="user2pick5"
                value={picks.user2pick5}
                onChange={handleInputChange}
              />
            </div>
          </li>
        </ol>
        <button style={styles.button} type="submit" onSubmit={handleSaveDraft}>
          Submit
        </button>
        <button
          style={{ ...styles.button, ...styles.resetButton }}
          type="reset"
          onClick={handleReset}
        >
          Reset
        </button>
        <br />
        <a href="/draganddrop">Tier List</a>
      </form>
    </div>
  );
}
