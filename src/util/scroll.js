
import BetterScroll from 'better-scroll'

const scroll = ({
    el, // 拉动刷新的元素
    handler,// 拉动刷新的处理函数
    onscroll
}) => {
    let scroll = new BetterScroll(el
    , {
    //     probeType: 2,
    //     pullUpLoad: { //配置上拉加载
    //         threshold: 50 // 距离底部多少距离
    //     },
        click: true,
        bounce:false
    }
    )

    return scroll
}

export default scroll