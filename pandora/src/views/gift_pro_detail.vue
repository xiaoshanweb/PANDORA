<template>
    <div>
        <div class="container-fluid1">
        <div class="menu">
        <div class="menu_top d-flex justify-content-between align-items-center">
            <img name="left_arrow" src="../assets/img/big-left.png" alt="上一条">
            <span>马上选购2019年秋季系列</span><input type="hidden" value="0">
            <img name="right_arrow" src="../assets/img/big-right.png" alt="下一条">
        </div>
        <hr class="m-0">
        <div class="menu_bottom d-flex justify-content-between align-items-center">
            <div class="menu_left w-50">
                <img src="../assets/img/icon_menu.png" alt="">
                <img src="../assets/img/icon_add.png" alt="">
                <img src="../assets/img/logo.png" alt="">
            </div>
            <div class="menu_right d-flex align-items-center">
                <img src="../assets/img/icon_search.png" /><input type="text" placeholder="搜索/输入产品ID">
                <a href="javascript:;"><img src="../assets/img/icon_shop.png" alt=""></a>
            </div>
        </div>
    </div>
    <!-- 面包屑导航 -->
    <ul class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/gift">主页</router-link></li>
        <li class="breadcrumb-item"><a href="javascript:;">商品详情</a></li>
    </ul>
   
    <div class="total row mx-0">
        <!-- 图片显示区域 -->
        <div class="photo col-lg-7 col-sm-12 px-0">
            <div class="d-flex">
                <div class="small_photo d-flex align-items-center">
                    <img src="../assets/img/BPVD00010-1-small.jpg" class="w-100"/>
                </div>
                <div class="big_photo">
                    <img src="../assets/img/BPVD00010-1.jpg"/>
                </div>
            </div>
        </div>
        <!-- 文字描述区域 -->
        <div class="text col-lg-5 col-sm-12 px-0">
            <div>
            <h2 class="text-center mt-5 mb-3">繁星童话</h2>
            <h5 class="text-center mb-5">2,180.00</h5>
            <div>
                <div>
                    <div class="d-flex justify-content-between py-3 my-2 border-top font_small">
                        <span class="ml-0">选择尺寸</span>
                        <span class="mr-0">尺寸指南</span>
                    </div>
                    <div class="sel d-flex justify-content-between ">
                        <img src="../assets/img/590713_RGB.jpg"/>
                        <select name="size" id="size">
                            <option value="">Moments手镯 尺寸</option>
                            <option value="">15cm</option>
                            <option value="">17cm</option>
                            <option value="">21cm</option>
                            <option value="">21cm</option>
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-danger btn-pink w-100"><a href="javascript:;">把整套添加到购物车</a></button>
                    </div>
                    <p class="text-center"><a class="font_small" href="javascript:;">查看套组商品</a></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div style="height:300px;">

    </div>
    </div>
</template>

<script>
export default {
    mounted(){
        var bigPhoto = document.querySelector(".big_photo");
        var imge = document.querySelector(".big_photo>img");
        //获取图片外面的div的宽度
        var wid = window.getComputedStyle(bigPhoto,null).width;//getPropertyValue("width");
        bigPhoto.style.cssText = `width:${wid};height:${wid}`;

        bigPhoto.onmousemove = function(e){
            imge.style.width = "180%";
            var x = -0.43*e.offsetX;  //获取鼠标相对于元素左上角的坐标
            var y = -0.43*e.offsetY;
            imge.style.marginLeft = x+"px";
            imge.style.marginTop = y+"px";
        }

        //鼠标滚动时，菜单栏固定在窗口
        window.onscroll = function(){
            //鼠标滚动的距离
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            var menu = document.getElementsByClassName("menu")[0];
            var hr = menu.getElementsByTagName("hr")[0];
            if(scrollTop>100){
                hr.style.visibility = "visible";
                menu.style.cssText = "position:fixed;top:0;width:90%;";
            }else{
                hr.style.visibility = "hidden";
                menu.style.cssText = "position:static;width:100%;";
            }
        }

        var menu_top = document.getElementsByClassName("menu_top")[0];
        var input = menu_top.getElementsByTagName("input")[0];
        var span = menu_top.getElementsByTagName("span")[0];
        var arr= ["马上选购2019年秋季系列","购物满880元免邮费","提供礼品包装服务","七天无理由退换货"];
        menu_top.addEventListener("click",function(e){
            var n = input.value;
            console.log(n);
            
            if(e.target.nodeName === "IMG"){
                if(e.target.name === "left_arrow"){
                    n--;
                    if(n<0) n=3;
                }else{
                    n++;
                    if(n>3) n=0;
                }
                input.value = n;
                span.innerHTML = arr[n];
            }
        });
        //定时器，轮播服务
        setInterval(function(){
            var n = input.value;n++;
            if(n>3) n=0;
            input.value = n;
            span.innerHTML = arr[n];
        },2000);
    }
}
</script>

<style scoped>
@import '../assets/css/gift_pro_detail.css';
</style>