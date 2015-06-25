$.getJSON("scripts/june_places_sorted_data.json",function(a){function b(a){return(a+"").replace(/\b(\d+)((\.\d+)*)\b/g,function(a,b,c){return(b.charAt(0)>0&&!(c||".").lastIndexOf(".")?b.replace(/(\d)(?=(\d{3})+$)/g,"$1,"):b)+c})}var c=[],d=[],e="#F8F991";$.each(a,function(a,b){b.id=a,c.push(b.city);var e=(b.income,b.ratio);d.push({meta:b.city,value:e})});var f=_.sortBy(a,function(a){return a.city.toLowerCase()});$.each(f,function(a,b){var c=$('<option value="'+b.id+'">'+b.city+"</option>");$("select").append(c),$("select").select2()});var g={northeast:[],west:[],south:[],midwest:[]},h=$("#map").vectorMap({map:"us_aea_en",backgroundColor:"white",zoomOnScroll:!1,regionStyle:{initial:{fill:"#333"}},markerStyle:{initial:{fill:e}},markers:[{latLng:[40.7127837,-74.0059413]}]}),i=[],h=$("#map").vectorMap("get","mapObject");$.each(a,function(a,b){i.push({latLng:[b.lat,b.lng],name:b.city}),g[b.region.toLowerCase()].push({latLng:[b.lat,b.lng],name:b.city})}),h.createMarkers(i);var j=$("#lowest-ratio").first(),k=$("#greatest-ratio").first(),l=$("#northeast").first(),m=$("#cities").first(),n={top:j.offset().top,bottom:j.offset().top+j.outerHeight()},o={top:k.offset().top,bottom:k.offset().top+k.outerHeight()},p=({top:l.offset().top,bottom:l.offset().top+l.outerHeight()},{top:m.offset().top,bottom:m.offset().top+m.outerHeight()}),q=function(a,b){h.removeAllMarkers(),h.createMarkers(a),$(".fact").removeClass("fact-focus"),b.addClass("fact-focus")};$(".fact-region").each(function(a,b){var c=$(b),d=c.attr("id"),e={top:c.offset().top,bottom:c.offset().top+c.outerHeight()};$(window).scroll(function(){$(window).scrollTop()>=e.top&&$(window).scrollTop()<=e.bottom&&q(g[d],c)})}),$(window).scroll(function(){$(window).scrollTop()>=p.top&&$(window).scrollTop()<=p.bottom&&q(i,m),$(window).scrollTop()>=n.top&&$(window).scrollTop()<=n.bottom&&q({latLng:[42.331427,-83.0457538],name:"Detroit"},j),$(window).scrollTop()>=o.top&&$(window).scrollTop()<=o.bottom&&q({latLng:[37.7749295,-122.4194155],name:"San Francisco"},k)});var r=$("#myAffix"),s=$("#myAffix").first().offset().top,t=s+r.outerHeight()-700;$("#myAffix").affix({offset:{top:function(){return s},bottom:function(){return console.log("returning",s,t),t}}});var u={labels:c,series:[d]},v={showLine:!1,axisX:{labelInterpolationFnc:function(a,b){return a}},plugins:[Chartist.plugins.tooltip({currency:void 0})]},w=[["screen and (min-width: 640px)",{axisX:{labelInterpolationFnc:function(a,b){return b%4===0?a:null},showGrid:!1,showLabel:!1}}],["screen and (max-width: 640px)",{axisX:{labelInterpolationFnc:function(a){return a[0]},showGrid:!1}}]],x=new Chartist.Line("#cities-chart",u,v,w);$("document").ready(function(){console.log("ready!!"),$.each($(".ct-point"),function(a,b){$(b).attr("ct:key",a)});var c=d3.selectAll(".ct-point")[0];x.on("draw",function(){console.log("drawing...");var a=d3.select("body").selectAll(".ct-point")[0];$.each($(".ct-point"),function(a,b){$(b).attr("ct:key",a)}),console.log("drawnPoints.length",a.length,"dataPoints.length",c.length),a.length===c.length&&(console.log("selecting with d3.."),d3.selectAll(".ct-point").on("mouseenter",function(){console.log("actually selecting on mouseenter");var a=$(this).attr("ct:key");$("select").first().val(a).change(),d3.selectAll(".ct-point").classed("emphasis",!1),d3.select(this).classed("emphasis",!0)}))}),d3.selectAll(".ct-point").on("mouseenter",function(){console.log("actually selecting on mouseenter #2");var a=$(this).attr("ct:key");$("select").first().val(a).change(),d3.selectAll(".ct-point").classed("emphasis",!1),d3.select(this).classed("emphasis",!0)}),$("select").on("change",function(){var d=$(this).val(),e=a[d],f=b(e.house_price),g=b(Number(e.income).toFixed(0)),h=b((Number(e.house_price)/3).toFixed(0)),i=b((Number(e.house_price)/5).toFixed(0));$(".house-price").text(f),$(".city-name").text(e.city),$(".ratio").text(e.ratio),$(".median-income").text(g),$(".recommended-income").text(h),$(".mortgage-income").text(i),d3.selectAll(".ct-point").classed("emphasis",!1),d3.select(c[d]).classed("emphasis",!0),$(".city-data").fadeIn(3e3,function(){$(".city-data").show()})})})});