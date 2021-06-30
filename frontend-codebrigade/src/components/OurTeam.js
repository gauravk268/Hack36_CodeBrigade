import React from "react";

const OurTeam = ({ teamMember }) => {
  return (
    <div className="jumbotron text-center m-5">
      <img style={styleImg} src={teamMember.image} alt="profile" />
      <div className="our-team-member our-team-detail text-center">
        <h4>
          {teamMember.first_name} {teamMember.last_name}
        </h4>
        <h5>{teamMember.branch}</h5>
        <h5>{teamMember.year}</h5>

        <a href={teamMember.facebook} >
          <img src="/icons/icons8-facebook-50.png" alt="facebook" style={styleIcon}/>
        </a>

        <a href={teamMember.github} >
          <img src="/icons/icons8-github-50.png" alt="github" style={styleIcon}/>
        </a>

        <a href={teamMember.linkedin} >
          <img src="/icons/icons8-linkedin-circled-50.png" alt="linkedin" style={styleIcon}/>
        </a>
      </div>
    </div>
  );
};

const styleImg = {
  width: "300px",
  height: "auto ",
  border: "2px solid rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
};

const styleIcon = {
  fontSize: "3rem",
  height: "50px",
  width: "50px",
  justifyContent: "space",
};

export default OurTeam;
