import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Blog from './Blog';
import BlogHooks from './BlogHooks';

ReactDOM.render(
  <React.StrictMode>
    {/* 両方出そうとすると、クラスコンポーネントでstate処理してるところと、ファンクションコンポーネントで処理してるところ
    が混在してエラーになるので↓はコメントアウト */}
    {/* <Blog /> */}

    <BlogHooks />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
