import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            リクエスト
          </h2>
          <p>追加したいサイトをフィードバックウィジェットに送信してください</p>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
  </Layout>
);

export default IndexPage;
