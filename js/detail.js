define([], function () {

    var model = avalon.define({
		$id: 'detailController',

		//语言切换
		language: 'CN',
		checkLan: function(){
			if(model.language == 'CN'){
				model.language = 'EN';
				localStorage.setItem('tqLanguage', 'EN');
			}else{
				model.language = 'CN';
				localStorage.setItem('tqLanguage', 'CN');
			}
		},

		//此作品Id
		opusId: 0,
		
		//展开导航
		barShow: false,
		openBar: function(){
			if(model.barShow){
				model.barShow = false;
			}else{
				model.barShow = true;
			}
		},

		//详情数据
		detailData: {
			pic: '../image/detial/detial_img1.jpg',
			name: '作品名称作品名称',
			time: '2020-03-05',
			address: '北京市海淀区',
			size: '200cm x 120cm',
			info: '于色彩透明一层颜色覆盖另一层可以产生特殊的效果，但调和颜色所以水彩画不宜制作大。',
			previousId: 20,
			previousName: '上一篇作品名称',
			nextId: 22,
			nextName: '下一篇作品名称'
		},

		//评论人数
		commentNum: 236,

		//评论
        commentData: [
        	{
        		src: '../image/detial/detial_ico1.png',
				name: '张岩小画家',
				time: '2020-03-05',
        		con: '新饶网站策划股份有限公司成立于2007年，注册资金80万，是湖南长沙一家专业的网站策划公司。公司主要服务于中小企业，提供网站策划，网站设计制作建设，网络推广营销于一体的专业服务。公司以“专注网站，用心服务新饶网站策划股份有限公司成立于2007年，注册资金80万，是湖南长沙.'
        	},
        	{
        		src: '../image/detial/detial_ico1.png',
				name: '张岩小画家',
				time: '2020-03-05',
        		con: '新饶网站策划股份有限公司成立于2007年，注册资金80万，是湖南长沙一家专业的网站策划公司。公司主要服务于中小企业，提供网站策划，网站设计制作建设，网络推广营销于一体的专业服务。公司以“专注网站，用心服务新饶网站策划股份有限公司成立于2007年，注册资金80万，是湖南长沙.'
        	},
        	{
        		src: '../image/detial/detial_ico1.png',
				name: '张岩小画家',
				time: '2020-03-05',
        		con: '新饶网站策划股份有限公司成立于2007年，注册资金80万，是湖南长沙一家专业的网站策划公司。公司主要服务于中小企业，提供网站策划，网站设计制作建设，网络推广营销于一体的专业服务。公司以“专注网站，用心服务新饶网站策划股份有限公司成立于2007年，注册资金80万，是湖南长沙.'
        	},
        ],

        // 获取评论
        getComment: function(){

		},
		
		//查看更多
		getMore(){
			alert('查看更多评论');
		},

        commentCon: '',
        // 发送评论
        addComment: function(){
			if(!model.commentCon.trim()){
				alert('请输入评论内容');
				model.commentCon = '';
				return false;
			}
        	var obj = {
        		src: '../image/detial/detial_ico1.png',
				name: '张岩小画家',
				time: model.getNowTime(),
        		con: model.commentCon
        	};
			model.commentData.unshift(obj);
			model.commentCon = '';
		},
		
		//获取时间
		getNowTime() {
			var date = new Date();
			this.year = date.getFullYear();
			this.month = date.getMonth() + 1;
			this.date = date.getDate();
			this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
			this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
			this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
			var currentTime = this.year+'-'+this.month + '-' + this.date + ' ' + this.hour + ':' + this.minute + ':' + this.second;
			return currentTime;
		}



    });
    return model;
});