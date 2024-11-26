import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import MainLayout from './components/layouts/MainLayout/MainLayout';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<div>Home Page</div>} />
              {/* Add more routes here */}
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </Provider>
  );
};

export default App;
