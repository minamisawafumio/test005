class DateUtil{

	//コンピュータ日付を取得する
	static getComDate(){
		var hiduke = new Date();
		return hiduke;
	}

	//コンピュータ日付を文字列(17桁)で取得する
	static getComDateSt(){
		var date = DateUtil.getComDate();
		return DateUtil.changeDateStringToDate(date);
	}

	//日付フォーマット変換する
	static changeDateStringToDate(iDate){
		var format = 'YYYYMMDDhhmmssSSS';
		format = format.replace(/YYYY/g, iDate.getFullYear());
		format = format.replace(/MM/g,   ('0'   + (iDate.getMonth() + 1)).slice(-2));
		format = format.replace(/DD/g,   ('0'   + iDate.getDate()).slice(-2));
		format = format.replace(/hh/g,   ('0'   + iDate.getHours()).slice(-2));
		format = format.replace(/mm/g,   ('0'   + iDate.getMinutes()).slice(-2));
		format = format.replace(/ss/g,   ('0'   + iDate.getSeconds()).slice(-2));
		format = format.replace(/SSS/g,  ('00'  + iDate.getMilliseconds()).slice(-3));
		return format;
	}

	//日付文字列をDateに変換する
	static changeStringDateToDate(iStringDate){
		var yyyy = iStringDate.substr( 0, 4);
		var mm   = iStringDate.substr( 4, 2);
		var dd   = iStringDate.substr( 6, 2);
		var hh   = iStringDate.substr( 8, 2);
		var mi   = iStringDate.substr(10, 2);
		var se   = iStringDate.substr(12, 2);
		var ms   = iStringDate.substr(14, 3);
		var date = new Date(yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + mi +":" + se + "." + ms);
		return date;
	}

	//日付文字列(17桁)の間隔をミリ秒で返す
	static getMillisecondDistance(iStringDateStart, iStringDateEnd){
		var startDate = DateUtil.changeStringDateToDate(iStringDateStart);
		var endDate   = DateUtil.changeStringDateToDate(iStringDateEnd);
		return endDate.getTime() - startDate.getTime();
	}

	//日時に加算
	static addDate(iStringDate, num, interval){
		var dt = DateUtil.changeStringDateToDate(iStringDate);
		switch (interval) {
	    case 'YYYY':
	    	dt.setYear(dt.getFullYear() + num);
			break;
  	    case 'MM':
  	    	dt.setMonth((dt.getMonth() + 1) + num);
			break;
		case 'DD':
	    	dt.setDate(dt.getDate() + num);
			break;
	    case 'HH':
	    	dt.setHours(dt.getHours() + num);
			break;
	    case 'MM':
	    	dt.setMinutes(dt.getMinutes() + num);
			break;
	    case 'SS':
	    	dt.setSeconds(dt.getSeconds() + num);
			break;
	    case 'MS':
	    	dt.setMilliseconds(dt.getMilliseconds() + num);
			break;
	    default:
	    	dt.setDate(dt.getDate() + num);
	  }

	  var stDate = DateUtil.changeDateStringToDate(dt);

	  return stDate;
	}
}

class StringUtil{

 	//文字列をセパレータで分割して配列で返却する
	static split(iString, iSeparator){
		var rtnStrings = iString.split(iSeparator);
		return rtnStrings;
	}

 	//文字列内の特定文字列を置換する
	static replaceAll(iString, iSt1, iSt2){
		var trnString = iString.split(iSt1).join(iSt2);
		return trnString;
	}

