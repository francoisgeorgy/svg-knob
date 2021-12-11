!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.svgKnob=e()}(this,function(){var t={light:{bg_color:"#E0E0E0",bg_border_color:"#BDBDBD",track_bg_color:"#CFD8DC",track_color_init:"#64B5F6",track_color:"#42A5F5",cursor_color_init:"#64B5F6",cursor_color:"#42A5F5",markers_color:"#9E9E9E",font_color:"#424242"},light2:{bg_color:"#B1DAEE",bg_border_color:"#569DC0",track_bg_color:"#B1DAEE",track_color_init:"#569DC0",track_color:"#1D6D93",cursor_color_init:"#569DC0",cursor_color:"#1D6D93",markers_color:"#3680A4",font_color:"#1D6D93"},dark:{bg_color:"#000000",bg_border_color:"#569DC0",track_bg_color:"#424242",track_color_init:"#FDD835",track_color:"#FFEC00",cursor_color_init:"#569DC0",cursor_color:"#FDD835",markers_color:"#3680A4",font_color:"#FFEA00"}};return function(e,r){if(void 0===r&&(r={}),!e)throw"You must pass a DOM node reference to the Knob constructor";var n,o=!1,a="http://www.w3.org/2000/svg",l=!0,i=!l,s=50,u=s,c=50,_=100;("string"==typeof e||e instanceof String)&&(e=document.querySelector(e));var d=e.nodeName.toLowerCase();if("g"===d){var g=(n=e).getBBox();u=g.x+.5*g.width,c=g.y+.5*g.height,_=g.width}else{if("div"!==d)throw"Unsupported element type for creating knob, should be a div or an SVG g element!";n=document.createElementNS("http://www.w3.org/2000/svg","svg"),e.appendChild(n)}var b={label:!1,rotation:l,default_value:0,initial_value:0,value_min:0,value_max:100,value_resolution:1,center_zero:!1,center_value:null,center_gap:4,zero_at:270,angle_min:30,angle_max:330,bg_radius:32,bg_border_width:1,track_bg_radius:40,track_bg_width:8,track_radius:40,track_width:8,cursor_radius:18,cursor_length:10,cursor_width:4,palette:"light",bg:!1,track_bg:!0,track:!0,cursor:!1,linecap:"butt",value_text:!0,value_position:58,font_family:"sans-serif",font_size:25,display_raw:!1,format_raw:function(t){return Math.round(t)},format:function(t){return t},font_weight:"bold",markers:0,markers_radius:40,markers_length:8,markers_width:2,class_bg:"knob-bg",class_track_bg:"knob-track-bg",class_track:"knob-track",class_value:"knob-value",class_cursor:"knob-cursor",class_markers:"knob-markers",snap_to_steps:!1,mouse_wheel_acceleration:1,onchange:null},m=JSON.parse(e.dataset.config||"{}"),h=Object.assign({},b,t[b.palette],r,m),f=Object.assign(h,t[h.palette],r,m);n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),100===_&&n.setAttributeNS(null,"viewBox","0 0 100 "+(f.label||f.value_position>=_-f.font_size/2?120:100));var v,k,p=0,A=0,w=0,x=0,E=f.angle_min,M=null,y=null,S=null,D=null,N=null,C=null,z=null,F=null,L=null,P=!1;function B(){o&&console.log("init()"),f.center_zero&&(f.center_value||(f.center_value=T((f.value_max-f.value_min)/2+f.value_min))),"butt"===f.linecap?(w=U(180*Math.acos(-f.center_gap/100)/Math.PI),x=U(180*Math.acos(f.center_gap/100)/Math.PI)):(w=U(180*Math.acos(-(1.3*f.track_width+f.center_gap)/100)/Math.PI),x=U(180*Math.acos((1.3*f.track_width+f.center_gap)/100)/Math.PI))}function I(){Y(f.initial_value?f.initial_value:f.default_value)}function T(t){return null===f.value_resolution?t:Math.round(t/f.value_resolution)*f.value_resolution}function O(t){o&&console.log("getDisplayValue",f.display_raw);var e=j(t);return f.display_raw?f.format_raw(e):f.format(e)}function V(){var t;return t=Math.abs(f.value_max-f.value_min),1===Math.abs(t%2)?.5:0}function j(t){return T(((void 0===t?E:t)-f.angle_min)/(f.angle_max-f.angle_min)*(f.value_max-f.value_min)+f.value_min-V())}function Y(t){return K((t+V()-f.value_min)/(f.value_max-f.value_min)*(f.angle_max-f.angle_min)+f.angle_min),o&&console.log("setValue("+t+") angle="+(t-f.value_min)/(f.value_max-f.value_min)*(f.angle_max-f.angle_min)+f.angle_min),!0}function K(t,r){var n=E,a=r&&t!==E;E=Math.min(Math.max(t,f.angle_min),f.angle_max),a&&j(n)!==j()&&function(){o&&console.log("knob value has changed");var t=j(),r=new CustomEvent("change",{detail:t});e.dispatchEvent(r),f.onchange&&f.onchange(t)}()}function R(t){var e=f.zero_at-t;return e<0&&(e+=360),o&&console.log("knobToPolarAngle "+t+" -> "+e),e}function U(t){return o&&console.log("polarToKnobAngle "+t+" -> "+(f.zero_at-t+360)%360),(f.zero_at-t+360)%360}function X(t){var e=t.clientX-v.left,r=t.clientY-v.top,n=(e-p)/(v.width/2),a=-(r-A)/(v.width/2);f.rotation===i&&(n=-n);var l=Math.atan2(a,n);l<0&&(l=2*Math.PI+l),o&&console.log("mouseUpdate: position in svg = "+e+", "+r+" pixels; "+n.toFixed(3)+", "+a.toFixed(3)+" rel.; angle "+l.toFixed(3)+" rad"),K(U(180*l/Math.PI),!0)}function q(t){t.preventDefault(),X(t),ot()}function G(){o&&console.log("endDrag"),document.removeEventListener("mousemove",q,!1),document.removeEventListener("mouseup",G,!1)}function H(t){o&&console.log("handleTouch",t.touches),t.preventDefault();var e=t.touches.length-1,r=t.touches[e].clientX-v.left,n=t.touches[e].clientY-v.top,a=(r-p)/(v.width/2),l=-(n-A)/(v.width/2);f.rotation===i&&(a=-a);var s=Math.atan2(l,a);s<0&&(s=2*Math.PI+s),o&&console.log("handleTouch: position in svg = "+r+", "+n+" pixels; "+a.toFixed(3)+", "+l.toFixed(3)+" rel.; angle "+s.toFixed(3)+" rad"),K(U(180*s/Math.PI),!0),ot()}function J(){o&&console.log("endTouch"),document.removeEventListener("touchmove",H),document.removeEventListener("touchend",J)}function Q(t,e){var r=t*Math.PI/180,n=void 0===e?f.track_radius:e,o=Math.cos(r)*n,a=Math.sin(r)*n;return{x:f.rotation===l?u+o:u-o,y:c-a}}function W(t,e,r){o&&console.group("getArc("+t+", "+e+", "+r+")");var n=R(t),a=R(e);t!==e&&(n-=1e-4,a+=1e-4);var i=Q(n,r),s=i.x,u=i.y,c=Q(a,r),_="M "+s+","+u+" A "+r+","+r+" 0 "+((n-a+360)%360<180?0:1)+","+(f.rotation===l?1:0)+" "+c.x+","+c.y;return o&&console.groupEnd(),o&&console.log("arc: "+_),_}function Z(){o&&console.log("getTrackPath()");var t=null;if(f.center_zero){if(Array.isArray(f.center_value)){if(f.center_value.includes(j()))return o&&console.log("getTrackPath: center position, track not drawn"),t}else if(j()===f.center_value)return o&&console.log("getTrackPath: center position, track not drawn"),t;E<180?t=W(Math.min(E,w),w,f.track_radius):E>180&&(t=W(x,Math.max(E,x),f.track_radius))}else t=W(f.angle_min,E,f.track_radius);return t}function $(){if(o&&console.log("draw_track()",f.track),f.track){var t=Z();t&&((N=document.createElementNS(a,"path")).setAttributeNS(null,"d",t),N.setAttribute("stroke",""+f.track_color_init),N.setAttribute("stroke-width",""+f.track_width),N.setAttribute("fill","transparent"),N.setAttribute("stroke-linecap",f.linecap),N.setAttribute("class",f.class_track),n.appendChild(N))}}function tt(){var t=R(E),e=Q(t,f.cursor_radius),r=Q(t,f.cursor_radius+f.cursor_length);return"M "+e.x+","+e.y+" L "+r.x+","+r.y}function et(t,e){if(void 0===e&&(e=!1),"string"!=typeof t)return f.font_size;var r=Math.min(22,t.length);return e?f.font_size*Math.min(.75,Math.max((22-r)/22,.25)):f.font_size*Math.max((22-r)/22,.25)}function rt(t,e){void 0===e&&(e=!1),o&&console.log("draw_value_line1",t),(F=document.createElementNS(a,"text")).setAttributeNS(null,"x",""+s),F.setAttributeNS(null,"y",""+f.value_position),F.setAttribute("text-anchor","middle"),F.setAttribute("cursor","default"),F.setAttribute("font-family",f.font_family),F.setAttribute("font-size",""+et(t,e)),F.setAttribute("font-weight",""+f.font_weight),F.setAttribute("fill",f.font_color),F.setAttribute("class",f.class_value),F.textContent=t,n.appendChild(F)}function nt(t){o&&console.log("draw_value_line2",t),(L=document.createElementNS(a,"text")).setAttributeNS(null,"x",""+s),L.setAttributeNS(null,"y",""+(f.value_position+4)),L.setAttribute("text-anchor","middle"),L.setAttribute("cursor","default"),L.setAttribute("font-family",f.font_family),L.setAttribute("font-size",""+et(t,!0)),L.setAttribute("font-weight",""+f.font_weight),L.setAttribute("fill",f.font_color),L.setAttribute("class",f.class_value),L.textContent=t,n.appendChild(L)}function ot(){o&&console.log("redraw()",f);var t=Z();t?N?(o&&console.log("redraw track already exist, update d"),N.setAttributeNS(null,"d",t)):(o&&console.log("redraw draw_track"),$()):N&&(o&&console.log("redraw track already exist, hide it"),N.setAttributeNS(null,"d","")),P||(P=j()!==f.default_value)&&N&&N.setAttribute("stroke",""+f.track_color),C&&(t=tt())&&(o&&console.log("redraw cursor"),C.setAttributeNS(null,"d",t),P&&C.setAttribute("stroke",""+f.cursor_color)),F&&(o&&console.log("redraw svg_value_text"),function(){if(o&&console.log("update_value",f.value_text),f.value_text){var t=O();if("number"==typeof t||t.indexOf("\n")<=0)o&&console.log("single line"),F&&(F.setAttributeNS(null,"y",""+f.value_position),F.setAttribute("font-size",""+et(t)),F.textContent=t),L&&(n.removeChild(L),L=null);else{var e=t.split("\n");o&&console.log("two lines",t,e),F&&(F.setAttributeNS(null,"y",""+(f.value_position-12)),F.setAttribute("font-size",""+et(e[0],!0)),F.textContent=e[0]),L?(L.setAttributeNS(null,"y",""+(f.value_position+4)),L.setAttribute("font-size",""+et(e[1],!0)),L.textContent=e[1]):nt(e[1])}}}())}return B(),I(),o&&console.log("draw()",f),o&&console.log("draw_background()",f.bg),f.bg&&((M=document.createElementNS(a,"circle")).setAttributeNS(null,"cx",""+u),M.setAttributeNS(null,"cy",""+c),M.setAttributeNS(null,"r",""+f.bg_radius),M.setAttribute("fill",""+f.bg_color),M.setAttribute("stroke",""+f.bg_border_color),M.setAttribute("stroke-width",""+f.bg_border_width),M.setAttribute("class",f.class_bg),n.appendChild(M)),o&&console.log("draw_track_background()",f.track_bg),f.track_bg&&(f.center_zero?((S=document.createElementNS(a,"path")).setAttributeNS(null,"d",W(f.angle_min,w,f.track_bg_radius)),S.setAttribute("stroke",""+f.track_bg_color),S.setAttribute("stroke-width",""+f.track_bg_width),S.setAttribute("stroke-linecap",f.linecap),S.setAttribute("fill","transparent"),S.setAttribute("class",f.class_track_bg),n.appendChild(S),(D=document.createElementNS(a,"path")).setAttributeNS(null,"d",W(x,f.angle_max,f.track_bg_radius)),D.setAttribute("stroke",""+f.track_bg_color),D.setAttribute("stroke-width",""+f.track_bg_width),D.setAttribute("stroke-linecap",f.linecap),D.setAttribute("fill","transparent"),D.setAttribute("class",f.class_track_bg),n.appendChild(D)):((y=document.createElementNS(a,"path")).setAttributeNS(null,"d",W(f.angle_min,f.angle_max,f.track_bg_radius)),y.setAttribute("stroke",""+f.track_bg_color),y.setAttribute("stroke-width",""+f.track_bg_width),y.setAttribute("fill","transparent"),y.setAttribute("stroke-linecap",f.linecap),y.setAttribute("class",f.class_track_bg),n.appendChild(y))),function(){if(o&&console.log("draw_markers()",f.markers),f.markers){for(var t="",e=(f.angle_max-f.angle_min)/f.markers,r=f.angle_min;r<=f.angle_max;r+=e){var l=Q(R(r),f.markers_radius),i=Q(R(r),f.markers_radius+f.markers_length);t+="M "+l.x+","+l.y+" L "+i.x+","+i.y+" "}(z=document.createElementNS(a,"path")).setAttributeNS(null,"d",t),z.setAttribute("stroke",""+f.markers_color),z.setAttribute("stroke-width",""+f.markers_width),z.setAttribute("stroke-linecap",f.linecap),z.setAttribute("class",f.class_markers),n.appendChild(z)}}(),$(),function(){if(o&&console.log("draw_cursor()",f.cursor),f.cursor){var t=tt();t&&((C=document.createElementNS(a,"path")).setAttributeNS(null,"d",t),C.setAttribute("stroke",""+f.cursor_color_init),C.setAttribute("stroke-width",""+f.cursor_width),C.setAttribute("fill","transparent"),C.setAttribute("stroke-linecap",f.linecap),C.setAttribute("class",f.class_cursor),n.appendChild(C))}}(),function(){if(o&&console.log("draw_value",f.value_text),f.value_text){var t=O();if("number"==typeof t||t.indexOf("\n")<=0)o&&console.log("single line"),rt(t);else{var e=t.split("\n");o&&console.log("two lines",e),rt(e[0],!0),nt(e[1])}}}(),o&&console.log("attach attachEventHandlers"),n.addEventListener("mousedown",function(t){!function(t){o&&console.log("startDrag"),t.preventDefault(),v=n.getBoundingClientRect(),A=p=v.width/2,document.addEventListener("mousemove",q,!1),document.addEventListener("mouseup",G,!1),X(t),ot()}(t)}),n.addEventListener("wheel",function(t){!function(t){t.preventDefault();var e=t.deltaY;0!==e&&(k>Math.abs(e)||!k)&&(k=Math.abs(e)),K(Math.min(Math.max(E+e/k*1*f.mouse_wheel_acceleration,f.angle_min),f.angle_max),!0),ot()}(t)}),n.addEventListener("touchstart",function(t){o&&console.log("startTouch"),t.preventDefault(),v=n.getBoundingClientRect(),A=p=v.width/2,document.addEventListener("touchmove",H,{passive:!1}),document.addEventListener("touchend",J)},{passive:!1}),{set value(t){Y(t),ot()},set config(t){f=Object.assign({},b,f,t),B(),ot()},setConfigValue:function(t,e){f[t]=e,B(),ot()},initValue:I,enableDebug:function(){o=!0},disableDebug:function(){o=!1}}}});
//# sourceMappingURL=index.umd.js.map