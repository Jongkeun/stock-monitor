import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import FormContainer from "./js/components/container/FormContainer.jsx";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
