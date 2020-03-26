define([], function () {

    var model = avalon.define({
        $id: 'opusController',

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

        //展开导航
		barShow: false,
		openBar: function(){
			if(model.barShow){
				model.barShow = false;
			}else{
				model.barShow = true;
			}
		},

        //切换作品搜索类型
        opusType: 1, //默认按年代
        checkType: function(type){
            model.opusType = type;
            //model.getOpusData();
        },
        
        opusData: [
            {
                id: 1,
                src: '../image/opus/opus_img1.png',
                name: '画作名称',
                address: '北京',
                size: '320x120',
                desc: '鲑鱼子寿司美味且营养价值高,鲑鱼子寿司价格公道,美味地道,鲑鱼子寿司美味且营养价值高,上海最正宗的鲑鱼子寿司在哪味且营养价值高,上海最正宗味且营养价值高,上海最正宗味且营养价值高,上海最正宗里...',
                descEng: 'Salmon and sushi are delicious and nutritious. Salmon and sushi aare fair and delicious. Salmon and sushi are delicious and nutritious...',
                time: '2018.02.25'
            },
            {
                id: 2,
                src: '../image/opus/opus_img1.png',
                name: '画作名称',
                address: '北京',
                size: '320x120',
                desc: '鲑鱼子寿司美味且营养价值高,鲑鱼子寿司价格公道,美味地道,鲑鱼子寿司美味且营养价值高,上海最正宗的鲑鱼子寿司在哪味且营养价值高,上海最正宗味且营养价值高,上海最正宗味且营养价值高,上海最正宗里...',
                descEng: 'Salmon and sushi are delicious and nutritious. Salmon and sushi aare fair and delicious. Salmon and sushi are delicious and nutritious...',
                time: '2018.02.25'
            },
            {
                id: 3,
                src: '../image/opus/opus_img1.png',
                name: '画作名称',
                address: '北京',
                size: '320x120',
                desc: '鲑鱼子寿司美味且营养价值高,鲑鱼子寿司价格公道,美味地道,鲑鱼子寿司美味且营养价值高,上海最正宗的鲑鱼子寿司在哪味且营养价值高,上海最正宗味且营养价值高,上海最正宗味且营养价值高,上海最正宗里...',
                descEng: 'Salmon and sushi are delicious and nutritious. Salmon and sushi aare fair and delicious. Salmon and sushi are delicious and nutritious...',
                time: '2018.02.25'
            },
            {
                id: 4,
                src: '../image/opus/opus_img1.png',
                name: '画作名称',
                address: '北京',
                size: '320x120',
                desc: '鲑鱼子寿司美味且营养价值高,鲑鱼子寿司价格公道,美味地道,鲑鱼子寿司美味且营养价值高,上海最正宗的鲑鱼子寿司在哪味且营养价值高,上海最正宗味且营养价值高,上海最正宗味且营养价值高,上海最正宗里...',
                descEng: 'Salmon and sushi are delicious and nutritious. Salmon and sushi aare fair and delicious. Salmon and sushi are delicious and nutritious...',
                time: '2018.02.25'
            },
            {
                id: 5,
                src: '../image/opus/opus_img1.png',
                name: '画作名称',
                address: '北京',
                size: '320x120',
                desc: '鲑鱼子寿司美味且营养价值高,鲑鱼子寿司价格公道,美味地道,鲑鱼子寿司美味且营养价值高,上海最正宗的鲑鱼子寿司在哪味且营养价值高,上海最正宗味且营养价值高,上海最正宗味且营养价值高,上海最正宗里...',
                descEng: 'Salmon and sushi are delicious and nutritious. Salmon and sushi aare fair and delicious. Salmon and sushi are delicious and nutritious...',
                time: '2018.02.25'
            },
            {
                id: 6,
                src: '../image/opus/opus_img1.png',
                name: '画作名称',
                address: '北京',
                size: '320x120',
                desc: '鲑鱼子寿司美味且营养价值高,鲑鱼子寿司价格公道,美味地道,鲑鱼子寿司美味且营养价值高,上海最正宗的鲑鱼子寿司在哪味且营养价值高,上海最正宗味且营养价值高,上海最正宗味且营养价值高,上海最正宗里...',
                descEng: 'Salmon and sushi are delicious and nutritious. Salmon and sushi aare fair and delicious. Salmon and sushi are delicious and nutritious...',
                time: '2018.02.25'
            }
        ],

        //获取作品列表
        getOpusData: function(){

        }

    });

    return model;
});