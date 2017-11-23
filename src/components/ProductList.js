import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { addToCart } from '../actionsCreators';
import { connect } from 'react-redux';

const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};

export const ProductList = ({ products, addToCart}) => {


    return (
      <div style={styles.products}>
        {products.map(product =>
          <div id={"product-" + product.id} className="thumbnail product" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <p>
                <Button bsStyle="primary" onClick={() => addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );



}
const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart(product) {
      dispatch(addToCart(product));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
