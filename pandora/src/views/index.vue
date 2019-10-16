<template>
  <div class="container-fluid" id="app">
    <my-header></my-header>
    <div class="top-content">
        <ul class="list-unstyled">
            <li><a href="javascript:;">购物满1500免运费</a></li>
            <li><a href="javascript:;">三个工作日内发货提供礼品包装</a></li>
            <li><a href="javascript:;">七天无理由退换</a></li>
        </ul>
    </div>
    <div id="lbt" class="carousel" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/img/lbt1.jpg" alt="">
                <div class="lbt-content">
                    <p>浪漫桃花系列</p>
                    <a class="buy1" href="javascript:;">
                        <div>
                            <p>立即选购</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/img/lbt2.jpg" alt="">
                <div class="lbt-content">
                    <p>秋季新款系列</p>
                    <a class="buy1" href="javascript:;">
                        <div>
                            <p>立即选购</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <a href="#lbt" class="carousel-control-prev" data-slide="prev">
            <div class="lbt-left">
                <i class="iconfont icon-zuo"></i>
            </div>
        </a>
        <a href="#lbt" class="carousel-control-next" data-slide="next">
            <div class="lbt-right">
                <i class="iconfont icon-you"></i>
            </div>
        </a>
    </div>
    <div class="content-asset">
        <a href="javascript:;">
            <span>人气推荐</span>
        </a>
        <a href="javascript:;">
            <span>更多</span>
        </a>
    </div>
    <div class="pop-com">
        <div v-for="(item,i) of product" :key="i">
            <div class="flag-top">
                <span>人气畅销</span>
            </div>
            <div class="product-img">
                <img :src="require(`../assets/img/product${item.pic}.jpg`)" alt=""/>
            </div>
            <div class="product-name">
                <a href="javascript:;">{{item.title}}</a>
            </div>
            <div class="product-price">
                <span>{{item.price.toFixed(2)}} CNY</span>
            </div>
        </div>
    </div>
    <div class="tj-img">
        <div>
            <img src="../assets/img/ci-img1.jpg" alt=""/>
            <div class="img-detail">
                <p>精选手链推荐</p>
                <a class="buy1" href="javascript:;">
                    <div>
                        <p>立即选购</p>
                    </div>
                </a>
            </div>
        </div>
        <div>
            <img src="../assets/img/ci-img2.jpg" alt=""/>
            <div class="img-detail1">
                <p>人气串饰推荐</p>
                <a class="buy1" href="javascript:;">
                    <div>
                        <p>立即选购</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="hlsx">
        <img src="../assets/img/hlsx.jpg" alt=""/>
        <div class="hlsx-xl">
            <h2>活力盛夏系列</h2>
        </div>
        <div class="hlsx-buy">
            <p>立即选购</p>
        </div>
    </div>
    <div class="tj-img1">
        <div>
            <img src="../assets/img/travel.jpg" alt=""/>
            <div class="lxzb">
                <p>旅行珠宝系列</p>
            </div>
            <div class="lxzb-buy">
                <p>立即选购</p>
            </div>
        </div>
        <div>
            <img src="../assets/img/rings.jpg" alt=""/>
            <div class="cxjz">
                <p>畅销戒指精选</p>
            </div>
            <div class="cxjz-buy">
                <p>立即选购</p>
            </div>
        </div>
    </div>
    <div class="ci-module">
        <h2>皇冠马车的逐梦之旅</h2>
        <p>童话里的奇妙旅程，让Pandora皇冠马车带你一起体验。</p>
        <div class="ci-module-left">
            <div class="ci-module-left-top">
                <img src="../assets/img/mache.jpg" alt=""/>
                <div>
                    <p>闪耀皇冠马车</p>
                </div>
                <p>798.00 CNY</p>
            </div>
            <div>
                <div class="ci-module-text">
                    <h3>典雅人生项链</h3>
                    <div>
                        <p>多颗立方氧化锆石加持的Pandora Rose皇冠O车厢，闪耀动人，散发魅力。搭配经典优雅Pandora Rose项链，展露典雅气质。</p>
                    </div>
                </div>
                <div class="ci-module-btn">
                    <p>立即选购</p>
                </div>
            </div>
        </div>
        <div class="ci-module-right">
            <img src="../assets/img/cvd-关晓彤.jpg" alt=""/>
            <div>
                <p>闪耀皇冠马车</p>
            </div>
            <p>798.00 CNY</p>
        </div>
    </div>
    <div>
        <div style="height: 222px;"></div>
        <div class="bottom-email">
            <div class="content">
                <div class="content-left">
                    <p>邮件订阅</p>
                    <p>注册并获取最新信息及优惠</p>
                    <p>第一时间了解新品上市，特别促销和品牌资讯</p>
                </div>
                <div class="content-right">
                    <form action="">
                        <input type="email" placeholder="请输入邮箱"/>
                        <button>继续</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <my-footer></my-footer>
</div>
</template>

<script>
// @ is an alias to /src
import header from '@/components/header.vue';
import footer from '@/components/footer.vue';
export default {
    data(){
        return{
            product:[] //商品列表
        }
    },
    components: {
        "my-header":header,
        "my-footer":footer
    },
    methods:{
        getData(){
            var url = "index_pro";
            this.axios.get(url).then(res=>{
                if(res.data.code == 1){
                    this.product = res.data.data;
                    console.log(res.data);
                }
            })
        }
    },
    mounted(){
        this.getData();
        var sr = document.getElementById("sr");
        sr.addEventListener('focus',function(){
            //removeAttribute方法删除指定的属性
            sr.removeAttribute('placeholder');
        });
        sr.addEventListener('blur', function () {
            sr.setAttribute('placeholder','搜索/输入产品ID');
        });
    }
}
</script>
<style scoped>
@import '../assets/css/index.css';
@import '../font/iconfont.css';
@import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
</style>
