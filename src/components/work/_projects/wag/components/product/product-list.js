import React from 'react'
import List from '../list/list'
import Product from './product'
import './style.scss'


class ProductList extends React.Component {

	render() {
		return (
		  
		  <List 
		  	columns="4"
		  	className="list__product"
		  >
        {this.props.products.map((product, index) =>
          <li key={ product.id }>
            <Product 
              employee={ product.employee }
              image={ product.image }
              title={ product.title }
              price={ product.price }
              rating={ product.rating }
              inStock={ product.inStock }
            />
          </li>
        )}
      </List>

		)
	}
}

export default ProductList
