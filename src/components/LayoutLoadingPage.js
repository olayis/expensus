import React from 'react';
import Layout from '../components/Layout';
import LoadingPage from '../components/LoadingPage';

const LayoutLoadingPage = () => (
  <div className='layout-container'>
    <Layout />
    <main className='main-content'>
      <LoadingPage />
    </main>
  </div>
);

export default LayoutLoadingPage;
