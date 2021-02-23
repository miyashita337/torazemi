import React from 'react';
import LikeButton from './LikeButton';

const ArticleState = (props) => {
    //return でjsxを返却
    return (

        <div>
            <h2>{props.title}</h2>
            <h2>{props.errorCount}</h2>
 
            <label htmlFor="check">エラーの場合チェック</label>
            {/* ここでもそのまま①【toggle=this.toggleError()】 ではなく②関数型【() => this.toggleError】で渡す */}
            <input type="checkbox" checked={props.isError} is="check" onClick={() => props.toggle()}></input>
            <LikeButton count={props.count}/>

        </div>
    )
};


export default ArticleState;