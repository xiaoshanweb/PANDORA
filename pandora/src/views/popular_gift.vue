<template>
    <div class="container-fluid px-0">
        <my-header></my-header>
        <div class="primary-content zh-CN">
            <div class="hero-section">
                <!--面包屑导航-->
                <div class="breadcrumb">
                    <a href="https://cn.pandora.net/zh" class="breadcrumb-element"  title="主页">主页</a>
                    <span class="next-link">&gt;</span>
                    <span class="breadcrumb-element">人气礼物推荐</span>
                </div>
                <!--标题-->
                <h1>人气礼物推荐
                    <span class="products-count">(262)</span>
                </h1>
                <!--标题下文字-->
                <div class="category-promo">
                    <p>Pandora 甄选经典手链套组、项链套组及各类人气单品</p>
                    <p>给你最爱的人一份浪漫心意好礼</p>
                </div>
                <!--标题下文字下方块-->
                <div class="refinement-categories">
                    <div>
                        <a class="re-link" href="#">畅销手链套组</a>
                        <a class="re-link" href="#">畅销项链套组</a>
                        <a class="re-link" href="#">优惠套装</a>
                        <a class="re-link" href="#">关晓彤同款</a>
                        <a class="re-link" href="#">爱情主题珠宝推荐❤</a>
                        <a class="re-link" href="#">人气单品</a>
                    </div>
                </div>
            </div>
            <!--分类导航栏-->
            <div class="filters">
                <div></div>
            </div>
            <div class="search-result-content">
                <ul class="pro_ul list-unstyled">
                    <li class="grid-hide-right-border"></li>
                    <li class="pro_li" v-for="(item,i) of list" :key="i">
                        <div class="product_tile">
                            <div class="flagTop">
                                <span class="flagfont">人气畅销</span>
                            </div>
                            <div class="product-image">
                                <a href="javascript:;">
                                    <img :src="require(`../assets/img/${item.pic}`)" :alt="item.title" :title="item.title"/>
                                </a>
                            </div>
                            <div class="product-name">
                                <router-link to="/popular_gift_sets" class="name-link" href="javascript:;">{{item.title}}</router-link>
                            </div>
                            <div class="product-pri">{{item.price.toFixed(2)}} CNY</div>
                            <div class="cartbuttonDiv">
                                <button class="button-fancy-large add-to-cart addToBagButton addtocartbutton">
                                    <span class="button-plp-add-to-bag">把整套添加到购物车</span>
                                </button>
                                <div class="saveforlater saveforlaterplp">
                                    <a class="wl-action" title="+ 添加到愿望清单">
                                        <i class="iconfont icon-aixin"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import header from '@/components/header.vue';
import footer from '@/components/footer.vue';
export default {
    data(){
        return {    
            list:[] //商品列表
            // pno:0,
            // ps:6
        }
    },
    components:{
        "my-header":header,
        "my-footer":footer
    },
    methods:{
        getPro(){
            var url = "pop_pro";
            // this.pno++;
            // var obj = {pno:this.pno,ps:this.ps};
            this.axios.get(url).then(res=>{
                if(res.data.code == 1){
                    this.list = res.data.data;
                    console.log(res.data);
                }
            })
        }
    },
    mounted(){
        this.getPro();
    }
}
</script>

<style scoped>
@import '../assets/css/popular.css';
@import '../font/iconfont.css';
@import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
</style>