import React from "react";

const OurTeam = ({ teamMember }) => {
  return (
    <div className=".col-xs-7 .col-sm-6 .col-lg-8 jumbotron ">
      <img style={styleImg} src={teamMember.image} />
      <div className="our-team-member our-team-detail text-center">
        <h4>
          {teamMember.first_name} {teamMember.last_name}
        </h4>
        <h5>{teamMember.branch}</h5>
        <h5>{teamMember.year}</h5>

        <a href={teamMember.facebook} style={styleIcon}>
          <img src="/icons/icons8-facebook-50.png" alt="..." />
        </a>

        <a href={teamMember.github} style={styleIcon}>
          <img src="/icons/icons8-github-50.png" alt="..." />
        </a>

        <a href={teamMember.linkedin} style={styleIcon}>
          <img src="/icons/icons8-linkedin-circled-50.png" alt="..." />
        </a>
      </div>
    </div>
  );
};

const styleImg = {
  width: "70vw",
  height: "auto",
  border: "2px solid rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
};

const styleIcon = {
  fontSize: "3rem",
  justifyContent: "space",
};

export default OurTeam;
