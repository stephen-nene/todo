import React from "react";
import buggati from "../../images/bugatti4.webp";

function Profile() {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
  };

  return (
    <div className="main"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Profile</h1>
      <div className="card" style={{ width: "25rem" }}>
        <img src={buggati} alt="..." className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">steve-nene</h3>
          <h6 className="text">Stevekid705@gmail.com</h6>
          <p className="card-text">This is a buggati and dont worry much</p>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
