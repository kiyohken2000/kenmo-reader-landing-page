import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <section className="cta">
  <div className="cta-content">
    <div className="container">
      <h2>
        みんなで最強のニュースリーダーアプリを作ろう
      </h2>
      <h3>
        フィードバック（
        <i className="fas fa-arrow-down"></i>
        <i className="fas fa-arrow-right"></i>
        の
        <i className="fas fa-comment-alt"></i>
        ）か
        <i className="fab fa-twitter"></i>
        であなたのお気に入りのサイトを教えてください
        <br/><br/>
        kenmo readerに対応しているウェブサイトをアプリに追加します
      </h3>
    </div>
  </div>
  <div className="overlay"></div>
</section>
  </Layout>
);

export default IndexPage;
