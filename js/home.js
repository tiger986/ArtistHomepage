define([], function () {

    var model = avalon.define({
		$id: 'homeController',

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

		//代表作品数据
		worksData: [
			{
			 	id: 1,
				pic: '../image/works_img1.png',
			 	name: '天国之梦',
			 	address: '北京市海淀区奥森公园',
				material: '创作材料创作材料创作材料创作材料创作材料',
				content: '作品内容作品内容',
			 	info: '水彩画是用水调和透明颜料作画的一种绘画方法，简称水彩，由于色彩透明，一层颜色覆盖另一层可以产生特殊的效果，但调和颜色过多或覆盖过多会使色彩肮脏，水干燥的快，所以水彩画不适宜制作大幅作品，适合制作风景等清新明快的小幅画作。水彩颜料携带方便，也可作为速写搜集素材用。与其他绘画比较起来，水彩画相当注重表现技法。其画法通常分“干画法”和“湿画法”两种。'
			},
			{
				id: 2,
				pic: '../image/works_img2.png',
				name: '夏日的黄昏',
				address: '北京市海淀区奥森公园',
				material: '创作材料创作材料创作材料创作材料创作材料',
				content: '作品内容作品内容',
				info: '水彩画是用水调和透明颜料作画的一种绘画方法，简称水彩，由于色彩透明，一层颜色覆盖另一层可以产生特殊的效果，但调和颜色过多或覆盖过多会使色彩肮脏，水干燥的快，所以水彩画不适宜制作大幅作品，适合制作风景等清新明快的小幅画作。水彩颜料携带方便，也可作为速写搜集素材用。与其他绘画比较起来，水彩画相当注重表现技法。其画法通常分“干画法”和“湿画法”两种。'
			},
			{
				id: 3,
				pic: '../image/works_img3.png',
				name: '彩色的都市',
				address: '北京市海淀区奥森公园',
				material: '创作材料创作材料创作材料创作材料创作材料',
				content: '作品内容作品内容',
				info: '水彩画是用水调和透明颜料作画的一种绘画方法，简称水彩，由于色彩透明，一层颜色覆盖另一层可以产生特殊的效果，但调和颜色过多或覆盖过多会使色彩肮脏，水干燥的快，所以水彩画不适宜制作大幅作品，适合制作风景等清新明快的小幅画作。水彩颜料携带方便，也可作为速写搜集素材用。与其他绘画比较起来，水彩画相当注重表现技法。其画法通常分“干画法”和“湿画法”两种。'
			},
			{
				id: 4,
				pic: '../image/works_img1.png',
				name: '没有罪恶的世界',
				address: '北京市海淀区奥森公园',
				material: '创作材料创作材料创作材料创作材料创作材料',
				content: '作品内容作品内容',
				info: '水彩画是用水调和透明颜料作画的一种绘画方法，简称水彩，由于色彩透明，一层颜色覆盖另一层可以产生特殊的效果，但调和颜色过多或覆盖过多会使色彩肮脏，水干燥的快，所以水彩画不适宜制作大幅作品，适合制作风景等清新明快的小幅画作。水彩颜料携带方便，也可作为速写搜集素材用。与其他绘画比较起来，水彩画相当注重表现技法。其画法通常分“干画法”和“湿画法”两种。'
			}
		],

		//pc端代表作品鼠标进入和离开
		worksInfoShow: function(){
			$(this).find(".homeBox_pcWorks_list_info").removeClass('hide');
		},
		worksInfoHide: function(){
			$(this).find(".homeBox_pcWorks_list_info").addClass('hide');
		}



    });
    return model;
});