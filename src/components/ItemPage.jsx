import React, { Component } from "react";
import axios from "axios";
import { URL_BACKEND, BACKEND_ROOT, BE_PATH_ITEMS } from "../constants/globalConstants";
import DialogModal from "./Commons/DialogModal"
import { Container, Row, Col, Alert, Spinner } from "reactstrap"
import BreadCs from "./Item/BreadCrumbs";
import "../styles/itemresultsearch.sass";
import { withRouter } from "react-router-dom";
import ItemInfo from "./Item/ItemDescription"

class ItemDetailed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateModal: false,
            breadCrumsResult: [],
            breadCrumsFullPath: false,
            itemRequested: null
        };
        this.searchDataBackend = this.searchDataBackend.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            stateModal: !this.state.stateModal
        })
    }

    componentDidMount() {
        //Validación de la ruta actual para realizar o no la búsqueda.
        let pathArr = this.props.location.pathname.split("/")
        if (pathArr.length === 3 && pathArr[1] === "items") {
            this.searchDataBackend(pathArr[2])
        }
    }

    async searchDataBackend(param) {
        try {
            await this.setState({
                dialogBody: (
                    <div>
                        <p>
                            Cargando!
                  </p>
                    </div>),
                dialogTitle: "Estamos obteniendo el detalle de tu producto!",
                dialogFooter: (
                    <Spinner color="warning" />
                )
            })
            this.toggleModal()
            const response = await axios.get(
                URL_BACKEND + BACKEND_ROOT + BE_PATH_ITEMS + "/" + param,
                {
                    headers: {
                    }
                }
            );
            await this.setState({
                breadCrumsResult: response.data.categories,
                breadCrumsFullPath: true,
                itemRequested: response.data.item
            })
            document.title = "MercadoLibre - " + response.data.item.title;
            this.toggleModal()
        } catch (error) {
            // Posible caída del BackEnd o error no controlado del BackEnd 
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
            // Producto no encontrado por el ID seleccionado
            else {
                this.setState({
                    itemRequested: null,
                    breadCrumsResult: [],
                    breadCrumsFullPath: false,
                })
                this.toggleModal()
            }
        }
    }

    render() {
        let itemMapped = ""
        // La función Intl.NumberFormat recibe el location para mappear a la moneda local un valor numerico dado
        if (this.state.itemRequested != null) {
            itemMapped = (
                <ItemInfo imgUrl={this.state.itemRequested.picture} description={this.state.itemRequested.description}
                    condition={this.state.itemRequested.condition} title={this.state.itemRequested.title}
                    currency={this.state.itemRequested.price.currency} soldQuantity={this.state.itemRequested.sold_quantity}
                    price={this.state.itemRequested.price.currency === "ARS" ? new Intl.NumberFormat('es-AR').format(this.state.itemRequested.price.amount) : new Intl.NumberFormat('en-US').format(this.state.itemRequested.price.amount)} />
            );
        } else {
            itemMapped = (<Alert color="primary" style={{ marginTop: "32px" }}>
                El producto que buscas no se encuentra disponible =(
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
                            {itemMapped}
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default withRouter(ItemDetailed);
