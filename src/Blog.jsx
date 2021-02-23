import React from 'react';
import Article from './Article';

//Class Component
//ライフサイクルやstatefullであることが特徴
//React.Component を継承
//propsにはthisが必要 クラス内のpropsを利用するということで
//render メソッド内でJSXをreturnする
class Blog extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const authorName="Miyashita";
        return (
            //React.Fragmentｊは省略可能
            //order , isPublishing , authorはArticleの引数
            //コンポーネントは再利用が可能
            <>
            {/* <React.Fragment> */}
                <Article title={"reactの使い方"}
                order ={3}
                isPublished={false}
                author={authorName}
                />
                <Article title={"222reactの使い方"}
                order ={3}
                isPublished={true}
                author={authorName}
                />
            {/* </React.Fragment> */}
            </>
        )
    }
}

export default Blog