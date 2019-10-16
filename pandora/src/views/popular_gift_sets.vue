<template>
    <div class="container-fluid px-0">
        <my-header></my-header>
        <div class="content-detail">
            <div class="breadcrumb">
                <router-link to="/popular_gift" class="breadcrumb-element pandora-icon-do" href="javascript:;" title="返回">
                    <i class="iconfont icon-fangxiangjiantou-xiangzuo"></i>
                    <span>返回</span>
                </router-link>
                <span class="span">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
                <router-link to="/" href="javascript:;" title="主页">主页</router-link>
                <span class="span">&nbsp;&nbsp;>&nbsp;</span>
                <a href="javascript:;" title="人气礼物推荐">人气礼物推荐</a>
                <span class="span">&nbsp;&nbsp;></span>
            </div>
            <div class="product-col-1 image-content">
                <div class="product-small">
                    <div class="smallimg select">
                        <img src="../assets/img/1-1-small.jpg" alt=""/>
                    </div>
                </div>
                <div class="primary-image">
                    <div>
                        <img src="../assets/img/1-1.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div class="product-col-2">
                <!-- <div class="flagTop">
                    <span class="flagfont">人气畅销</span>
                </div> -->
                <div class="desc">
                    <p class="name">一生所爱</p>
                    <div class="price">3,088.00CNY</div>
                    <div class="chicun">
                        <div class="size">尺寸</div>
                        <div class="sizelink">
                            <i class="iconfont icon-chizi_o"></i>尺寸指南
                        </div>
                    </div>
                    <div class="checksize">
                        <div class="sizeitem">
                            <img src="../assets/img/chicun1.jpg" alt=""/>
                        </div>
                        <div class="sizekuang">
                            <span class="wz">尺寸 尺寸</span>
                            <span class="xjt"><i class="iconfont icon-icon--"></i></span>
                        </div>
                    </div>
                    <div class="btn">
                        <button class="button">
                            <span class="buttonwz">把整套添加到购物车</span>
                        </button>
                        <div class="aixinkuang">
                            <div class="wl-action" title="+ 添加到愿望清单">
                                <i class="iconfont icon-aixin"></i>
                            </div>
                        </div>
                    </div>
                    <div class="taozu">
                        <a href="javascript:;">查看套组商品</a>
                    </div>
                </div>
            </div>
            <div class="productDetails">
                <div class="detailsColumn left">
                    <ul class="sections">
                        <li class="details-heading ui-state-active" id="left-section1">
                            <span>商品资料</span>
                        </li>
                    </ul>
                    <div class="desktop-detail-text">粉色虹彩穆拉诺琉璃和14k金心形边框包裹925银爱心以经典且时尚的方式诉说一生所爱。</div>
                </div>
                <div class="detailsColumn center">
                    <ul class="section-content">
                        <li class="attribute toggle">
                            <span class="label">类目</span><br>
                            <span class="value">Pandora Site Catalog for zh-CN</span>
                        </li>
                        <li class="attribute toggle">
                            <span class="label">商品编号</span><br>
                            <span class="value">BPVD00043</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content-asset">
                <ul class="GSR">
                    <li class="GSR__item">
                        <h4 class="GSR__header">购物满1,500元免运费</h4>
                        <p class="GSR__blurb">我们使用顺丰速运配送，购物满人民币1,500元即可享受免运费服务.</p>
                    </li>
                    <li class="GSR__item">
                        <h4 class="GSR__header">3个工作日内发货</h4>
                        <p class="GSR__blurb">正常我们将于订单付款后3个工作日内发货，公共假期（如春节）除外且发货时间会另行通知。</p>
                    </li>
                    <li class="GSR__item">
                        <h4 class="GSR__header">7天无理由退换</h4>
                        <p class="GSR__blurb">如有退换货需求，请在订单签收日起的7天内联系在线客服处理，含14K金类产品，含钻石类产品和耳环（基于使用后的卫生原因 ） 类产品将不支持退换</p>
                    </li>
                </ul>
            </div>
            <div class="asset-container">
                <div class="title-slot-content">您会喜欢的产品</div>
            </div>
            <div>
                <div class="you-may-also-like">
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/mty.jpg" alt=""></a>
                            </div>
                            <div class="xinpin">新品</div>
                            <a class="product-name" href="javascript:;" title="闪耀猫头鹰">闪耀猫头鹰</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">448.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/fox.jpg" alt=""></a>
                            </div>
                            <div class="xinpin">新品</div>
                            <a class="product-name" href="javascript:;" title="狐狸和兔子吊饰">狐狸和兔子吊饰</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">448.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/cw.jpg" alt=""></a>
                            </div>
                            <div class="xinpin">新品</div>
                            <a class="product-name" href="javascript:;" title="小刺猬尼诺">小刺猬尼诺</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">328.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/bluehg.jpg" alt=""></a>
                            </div>
                            <div class="xinpin">新品</div>
                            <a class="product-name" href="javascript:;" title="闪耀闪耀皇冠O">闪耀闪耀皇冠O</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">648.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <div class="asset-container">
                <div class="title-slot-content">搭配一套完整造型，为你推荐</div>
            </div>
            <div>
                <div class="you-may-like-section">
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/cuican.jpg" alt=""></a>
                            </div>
                            <a class="product-name" href="javascript:;" title="璀璨深蓝色串饰">璀璨深蓝色串饰</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">598.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/moon.jpg" alt=""></a>
                            </div>
                            <a class="product-name" href="javascript:;" title="月亮星空吊坠串饰">月亮星空吊坠串饰</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">498.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/pinkss.jpg" alt=""></a>
                            </div>
                            <a class="product-name" href="javascript:;" title="粉色闪烁琉璃串饰">粉色闪烁琉璃串饰</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">398.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-data">
                        <div class="product-tile">
                            <div class="product-image">
                                <a href="javascript:;"><img src="../assets/img/deeppinkss.jpg" alt=""></a>
                            </div>
                            <a class="product-name" href="javascript:;" title="深粉红色闪烁的心串饰">深粉红色闪烁的心串饰</a>
                            <div class="product-pricing">
                                <div class="product-price">
                                    <span class="price-sales ProdPrice__regularPrice">598.00 CNY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>

<script>
import header from '../components/header.vue';
import footer from '../components/footer.vue';
export default {
    components:{
        "my-header":header,
        "my-footer":footer
    }
}
</script>

<style scoped>
@import '../assets/css/sets.css';
@import '../font/iconfont.css';
@import '//at.alicdn.com/t/font_1357872_a69stxrzzv.css';
</style>