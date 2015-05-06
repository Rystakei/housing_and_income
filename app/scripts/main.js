var times = function(n) {
  return Array.apply(null, new Array(n));
};

var data = times(52).map(Math.random).reduce(function(data, rnd, index) {
  data.labels.push(index + 1);
  data.series.forEach(function(series) {
    series.push(Math.random() * 100)
  });

  return data;
}, {
  labels: [],
  series: times(4).map(function() { return new Array() })
});


var sortedData = [{"city":"Detroit","state":"MI","house_price":"39000","income":"29526","ratio":1.32},{"city":"Memphis","state":"TN","house_price":"63000","income":"32285","ratio":1.95},{"city":"Cleveland","state":"Ohio","house_price":"51000","income":"25928","ratio":1.97},{"city":"Milwaukee","state":"WI","house_price":"92600","income":"32216","ratio":2.87},{"city":"Columbus","state":"OH","house_price":"111900","income":"37897","ratio":2.95},{"city":"Tulsa","state":"Oklahoma","house_price":"106800","income":"35316","ratio":3.02},{"city":"Jacksonville","state":"FL","house_price":"129800","income":"40316","ratio":3.22},{"city":"Louisville","state":"KY","house_price":"93400","income":"28843","ratio":3.24},{"city":"Omaha","state":"Nebraska","house_price":"137200","income":"40006","ratio":3.43},{"city":"Charlotte","state":"NC","house_price":"163400","income":"46975","ratio":3.48},{"city":"Baltimore","state":"MD","house_price":"106000","income":"30078","ratio":3.52},{"city":"Arlington","state":"TX","house_price":"177800","income":"47622","ratio":3.73},{"city":"Nashville","state":"TN","house_price":"175400","income":"44512.0130806292","ratio":3.94},{"city":"Indianapolis","state":"IN","house_price":"177800","income":"44512.0130806292","ratio":3.99},{"city":"Atlanta","state":"GA","house_price":"139000","income":"34770","ratio":4.0},{"city":"Austin","state":"TX","house_price":"177800","income":"42689","ratio":4.17},{"city":"Raleigh","state":"NC","house_price":"201100","income":"46612","ratio":4.31},{"city":"Chicago","state":"IL","house_price":"167700","income":"38625","ratio":4.34},{"city":"Wichita","state":"KS","house_price":"177800","income":"39939","ratio":4.45},{"city":"Phoenix","state":"AZ","house_price":"185800","income":"41207","ratio":4.51},{"city":"Las Vegas","state":"NV","house_price":"203600","income":"44069","ratio":4.62},{"city":"Albuquerque","state":"NM","house_price":"177800","income":"38272","ratio":4.65},{"city":"Tucson","state":"AZ","house_price":"144700","income":"30981","ratio":4.67},{"city":"Mesa","state":"AZ","house_price":"202200","income":"42817","ratio":4.72},{"city":"Dallas","state":"TX","house_price":"177800","income":"37628","ratio":4.73},{"city":"Kansas City","state":"MO","house_price":"177800","income":"37198","ratio":4.78},{"city":"Fort Worth","state":"TX","house_price":"177800","income":"37074","ratio":4.8},{"city":"Colorado Springs","state":"CO","house_price":"217200","income":"45081","ratio":4.82},{"city":"Houston","state":"TX","house_price":"177800","income":"36616","ratio":4.86},{"city":"San Antonio","state":"TX","house_price":"177800","income":"36214","ratio":4.91},{"city":"Minneapolis","state":"MN","house_price":"202300","income":"37974","ratio":5.33},{"city":"El Paso","state":"TX","house_price":"177800","income":"32124","ratio":5.53},{"city":"Virginia Beach","state":"VA","house_price":"275100","income":"48705","ratio":5.65},{"city":"Fresno","state":"CA","house_price":"183100","income":"32236","ratio":5.68},{"city":"Philadelphia","state":"PA","house_price":"176600","income":"30746","ratio":5.74},{"city":"Sacramento","state":"CA","house_price":"271100","income":"37049","ratio":7.32},{"city":"Portland","state":"OR","house_price":"322700","income":"40146","ratio":8.04},{"city":"Denver","state":"CO","house_price":"331300","income":"39500","ratio":8.39},{"city":"Miami","state":"FL","house_price":"241000","income":"23483","ratio":10.26},{"city":"Boston","state":"MA","house_price":"449000","income":"39629","ratio":11.33},{"city":"San Jose","state":"CA","house_price":"820600","income":"70243","ratio":11.68},{"city":"Seattle","state":"WA","house_price":"535900","income":"45736","ratio":11.72},{"city":"New York","state":"NY","house_price":"479300","income":"38293","ratio":12.52},{"city":"San Diego","state":"CA","house_price":"572700","income":"45733","ratio":12.52},{"city":"Washington","state":"DC","house_price":"505800","income":"40127","ratio":12.6},{"city":"Oakland","state":"CA","house_price":"551400","income":"40055","ratio":13.77},{"city":"Long Beach","state":"CA","house_price":"524400","income":"37270","ratio":14.07},{"city":"Los Angeles","state":"CA","house_price":"568300","income":"36687","ratio":15.49},{"city":"San Francisco","state":"CA","house_price":"1020800","income":"55221","ratio":18.49}];
// var city_data = {"name":"income","count":25,"frequency":"Monthly","version":1,"newdata":true,"lastrunstatus":"success","thisversionstatus":"success","nextrun":"Sun May 31 2015 02:20:46 GMT+0000 (UTC)","thisversionrun":"Fri May 01 2015 02:20:46 GMT+0000 (UTC)","results":{"collection1":[{"city":"San Jose","income":"76,593"},{"city":"San Francisco","income":"69,894"},{"city":"District of Columbia","income":"63,124"},{"city":"Seattle","income":"61,037"},{"city":"San Diego","income":"60, 797"},{"city":"Charlotte","income":"50, 177"},{"city":"Austin","income":"49,987"},{"city":"New York City","income":"49,461"},{"city":"Boston","income":"49,081"},{"city":"Fort Worth","income":"47,399"},{"city":"Denver","income":"47,371"},{"city":"Los Angeles","income":"46,148"},{"city":"Jacksonville","income":"44,802"},{"city":"Phoenix","income":"43,960"},{"city":"Chicago","income":"43,628"},{"city":"Houston","income":"42,877"},{"city":"San Antonio","income":"42,613"},{"city":"El Paso","income":"40,702"},{"city":"Dallas","income":"40,585"},{"city":"Columbus","income":"40,463"},{"city":"Indianapolis","income":"39,015"},{"city":"Baltimore","income":"38,721"},{"city":"Memphis","income":"34,960"},{"city":"Philadelphia","income":"34,207"},{"city":"Detroit","income":"25,193"}]}};
// console.log(city_data.results.collection1);
// var results = city_data.results.collection1;
var labels = [];
var series = [];
// var incomes = [34207, 49081, 49987];

