import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className='product'>
      <h4>single product</h4>
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 0}</p>
    </article>
  );

};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

// Product.defaultProps = {      // setting default values to props
//   name: 'default name',
//   price: 0,
//   image: defaultImage
// }

export default Product;
