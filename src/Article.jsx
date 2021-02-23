import React from 'react';

//関数型コンポーネント Functional Component
//アロー関数で記述
//Articleという関数を作る
//propsを引数にする
//jsxを返却する
//statelessであることが特徴
//シンプル！！！
//最近はこちらのFunctionalComponentを利用したほうがいい。Componentoにstateを持つべきではない、さらにFunctionComponentがシンプルなので

const Article = (props) => {
    // constructor(props){
    //     super(props);
    // }
    let src ="";
    if (props.isPublished) {
        src="公開";
    } else {
        src="未公開";

    }
    //return でjsxを返却
    return (

        <div>
            <h2>{props.title}</h2>
    <p>順番は{props.order}</p>
    <p>著者:{props.author}</p>
    <p>?{src}</p>
            </div>
    )
};


//↓こっちでもうごく
//Class Component
//ライフサイクルやstatefullであることが特徴
//React.Component を継承
//propsにはthisが必要 クラス内のpropsを利用するということで
//render メソッド内でJSXをreturnする
//複雑だけど 状態(state)を持つことができる コンポーネントが作られたときや、廃棄されたときのstateの関数を呼び出せれる。
/*
class Article extends React.Component {
    constructor(props){
        super(props);
    }
//     let src ="";
//     if (props.isPublished) {
// src="公開";
//     }
    //return でjsxを返却
    render() {
        return (
        <div>
            <h2>{this.props.title}</h2>
    <p>順番は{this.props.order}</p>
    <p>著者:{this.props.author}</p>
            </div>
            

        );
    }
};
*/

export default Article;