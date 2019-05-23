import React from "react"

const TeacherHeader = props => {
    const profile = props.profile;
    return (
        <section id="topInterface">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-10 offset-md-1">
                        <div className="row">
                            <div className="col-12 col-lg-2 p-0 center">
                                <img
                                    className="avatar w-md-100"
                                    src={profile.avatar}
                                    alt="Avatar"
                                />
                            </div>
                            <div className="col-12 col-md-5 col-lg-4 text-lg-left text-center ">
                                <div className="d-inline-block">
                                    <div id="name">{profile.honorific} {profile.name}</div>
                                    <div id="email">{profile.email}</div>
                                    <div id="school">
                                        School:
                                        <span>{profile.school}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeacherHeader;
