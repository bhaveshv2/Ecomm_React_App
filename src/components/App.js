import React from 'react';
import { Navbar,Home,Page404, AddProduct } from './index';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllProducts } from '../actions/products';
import PropTypes from 'prop-types';

class App extends React.Component {
  componentDidMount(){
    this.props.dispatch(getAllProducts());
  }

  render(){
    const {products} = this.props;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" render={(props)=>{return <Home {...props} products={products}/>}}/>
            <Route path="/add-product" component={AddProduct} />
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
