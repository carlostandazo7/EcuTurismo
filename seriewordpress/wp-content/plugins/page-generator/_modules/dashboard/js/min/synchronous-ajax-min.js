!function(e){function r(s,n,o,t){if(++n>Number(s.offset)+Number(s.number_requests)-1)return s.onFinished(),!0;var u=e.extend({current_index:n},s.data);e.ajax({url:s.url,type:s.type,async:!0,cache:s.cache,dataType:s.dataType,data:u,success:function(u){var a=s.onRequestSuccess(u,n);if(u.success)o.progressbar("value",Number((n+1)/s.number_requests*100)),e(t).text(n+1);else{if(1==s.stop_on_error)return void s.onFinished();0==s.stop_on_error&&n--}a?u.success?r(s=s.updateSettings(s),n,o,t):setTimeout((function(){r(s,n,o,t)}),s.wait):s.onFinished()},error:function(e,u,a){var i=s.onRequestError(e,u,a,n);1!=s.stop_on_error?(0==s.stop_on_error&&n--,i?setTimeout((function(){r(s,n,o,t)}),s.wait):s.onFinished()):s.onFinished()}})}e.fn.synchronous_request=function(s){var n=e.extend({url:"",number_requests:0,offset:0,data:{},wait:5e3,stop_on_error:0,progress_bar:".progress-bar",progress_count:"#progress-number",type:"post",cache:!1,dataType:"json",onRequestSuccess:function(e){},onRequestError:function(e,r,s){},onFinished:function(){}},s);progressbar=e(this).progressbar({value:0}),r(n,-1+Number(n.offset),progressbar,n.progress_count)}}(jQuery);