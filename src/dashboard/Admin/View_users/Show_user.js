import './Show_user.css';
import React from 'react';
import { Container, Row, Col, Image, Button} from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Faker from 'faker';

class Show_user extends React.Component{

    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div className='Show_user'>
                <ListGroup.Item as="li"className='one_user_container'>
                    <Container>
                        <Row>
                            <Col sm={8}>
                                <Row>
                                    <Col sm={3}>
                                        <Image src={Faker.image.avatar()} roundedCircle className='w-80 h-50'/>
                                    </Col>
                                    <Col sm={9}>
                                        <Row className='user_username'>
                                            {this.props.username}
                                        </Row>
                                        <Row className='user_nss'>
                                            3456178992
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={4}>
                                <div className='action_buttons'>
                                    <div className='btn btn-outline-success'>
                                        visualiser
                                    </div>
                                    <div className='btn btn-outline-primary'>
                                        editer
                                    </div>
                                    <div className='btn btn-outline-danger'>
                                        supprimer
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </ListGroup.Item>
            </div>
        )
    }
}

export default Show_user;