import React, {useState, useEffect} from 'react'
    /**
     * useEffectメソッド
     * ・ライフサイクルメソッドを代替えできる
     * ・Function Componentでライフサイクルを使える
     * ・コードの保守性が高い
     * 　コードをまとめられる
     * 　○機能ベース（なにをやってるか）
     * 　✗時間の流れベース(ライフサイクルのメソッド毎)
     */

     //パターン①レンダー毎
     /**
      * 基本の形
      * ・useEffect()内にcallback関数を書く
      * ・Callbackはレンダー毎に呼ばれる
      * ・マウント時の実装はない
      * ・returnするCallback関数はアンマウント時に呼ばれる
      * 　(↑クリーンアップ関数という)
      * 
useEffect (() => {
    console.log('renderするたびにここがよばれる!!!');
    return () => {
        console.log('終了：Unmounting');
    }
})      
      */

     //パターン②マウント時のみ
     /**
      * ・第２引数の配列内の値を、「前回レンダー」と「今回レンダー」で比較
      * 　　→変更があればCallback関数を実行
      * ・第２引数に空の配列を渡すと
      * 　最初の１下位(マウント時)のみ実行される
      * 
useEffect (() => {
    console.log('useEffectでマウントー＞render!!!');
}, [])
      */

    //パターン③マウント＆アンマウントのみ
    /**
     * ・①と②の複合系
     * ・通常のCallbackはマウントのみ
     * ・アンマウント時はreturnのクリーンアップ関数が実行される
useEffect (() => {
    console.log('useEffectでマウントー＞render!!!');
    return () => {
        console.log('終了：Unmounting');
    }
}, [])      
     */

     //パターン④特定のレンダー時
     /**
      * ・マウント時に実行される
      * ・limitの値が変わった時に実行される
      * ・下記の例で言えばlimitの値が
      * true->falseになったとき
const [limit, release] = useState(true);
useEffect (() => {
    console.log('useEffectでマウントー＞render!!!');
}, [limit])      
      */

const LikeButtonHooks = () => {

    const [count, counterHooks] = useState(0);//[変数, 関数値]
    const [limit, release] = useState(true)
    const countUp = () => {
        //今までのthis.state.〜と同じ処理になる
        counterHooks(count + 1) //←アロー関数なのでセミコロン;を入れないこと！
    }

    //クリックするたびに「Unmount!」と「render」がconsoleに表示される
    //
    //これまでのアプリのレンダリングだとupdate(いわゆるreactでのcomponentDidUpdate)がフレームごとに実行されて
    //update,update,update....とフレームごとに更新されるが、そうすると重いし、バグの可能性も出てくるので
    //クリックされるたびに毎回Unmount -> mount -> render が実行されてる
    //アプリ系と違うところなので注意
    //これだけ見るとパターン①で実装してるのにパターン④と同じ動きやないかと言いたいのだが。。。
    //なのでパターン②のマウント時にのみaddEventListernerで実装するとUnmount時にremoveされてそれから動かなくなる
    //かなりトラップ
    useEffect( () => {
        console.log("render");
        document.getElementById('counterHooks').addEventListener('click', countUp);
        if (count >= 10) {
            counterHooks(0) //アロー関数内なのでセミコロンを入れない（ややこしい）
        }
        return () => {
            console.log("Unmount!");
            document.getElementById('counterHooks').removeEventListener('click', countUp)
        }
    }, [limit]);

    return(
        <>
            <button id={"counterHooks"} >いいね数: {count}</button>
            <button  onClick={() => release(!limit)} >もっといいねしたい </button>
        </>
    )


}

//名前無しdefault のexport
//ES6ではこれが推奨
export default LikeButtonHooks