 	//文字列数値hをカンマ編集して返却する  例: StringUtil.numCahnge('1234567');
	static numCahnge(iString){
		return String(iString).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	//文字列判定
	static checkCharType(input, charType) {
	    switch (charType) {
	        // 全角文字（ひらがな・カタカナ・漢字 etc.）
	        case "zenkaku":
	            return (input.match(/^[^\x01-\x7E\xA1-\xDF]+$/)) ? true : false;
	        // 全角ひらがな
	        case "hiragana":
	            return (input.match(/^[\u3041-\u3096]+$/)) ? true : false;
	        // 全角カタカナ
	        case "katakana":
	            return (input.match(/^[\u30a1-\u30f6]+$/)) ? true : false;
	        // 半角英数字（大文字・小文字）
	        case "alphanumeric":
	            return (input.match(/^[0-9a-zA-Z]+$/)) ? true : false;
	        // 半角数字
	        case "numeric":
	            return (input.match(/^[0-9]+$/)) ? true : false;
	        // 半角英字（大文字・小文字）
	        case "alphabetic":
	            return (input.match(/^[a-zA-Z]+$/)) ? true : false;
	        // 半角英字（大文字のみ）
	        case "upper-alphabetic":
	            return (input.match(/^[A-Z]+$/)) ? true : false;
	        // 半角英字（小文字のみ）
	        case "lower-alphabetic":
	            return (input.match(/^[a-z]+$/)) ? true : false;
	    }
	    return false;
	}

	// 指定文字位置取得(先頭から）
	static indexOf(str_obj, serchStr){
		return str_obj.indexOf(serchStr);
	}

	// 指定文字位置取得(最後から）
	static lastIndexOf(str_obj, serchStr){
		return str_obj.lastIndexOf(serchStr);
	}

	// 文字置換（str_obj:置換元文字列 i_targetMoji:置換文字 i_array:置換文字配列）
	static chikan(str_obj, i_targetMoji, i_array){
		var rtnString = "";
		var array = str_obj.split(i_targetMoji);
		for(var i = 0; i < array.length - 1; i ++){
			rtnString = rtnString + array[i] + i_array[i];
		}
		return rtnString + array[array.length - 1];
	}
}

class ArrayUtil{
	// 配列の中身を出力する
	static printArray(iArray){
       	for (var key in iArray){
       		console.log(key + "  " + iArray[key]);
       	}
	}

	// 配列の中身を出力する
	static printArray2(iArray){
		for(var i=0;i < iArray.length; i ++){
			console.log(i + "  " + iArray[i]);
		}
	}

	// 1次元配列を生成する
	static make1jigenArray(suu, syokichi){
		var tbl = new Array(suu);
		for(var y = 0; y < suu; y++) {
		  tbl[y] = syokichi;
		}
		return tbl;
	}

	// 2次元配列を生成する
	static make2jigenArray(iX, iY, syokichi){
		var tbl = new Array(iY);
		for(let y = 0; y < iY; y++) {
		  tbl[y] = new Array(iX).fill(syokichi);
		}
		return tbl;
	}

	//２次元配列の内容をコンソールに出力する
	static print2jigenArray(iArray){
		for(var y=0;y < iArray.length; y ++){
			var ddd = '';
			for(var x=0;x < iArray[y].length; x ++){
				ddd = ddd + iArray[y][x];
			}
			console.log(ddd);
		}
	}

	static indexOf(array, target){
		var index = array.indexOf(target);
		return index;
	}

	static lastIndexOf(array, target){
		var index = array.lastIndexOf(target);
		return index;
	}
}

class PrintUtil{
    //配列をTable tr dr タグで出力する。
	static createTable(data) {
        var table = document.createElement('table');
        for (var i = 0; i < data.length; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < data[i].length; j++) {
                var td = document.createElement('td');
                td.innerText = data[i][j];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        return table;
    }
}

class Gui {

	static lineArray(i_context, i_array, lineColor, lineWidth){
		var arr = i_array[0];//i_array.indexOf(0);

		for(var i = 1;i < i_array.length; i ++){
			var rtnStrings0 = arr.split(',');
			var rtnStrings1 = i_array[i].split(',');
			Gui.line(i_context, rtnStrings0[0], rtnStrings0[1], rtnStrings1[0], rtnStrings1[1], lineColor, lineWidth);
			arr = i_array[i];
		}
	}

	// 線を引く
	static line(i_context, x1, y1, x2, y2, lineColor, lineWidth){
		i_context.beginPath();
		i_context.strokeStyle = lineColor;
		i_context.lineWidth = lineWidth;
		i_context.moveTo(x1,y1);
		i_context.lineTo(x2,y2);
		i_context.stroke();
		i_context.closePath();
	}

	//	三角を描く
	static triangle(i_context, x1, y1, x2, y2, x3, y3, wakuColor, fillColor, lineWidth, fillKbn){
		i_context.beginPath();
		i_context.strokeStyle = wakuColor;
		i_context.lineWidth   = lineWidth;
		i_context.fillStyle   = fillColor;
		i_context.moveTo(x1, y1);
		i_context.lineTo(x2, y2);
		i_context.lineTo(x3, y3);
		i_context.lineTo(x1, y1);
		i_context.stroke();
		if (fillKbn == 1) {
			i_context.fill();
		}
		i_context.closePath();
	}

