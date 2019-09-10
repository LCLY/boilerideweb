import React from "react";
import { Container, Header } from "semantic-ui-react";
const Content = () => {
    return (
        <div className="container--margin">
            <Container text>
                <Header as="h1">
                    Wall Cracks Detection with Microsoft Hololens
                </Header>
                <p>
                    This is a research project proposed by
                    <a
                        target="_blank"
                        href="https://scholar.google.com/citations?user=rDHdOQIAAAAJ&hl=en"
                    >
                        &nbsp;
                        <b>
                            <i>Dr.Mohammad R. Jahanshahi</i>
                        </b>
                        &nbsp;
                    </a>
                    and
                    <a
                        href="https://www.researchgate.net/profile/Tarutal_Ghosh_Mondal2"
                        target="blank"
                    >
                        &nbsp;
                        <b>
                            <i>Tarutal Ghosh Mondal</i>
                        </b>
                        &nbsp;
                    </a>
                    from Purdue University.
                </p>
                <p>
                    After reviewing research papers published by other
                    researchers, we decided on creating an application that
                    utilizes Microsoft Hololens Mixed Reality to detect wall
                    cracks.
                </p>
                <h3>Why I joined the team?</h3>
                <p>
                    I decided to join the
                    <a
                        target="_blank"
                        href="https://web.ics.purdue.edu/~jahansha/people.html"
                    >
                        <i>&nbsp;team&nbsp;</i>
                    </a>
                    because the new and interesting technology (Microsoft
                    Hololens) involved managed to caught my eye and how the
                    project might actually be helpful in building's inspection.
                    My team is the software team and we are responsible for
                    creating the application.
                </p>
                <h3 id="demoVideo">How it works</h3>
                <p>
                    The way we envisioned how the final product should look like
                    is a building inspector or engineer puts on the device (
                    <a
                        href="https://www.microsoft.com/en-us/hololens"
                        target="_blank"
                    >
                        <b>
                            <i>Microsoft Hololens</i>
                        </b>
                    </a>
                    ) to scan the interiors of a building. If there were any new
                    crack on the wall, the application should be able to detect
                    and label the cracks with important relevant information.
                </p>

                <h3>Current features</h3>
                <p>
                    When user positions himself/herself in front of a wall and
                    carry out an air tap gesture, the camera on the hololens
                    will capture an image and the image will be sent to the
                    backend which is
                    <a
                        target="_blank"
                        href="https://docs.microsoft.com/en-us/azure/cognitive-services/custom-vision-service/home"
                    >
                        &nbsp;Azure Custom Vision Service&nbsp;
                    </a>
                    . If the image taken matches with the data trained using
                    Azure Custom Vision service, a reply will return from the
                    Service and it will be displayed in the world-space through
                    the device.
                </p>
                <h3 id="documentDiv">Documentations</h3>
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
