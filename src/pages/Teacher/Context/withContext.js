import React from 'react';

const withContext = (Consumer, Component) => props => (
  <Consumer>{context => <Component {...props} context={context} />}</Consumer>
);

export default withContext;
