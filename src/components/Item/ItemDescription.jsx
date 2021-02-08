import React, { Component } from "react";
import { Col, Row, Button } from "reactstrap";
import "../../styles/itemdescription.sass"

class ItemFromSearch extends Component {
    render() {
        return (
            <div className="item-desc">
                <Row>
                    <Col item xs="12" md="8">
                        <center>
                            <div className="image-disp-container">
                                <img className="image-size" src={this.props.imgUrl} alt={"Foto del producto: " + this.props.title}/>
                            </div>
                        </center>
                    </Col>
                    <Col item xs="12" md="4">
                        <Row>
                            <Col item xs="12">
                                <p className="item-status-sold">{this.props.condition === "new" ? "Nuevo" : "Usado"} - {this.props.soldQuantity} vendidos</p>
                                <p className="item-name">{this.props.title}</p>
                                <p className="item-price">{this.props.currency} ${this.props.price}</p>
                                <Button style={{width:"100%"}} color="primary">Comprar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col item xs="12" md="8" >
                        <div className="col-margin-top-thirty-two">
                            <p className="item-desc-title">Descripción del producto</p>
                            <p className="item-desc-text">{this.props.description}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ItemFromSearch;
