var sortedData = [{"city":"Detroit","state":"MI","house_price":"39000","income":"29526","ratio":1.32},{"city":"Memphis","state":"TN","house_price":"63000","income":"32285","ratio":1.95},{"city":"Cleveland","state":"Ohio","house_price":"51000","income":"25928","ratio":1.97},{"city":"Milwaukee","state":"WI","house_price":"92600","income":"32216","ratio":2.87},{"city":"Columbus","state":"OH","house_price":"111900","income":"37897","ratio":2.95},{"city":"Tulsa","state":"Oklahoma","house_price":"106800","income":"35316","ratio":3.02},{"city":"Jacksonville","state":"FL","house_price":"129800","income":"40316","ratio":3.22},{"city":"Louisville","state":"KY","house_price":"93400","income":"28843","ratio":3.24},{"city":"Omaha","state":"Nebraska","house_price":"137200","income":"40006","ratio":3.43},{"city":"Charlotte","state":"NC","house_price":"163400","income":"46975","ratio":3.48},{"city":"Baltimore","state":"MD","house_price":"106000","income":"30078","ratio":3.52},{"city":"Arlington","state":"TX","house_price":"177800","income":"47622","ratio":3.73},{"city":"Nashville","state":"TN","house_price":"175400","income":"44512.0130806292","ratio":3.94},{"city":"Indianapolis","state":"IN","house_price":"177800","income":"44512.0130806292","ratio":3.99},{"city":"Atlanta","state":"GA","house_price":"139000","income":"34770","ratio":4.0},{"city":"Austin","state":"TX","house_price":"177800","income":"42689","ratio":4.17},{"city":"Raleigh","state":"NC","house_price":"201100","income":"46612","ratio":4.31},{"city":"Chicago","state":"IL","house_price":"167700","income":"38625","ratio":4.34},{"city":"Wichita","state":"KS","house_price":"177800","income":"39939","ratio":4.45},{"city":"Phoenix","state":"AZ","house_price":"185800","income":"41207","ratio":4.51},{"city":"Las Vegas","state":"NV","house_price":"203600","income":"44069","ratio":4.62},{"city":"Albuquerque","state":"NM","house_price":"177800","income":"38272","ratio":4.65},{"city":"Tucson","state":"AZ","house_price":"144700","income":"30981","ratio":4.67},{"city":"Mesa","state":"AZ","house_price":"202200","income":"42817","ratio":4.72},{"city":"Dallas","state":"TX","house_price":"177800","income":"37628","ratio":4.73},{"city":"Kansas City","state":"MO","house_price":"177800","income":"37198","ratio":4.78},{"city":"Fort Worth","state":"TX","house_price":"177800","income":"37074","ratio":4.8},{"city":"Colorado Springs","state":"CO","house_price":"217200","income":"45081","ratio":4.82},{"city":"Houston","state":"TX","house_price":"177800","income":"36616","ratio":4.86},{"city":"San Antonio","state":"TX","house_price":"177800","income":"36214","ratio":4.91},{"city":"Minneapolis","state":"MN","house_price":"202300","income":"37974","ratio":5.33},{"city":"El Paso","state":"TX","house_price":"177800","income":"32124","ratio":5.53},{"city":"Virginia Beach","state":"VA","house_price":"275100","income":"48705","ratio":5.65},{"city":"Fresno","state":"CA","house_price":"183100","income":"32236","ratio":5.68},{"city":"Philadelphia","state":"PA","house_price":"176600","income":"30746","ratio":5.74},{"city":"Sacramento","state":"CA","house_price":"271100","income":"37049","ratio":7.32},{"city":"Portland","state":"OR","house_price":"322700","income":"40146","ratio":8.04},{"city":"Denver","state":"CO","house_price":"331300","income":"39500","ratio":8.39},{"city":"Miami","state":"FL","house_price":"241000","income":"23483","ratio":10.26},{"city":"Boston","state":"MA","house_price":"449000","income":"39629","ratio":11.33},{"city":"San Jose","state":"CA","house_price":"820600","income":"70243","ratio":11.68},{"city":"Seattle","state":"WA","house_price":"535900","income":"45736","ratio":11.72},{"city":"New York","state":"NY","house_price":"479300","income":"38293","ratio":12.52},{"city":"San Diego","state":"CA","house_price":"572700","income":"45733","ratio":12.52},{"city":"Washington","state":"DC","house_price":"505800","income":"40127","ratio":12.6},{"city":"Oakland","state":"CA","house_price":"551400","income":"40055","ratio":13.77},{"city":"Long Beach","state":"CA","house_price":"524400","income":"37270","ratio":14.07},{"city":"Los Angeles","state":"CA","house_price":"568300","income":"36687","ratio":15.49},{"city":"San Francisco","state":"CA","house_price":"1020800","income":"55221","ratio":18.49}];
var labels = [];
var series = [];


$.each(sortedData, function(key, value) {
	labels.push(value.city);
	var income = value.income;
	var ratio = value.ratio;

	series.push({meta: value.city, value: ratio});


  var myOption = $('<option value="'+ key + '">' + value.city + '</option>');
  $('select').append(myOption);

});


