import React from "react";
import { Container, Header } from "semantic-ui-react";
import createOffer from "../Images/createoffer.gif";
import createRequest from "../Images/createrequest.gif";
import pointSystem from "../Images/pointsystem.gif";
import rideHistory from "../Images/ridehistory.gif";
import searchRideOffer from "../Images/searchrideoffer.gif";
import signIn from "../Images/signin.gif";
import signUp from "../Images/signup.gif";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Content = () => {
    return (
        <div className="container--margin">
            <Container text>
                <Header as="h1">Boileride</Header>
                <p>
                    A ride sharing web application that allows users to list,
                    search and reserve rides around Purdue University. Worked
                    with a group of students to build this web application.
                </p>
                <div className="underline">
                    <h3>Tools</h3>
                </div>
                <p>
                    The application is being built with
                    <b> HTML, CSS, JS, JQuery </b>
                    for the frontend and <b> Node.js, Java, MySQL, AWS </b> for
                    the backend.
                </p>
                <p id="demo">
                    <i>
                        Note: The project is no longer live but below are the
                        demo gifs.
                    </i>
                </p>
                <div className="underline">
                    <h3 id="demoVideo">How it works</h3>
                </div>
                {/* ============== Sign in/up ============== */}

                <div className="paragraph--div">
                    <h3 style={{ margin: 0 }}>Sign Up </h3>
                    <p>
                        Users can sign up to create a new account after keying
                        in all the required information and submit the form.
                    </p>
                    <h3 style={{ margin: 0 }}>Forget Password</h3>
                    <p>
                        There is also a forget password feature where the users
                        will be required to enter a verification key from the
                        verification email received in order to reset the
                        password.
                    </p>
                </div>

                <div className="paragraph--div">
                    <h3 style={{ margin: 0 }}>Sign In</h3>
                    <p>
                        Now users can use the newly created account to sign in
                        and access the home page. Users can also change their
                        information in the settings page.
                    </p>
                </div>
                <Carousel>
                    <div>
                        <img
                            src={signUp}
                            alt="signup"
                            className="image--format"
                        ></img>
                        <p className="legend">Sign up</p>
                    </div>
                    <div>
                        <img
                            src={signIn}
                            alt="signin"
                            className="image--format"
                        ></img>

                        <p className="legend">Sign in</p>
                    </div>
                </Carousel>
                {/* ============== Create ride offer/request ============== */}
                <h3>Creating ride offer/request</h3>
                <p>
                    User can either create their ride request or offer by
                    putting in required information such as the pick up
                    location, destination, date/time, the number of seats
                    available, the room for how many luggages and amenities{" "}
                </p>
                <Carousel>
                    <div>
                        <img
                            src={createOffer}
                            alt="create offer"
                            className="image--format"
                        ></img>
                        <p style={{ fontSize: "2rem" }}>Create Offer</p>
                    </div>
                    <div>
                        <img
                            src={createRequest}
                            alt="create request"
                            className="image--format"
                        ></img>

                        <p style={{ fontSize: "2rem" }}>Create Request</p>
                    </div>
                </Carousel>
                <img
                    src={searchRideOffer}
                    alt="search ride offer"
                    className="image--format"
                ></img>
                <img
                    src={rideHistory}
                    alt="ride history"
                    className="image--format"
                ></img>
                <img
                    src={pointSystem}
                    alt="point system"
                    className="image--format"
                ></img>
                <h3 id="document">Documentations</h3>
                <p>
                    Weekly documentations to keep track of progress and to act
                    as a reference/reminder for future self or other students.
                </p>
                <h3>Future goals</h3>
                <p>
                    Display more accurate and precise data about the cracks such
                    as location, date or history, severity, future predictions
                    of the cracks and perhaps a display of the buildings BIM
                    model behind the wall cracks.
                    <br /> <br />
                    Being able to obtain all these important data with just a
                    glance would improve the efficiency with inspections and
                    maintenance. For example, the inspector will know the
                    severity of the wall cracks he is looking at and he can
                    decide the priority of fixing it.
                </p>
            </Container>
        </div>
    );
};

export default Content;
