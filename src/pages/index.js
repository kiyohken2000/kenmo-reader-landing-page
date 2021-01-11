import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplaysvg from '../assets/images/google-play-badge.svg';
import gplaypng from '../assets/images/google-play-badge.png';
import astore from '../assets/images/app-store-badge.svg';
import astorejp from '../assets/images/appstore.svg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                kenmo readerは様々なニュースサイトの記事をクリーンでシンプルなスタイルで読むためのアプリです。もちろん広告は表示されません。
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  今すぐダウンロード
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              始めよう
              <br/>
              kenmo reading style
            </h2>
            <p>
              どのスマホでも利用できます。今すぐダウンロード
            </p>
            <div className="badges">
              <a className="badge-link" href="https://play.google.com/store/apps/details?id=net.votepurchase.kenmoreader" target="_blank" rel="noreferrer noopener">
                <img src={gplaypng} alt="Google Playで手に入れよう" />
              </a>
              <a className="badge-link" href="https://apps.apple.com/jp/app/kenmo-reader/id1548214464" target="_blank" rel="noreferrer noopener">
                <img src={astorejp} alt="App Storeからダウアンロード" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>クリーンでシンプルな閲覧を約束します</h2>
          <p className="text-muted">
            kenmo readerを紹介します
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>シンプルな閲覧</h3>
                    <p className="text-muted">
                      派手な装飾を排除して記事を表示
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>多くのニュースソース</h3>
                    <p className="text-muted">
                      様々なニュースサイトとまとめサイトに対応しています
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>広告を排除</h3>
                    <p className="text-muted">
                      あなたの快適な情報収集を妨げる広告は表示されません
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>あなたの助けが必要です</h3>
                    <p className="text-muted">
                      ニュースソースの追加リクエストはツイッターでいつでも受け付けています
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            みんなで最強のニュースリーダーアプリを作ろう
          </h2>
          <h3>
            フィードバックか
            <i className="fab fa-twitter"></i>
            を使ってあなたのお気に入りのサイトを教えてください
            <br/><br/>
            kenmo readerに対応しているウェブサイトをアプリに追加します
          </h3>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We are
          <i className="fas fa-heart"></i>
          poverty!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
