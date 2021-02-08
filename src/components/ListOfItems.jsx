import React, { Component } from "react";
import axios from "axios";
import { URL_BACKEND, BACKEND_ROOT, BE_PATH_ITEMS, QUERY_PARAM, BE_QP_Q } from "../constants/globalConstants.jsx";
import * as QueryString from "query-string"
import DialogModal from "./Commons/DialogModal"
import { Container, Row, Col, ListGroup, ListGroupItem, Alert, Spinner } from "reactstrap"
import BreadCs from "./Item/BreadCrumbs"
import ItemFromSearch from "./Item/ItemFromSearchRes";
import "../styles/itemresultsearch.sass"
import history from "../utils/history";
import { withRouter } from "react-router-dom";

class ItemList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateModal: false,
            breadCrumsResult: [],
            breadCrumsFullPath: false,
            listOfItems: []
        };
        this.searchDataBackend = this.searchDataBackend.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.redirectToItem = this.redirectToItem.bind(this);
    }

    toggleModal() {
        this.setState({
            stateModal: !this.state.stateModal
        })
    }

    componentDidMount() {
        //Validación de la URL actual para realizar o no búsqueda
        if (this.props.location.search && QueryString.parse(this.props.location.search).search) {
            document.title = "MercadoLibre - " + QueryString.parse(this.props.location.search).search;
            this.searchDataBackend(QueryString.parse(this.props.location.search).search)
        }
    }

    componentWillReceiveProps() {
        //Validación de alteración de la URL desde otro componente
        if (this.props.location !== history.location && history.location.pathname === "/items" && history.location.search) {
            this.searchDataBackend(QueryString.parse(history.location.search).search)
        }
    }

    async searchDataBackend(param) {
        try {
            await this.setState({
                dialogBody: (
                    <div>
                        <p>
                            Estamos buscando el producto que deseas!
                  </p>
                    </div>),
                dialogTitle: "Estamos buscando tu producto!",
                dialogFooter: (
                    <Spinner color="warning" />
                )
            })
            this.toggleModal()
            const response = await axios.get(
                URL_BACKEND + BACKEND_ROOT + BE_PATH_ITEMS + QUERY_PARAM + BE_QP_Q + param,
                {
                    headers: {
                    }
                }
            );
            await this.setState({
                breadCrumsResult: response.data.categories,
                breadCrumsFullPath: response.data.pathFromRoot,
                listOfItems: response.data.items
            })
            this.toggleModal()
        } catch (error) {
            //Posible caída del backend o respuesta no controlada por el BackEnd
            if (error.response === undefined || error.response.status !== 404) {
                await this.setState({
                    dialogTitle: "Oops!",
                    dialogBody: (
                        <div>
                            <p>
                                Tenemos problemas en nuestro sistema actualmente. Visitanos más tarde para continuar con tus compras!
                      </p>
                        </div>
                    )
                });
            }
            //Productos no encontrados
            else {
                this.setState({
                    listOfItems: [],
                    breadCrumsResult: [],
                    breadCrumsFullPath: false,
                })
                this.toggleModal()
            }
        }
    }

    async redirectToItem(e) {
        history.push("items/" + e.target.id);
    }

    render() {
        let itemsMapped = []
        if (this.state.listOfItems.length > 0) {
            itemsMapped = this.state.listOfItems.map((item, index) => (
                index + 1 === this.state.listOfItems.length ?
                    <ListGroupItem onClick={this.redirectToItem} style={{ padding: 0, cursor: "pointer" }} id={item.id}><ItemFromSearch idItem={item.id} imgUrl={item.picture} currency={item.price.currency} price={item.price.currency === "ARS" ? new Intl.NumberFormat('es-AR').format(item.price.amount) : new Intl.NumberFormat('en-US').format(item.price.amount)} description={item.title} free_shipping={item.free_shipping} location={item.state} /></ListGroupItem >
                    :
                    <ListGroupItem onClick={this.redirectToItem} style={{ padding: 0, cursor: "pointer" }} id={item.id}><ItemFromSearch idItem={item.id} imgUrl={item.picture} currency={item.price.currency} price={item.price.currency === "ARS" ? new Intl.NumberFormat('es-AR').format(item.price.amount) : new Intl.NumberFormat('en-US').format(item.price.amount)} description={item.title} free_shipping={item.free_shipping} location={item.state} /></ListGroupItem >

            ));
        } else {
            itemsMapped = (<Alert color="primary" style={{ marginTop: "32px" }}>
                En el momento no tenemos productos relacionados con tu búsqueda. ¿Deseas buscar algo más?
            </Alert>)
        }

        return (
            <>
                <DialogModal
                    stateModal={this.state.stateModal}
                    dialogTitle={this.state.dialogTitle}
                    dialogBody={this.state.dialogBody}
                    dialogFooter={this.state.dialogFooter}
                />
                <Container>
                    <Row>
                        <Col item xs="12">
                            <BreadCs breads={this.state.breadCrumsResult} fullPath={this.state.breadCrumsFullPath}></BreadCs>
                        </Col>
                    </Row>
                    <Row>
                        <Col item xs="12">
                            <ListGroup>
                                {itemsMapped}
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default withRouter(ItemList);
