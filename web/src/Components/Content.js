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
                    <h4 style={{ marginBottom: "0.5rem" }}>Sign Up </h4>
                    <p>
                        Users can sign up to create a new account after keying
                        in all the required information and submit the form.
                    </p>
                </div>
                <div className="paragraph--div">
                    <h4 style={{ marginBottom: "0.5rem" }}>Sign In</h4>
                    <p>
                        Now users can use the newly created account to sign in
                        and access the home page. Users can also change their
                        information in the settings page.
                    </p>
                </div>
                <div className="paragraph--div">
                    <h4 style={{ marginBottom: "0.5rem" }}>Reset Password</h4>
                    <p>
                        A password reset feature where the users will be
                        required to enter a verification key from the
                        verification email received in order to reset the
                        password.
                    </p>
                </div>
                <Carousel style={{ marginTop: "1rem" }}>
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
                <div className="underline"></div>
                {/* ============== Create ride offer/request ============== */}
                <h4 style={{ marginBottom: "0.5rem" }}>
                    Creating ride offer/request
                </h4>
                <p>
                    User can either create their ride request or offer by
                    putting in required information such as the pick up
                    location, destination, date/time, the number of seats
                    available, the room for how many luggages and the amenities
                    the user desires.
                </p>
                <Carousel>
                    <div>
                        <img
                            src={createOffer}
                            alt="create offer"
                            className="image--format"
                        ></img>
                        <p className="legend">Create Ride Offer</p>
                    </div>
                    <div>
                        <img
                            src={createRequest}
                            alt="create request"
                            className="image--format"
                        ></img>

                        <p className="legend">Create Ride Request</p>
                    </div>
                </Carousel>
                <div className="underline"></div>
                {/* search ride */}
                <h4 style={{ marginBottom: "0.5rem" }}>
                    Search ride offer/request
                </h4>
                <p>
                    User can search for available ride offers or requests after
                    entering relevant information such as pick up location, drop
                    off destination, the date, time, seats requested and number
                    of luggages you have. You can also decide to have more than
                    1 ride during your travel.
                </p>
                <h4 style={{ marginBottom: "0.5rem" }}>Ride Status</h4>
                <p>
                    You can check your ride statuses by going to the My Ride
                    Offer/Request pages. For example, the ride offers you
                    created or accepted, the same goes to ride requests. The
                    page will also show the rides in a list with different
                    colors to indicate its current status, whether it is still
                    on going or cancelled.
                </p>
                <Carousel>
                    <div>
                        <img
                            src={searchRideOffer}
                            alt="search ride offer"
                            className="image--format"
                        ></img>
                        <p className="legend">Search Ride Offer</p>
                    </div>
                    <div>
                        <img
                            src={rideHistory}
                            alt="ride history"
                            className="image--format"
                        ></img>
                        <p className="legend">Ride History</p>
                    </div>
                    <div>
                        <img
                            src={pointSystem}
                            alt="point system"
                            className="image--format"
                        ></img>
                        <p className="legend">Point system</p>
                    </div>
                </Carousel>
            </Container>
        </div>
    );
};

export default Content;
