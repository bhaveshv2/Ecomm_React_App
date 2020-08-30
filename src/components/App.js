import React from 'react';
import { Navbar,Home,Page404, AddProduct,EditDetailsProduct } from './index';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions/products';
import PropTypes from 'prop-types';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getAllProducts());
  }

  render(){
    
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add-product" component={AddProduct} />
            <Route path="/product-details/:productId" component={EditDetailsProduct}/>
            
            <Route component={Page404}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state){
  return {
    products:state
  }
}

App.propTypes = {
  products:PropTypes.object.isRequired,
}

export default connect(mapStateToProps)(App);
