<template>
    <div>
        <div class="groom">
            <ul>
                <li v-for="(billboard,index) in billboards" :key="index">
                    <div class="imgs">
                    <img :src="billboard.ImgUrl">
                    </div>
                    <p>${{billboard.DisplayName}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:["billboards"]
}
</script>

<style lang="scss">
.groom{
    background: #FFF;
    width: 100%;
    margin-top:.266667rem;
    ul{
        display:flex;
        justify-content: space-around;
        li{
            padding-top:.533333rem;
            flex:1;
            .imgs{
                width:70%;
                margin:auto;
            }
            img{
                 width: 100%;
                margin-bottom: .426667rem;
            }
            p{
                    text-align: center;
                    margin-bottom: .533333rem;
                    font-size: .346667rem;        
            }
        }
    }
}
</style>
