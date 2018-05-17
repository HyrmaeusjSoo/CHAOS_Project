function _loadOrderFY(){
    var _pageNO = $('#pageNO').val();
    $.ajax({
        type: 'POST',
          url: "<?=site_url('Order/dynacLoadOrderList');?>",
          data: {"pageNO":_pageNO},
          dataType:"json",
          success:function(data){
                if(_pageNO>data.pageSum || _pageNO==1){
                     return false;
                }
                var _draw = "";				    
                for(var i=0;i<data.list.length;i++){
                    var _ol = data.list[i];//当前订单
                    /* ！开始作画 */ 
                    // ！一行 左（店铺名）
                    _draw += '<div class="dfh1"><div class="dfh1-lf"><a href=""> <div class="dflf1"><img src="<?=$this->config->item('resource_url');?>mobile/images/dian_03.png" width="100%" height="100%"></div>';
                    _draw += '<div class="dflf2">'+_ol.splist[0].sname+'&nbsp;&nbsp;</div></a></div><div class="dfh1-rt">';
                    // ！一行 右 （订单状态）
                    var _wtf_btn = 'N',_order_state = '';
                    if(_ol.opay_state==1){//已支付
                        if(_ol.odispatch==0 && _ol.oth_state==0){
                            _order_state = '等待商家发货'; _wtf_btn = 'dfh';
                        }else if(_ol.odispatch==1 && (_ol.oth_state==0||_ol.oth_state==5)){
                            _order_state = '等待收货'; _wtf_btn = 'dsh';
                        }else if(_ol.odispatch==2 && (_ol.oth_state==0||_ol.oth_state==5)){//收货后
                            if(_ol.spcid==0){
                                _order_state = '待评价'; _wtf_btn = 'dpj';
                            }else if(_ol.spcid>=1){
                                _order_state = '订单已完成'; _wtf_btn = 'fn';
                            }
                        }else if(_ol.oth_state>0){//退货
                            if(_ol.oth_state==1){
                                _order_state = '申请退货'; _wtf_btn = 'sqth';
                            }else if(_ol.oth_state==2){
                                _order_state = '退货中'; _wtf_btn = 'th';
                            }else if(_ol.oth_state==3){
                                _order_state = '退款中'; _wtf_btn = 'tk';
                            }else if(_ol.oth_state==4){
                                _order_state = '退货完成'; _wtf_btn = 'thfn';
                            }else if(_ol.oth_state==5){
                                _order_state = '拒绝退货'; _wtf_btn = 'jjth';
                            }
                        }
                    }else if(_ol.opay_state==0){//未支付
                        _order_state = '等待付款'; _wtf_btn = 'dfk';
                    }else if(_ol.opay_state==2){//取消订单
                        _order_state = '已取消订单'; _wtf_btn = 'qx';
                    }
                    _draw += _order_state+'</div></div>';
                    // ！ 二行 （商品列表）
                    for(var j=0;j<_ol.splist.length;j++){
                        // ! 二行 左 （商品主图）
                        _draw += '<div class="dfh2"><div class="dfh2-img">';
                        _draw += '<img src="<?=$this->config->item('resource_url');?>fileupload/mobile/'+_ol.splist[j]['spimage']+'" width="100%" height="100%"></div><div class="dfh2-txt1">';
                        // ！ 二行 中 （商品名称）
                        _draw += '<p class="dfh2-txt1-p1">'+_ol.splist[j]['spname'].substr(0,39)+'...</p>';
                        //目前无用位置
                        _draw += '<p class="dfh2-txt1-p1 dfh2-txt1-p2">套餐二</p>';
                        // ！ 二行 右 3行 （价格，折扣价，数量）
                        _draw += '</div><div class="dfh2-txt2"><p class="dfh2-txt1-p1">'+_ol.splist[j]['olprice']+'</p>';
                        _draw += '<p class="dfh2-txt1-p1 dfh2-txt1-p2 dfh-jg2"><s>￥'+_ol.splist[j]['spshop_price']+'</s></p><p class="dfh2-txt1-p1 dfh2-txt1-p2 dfh-jg">X';
                        _draw += _ol.splist[j]['olnumber']+'</p></div></div>';
                        
                    }
                    // ！ 三行 右对齐 （结算信息）
                    _draw += '<div class="dfh3">共'+_ol.num+'件商品 合计：￥'+_ol.oprice+'（含运费 ￥'
                    if(_ol.opsprice!=null&&_ol.opsprice!=''){
                        _draw += _ol.opsprice;
                    }else{
                        _draw += '0.00';
                    }
                    _draw += ' ）</div><div class="dfh3 dfh3-1 dfh3-2">';
                    // ！ 四行 右对齐 （操作按钮）
                    switch(_wtf_btn){
                        case 'dfk': //待付款
                            _draw += '<a class="fukuan dfh4 dfh4-2">付款</a><a class="dingdan dfh4" href="">取消订单</a>';
                            break;
                        case 'dfh': //待发货
                            _draw += '<a class="dingdan dfh4" href="">申请退货</a>';
                            break;
                        case 'dsh': //待收货
                            _draw += '<a class="fukuan dfh4 dfh4-2">确认收货</a><a class="dingdan dfh4" href="">查看物流</a><a class="dingdan dfh4" href="">申请退货</a>';
                            break;
                        case 'dpj': //待评价
                            _draw += '<a class="dingdan dfh4 dfh4-2" href="">去评价</a>';
                            break;
                        case 'sqth': //申请退货
                            _draw += '<a class="dingdan dfh4" href="">退货详情</a>';
                            break;
                        case 'th': //退货中
                            _draw += '<a class="dingdan dfh4 dfh4-2" href="">填写物流</a><a class="dingdan dfh4 dfh4-2" href="">撤销申请</a>';
                            break;
                        case 'tk': //退款
                            break;
                        default: //cpcpr
                            //_draw += '';
                            break;
                    }
                    _draw += '</div>';
                }//end for(i)
                document.getElementById('pageNO').value=data.pageNo*1+1; // 页数+1
                document.getElementById('conner').innerHTML+=_draw;
                if(data.pageNo*1+1>data.pageSum){ // 无更多内容禁用
                    document.getElementById('load_more_order').style.display='none'
                }
          },//end ajax.success
          error: function(data){
              alert('加载失败!');
          }
    });//end ajax
}//end function loadorder