	// 四角を描く
	static square(i_context, x1, x2, y1, y2, wakuColor, fillColor, lineWidth, fillKbn){
		i_context.beginPath();     // 1.Pathで描画を開始する



		i_context.strokeStyle = wakuColor; //枠線の色は青
		i_context.lineWidth   = lineWidth;
		i_context.fillStyle   = fillColor; //塗りつぶしの色は赤


		i_context.strokeRect(x1, x2, y1, y2);

		if (fillKbn == 1) {
			i_context.fillRect(x1, x2, y1, y2);
		}
		i_context.closePath();
	}

	// 円を描く
	static circle(i_context, x, y, z, wakuColor, fillColor, lineWidth, fillKbn){
		i_context.beginPath();
		i_context.lineWidth   = lineWidth;
		i_context.strokeStyle = wakuColor;
		i_context.fillStyle   = fillColor;
		i_context.arc(x, y, z, 0, Math.PI*2, false);
		i_context.stroke();

		if (fillKbn == 1) {
    		i_context.fill();
		}
		i_context.closePath();
	}

	// 四角のアニメ描画(
	static drawLoopSquare(i_canvas, i_context, i_x, i_y) {

        var w = i_canvas.width;
        var h = i_canvas.height;
        var x = i_x;
        var y = i_y;

        i_context.beginPath();

        /* 描画フロー */
        function render() {
            // Canvas全体をクリア
            i_context.clearRect(0, 0, w, h);

            // 要素を描画する
            i_context.strokeRect(x, y, 10, 10);

            if (x > i_canvas.width) {
                x = 0;
            } else {
                x += 3;
            }
        }

        setInterval(render, 1);
    }

	//画像描画
	static drawImage(i_context, i_imageName, i_x, i_y){
        var image = new Image();
        image.src = i_imageName;
        image.onload = function(){
        	i_context.drawImage(image, i_x, i_y);
    	}
	}

	//色配列を取得する
	static getColorArray(i_x, i_y, i_canvas, i_context) {
		var rtnArray = new Array(4);
        var imagedata = i_context.getImageData(0, 0, i_canvas.width, i_canvas.height);
        var data = imagedata.data;
        var i = ((i_y * i_canvas.width) + i_x) * 4;
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var a = data[i+3];
        rtnArray[0] = r;
        rtnArray[1] = g;
        rtnArray[2] = b;
        rtnArray[3] = a;
        return rtnArray;
	}

	static getColor(i_x, i_y, i_canvas, i_context) {
		var rtnArray = new Array(4);
        var imagedata = i_context.getImageData(0, 0, i_canvas.width, i_canvas.height);
        var data = imagedata.data;
        var i = ((i_y * i_canvas.width) + i_x) * 4;
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];
        var col = String(r) + "," + String(g) + "," + String(b);
        return col;
	}

	//色配列を取得する
	static getXyHexColor(i_x, i_y, i_canvas, i_context) {
		var rtnArray = new Array(4);
        var imagedata = i_context.getImageData(0, 0, i_canvas.width, i_canvas.height);
        var data = imagedata.data;
        var i = ((i_y * i_canvas.width) + i_x) * 4;
        var r = data[i];
        var g = data[i+1];
        var b = data[i+2];

        var col = "rgb(" + String(r) + "," + String(g) + "," + String(b) + ")";

        return Gui.getHexColor(col);
	}


	// 色変換 color("rgb(0,128,0)") → "#008000"
	static getHexColor(i_col) {
		return "#" + i_col.match(/\d+/g).map(function(a){return ("0" + parseInt(a).toString(16)).slice(-2)}).join("");
	}

	static fillText(i_context, i_mojietu, i_x, i_y){
		i_context.fillText(i_mojietu,i_x, i_y);
	}
}

class Event{
	static makeXY(i_event) {
        var rect = i_event.target.getBoundingClientRect();
        var x1 = i_event.clientX - rect.left;
        var y1 = i_event.clientY - rect.top;
        var arr = new Array(2);
        arr[0] = x1;
        arr[1] = y1;
        return arr;
    }
}

class Common{
	//乱数発生
	static makeRandom(i_min, i_max) {
		var a = Math.floor( Math.random() * (i_max + 1 - i_min) ) + i_min ;
		return a;
	}
}

