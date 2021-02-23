import React from 'react';
import Article from './Article';
import ArticleState from './ArticleState';
import ArticleHook from './ArticleHook';
//import {Foo,Bar} from './components/FooBar';//相対パス
import * as FooBar from './components/FooBar';//相対パス
import Hoge from './components/Hoge'


//hookに関して
/**
 * なぜhookを使うのか？
 * 「シンプルさを保つため」
 * 　クラスコンポーネントは難しい
 * ・thisの定義がわかりヅラい
 * ・stateを扱うロジックが複雑
 * ・複数のライフサイクルメソッドに副作用のある処理がまたがる

 * useStateを使おう
 * ・ステートフックと呼ばれる
 * クラスコンポーネントで言う所のthis.stateとthis.setStateを代替え 
 * 複数のstateを扱うときはstateごとに宣言
 * 
//1useState関数のimport
import React, {useState} from 'react';

//2宣言
//useState(false) は
//        this.state = {isError: false}と同意義

const [isError, toggleError] = useState(false);
      ↑state変数名 ↑state変更関数名          ↑state初期値

//3 jsx内部で使う
<input 中略 onClick={() => toggleError(!isError)}> ←こんな感じ

      */

//classではなくFunctional Componentにする      
const BlogHooks = () => {
    /** 
     * 設計をする時
     * 上位のComponentはclass component
     * 下位はfunctional compoentntになるのが通常だが、
     * それだとstateを親のclass componentから下位のfunctional componentに
     * バケツリレー的に持ち回りにするのが、それだと実装しててきつい。
     * だから下位末端のfunctional componentにstateを渡すようにするとcomponentの管理がかなり楽になる
     */
    // render() {
        const authorName="Miyashita";
        return (
            //React.Fragmentｊは省略可能
            //order , isPublishing , authorはArticleの引数
            //コンポーネントは再利用が可能
            <>
            {/* <React.Fragment> */}
                <Article title={"ここからBlogHooks==================="}
                order ={3}
                isPublished={false}
                author={authorName}
                />
                <ArticleHook
                    title={"hook"}
                    // errorCount={errorCount}

                />
                {/* ライフサイクルとはコンポーネントの「時間お流れ」　生まれて成長して死ぬまでの循環 */}
                {/* ３種類のライフサイクル「Mounting」「Updating」「Unmounting」 */}
                {/* なんでライフサイクルを使うか？ */}
                {/* 関数の外に影響を与える関数を使うのか？
                　DOM変更、API通信、ログ処理、setState
                副作用＝ネガティブな意味ではなく「適切な場所に配置スべき処理」普通に作用という意味出とってOK　 */}


                {/* <Foo />
                <Bar /> */}
                <FooBar.Foo ></FooBar.Foo>
                <FooBar.Bar></FooBar.Bar>
                <Hoge />



            {/* </React.Fragment> */}
            </>
        )
    // }
}

export default BlogHooks

