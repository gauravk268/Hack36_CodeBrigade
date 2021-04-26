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

        <a href={teamMember.facebook} style={styleIcon}>
          <img src="/icons/icons8-facebook-50.png" alt="facebook" />
        </a>

        <a href={teamMember.github} style={styleIcon}>
          <img src="/icons/icons8-github-50.png" alt="github" />
        </a>

        <a href={teamMember.linkedin} style={styleIcon}>
          <img src="/icons/icons8-linkedin-circled-50.png" alt="linkedin" />
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
  justifyContent: "space",
};

export default OurTeam;
