import React from "react";
const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <a
                href="https://www.google.com/maps/dir//Padmavathi+Green+City,+RK+Nagar,+Balaji+Nagar,+Nellore,
              +Andhra+Pradesh/@14.4444182,79.9702267,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a4cf354c2d70095:0x5ac4e6e4c35ce83d!2m2!1d80.0052463!2d14.4444208"
              >
                {" "}
                <img
                  src="https://mts1.google.com/vt/lyrs=m@206000000&hl=en&src=app&x=11831&y=7527&z=14&s=Ga"
                  alt="Pizza"
                />
              </a>
            </div>
          </div>
          <div className="col-6 p-25">
            <h2>
              <img src="https://img.icons8.com/fluent/50/000000/gmail.png" />{" "}
              SUKESHKUMAR999@GMAIL.COM
            </h2>
            <h2>
              <img src="https://img.icons8.com/carbon-copy/50/000000/user-location.png" />
              Nawabupet,Nellore,524002
            </h2>
            <h2>
              {" "}
              <img src="https://img.icons8.com/ios/50/000000/phone.png" />
              9948171180
            </h2>

            <h3>Drop Your Comment</h3>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
            ></textarea>

            <div className="about__btn">
              <a href="" className="btn btn-smart">
                &#8594; SUBMIT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
