import React from 'react';
import { HomePage, About, Map, Contact, FirebaseData, Gallery } from './View';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <div>
      <ScrollToTop>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout>
                <HomePage />{' '}
              </Layout>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            exact
            path="/map"
            element={
              <Layout>
                <Map />
              </Layout>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            exact
            path="/gallery"
            element={
              <Layout>
                <Gallery />
              </Layout>
            }
          />
          <Route
            exact
            path="/data"
            element={
              <Layout>
                <FirebaseData />
              </Layout>
            }
          />
        </Routes>
      </ScrollToTop>
    </div>
  );
};

export default App;
