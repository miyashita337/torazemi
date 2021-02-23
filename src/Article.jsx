import React from 'react';

//関数型コンポーネント Functional Component
//Articleという関数を作る
const Article = (props) => {
    let src ="";
    if (props.isPublished) {
src="公開";
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

export default Article;