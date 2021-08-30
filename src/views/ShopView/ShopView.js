import React from 'react';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.js';
import SHOP_DATA from './shop.data.js';

class ShopView extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){
    const {collections} = this.state;
    return( 
      <div className="shop-view">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps}  />
          ))
        }
      </div>
    )
  }
}

export default ShopView;