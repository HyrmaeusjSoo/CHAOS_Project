//验证:证件号码
function _checkUcard(_cid,_url){
	$.ajax({
 		type:'post',
 		url:_url,
 		data: {"id":_cid},
 		cache: false,
 		async:false,
 		error: function(data){
            alert('验证失败') ;
		},
 		success: function(data){
//			var s = data.replace(/(^\s+)|(\s+$)/g,'');
 			var a = eval('('+data+')');
 			if( a == 'Y'){
 				$('#ucard_chkput').html('验证通过！');
 				lock_num = false;
 			}else{
 				$('#ucard_chkput').html('证件号不正确！');
 				lock_num = true;
 			}
 		}
 	});
	//return boolean;
}