$.each(sortedData, function(key, value) {
	// console.log("v", value);
	labels.push(value.city);
	// var income = parseInt(value.income.replace(/\s/g, "").replace(/,/g, ""));
	var income = value.income;
	var ratio = value.ratio;

	series.push({name: value.city, meta: "Houses in " + value.city + " are " + ratio + " times the median income", value: ratio});
});

var data = {labels: labels, series: [series]};

var zillowAPI = "http://www.zillow.com/webservice/GetDemographics.htm?zws-id=X1-ZWz1erkbtbrv2j_76gmj&state=WA&city=Seattle";
$.get( zillowAPI, function( data ) {
	// console.log(data);
});

var options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      // return index % 13 === 0 ? 'W' + value : null;
      return value;
    }
  },
  plugins: [
    Chartist.plugins.tooltip({currency: undefined})
  ]
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 4 === 0 ? 'W' + value : null;
      }
    }
  }]
];
$('document').ready(function() {
  $('body').trigger('click');

});

new Chartist.Line('.ct-chart', data, options, responsiveOptions);

// new Chartist.Line('.ct-chart-small', data, options, responsiveOptions);




var $chart = $('.ct-chart');


$('select').on('change', function() {
  $('.city-data').fadeIn( 3000, function() {
  $('.city-data').show();
  });
});

