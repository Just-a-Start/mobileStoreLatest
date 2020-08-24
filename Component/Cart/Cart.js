import React, { Component } from 'react';
import Title from "../Title";
import CartColumn from "./CardColumn";
import EmptyCart from "./EmptyCart";
import {ProductConsumer} from "../../Context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";



class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {
                        value =>{
                            const {cart} = value;
                            if (cart.length> 0){
                                return(
                                    <React.Fragment>
                                        <Title name = "your" title = "cart"></Title>
                                        <CartColumn></CartColumn>
                                        <CartList value = {value}></CartList>
                                        <CartTotal  value = {value} history = {this.props.history}></CartTotal>

                                    </React.Fragment>
                                )
                            }
                            else{
                                return(
                                    <EmptyCart></EmptyCart>

                                )
                            }
                        }
                    }
                </ProductConsumer>
               
               
            </section>
            
        );
    }
}

export default Cart;