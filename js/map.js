$(function(){
    //底部地图
    var points = [
        {"lng": 116.29375, "lat": 39.837923, "url": "", "id":"谭青水彩", "name":"谭青水彩"}
    ];
    function addMarker(points) {
        for(var i=0, pointsLen = points.length; i<pointsLen; i++) {
            var point = new BMap.Point(points[i].lng, points[i].lat);
            var marker = new BMap.Marker(point);
            var label1=points[i].name;
            var label = new BMap.Label(label1, {offset: new BMap.Size(15, -25)});
            marker.setLabel(label);
            map.addOverlay(marker);
            marker.setAnimation(BMAP_ANIMATION_BOUNCE);
            (function() {
                var thePoint = points[i];
                marker.addEventListener("click",
                    function() {
                        //showInfo(this,thePoint); //点击标注点获取详细信息
                    });
            })();
        }
    }
    // function showInfo(thisMarker,point) {
    // 	var sContent =
    // 		'<ul style="margin:0 0 5px 0;padding:0.2em 0">'
    // 		+'<li style="line-height: 26px;font-size: 15px;">'
    // 		+'<span style="width: 50px;display: inline-block;">名称：</span>' + point.id + '</li>'
    // 		+'<li style="line-height: 26px;font-size: 15px;">'
    // 		+'<span style="width: 50px;display: inline-block;">地址：</span>' + point.name + '</li>'
    // 		+'<li style="line-height: 26px;font-size: 15px;"><span style="width: 50px;display: inline-block;">查看：</span><a href="'+point.url+'">详情</a></li>'
    // 		+'</ul>';
    // 	var infoWindow = new BMap.InfoWindow(sContent); //创建信息窗口对象
    // 	thisMarker.openInfoWindow(infoWindow); //图片加载完后重绘infoWindow
    // }
    //创建地图
    var map = new BMap.Map('container');
    map.centerAndZoom(new BMap.Point(116.29375,39.837923), 14); //设置中心点
    map.setCurrentCity("朝阳区"); //设置为
    //map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    //map.enableScrollWheelZoom(true); //滚轮缩放
    map.disableDragging(); //禁止拖拽
    addMarker(points);
})