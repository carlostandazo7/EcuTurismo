function page_generator_pro_get_url_param(e,t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var r=new RegExp("[\\?&]"+t+"=([^&#]*)").exec(e);return null===r?"":decodeURIComponent(r[1].replace(/\+/g," "))}function page_generator_pro_generate_content_test(e,t){wpzinc_modal_open(page_generator_pro_generate_content.titles.test,page_generator_pro_generate_content.messages.test),jQuery.ajax({url:ajaxurl,type:"POST",async:!0,data:{id:e,action:"page_generator_pro_generate_"+t,test_mode:!0},error:function(e,t,r){return wpzinc_modal_show_error_message(r+"<br />"+e.responseText)},success:function(e){if(!e.success)return wpzinc_modal_show_error_message(e.data);for(message='Test Page Generated at: <a href="'+e.data.url+'" rel="noopener" target="_blank">'+e.data.url+"</a>",i=0;i<e.data.keywords_terms.length;i++)message+="<br />{"+e.data.keywords_terms[i]+"}: "+e.data.keywords_terms[i];return wpzinc_modal_show_success_message(message)}})}function page_generator_pro_generate_content_trash_generated_content(e,t,r,a,n){var o=Number(r)*Number(a)+1,_=Number(r)*Number(a)+Number(a);_>n&&(_=n),wpzinc_modal_open(page_generator_pro_generate_content.titles.trash_generated_content,page_generator_pro_generate_content.messages.trash_generated_content+" "+o+" to "+_+" of "+n),jQuery.ajax({url:ajaxurl,type:"POST",async:!0,data:{id:e,action:"page_generator_pro_generate_"+t+"_trash_generated_"+t},error:function(e,t,r){return wpzinc_modal_show_error_message(page_generator_pro_generate_content.messages.trash_generated_content_error)},success:function(o){return o.success?o.data.has_more?void page_generator_pro_generate_content_trash_generated_content(e,t,r+1,a,n):(jQuery("div.wpzinc-option div.full span.trash_generated_content").length>0?jQuery("span.trash_generated_content").closest("div.wpzinc-option").remove():(jQuery('span.generated_count span.count[data-group-id="'+e+'"]').text("0"),jQuery('span.view a[data-group-id="'+e+'"]').remove(),jQuery('span.trash_generated_content a[data-group-id="'+e+'"]').remove(),jQuery('span.delete_generated_content a[data-group-id="'+e+'"]').remove(),jQuery('span.view a[data-group-id="'+e+'"]').remove()),wpzinc_modal_show_success_message_and_exit(page_generator_pro_generate_content.messages.trash_generated_content_success)):wpzinc_modal_show_error_message(o.data)}})}function page_generator_pro_generate_content_delete_generated_content(e,t,r,a,n){var o=Number(r)*Number(a)+1,_=Number(o)+Number(a);_>n&&(_=n),wpzinc_modal_open(page_generator_pro_generate_content.titles.delete_generated_content,page_generator_pro_generate_content.messages.delete_generated_content+" "+o+" to "+_+" of "+n),jQuery.ajax({url:ajaxurl,type:"POST",async:!0,data:{id:e,action:"page_generator_pro_generate_"+t+"_delete_generated_"+t},error:function(e,t,r){return wpzinc_modal_show_error_message(page_generator_pro_generate_content.messages.delete_generated_content_error)},success:function(o){return o.success?o.data.has_more?void page_generator_pro_generate_content_delete_generated_content(e,t,r+1,a,n):(jQuery("div.wpzinc-option div.full span.delete_generated_content").length>0?jQuery("span.delete_generated_content").closest("div.wpzinc-option").remove():(jQuery('span.generated_count span.count[data-group-id="'+e+'"]').text("0"),jQuery('span.last_index_generated span.count[data-group-id="'+e+'"]').text("0"),jQuery('span.view a[data-group-id="'+e+'"]').remove(),jQuery('span.trash_generated_content a[data-group-id="'+e+'"]').remove(),jQuery('span.delete_generated_content a[data-group-id="'+e+'"]').remove(),jQuery('span.view a[data-group-id="'+e+'"]').remove()),wpzinc_modal_show_success_message_and_exit(page_generator_pro_generate_content.messages.delete_generated_content_success)):wpzinc_modal_show_error_message(o.data)}})}jQuery(document).ready((function(e){e("body.page-generator-pro td.has-row-actions span a, body.page-generator-pro td.generated_count span a, body.page-generator-pro td.status span a, #page-generator-pro-actions span a, #page-generator-pro-actions-bottom span a, #page-generator-pro-actions-gutenberg-bottom span a").click((function(t){var r=e(this).parent("span").attr("class"),a=page_generator_pro_get_url_param(e(this).attr("href"),"id"),n=page_generator_pro_get_url_param(e(this).attr("href"),"type"),o=page_generator_pro_generate_content.messages[r+"_confirm"];if(void 0===o)return!0;if(!confirm(o))return t.preventDefault(),!1;switch(r){case"test":t.preventDefault(),page_generator_pro_generate_content_test(a,n);break;case"generate":break;case"trash_generated_content":t.preventDefault(),page_generator_pro_generate_content_trash_generated_content(a,n,0,e(this).data("limit"),e(this).data("total"));break;case"delete_generated_content":t.preventDefault(),page_generator_pro_generate_content_delete_generated_content(a,n,0,e(this).data("limit"),e(this).data("total"))}})),e("body").on("click","#page-generator-pro-progress button.close",(function(e){return e.preventDefault(),page_generator_pro_hide_overlay_and_progress(),!1})),e("body.post-type-page-generator-pro form input[type=submit], body.taxonomy-page-generator-tax form input[type=submit]").click((function(t){e(window).off("beforeunload.edit-post");var r=e(this).attr("name"),a=page_generator_pro_generate_content.messages[r+"_confirm"];return void 0===a||(confirm(a)?void 0:(t.preventDefault(),!1))}))}));