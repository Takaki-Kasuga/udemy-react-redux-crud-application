import React from 'react'
import { connect } from 'react-redux'
import { incremnt, decremnt } from '../actions'


const App = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Hello.World!</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({ value: state.count.value })

// const mapDispatchToProps = (dispatch) => (
//   { incremnt: () => dispatch(incremnt()) },
//   { decremnt: () => dispatch(decremnt()) }
// )

const mapDispatchToProps = ({ incremnt, decremnt })

export default connect(mapStateToProps, mapDispatchToProps)(App);
