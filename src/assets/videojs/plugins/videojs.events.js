!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i(require("video.js")):"function"==typeof define&&define.amd?define(["video.js"],i):e.videojsEventTracking=i(e.videojs)}(this,function(e){"use strict";function i(e,i,t,o,n){""===i&&(i=e);""!==i&&""!==o&&(window.gtag?window.gtag("event",o,{event_category:t,event_label:i,value:n,eventNonInteraction:!0}):window._ga?window.ga("send","event",t,o,i,n,{transport:"beacon"}):window._gaq?window._gaq.push(["_trackEvent",t,o,i,n,!0,{transport:"beacon"}]):window._paq&&window._paq.push(["trackEvent",t,o,i,n]))}e="default"in e?e.default:e;var t=function(e){var t=this,o=0,n=0,d=0,a=0,r=0,s=0,u=0,v=[],c="",l=0,f="Videos",h="",_=!1,p=function(){var e={event:"summary",initialLoadTime:u,totalDuration:a,watchedDuration:r,pauseCount:n,seekCount:o,bufferCount:d,lastTime:l,bufferDuration:s,video_id:c,video_category:f,video_label:h,analytics:_};e.watchedDuration>0&&(e.lastTime>e.totalDuration-1&&(e.lastTime=0),this.trigger("track",e),e.analytics&&i(e.video_id,e.video_label,e.video_category,"WatchedTime",e.watchedDuration),o=0,n=0,d=0,a=0,r=0,s=0,u=0,l=0,v=[])};"function"==typeof window.addEventListener&&(window.addEventListener("pagehide",p),window.addEventListener("beforeunload",function(){window.removeEventListener("pagehide",p),p()}),t.on("dispose",function(){window.removeEventListener("beforeunload",p),window.removeEventListener("pagehide",p)})),t.on("ended",p),t.on("dispose",p),t.on("newSource",p),t.on("timeupdate",function(){var e=+t.currentTime().toFixed(0);v.indexOf(e)<0&&v.push(e),r=v.length,l=t.currentTime().toFixed(0)}),t.on("loadeddata",function(e,i){a=+t.duration().toFixed(0)}),t.on("track",function(e,i){switch(i.event){case"seek":o=i.seekCount;break;case"pause":n=i.pauseCount;break;case"buffered":d=i.bufferCount,s+=parseFloat(i.bufferTime);break;case"loaded":u=i.initialLoadTime;break;case"firstPlay":"function"==typeof t.video_title&&t.video_title()&&(h=t.video_title()),"function"==typeof t.video_id&&t.video_id()&&(c=t.video_id()),f=t.isAudio()?"Audio":"Videos",t.analytics&&(_=!0)}})},o={analytics:!1},n=function(n){n=e.mergeOptions(o,n),this.analytics=n.analytics,function(e){var i=this,t=0,o=null,n=!1,d=function(e){o&&clearTimeout(o),t=0,n=!1};i.on("dispose",d),i.on("loadstart",d),i.on("ended",d),i.on("pause",function(){if(!(i.scrubbing()||i.seeking()||n)){var e="",d="";"function"==typeof i.video_title&&i.video_title()&&(e=i.video_title()),"function"==typeof i.video_id&&i.video_id()&&(d=i.video_id()),o=setTimeout(function(){t++,i.trigger("track",{event:"pause",videoId:d,videoTitle:e,pauseCount:t})},300)}})}.apply(this,arguments),function(e){var i=this,t=0,o=null,n=!1,d=function(e){o&&clearTimeout(o),t=0,n=!1};i.on("dispose",d),i.on("loadstart",d),i.on("ended",d),i.on("play",function(){if(!(i.scrubbing()||i.seeking()||n||i.currentTime()<1)){var e="",d="";"function"==typeof i.video_title&&i.video_title()&&(e=i.video_title()),"function"==typeof i.video_id&&i.video_id()&&(d=i.video_id()),o=setTimeout(function(){t++,i.trigger("track",{event:"resume",videoId:d,videoTitle:e,resumeCount:t})},300)}})}.apply(this,arguments),function(e){var i=this;i.on("volumechange",function(){if(i.currentTime()>1){var e="",t="";"function"==typeof i.video_title&&i.video_title()&&(e=i.video_title()),"function"==typeof i.video_id&&i.video_id()&&(t=i.video_id()),i.muted()&&i.trigger("track",{event:"mute",videoId:t,videoTitle:e}),!0!==i.muted()&&i.trigger("track",{event:"unmute",videoId:t,videoTitle:e})}})}.apply(this,arguments),function(e){var i=this;i.on("ratechanged",function(e,t){var o="",n="";"function"==typeof i.video_title&&i.video_title()&&(o=i.video_title()),"function"==typeof i.video_id&&i.video_id()&&(n=i.video_id()),t.oldRate!==t.newRate&&i.trigger("track",{event:"rateChange",videoId:n,videoTitle:o,rate:t.newRate})})}.apply(this,arguments),function(e){var i=this,t=null,o=!1,n=!1,d=!1,a=0,r=function(){t&&clearTimeout(t),o=!1,n=!1,d=!1,a=0};this.on("dispose",r),this.on("loadstart",r),this.on("ended",r),this.on("pause",function(){d=!1,!i.scrubbing()||e.bufferingConfig&&e.bufferingConfig.includeScrub||(o=!0,t=setTimeout(function(){o=!1},200))}),this.on("waiting",function(){!1===d&&!1===o&&i.currentTime()>0&&(d=new Date,n=+i.currentTime().toFixed(2))}),this.on("timeupdate",function(){var e=+i.currentTime().toFixed(2);if(d&&e!==n){var t=(new Date-d)/1e3;d=!1,n=!1,a++;var o="",r="";"function"==typeof this.video_title&&this.video_title()&&(o=this.video_title()),"function"==typeof this.video_id&&this.video_id()&&(r=this.video_id()),i.trigger("track",{event:"buffered",videoId:r,videoTitle:o,bufferTime:t.toFixed(3),bufferCount:a})}})}.apply(this,arguments),function(e){var t=this,o=!1,n=!1,d=!1,a=!1,r=!1,s=0,u=0,v=0,c=0,l=function(e){o=!1,n=!1,d=!1,a=!1,r=!1,s=0,u=0,v=0,c=0},f="",h="",_="";"function"==typeof t.video_title&&t.video_title()&&(f=t.video_title()),"function"==typeof t.video_id&&t.video_id()&&(h=t.video_id()),_=t.isAudio()?"Audio":"Videos";t.on("dispose",l),t.on("loadstart",l),t.on("tracking:pause",function(){return u++}),t.on("tracking:resume",function(){return v++}),t.on("tracking:seek",function(){return c++}),t.on("timeupdate",function(){var e=+t.currentTime().toFixed(0);switch(e){case o:o=!1,t.trigger("track",{event:"10%",videoId:h,videoTitle:f,currentTime:e,duration:s}),t.analytics&&i(h,f,_,"10%",1);break;case d:d=!1,t.trigger("track",{event:"25%",videoId:h,videoTitle:f,currentTime:e,duration:s}),t.analytics&&i(h,f,_,"25%",1);break;case a:a=!1,t.trigger("track",{event:"50%",videoId:h,videoTitle:f,currentTime:e,duration:s}),t.analytics&&i(h,f,_,"50%",1);break;case r:r=!1,t.trigger("track",{event:"75%",videoId:h,videoTitle:f,currentTime:e,duration:s}),t.analytics&&i(h,f,_,"75%",1);break;case n:n=!1,t.trigger("track",{event:"90%",videoId:h,videoTitle:f,currentTime:e,duration:s})}t.on("durationchange",function(){if((s=+t.duration().toFixed(0))>0){var e=(s/4).toFixed(0),i=(s/10).toFixed(0),u=(.9*s).toFixed(0);n=+u,o=+i,d=+e,a=2*+e,r=3*+e}})}),t.on("ended",function(){var e=this.duration();this.el_.className.indexOf("vjs-live")>-1&&(e=0);var t="",o="",n="";"function"==typeof this.video_title&&this.video_title()&&(t=this.video_title()),"function"==typeof this.video_id&&this.video_id()&&(o=this.video_id()),n=this.isAudio()?"Audio":"Videos",this.trigger("track",{event:"ended",videoId:this.video_id(),videoTitle:this.video_title(),duration:e}),this.analytics&&i(o,t,n,"Completed",1)}),t.on("fullscreenchange",function(){var e="",t="",o="";"function"==typeof this.video_title&&this.video_title()&&(e=this.video_title()),"function"==typeof this.video_id&&this.video_id()&&(t=this.video_id()),o=this.isAudio()?"Audio":"Videos",this.isFullscreen()?(this.trigger("track",{event:"enterFullscreen",videoId:t,videoTitle:e,mode:"on"}),this.analytics&&i(t,e,o,"Fullscreen",1)):this.trigger("track",{event:"exitFullscreen",videoId:t,videoTitle:e,mode:"on"})}),t.on("durationchange",function(){if((s=+t.duration().toFixed(2))>0){var e=(s/4).toFixed(2);d=+e,a=2*+e,r=3*+e}})}.apply(this,arguments),function(e){var t=this,o=!1,n=0,d=0,a=0,r=function(){o=!1,n=0,d=0,a=0};this.on("dispose",r),this.on("loadstart",function(){r(),n=new Date}),this.on("loadeddata",function(){d=new Date;var e="",i="";"function"==typeof this.video_title&&this.video_title()&&(e=this.video_title()),"function"==typeof this.video_id&&this.video_id()&&(i=this.video_id()),i=this.video_id(),a=(d-n)/1e3,t.trigger("track",{event:"loaded",videoId:i,videoTitle:e,initialLoadTime:+a.toFixed(3)})}),this.on("playing",function(){if(!o){var e="",n="",d="";"function"==typeof this.video_title&&this.video_title()&&(e=this.video_title()),"function"==typeof this.video_id&&this.video_id()&&(n=this.video_id()),d=this.isAudio()?"Audio":"Videos",o=!0;var a=(new Date).toLocaleString();t.trigger("track",{event:"firstPlay",videoId:n,videoTitle:e,initialPlayTime:a}),this.analytics&&i(n,e,d,"Play",1)}})}.apply(this,arguments),function(e){var i=this;if(!(i.el_.className.indexOf("vjs-live")>-1)){var t=0,o=0,n=function(){t=0,o=0};i.on("dispose",n),i.on("loadstart",n),i.on("ended",n);var d=i.el().querySelector(".vjs-progress-holder");d.onmouseup=d.ontouchend=function(){o=i.currentTime().toFixed(2),t++,setTimeout(function(){var e="",n="";"function"==typeof i.video_title&&i.video_title()&&(e=i.video_title()),"function"==typeof i.video_id&&i.video_id()&&(n=i.video_id()),i.trigger("track",{event:"seek",videoId:n,videoTitle:e,seekTo:o,seekCount:t})},200)}}}.apply(this,arguments),t.apply(this,arguments),function(e){var i=this;i.on("resolutionchange",function(e,t){var o="",n="";"function"==typeof i.video_title&&i.video_title()&&(o=i.video_title()),"function"==typeof i.video_id&&i.video_id()&&(n=i.video_id()),i.trigger("track",{event:"resolutionChange",videoId:n,videoTitle:o,resolution:t.res})})}.apply(this,arguments)},d=e.registerPlugin||e.plugin;return void 0===(e.getPlugin||e.plugin)("events")&&d("events",n),n.VERSION="1.0.0",n});