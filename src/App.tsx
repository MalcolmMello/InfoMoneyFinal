import React from 'react';
import { DataProvider } from './contexts/DataContext'
import { Router } from './router';

function App() {
  return (
    <div>
      <DataProvider>
        <Router />
      </DataProvider>
    </div>
  );
}

export default App;