// $('#myAffix').affix({
//   offset: {
//     top: function() {
//       var affixTop = $('#myAffix').first().offset().top;
//       // console.log("height " + affixTop);
//       return affixTop;

//     }
//     // ,bottom: function () {
//     //   var first = $('.more-info').outerHeight(true);
//     //   // var second = $('.more-info').outHeight();
//     //   console.log("height " + $('.more-info').outerHeight(true));
//     //   return first;
//     // }
//   }
// }).on('affix.bs.affix', function () { // before affix
//     $(this).width();
// });

// $('.random').affix({
//   offset: {
//     top: function() {
//       var affixTop = $('#myAffix').first().offset().top;
//       // console.log("height " + affixTop);
//       return affixTop;

//     }
//     // ,bottom: function () {
//     //   var first = $('.more-info').outerHeight(true);
//     //   // var second = $('.more-info').outHeight();
//     //   console.log("height " + $('.more-info').outerHeight(true));
//     //   return first;
//     // }
//   }
// }).on('affix.bs.affix', function () { // before affix
//     $(this).width();
// });

var offsetTop = $('#myAffix').first().offset().top;
var offsetBottom = $('.more-info').first().offset().top;

$("#myAffix").affix({
        offset: { 
            top: function() {
              console.log(offsetTop, offsetBottom);
              return offsetTop;
            },
            bottom: function() {
              return 1500;
            }
      }
    });


//add options
// var sortedLabels = labels.sort();
// $.each(sortedLabels, function(key, value) {
//   var myOption = $('<option value="'+ key + '">' + value.city + '</option>');
// })

var data = {labels: labels, series: [series]};


var options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
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
        return index % 4 === 0 ? value : null;
      },
      showGrid: false,
      showLabel: false
    }
  }],
  ['screen and (max-width: 640px)', {
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          },
          showGrid: false
        }
      }]
];
var chart = new Chartist.Line('#cities-chart', data, options, responsiveOptions);
$('document').ready(function() {

  $.each($('.ct-point'), function(k,v) {
    $(v).attr('ct:key', k);
  });

var dataPoints = d3.selectAll('.ct-point')[0];


chart.on('draw', function() {
  var drawnPoints = d3.select('body').selectAll('.ct-point')[0];

  $.each($('.ct-point'), function(k,v) {
    $(v).attr('ct:key', k);
  });

  if (drawnPoints.length === dataPoints.length) {
    // d3.selectAll('.ct-point').on('mouseenter', function() {
    //   d3.selectAll('.ct-point')
    //     .classed('emphasis', false);
    //   d3.select(this).classed('emphasis', true);
    // });

    d3.selectAll('.ct-point').on('mouseenter', function() {
      var key = $(this).attr('ct:key');
      $('select').first().val(key).change();
      d3.selectAll('.ct-point')
        .classed('emphasis', false);
      d3.select(this).classed('emphasis', true);
    });
  }
});

  d3.selectAll('.ct-point').on('mouseenter', function() {
    var key = $(this).attr('ct:key');
    $('select').first().val(key).change();
    d3.selectAll('.ct-point')
      .classed('emphasis', false);
    d3.select(this).classed('emphasis', true);
  });

  $('select').on('change', function() {
    var city = $(this).val();
    var cityData = sortedData[city];
    var housePrice = delimitNumbers(cityData.house_price);
    var medianIncome = delimitNumbers(Number(cityData.income).toFixed(0));
    var recommendedIncome = delimitNumbers((Number(cityData.house_price) / 3).toFixed(0));
    var mortgageIncome = delimitNumbers((Number(cityData.house_price) / 5).toFixed(0));

    $('.house-price').text(housePrice);
    $('.city-name').text(cityData.city);
    $('.ratio').text(cityData.ratio);
    $('.median-income').text(medianIncome);
    $('.recommended-income').text(recommendedIncome);
    $('.mortgage-income').text(mortgageIncome);

    d3.selectAll('.ct-point')
      .classed('emphasis', false);
    d3.select(dataPoints[city]).classed('emphasis', true);

    $('.city-data').fadeIn( 3000, function() {
      $('.city-data').show();
    });

  });

});


function delimitNumbers(str) {
  return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
    return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
  });
}


var historicSeries = [];
var historicLabels = [];

var historicData =
  [{"year":1965,"median_income":44000,"median_price":20000},{"year":1970,"median_income":52000,"median_price":23400},{"year":1975,"median_income":54000,"median_price":39300},{"year":1980,"median_income":56000,"median_price":64600},{"year":1985,"median_income":57000,"median_price":84300},{"year":1990,"median_income":61000,"median_price":122900},{"year":1995,"median_income":61000,"median_price":133900},{"year":2000,"median_income":68000,"median_price":169000},{"year":2005,"median_income":67000,"median_price":240900},{"year":2010,"median_income":64000,"median_price":221800}];
$.each(historicData, function(key, value) {
  historicLabels.push(value.year);
  var income = value.median_income;
  var ratio = value.median_price / value.median_income;
  historicSeries.push(ratio);

});

new Chartist.Line('#chart1', {
  labels: historicLabels,
  series: [historicSeries]
});
