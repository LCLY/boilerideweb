import React from "react";
import { Container, Menu } from "semantic-ui-react";
const Navbar = () => {
    return (
        <div className="navbar--desktop">
            <Menu fixed="top" inverted>
                <Container>
                    <Menu.Item as="a" href="#" header>
                        Boileride
                    </Menu.Item>
                    <Menu.Item as="a" href="#">
                        Home
                    </Menu.Item>
                    <Menu.Item as="a" href="#demo">
                        Demo
                    </Menu.Item>
                    <Menu.Item as="a" href="#document">
                        Documentation
                    </Menu.Item>
                    <Menu.Item as="a" href="#footerDiv">
                        Other links
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    );
};

export default Navbar;
