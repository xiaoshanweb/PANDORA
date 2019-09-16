(function(){
    var prod_boxs= document.querySelectorAll("div.my-big>.valen-prod>div");
    for(var prod_box of prod_boxs){
        //鼠标悬停时显示购买框
        prod_box.onmouseover = function(){
            var buy = this.querySelector(".buy");
            buy.style.visibility = "visible";
        }
        //鼠标移走时隐藏购买框
        prod_box.onmouseout = function(){
            //flag=false; 商品未加入收藏时，购买框随着鼠标移出而隐藏；
            //flag=true; 商品加入收藏后，购买框不随鼠标移出而隐藏
            var flag = this.querySelector("input").value;
            var buy = this.querySelector(".buy");
            if(flag=="false"){
                buy.style.visibility = "hidden";
            }
        }
    }
})()
//上一页
function lastPage(sname){
    var obj = document.getElementById(sname);
    var valen_prod = obj.getElementsByClassName("valen-prod")[0];
    valen_prod.style.marginLeft = "0";
}
//下一页
function nextPage(sname){
    var obj = document.getElementById(sname);
    var valen_prod = obj.getElementsByClassName("valen-prod")[0];
    valen_prod.style.marginLeft = "-100%";
}
//鼠标悬停时切换图片
function imgChange(x,str){  //x表示当前对象
    x.src = str;
}
//鼠标移除时变为原图
function imgRecovery(x,str){
    x.src = str;
}

(function(){
    //找到所有class = love的元素
    var loves = document.querySelectorAll(".buy>.love");
    for(var love of loves){
        //鼠标悬停，显示收藏提示——黑色心
        love.onmouseover = function(){
            var imgChange = this.querySelector("img");
            imgChange.src = "img/heart_2.png";
        }
        //鼠标移除，不显示收藏提示——白色心
        love.onmouseout = function(){
            var flag = this.querySelector("input").value;
            var imgRecovery = this.querySelector("img");
            if(flag == "false"){
                imgRecovery.src = "img/heart_1.png";
            }   
        }
        //商品添加收藏
        love.onclick = function(){
            var flag = this.querySelector("input").value;
            var img = this.querySelector("img");
            if(flag == "false"){
                img.src = "img/heart_2.png";
                //加入收藏后，购买框不隐藏
                this.parentElement.style.visibility = "visible";
                //flag置true，该元素鼠标移出时的变空心的事件不执行，父元素鼠标移出时购买框隐藏的事件不执行
                this.querySelector("input").value = "true";
            }else{
                //已收藏的商品，再次点击时取消收藏，黑心变白心
                img.src = "img/heart_1.png";
                this.querySelector("input").value = "false";
            }
        }
    }
})()
