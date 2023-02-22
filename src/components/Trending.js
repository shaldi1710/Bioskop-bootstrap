import {Card, Col, Container, Row, Image} from "react-bootstrap"
import tranding1Image from "../assets/image/tranding/tranding1.jpg"
import tranding2Image from "../assets/image/tranding/tranding2.jpg"
import tranding3Image from "../assets/image/tranding/tranding3.jpg"
import tranding4Image from "../assets/image/tranding/tranding4.jpg"
import tranding5Image from "../assets/image/tranding/tranding5.jpg"
import tranding6Image from "../assets/image/tranding/tranding6.jpg"



const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className="text-white">TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className="movieWrapper" id="tranding">
                        <Card className="movieImage">
                            <Image src={tranding1Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">Kalian Pantas Mati</Card.Title>
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
                            <Image src={tranding2Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">Aum!</Card.Title>
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
                            <Image src={tranding3Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">THE ASSISTANT</Card.Title>
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
                            <Image src={tranding4Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">AVATAR 2</Card.Title>
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
                            <Image src={tranding5Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">Dilan1990</Card.Title>
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
                            <Image src={tranding6Image} alt="tranding movies" className="images"/>     
                            <div className="bg-dark"> 
                              <div className="p-2 m-1 text-white">               
                                <Card.Title className="text-center">FREE GUY</Card.Title>
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



export default Trending;