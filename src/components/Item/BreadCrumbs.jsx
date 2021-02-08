import React, { Component } from "react";
import "../../styles/breadcrums.sass"

class BreadC extends Component {
    render() {
        let itemsMapped = []
        if (this.props.breads.length > 0) {
            /*
            / El parametro fullPath indica si el producto o la busqueda
            / tienen una categoria concreta
            */
            if (this.props.fullPath) {
                itemsMapped = this.props.breads.map((category, index) => (
                    index + 1 === this.props.breads.length ?
                        <><span>{category}</span></>
                        :
                        <><span>{category}</span> <span> {">"} </span></>
                ));
            }
            else {
                itemsMapped = this.props.breads.map((category, index) => (
                    index + 1 === this.props.breads.length ?
                        <><span>{category}</span></>
                        :
                        <><span>{category}</span> <span> {"-"} </span></>
                ));
            }
        }
        let breadCList = (itemsMapped.length > 0) ?
            (this.props.fullPath) ?
                <div className="bread-padds">{itemsMapped}</div>
                :
                <div className="bread-padds"><span><b>Categorías relacionadas: </b></span>{itemsMapped}</div>
            :
            "";

        return (
            <>
                {breadCList}
            </>
        );
    }
}

export default BreadC;
