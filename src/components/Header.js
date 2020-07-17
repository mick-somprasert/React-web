import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>

            <Navbar color="success" dark expand="sm">
                <NavbarBrand tag={Link} to="/">Somprasert.Web</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/about">เกี่ยวกับเรา</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/contact">ติดต่อเรา</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/profile">ข้อมูลส่วนตัว</Link></NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/signin">เข้าสู่ระบบ</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/signup">สมัครสมาชิก</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}
export default Header;

