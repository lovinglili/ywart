<template>
    <div class="art-allof-box">
        <app-artlist-search> </app-artlist-search>
        <div class="art-wraper">
            <div class="art-content">
                <app-artlist-star> </app-artlist-star>
                <app-artlist-new-message> </app-artlist-new-message>
                <app-artlist-old-star> </app-artlist-old-star>
                <app-artlist-index> </app-artlist-index>
                <app-artlist-foot> </app-artlist-foot>
            </div>
        </div>    
    </div>
</template>

<script>
    import AppArtlistSearch from '@page/artist/AppArtlistSearch'
    import AppArtlistStar from '@page/artist/AppArtlistStar'
    import AppArtlistNewMessage from '@page/artist/AppArtlistNewMessage'
    import AppArtlistOldStar from '@page/artist/AppArtlistOldStar'
    import AppArtlistIndex from '@page/artist/AppArtlistIndex'
    import AppArtlistFoot from '@page/artist/AppArtlistFoot'
    export default {
        components : {
            AppArtlistSearch,
            AppArtlistStar,
            AppArtlistNewMessage,
            AppArtlistOldStar,
            AppArtlistIndex,
            AppArtlistFoot
        }
    }
</script>

<style lang="scss">
    .art-allof-box{background: white;overflow: auto;padding-bottom: 1.666667rem;}
    .art-wraper{padding-top:1.413333rem;padding-bottom: .266667rem;}
    body {overflow: auto;}
    .art-content {background: #f2f2f2}
</style>
