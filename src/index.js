import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form'

ReactDOM.render(
  <Form sendFormDataSomewhere={e=>console.log(e)}/>,
  document.getElementById('root')
);