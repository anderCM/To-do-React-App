import React from 'react';
import ToDo from './Components/ToDo';

const App = () => (
  <div className="container-fluid col-md-5 mx-auto" data-bs-theme="dark">
    <h1 className="text-center fw-bold">
      To do app
    </h1>
    <ToDo />
  </div>
);

export default App;
