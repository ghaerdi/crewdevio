import LasyLoading from "../lazyloading.jsx";
import React from "react";

function MemberCard({ memberItem }) {
  const { name, desc, email, photo, work, social } = memberItem;
  return (
    <div className="member-card glass">
      <h1 className="name">
        <span className="color-blue">{name}</span>
      </h1>
      <LasyLoading
        image={photo}
        alt="Profile Photo"
        className="profile-picture"
      />
      <h3 className="work">
        Work: <span className="color-yellow">{work}</span>
      </h3>
      <p className="desc">{desc}</p>
      <div className="social-and-email">
        <a className="email" href={`mailto: ${email}`}>
          {email}
        </a>
        <div className="social-medias">
          {Object.keys(social).map((mediaName, index) => (
            <a
              href={social[mediaName]}
              title={mediaName}
              style={{ color: "#000" }}
              key={index}
            >
              <i
                className={`fa fa-${mediaName}`}
                style={{ fontSize: "24px" }}
              ></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
