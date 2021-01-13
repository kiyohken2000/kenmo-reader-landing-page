import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import PrivacyHeader from '../components/privacyHeader';

const IndexPage = () => (
  <Layout>
    <PrivacyHeader />
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Privacy Policy
          </h2>
        </div>
      </div>
      <div className="overlay"></div>
    </section>
    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>kenmo readerは一切のユーザー情報を取得しません</h2>
          <p className="text-muted">
            ウェブから取得したデータを表示するだけのアプリです。
            <br/>
            ユーザーの個人情報には1ミリも興味がありません。
            <br/>
            これまでも、そしてこれからも。
          </p>
          <hr />
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default IndexPage;
