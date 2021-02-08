import React, { Component } from "react";
import { Col, Button, Row, Container, InputGroup, InputGroupAddon, Input, Form } from "reactstrap";
import logoML from "../../assets/Logo_ML.png"
import ic_search from "../../assets/ic_Search.png"
import "../../styles/header.sass"
import DialogModal from "../Commons/DialogModal"
import { Redirect } from "react-router-dom";
import history from "../../utils/history";
import { withRouter } from "react-router-dom";

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      redirectHome: null,
    };
    this.searchData = this.searchData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  searchData(e) {
    e.preventDefault();
    console.log(history)
    if (this.state.searchText) {
      history.push({
        pathname:"/items",
        search: "?search=" + this.state.searchText
      });
    }
  }

  goHome() {
    history.push("");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (<>
      <DialogModal
        stateModal={this.state.stateModal}
        dialogTitle={this.state.dialogTitle}
        dialogBody={this.state.dialogBody}
        dialogFooter={this.state.dialogFooter}
      />
      <header className="head-bg">
        <Container >
          <Row>
            <Col item xs="0" sm="1"></Col>
            <Col item xs="12" sm="2">
              <center>
                  <img onClick={this.goHome} style={{ cursor: "pointer" }} src={logoML} alt={"MercadoLibre - Logo"} />
              </center>
            </Col>
            <Col item xs="12" sm="8">
              <Form onSubmit={this.searchData}>
                <InputGroup >
                  <Input className="input-text-size" name="searchText" value={this.state.searchText} onChange={this.handleChange} placeholder="Nunca dejes de buscar" />
                  <InputGroupAddon addonType="append">
                    <Button className="ic-search-bg" onClick={this.searchData}><img src={ic_search} alt="Icono: Buscar" /></Button>
                  </InputGroupAddon>
                </InputGroup>
              </Form>
            </Col>
            <Col item xs="0" sm="1"></Col>
          </Row>
        </Container>
      </header>
    </>
    );
  }
}

export default withRouter (HeaderSearch);
