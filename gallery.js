/**
 * @author 11
 */
$(function(){
	//変数定義
	var i = 0;	//表示中の画像のカウンターを初期化
	var list = $("#img_list li");		//画像を切り替えるリストを指定
	var navi = $("#btn_list li");	//画像を切り替えるためのナビを指定
	var num = $(list).size() -1;	//リストに登録されている画像を取得
	var speed = 300;		//画像の切り替えスピードを設定
	var time = 3000;		//切り替える感覚を設定

	//IEでテスト時にはテストコードをコメントアウトする。

	//初期表示のセット
	$(list).first().nextAll().hide();
	$(navi).first().find('img').attr('src',$(navi).first().find('img').attr('src').replace(/(\.png)$/,'_now$1'));

	//ナビをクリックしたときの動作
	$(navi).click(function() {
		var n_index = $(this).index();
		if (i != n_index){
			$(navi).eq(i).find('img').attr('src',$(navi).eq(i).find('img').attr('src').replace(/(\_now)/,''));
			i = n_index;
			$(list).hide(speed);
			$(list).eq(i).show(speed);
			$(navi).eq(i).find('img').attr('src',$(navi).eq(i).find('img').attr('src').replace(/(\.png)$/,'_now$1'));
		};
	});
	//次のイメージに切り替える。
	function show() {
		$(list).hide(speed);
		if(num > i){
			//次の画像に切り替える動作
			$(navi).eq(i).find('img').attr('src',$(navi).eq(i).find('img').attr('src').replace(/(\_now)/,''));
			i++;
			$(list).eq(i).show(speed);
			$(navi).eq(i).find('img').attr('src',$(navi).eq(i).find('img').attr('src').replace(/(\.png)$/,'_now$1'));
		}else{
			//最後の画像を切り替えようとしたときの動作
			$(navi).eq(i).find('img').attr('src',$(navi).eq(i).find('img').attr('src').replace(/(\_now)/,''));
			i = 0;
			$(list).first().show(speed);
			$(navi).eq(i).find('img').attr('src',$(navi).eq(i).find('img').attr('src').replace(/(\.png)$/,'_now$1'));
		}
//		console.log("現在のカウンター：" + i);		//★テストコード★コンソールに現在のi値を表示する
	}
	var timer = setInterval(show,time);
	//マウスオーバー時は自動切換えを停止、出たら再開
	$(list).hover(function(e){clearInterval(timer);},
					function(e){timer = setInterval(show,time);});
	$(navi).hover(function(e){clearInterval(timer);},
					function(e){timer = setInterval(show,time);});
});
