<template>
    <div class="art-allof-box" ref = "artAllofBox">
        
        <div class="art-wraper" >
            <div class="art-content">
                <app-artlist-search> </app-artlist-search>
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
    import scroll from '@utils/scroll'
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
        },
        mounted() {
            setTimeout (()=>{
                scroll({
                   el: this.$refs.artAllofBox,
                   handler : ()=>{}
                })
            },1000)
                
            
        }
    }
</script>

<style lang="scss">
    .art-allof-box{background: white;padding-bottom: 1.666667rem;height: 100%;overflow: hidden;}
    .art-wraper{padding-bottom: .266667rem;}
    
    .art-content {background: #f2f2f2}
</style>
