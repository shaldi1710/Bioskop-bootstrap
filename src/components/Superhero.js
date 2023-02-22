import {Card, Col, Container, Row, Image} from "react-bootstrap"
import hero1Image from "../assets/image/super hero/hero1.jpg"
import hero2Image from "../assets/image/super hero/hero2.jpg"
import hero3Image from "../assets/image/super hero/hero3.jpg"
import hero4Image from "../assets/image/super hero/hero4.jpg"
import hero5Image from "../assets/image/super hero/hero5.jpg"
import hero6Image from "../assets/image/super hero/hero6.webp"



const superHero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">SUPER HERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="superhero">
                        <Card className="movieImage">
                            <Image src={hero1Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">ETERNALS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in
                                    to additional content. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                              </div> 
                            </div>   
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero2Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">SUPERHERO INDONESIA</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in
                                    to additional content. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                              </div> 
                            </div>   
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero3Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">SCARLET WITCH</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in
                                    to additional content. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                              </div> 
                            </div>   
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero4Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">AVENGERS</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in
                                    to additional content. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                              </div> 
                            </div>   
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero5Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">BATMAN V SUPERMAN</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in
                                    to additional content. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                              </div> 
                            </div>   
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                            <Image src={hero6Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">AVANGERS END GAME</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with natural lead-in
                                    to additional content. 
                                </Card.Text>
                                <Card.Text className="text-left">
                                    Last updated 3 mins ago
                                </Card.Text>
                              </div> 
                            </div>   
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}



export default superHero;