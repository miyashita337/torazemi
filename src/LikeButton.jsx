import React from 'react'

const LikeButton = (props) => {
    return(
        // なぜcounterはダブルクォーテーションなのか？
        <button id={"counter"} >いいね数: {props.count}</button>
    )


}

//名前無しdefault のexport
export default LikeButton