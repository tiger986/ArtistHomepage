define([], function () {

    var model = avalon.define({
        $id: 'indexController',
		
		//进入主页
		toHome: function(){
			window.location.href = './html/home.html';
		}


    });
    return model;
});
