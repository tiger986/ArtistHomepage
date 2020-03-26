define([], function () {

    var model = avalon.define({
        $id: 'signController',

        //语言状态
		language: 'CN',

        //展开导航
		barShow: false,
		openBar: function(){
			if(model.barShow){
				model.barShow = false;
			}else{
				model.barShow = true;
			}
		},

        //提交登录
        mobile: '',
        password: '',
        verification: '',
        isClick: true, //避免多次点击提交
        signClick: function(type){
            if(!model.isClick){
                return false;
            }
            if(model.judgeInput(type)){
                //请求接口提交
                alert("提交成功")
            }            
        },

        //获取验证码
        verificationText: '获取验证码',
        verificationTime: 60,
        verificationFlag: false,
        timer: null,
        getVerification: function(){
            if(!/^(((1[0-9][0-9]{1}))+\d{8})$/.test(model.mobile)){
                if(model.language == 'CN'){
                    alert('请输入正确的手机号');
                }else{
                    alert('Please enter the correct mobile phone number');
                }
                model.isClick = true;
                return false;
            }
            model.verificationFlag = true;
            model.timer = setInterval(function(){
                model.verificationTime -= 1;
                if(model.verificationTime <= 0){
                    model.verificationFlag = false;
                    if(model.language == 'CN'){
                        modle.verificationText = '重新获取';
                    }else{
                        model.verificationText = 'Get again';
                    }
                    model.verificationTime = 60;
                    clearInterval(model.timer);
                }
            }, 1000)

            //请求接口获取验证码
        },

        //判断input框输入
        judgeInput: function(str){
            model.isClick = false;
            if(!/^(((1[0-9][0-9]{1}))+\d{8})$/.test(model.mobile)){
                if(model.language == 'CN'){
                    alert('请输入正确的手机号');
                }else{
                    alert('Please enter the correct mobile phone number');
                }
                model.isClick = true;
                return false;
            }
            if(!/^(?![A-z0-9]+$)(?![A-z~@*()_]+$)(?![0-9~@*()_]+$)([A-z0-9~@*()_]{6,16})$/.test(model.password)){
                if(model.language == 'CN'){
                    alert('密码为6-16位字母、数字和符号组成');
                }else{
                    alert('The password consists of 6-16 characters of letters, Numbers and symbols.');
                }
                model.isClick = true;
                return false;
            }
            if(str == 'pc' && !model.verification){
                if(model.language == 'CN'){
                    alert('请输入验证码');
                }else{
                    alert('Please enter the verification code');
                }
                model.isClick = true;
                return false;

            }


            return true;
        }




    });
    return model;
});