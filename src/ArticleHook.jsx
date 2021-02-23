import React,{useState} from 'react';
import LikeButtonHooks from './LikeButtonHooks';

//今までArticle~.jsxはFunctiuonComponentだったためstateをもたせることができなかった
//今回はuseStateをもたせることでstateの操作が可能
const ArticleHook = (props) => {
    const [isError, toggleError] = useState(true);//ここまでは変数(isError)と関数(toggleError)の宣言
    
    //関数コンポーネントでもライフサイクルを扱おう
    //詳細はLikeButtonHooksに記述


    //return でjsxを返却
    return (

        <div>
            <h2>{props.title}</h2>
            <h2>{props.errorCount}</h2>
 
            <label htmlFor="check">エラーの場合チェック</label>
            {/* ここでもそのまま①【toggle=this.toggleError()】 ではなく②関数型【() => this.toggleError】で渡す */}
            <input type="checkbox" checked={isError} is="check" onClick={() => toggleError(!isError)}></input>
            <LikeButtonHooks />

        </div>
    )
};


export default ArticleHook;