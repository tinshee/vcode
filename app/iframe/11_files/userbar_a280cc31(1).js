F.module("/static/common/ui/userbar/userbar.js",function(c,e){var g=c("/static/common/ui/jquery/jquery.js"),d=c("/static/common/ui/wikiUserLogin/wikiUserLogin.js"),f=c("/static/common/ui/userMsg/userMsg.js"),i=c("/static/common/ui/jsmart/jsmart.js"),h=c("/static/common/ui/browser/browser.js"),j=c("/static/common/ui/bubble/bubble.js");var b={userbar:{unlogin:new i('<li><a href="http://www.baidu.com/">\u767e\u5ea6\u9996\u9875</a></li><li><a data-action="login" href="javascript:;">\u767b\u5f55</a></li><li><a href="https://passport.baidu.com/v2/?reg&regType=1&tpl=wk">\u6ce8\u518c<a></a></a></li>'),login:new i('<li class="userbar_user" data-action="showUserMenu"><a href="javascript:;"><span>{%if $name%}{%$name|escape:html%}{%else%}{%$incompleteInfo.displayname|escape:html%}{%/if%}</span><img class="cmn-inline-block" src="/static/common/ui/userbar/resource/img/userbar-down_8a19356f.png"></a></li><li class="userbar_mall"><a href="/mall/" target="_blank"><img class="cmn-inline-block" src="/static/common/ui/userbar/resource/img/userbar-shop_91731dd5.png">\u5546\u57ce</a></li><li class="userbar_message" data-action="showUserMsg"><a href="javascript:;"><img src="/static/common/ui/userbar/resource/img/userbar-message_8e8ba75d.png"><img class="userbar_message_new" src="/static/common/ui/userbar/resource/img/userbar-message-new_b9bca6f5.png">\u6d88\u606f</a></li><li class="split">|</li><li><a href="http://www.baidu.com/">\u767e\u5ea6\u9996\u9875</a></li>')},menu:{userMenu:new i('<ul><li class="top"><a href="/uc/home" target="_blank">\u6211\u7684\u767e\u79d1</a></li><li><a href="/uc/task" target="_blank">\u6211\u7684\u4efb\u52a1</a></li><li><a href="/uc/effort" target="_blank">\u6211\u7684\u8bcd\u6761</a></li><li><a href="http://passport.baidu.com/center" target="_blank">\u8d26\u53f7\u8bbe\u7f6e</a></li><li class="bottom logout"><a data-action="logout" href="javascript:;">\u9000\u51fa</a></li></ul>'),userMsg:new i('<ul><li class="top"><a href="/messages" target="_blank"><span class="userMsgType">\u901a\u77e5</span>{%if $baikeMsg.notice && $baikeMsg.notice.num > 0%}<span class="userMsgCount">{%if $baikeMsg.notice.num < 100%}{%$baikeMsg.notice.num%}{%else%}99{%/if%}</span>{%/if%}</a></li><li class="bottom"><a href="http://msg.baidu.com/" target="_blank"><span class="userMsgType">\u79c1\u4fe1</span>{%if $baiduMsg.msgnum > 0%}<span class="userMsgCount">{%if $baiduMsg.msgnum < 100%}{%$baiduMsg.msgnum%}{%else%}99{%/if%}</span>{%/if%}</a></li></ul>')},bubble:{lemmaMsg:new i('<ul>{%foreach $baikeMsg as $idx => $msg%} {%if $idx === "passedVersion" && $msg.num > 0%}<li><a href="/uc/effort#1" data-action="readMessage" data-msgType="3" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u7248\u672c\u5df2\u901a\u8fc7</a></li>{%else if $idx === "failedVersion" && $msg.num > 0%}<li><a href="/uc/effort#3" data-action="readMessage" data-msgType="4" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u7248\u672c\u672a\u901a\u8fc7</a></li>{%else if $idx === "deletedVersion" && $msg.num > 0%}<li><a href="/uc/effort#3" data-action="readMessage" data-msgType="6" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u7248\u672c\u88ab\u5220\u9664</a></li>{%else if $idx === "goodVersion" && $msg.num > 0%}<li><a href="/uc/effort#7" data-action="readMessage" data-msgType="7" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u7248\u672c\u88ab\u8bc4\u4e3a\u4f18\u8d28\u7248\u672c</a></li>{%else if $idx === "featuredLemma" && $msg.num > 0%}<li><a href="/uc/effort#4" data-action="readMessage" data-msgType="8" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u8bcd\u6761\u88ab\u8bc4\u4e3a\u7279\u8272\u8bcd\u6761</a></li>{%else if $idx === "deletedLemma" && $msg.num > 0%}<li><a href="/uc/effort#3" data-action="readMessage" data-msgType="5" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u8bcd\u6761\u88ab\u5220\u9664</a></li>{%else if $idx === "tousu" && $msg.num > 0%}<li><a href="/messages" data-action="readMessage" data-msgType="2" target="_blank">\u60a8\u6709{%$msg.num%}\u4e2a\u6295\u8bc9\u5904\u7406\u6d88\u606f</a></li>{%/if%} {%/foreach%}<li class="cancelAlarm"><a href="/uc/usercard#msgInfo" target="_blank">\u4e0d\u518d\u63a5\u6536\u6b64\u7c7b\u6d88\u606f</a></li></ul><a class="wgt-bubble-lemmaMsg_close" data-action="cancelAlarm" href="javascript:;"><img class="cmn-inline-block" src="/static/common/ui/userbar/resource/img/userbar-close_ac2805fc.png"></a>')}};var a={render:{userbar:function(m,n,l){switch(n){case"unlogin":m.html(b.userbar[n].fetch(l));break;case"login":m.html(b.userbar[n].fetch(l));break}},menu:function(n,m,o,q){var l=new j({host:m,content:b.menu[o].fetch(q),pos:"bottom-center",offset:{top:7},showTail:typeof h.ie()==="undefined"||h.ie()>9?true:false,classNames:"wgt-bubble-"+o});var p=g(l.getNode());m.mouseover(function(){n.find(".userbar_user").addClass("spreadUserMenu");l.show(function(){var r="";m.on("mouseleave",function(){r=setTimeout(function(){n.find(".userbar_user").removeClass("spreadUserMenu");l.hide()},100)});p.on("mouseenter",function(){clearTimeout(r);p.on("mouseleave",function(){n.find(".userbar_user").removeClass("spreadUserMenu");l.hide()})})})});p.on("click","a",function(){var r=g(this).attr("data-action");if(r){switch(r){case"logout":d.logout();break}return false}});return p},bubble:function(m,n,p){var l=new j({host:m,content:b.bubble[n].fetch(p),pos:"bottom-center",showTail:typeof h.ie()==="undefined"||h.ie()>9?true:false,hideWhenBlur:false,classNames:"wgt-bubble-"+n,offset:{top:7,left:-80}});var o=g(l.getNode());l.show();return o}}};var k={buildUserbar:function(n,m){var l=m;if(!m){a.render.userbar(n,"unlogin")}else{a.render.userbar(n,"login",l);a.render.menu(n,n.find('li[data-action="showUserMenu"]'),"userMenu");f.getUserMsg(l,function(r,s){var q={baiduMsg:r,baikeMsg:s};if(q.baiduMsg.msgnum+q.baikeMsg.notice.num>0){n.find(".userbar_message").addClass("newMessage")}a.render.menu(n,n.find('li[data-action="showUserMsg"]'),"userMsg",q);var p=0;for(var o in q.baikeMsg){if(o!=="notice"){p+=q.baikeMsg[o].num}}if(p>0){var t=a.render.bubble(n.find('li[data-action="showUserMenu"]'),"lemmaMsg",q);t.on("click","a",function(){var v=g(this).attr("data-action");switch(v){case"readMessage":var u=g(this).attr("data-msgType");break;case"cancelAlarm":var u="all";break}g.ajax({type:"GET",url:"/api/wikimessage/readmsgstatus",data:{type:u},dataType:"JSON",complete:function(w){t.remove()}});if(v==="cancelAlarm"){return false}})}})}n.on("click","a",function(){var o=g(this).attr("data-action");if(o){switch(o){case"login":d.showLoginPop();break}return false}})}};e=k;return e},["/static/common/ui/jquery/jquery.js","/static/common/ui/wikiUserLogin/wikiUserLogin.js","/static/common/ui/userMsg/userMsg.js","/static/common/ui/jsmart/jsmart.js","/static/common/ui/browser/browser.js","/static/common/ui/bubble/bubble.js"]);