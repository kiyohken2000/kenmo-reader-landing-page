import React from 'react';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout>
    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            プライバシーポリシー
            <br />
            <Link className="btn btn-outline btn-xl" to="/">
              戻る
            </Link>
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
            ユーザーの個人情報には一切の興味がありません。
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
