<template>
    <div>
        <div class="container">
            <div class="parent1"> 
                <div class="d">
                    <p>创建账户</p>
                    <input class="input_1" type="text" placeholder="姓名*" name="cname" v-model="uname">
                    <div class="nesscity ">姓名只能输入3-12个字母数字</div>
                    <input class="input1" type="text" placeholder="手机号码*" name="phone" v-model="phone">
                    <div class="nesscity">请输入正确的电话号码格式</div>
                    <input class="input1" type="email" placeholder="电邮*" name="email" v-model="email">
                    <div class="nesscity">请输入正确的电子邮件格式</div>
                    <input class="input1" type="password" placeholder="密码*" name="password" v-model="upwd">
                    <div class="nesscity">密码只能输入6-18个字母、数字</div>
                    <input class="input_2" type="password" placeholder="确认密码*" name="isPassword" v-model="upwd1">
                    <div class="nesscity">两次密码输入不一致</div>
                    <div>
                        <input id="cb_yes"  class="c1" type="checkbox">
                        <label for="cb_yes"></label>&nbsp;同意PANDORA
                        <a href="javascript:;" class="a11">隐私政策</a>
                    </div>
                    <div class="btn_register" @click="register"><p>创建账户</p></div>
                    <router-link to="/login" href="javascript:;">已有账号？登录</router-link>
                </div>
                <div class="d2">
                    <p class="p1">加入并获得福利</p>
                    <p class="p2">作为PANDORA俱乐部会员，您可以享受轻松结账、专属优惠、特殊礼遇等更多服务。</p>
                </div>
            </div>
        </div>    
    </div>
</template>

<script>
export default {
    data(){
        return {
            uname:"",
            upwd:"",
            email:"",
            phone:""
        }
    },
    methods:{
        register(){
            var u = this.uname;
            var p = this.upwd;
            var e = this.email;
            var po = this.phone;
            var url = "register";
            var obj = {uname:u,upwd:p,email:e,phone:po};
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res.data);
                if(res.data.code<0){
                    alert("注册失败");
                }else{
                    this.$router.push("/login");
                }
            })
        }
    },
    mounted(){
        var cname=document.getElementsByName("cname")[0];	
        var phone=document.getElementsByName("phone")[0];
        var email=document.getElementsByName("email")[0];
        var pwd=document.getElementsByName("password")[0];
        var isPwd=document.getElementsByName("isPassword")[0];
        function vali(txt,reg){
            var div=txt.nextElementSibling;
            if(reg.test(txt.value)){
                div.className="";
                div.innerHTML="";
            }else{
                div.className="nesscity";
                div.style.display="block";
                txt.style.marginBottom="2px";
                div.style.margin="6px 0 23px 0";
            }  
        }	
        pwd.onblur=function(){
            var reg=/^[a-z0-9]{3,12}$/;
            vali(this,reg);
        }
        cname.onblur=function(){
            var reg=/^[a-z0-9]{3,12}$/i;
            vali(this,reg);
        }
        phone.onblur=function(){
            var reg=/^1[3|4|5|8]\d{9}$/;
            vali(this,reg);
        }
        email.onblur=function(){
            var reg= /\w+@\w+\.[a-z]{2,3}(\.[a-z]{2})?/;
            vali(this,reg);
        }
        isPwd.onblur=function(){
            var div=this.nextElementSibling;
            if(this.value==pwd.value){
                div.className="";
                div.innerHTML="";
            }else{
                div.className="nesscity";
                div.style.display="block";
                this.style.marginBottom="2px";
                div.style.margin="6px 0 23px 0";
            }
        }
    }
}
</script>

<style scoped>
@import '../assets/css/register.css';
</style>