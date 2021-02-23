import React from 'react';
import Article from './Article';
import ArticleState from './ArticleState';
//import {Foo,Bar} from './components/FooBar';//相対パス
import * as FooBar from './components/FooBar';//相対パス
import Hoge from './components/Hoge'
//exportに関して
/**
 * //名前付きexport
 * 1つのモジュールから複数の関数をexport
 * クラスはexportできない
 * 
 * export function 関数名(){}
 export function Foo() {
     return(<h1>Foooooo</h1>)
 }

 * export const 関数名 = () =>{}
 export const Bar = () => {
     return (<h1>Baaaar</h1>)
 }
 */

 /**
  * 名前無し（default）export
  * 1ファイル１モジュール1export
  * ES6で推奨
src/Foo.js
export default function Foo (){
     return(<h1>Foooooo</h1>)
}

  * アロー関数は宣言後にexport
src/Bar.js
const Bar = () => {
     return (<h1>Baaaar</h1>)
}
export default Bar //宣言後にexport

  *クラスをexportできる
src/Hoge.js
export default class Hoge extends Fugaa {
    render(){
        return (<h1>Hoge</h1>)

    }
}

  */

  //importに関して
  /**
   * 名前なし(default)をexportしたモジュールをimportする
   * モジュール全体のimport
  src/Blog.js
import React from 'react';
import Article from "./Article";//ダブルクオーテーションでもシングルクォーテーションでもどっちでもいい
  * 
   */

   /**
    * 関数ごとのimport
    * 名前付きexportされたモジュールをimportする
    * {}内にimportしたい関数名
src/Hoge.js
import {Foo, Bar} from './FooBar';

src/FooBar.js
export function Foo(){
     return(<h1>Foooooo</h1>)
}
export const Bar = () => {
    return (<h1>Baaaar</h1>)
}
    */

    /**
     * 別名import
     * 別名（エイリアス）をつけてimport
     * モジュール全体 * as name
     * モジュール一部なら {A as B}
src/Blog.js
import React from 'react';
import * as AnotherName from './Article';
import {Foo as MyFoo } from './FooBar';

src/Article.js
const Article = (props) => {
     return (<h1>Articleです</h1>)
};
export default Article
     */



//なぜComponentを『使うか？
//再利用するため、分割統治するため、変更に強くするため

//Class Component
//ライフサイクルやstatefullであることが特徴
//React.Component を継承
//propsにはthisが必要 クラス内のpropsを利用するということで
//render メソッド内でJSXをreturnする
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            errorCount: 0,
            goodCount:0
        
        }
    }

    //isErrorの状態を反転させる　stateの変更方法
    /**
     * setStateを使う
     * 関数にラップするのが一般的
     * setState内に記述されたstate飲みを変更
     */
    toggleError = () =>{
        this.setState({
            isError: !this.state.isError,
            sort: this.state.errorCount++
        })
    }
    countUp = () => {
        this.setState({
            goodCount: this.state.goodCount +1
        })
    }


    //イベントリスナ
    componentDidMount = () => {
        //なぜここはシングルクォーテーションなの？ 
        //ボタンがクリックされたらいいねをカウントアップ
        //this.countUp()で渡されるとループするので注意
        document.getElementById('counter').addEventListener('click', this.countUp);
    }
    //update時 ボタンが押されたときもstataが変わる = renderの更新 -> componentDidUpdate
    componentDidUpdate() {
        if (this.state.goodCount >= 10) {
            this.state.goodCount =0;
        }
    }
    //終了時
    componentWillUnmount() {
        document.getElementById('counter').removeEventListener('click', this.countUp);
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
                <Article title={"引数なしは可能か？"}
                isPublished={true}
                />

                {/* //stateとは
                //コンポーネント内で管理する変数
                //これを「ローカルステートP」という
                //propsとして子供のコンポーネントに渡せる

                //なぜstateを使うか？
                //remder()内では値を変更してはいけない
                //setState()で値を変更する
                //stateの変更 = 再度renderのきっかけとなる 
                // -> ページリロードせず表示を切り替えられる */}


                {/* 同コンポーネント内ならthis.state.key名で取得できる */}
                {/* 子コンポーネントで参照したい場合はpropsとして渡す */}
                {/* this.stateで設定しているので画面上はチェック押そうが、変更されない、ずっとthis.state.isErrorが渡され続ける */}

                {/* 子供のComponentではtoggleErrorは参照できないので一旦toggleというpropsを「関数型」で渡す */}
                {/* なぜそのまま①【toggle=this.toggleError()】 ではなく②関数型【() => this.toggleError】かというと
                そのまま①の呼び出しの場合、こちらで実行中のrender()の初期実行時にはすでにthis.toggleError()は実行済み、
                評価済みのためstateが変わる -> render() -> this.toggleError() -> state変わる　 -> render()のループが入るため
                関数型として渡すとその場で実行されなくなり、onChekcedのときにtoggleErrorが呼ばれる */}
                
                <ArticleState
                    title={"stateの検証"}
                    isError={this.state.isError}
                    errorCount={this.state.errorCount}
                    toggle={() => this.toggleError()}
                    count={this.state.goodCount}
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
    }
}

export default Blog

