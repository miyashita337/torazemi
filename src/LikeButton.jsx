import React from 'react'

const LikeButton = (props) => {
    return(
        // なぜcounterはダブルクォーテーションなのか？
        <button id={"counter"} >いいね数: {props.count}</button>
    )


}

export default LikeButton