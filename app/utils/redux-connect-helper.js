import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/creators';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default function connectProps (mapStateToProps, component) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}