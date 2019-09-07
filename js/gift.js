//鼠标悬停显示购买框
function buyVisible(x){
    //获取子元素中类名包含buy的元素，结果是一个数组
    var buys = x.getElementsByClassName("buy");
    //获取第一个元素
    var buy = buys[0];
    //将buy元素的visibility属性改为显示
    buy.style.visibility = "visible";
}
//鼠标移走时隐藏购买框
function buyHidden(x){
    //flag=false;商品未加入收藏时，购买框随着鼠标移出而隐藏；flag=true;商品加入收藏后，购买框不随鼠标移出而隐藏
    var flag = x.getElementsByTagName("input")[0].value;
    if(flag == "false"){
        //获取子元素中类名包含buy的元素，结果是一个数组
        var buys = x.getElementsByClassName("buy");
        //获取第一个元素
        var buy = buys[0];
        //将buy元素的visibility属性改为隐藏
        buy.style.visibility = "hidden";
    }
}
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
//鼠标悬停，显示收藏提示——黑色心
function blackHeart(x){
    var imgs = x.getElementsByTagName("img");
    imgs[0].src = "image/heart_2.png";
}
//鼠标移除，不显示收藏提示——白色心
function whiteHeart(x){
    var flag = x.getElementsByTagName("input")[0].value;
    //鼠标未点击时，执行鼠标移除事件；鼠标点击过后，表示加入收藏，则不执行该事件
    if(flag == "false"){
        var imgs = x.getElementsByTagName("img");
        imgs[0].src = "image/heart_1.png";
    }
}
//商品添加收藏
function addLove(x){
    var flag = x.getElementsByTagName("input")[0].value;
    if(flag == "false"){
        var imgs = x.getElementsByTagName("img");
        imgs[0].src = "image/heart_2.png";
        //加入收藏后，购买框不隐藏
        x.parentNode.style.visibility = "visible";
        //flag置true，该元素鼠标移出时的变空心的事件不执行，父元素鼠标移出时购买框隐藏的事件不执行
        x.getElementsByTagName("input")[0].value = "true";
    }else{
        //已收藏的商品，再次点击时取消收藏，黑心变白心
        var imgs = x.getElementsByTagName("img");
        imgs[0].src = "image/heart_1.png";
        x.getElementsByTagName("input")[0].value = "false";
    }
    
}
