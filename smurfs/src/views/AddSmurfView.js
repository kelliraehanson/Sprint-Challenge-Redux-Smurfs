import React from 'react';
import { connect } from 'react-redux';

import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

import SmurfForm from '../components/SmurfForm';

function AddSmurfView(props) {
  return <SmurfForm {...props} />;
}

export default connect(
  null,
  { addSmurf }
)(AddSmurfView);