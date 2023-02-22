import { Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            <Navbar variant="dark">
                <Container>
                    <NavbarBrand href="/">ICALFILM</NavbarBrand>
                    <Nav> 
                      <Nav.Link href="#tranding">Trending</Nav.Link>
                      <Nav.Link href="#superhero">Superhero</Nav.Link>
                    </Nav>  
                </Container>
            </Navbar>
           
        </div>
    )
}

export default NavigationBar