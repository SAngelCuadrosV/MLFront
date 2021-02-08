import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import "../../styles/itemresultsearch.sass"
import ic_free_shipping from "../../assets/ic_shipping.png"

class ItemFromSearch extends Component {
    render() {
        return (
            <Container id={this.props.idItem} className="search-result-item">
                <Row>
                    <Col id={this.props.idItem} onClick={this.searchData} className="col-padds-left-sixteen" item xs="12" md="auto">
                        <center>
                            <div id={this.props.idItem} className="image-disp-container">
                                <img  id={this.props.idItem} onClick={this.searchData}className="image-size" src={this.props.imgUrl} alt={"Foto del producto: " + this.props.description} />
                            </div>
                        </center>
                    </Col>
                    <Col id={this.props.idItem} item xs="12" md="8" className="col-padds-left-sixteen">
                        <Row>
                            <Col id={this.props.idItem} item xs="12" sm="9">
                                <p id={this.props.idItem} onClick={this.searchData} className="item-price">$ {this.props.currency} {this.props.price} {this.props.free_shipping ? <img id={this.props.idItem} src={ic_free_shipping} alt={"Icono: envio gratis"}></img>: null}</p>
                                <p id={this.props.idItem} onClick={this.searchData} className="item-desc">{this.props.description}</p>
                            </Col>
                            <Col id={this.props.idItem} item xs="12" sm="3">
                                <p className="item-location">{this.props.location}</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ItemFromSearch;
