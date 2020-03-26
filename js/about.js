define([], function () {

    var model = avalon.define({
		$id: 'aboutController',
		
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

    });
    return model;
});