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

//Animated us map
var geodata = [{"city":"New York","state":"New York","region":"Northeast","lat":40.7127837,"lng":-74.0059413},{"city":"Los Angeles","state":"California","region":"West","lat":34.0522342,"lng":-118.2436849},{"city":"Chicago","state":"Illinois","region":"Midwest","lat":41.8781136,"lng":-87.6297982},{"city":"Houston","state":"Texas","region":"South","lat":29.7604267,"lng":-95.3698028},{"city":"Philadelphia","state":"Pennsylvania","region":"Northeast","lat":39.9525839,"lng":-75.1652215},{"city":"Phoenix","state":"Arizona","region":"West","lat":33.4483771,"lng":-112.0740373},{"city":"San Antonio","state":"Texas","region":"South","lat":29.4241219,"lng":-98.49362819999999},{"city":"San Diego","state":"California","region":"West","lat":32.715738,"lng":-117.1610838},{"city":"Dallas","state":"Texas","region":"South","lat":32.7766642,"lng":-96.79698789999999},{"city":"San Jose","state":"California","region":"West","lat":37.3382082,"lng":-121.8863286},{"city":"Austin","state":"Texas","region":"South","lat":30.267153,"lng":-97.7430608},{"city":"Indianapolis","state":"Indiana","region":"Midwest","lat":39.768403,"lng":-86.158068},{"city":"Jacksonville","state":"Florida","region":"South","lat":30.3321838,"lng":-81.65565099999999},{"city":"San Francisco","state":"California","region":"West","lat":37.7749295,"lng":-122.4194155},{"city":"Columbus","state":"Ohio","region":"Midwest","lat":39.9611755,"lng":-82.99879419999999},{"city":"Charlotte","state":"North Carolina","region":"South","lat":35.2270869,"lng":-80.8431267},{"city":"Fort Worth","state":"Texas","region":"South","lat":32.7554883,"lng":-97.3307658},{"city":"Detroit","state":"Michigan","region":"Midwest","lat":42.331427,"lng":-83.0457538},{"city":"El Paso","state":"Texas","region":"South","lat":31.7775757,"lng":-106.4424559},{"city":"Memphis","state":"Tennessee","region":"South","lat":35.1495343,"lng":-90.0489801},{"city":"Seattle","state":"Washington","region":"West","lat":47.6062095,"lng":-122.3320708},{"city":"Denver","state":"Colorado","region":"West","lat":39.7392358,"lng":-104.990251},{"city":"Washington","state":"District of Columbia","region":"Northeast","lat":38.9071923,"lng":-77.0368707},{"city":"Boston","state":"Massachusetts","region":"Northeast","lat":42.3600825,"lng":-71.0588801},{"city":"Nashville","state":"Tennessee","region":"South","lat":36.1626638,"lng":-86.7816016},{"city":"Baltimore","state":"Maryland","region":"South","lat":39.2903848,"lng":-76.6121893},{"city":"Oklahoma City","state":"Oklahoma","region":"South","lat":35.4675602,"lng":-97.5164276},{"city":"Louisville","state":"Kentucky","region":"South","lat":38.2526647,"lng":-85.7584557},{"city":"Portland","state":"Oregon","region":"West","lat":45.5230622,"lng":-122.6764816},{"city":"Las Vegas","state":"Nevada","region":"West","lat":36.1699412,"lng":-115.1398296},{"city":"Milwaukee","state":"Wisconsin","region":"Midwest","lat":43.0389025,"lng":-87.9064736},{"city":"Albuquerque","state":"New Mexico","region":"West","lat":35.0853336,"lng":-106.6055534},{"city":"Tucson","state":"Arizona","region":"West","lat":32.2217429,"lng":-110.926479},{"city":"Fresno","state":"California","region":"West","lat":36.7468422,"lng":-119.7725868},{"city":"Sacramento","state":"California","region":"West","lat":38.5815719,"lng":-121.4943996},{"city":"Long Beach","state":"California","region":"West","lat":33.7700504,"lng":-118.1937395},{"city":"Kansas City","state":"Missouri","region":"Midwest","lat":39.0997265,"lng":-94.5785667},{"city":"Mesa","state":"Arizona","region":"West","lat":33.4151843,"lng":-111.8314724},{"city":"Virginia Beach","state":"Virginia","region":"South","lat":36.8529263,"lng":-75.97798499999999},{"city":"Atlanta","state":"Georgia","region":"South","lat":33.7489954,"lng":-84.3879824},{"city":"Colorado Springs","state":"Colorado","region":"West","lat":38.8338816,"lng":-104.8213634},{"city":"Omaha","state":"Nebraska","region":"Midwest","lat":41.2523634,"lng":-95.99798829999999},{"city":"Raleigh","state":"North Carolina","region":"South","lat":35.7795897,"lng":-78.6381787},{"city":"Miami","state":"Florida","region":"South","lat":25.7616798,"lng":-80.1917902},{"city":"Oakland","state":"California","region":"West","lat":37.8043637,"lng":-122.2711137},{"city":"Minneapolis","state":"Minnesota","region":"Midwest","lat":44.977753,"lng":-93.2650108},{"city":"Tulsa","state":"Oklahoma","region":"South","lat":36.1539816,"lng":-95.99277500000001},{"city":"Cleveland","state":"Ohio","region":"Midwest","lat":41.49932,"lng":-81.6943605},{"city":"Wichita","state":"Kansas","region":"Midwest","lat":37.688889,"lng":-97.336111},{"city":"Arlington","state":"Texas","region":"South","lat":38.8799697,"lng":-77.1067698}];

var regions = {northeast: [], west: [], south: [], midwest: []};
var northeast  = [];
var west = [];
var south = [];
var midwest = [];


northeast = regions["northeast"];


$('document').ready(function() {
  var usaMap = $('#map').vectorMap({map: 'us_aea_en', 
    backgroundColor: "white",
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: '#333'
      }
    },
    markerStyle: {
      initial: {
        fill: 'yellow'
      }
    },
    markers: [{latLng: [40.7127837,-74.0059413]}]
  });  

var regionMarkers = [];

var usaMap = $('#map').vectorMap('get', 'mapObject');
$.each(geodata, function(k,v) {
  regionMarkers.push({latLng: [v.lat, v.lng], name: v.city});
  // regions[v.region.toLowerCase()].push(v);
  regions[v.region.toLowerCase()].push({latLng: [v.lat, v.lng], name: v.city});
});

// usaMap.createMarkers([
//               {latLng: [36.1700,-119.7462], name: 'California'},
//               {latLng: [33.7712,-111.3877], name: 'Arizona'},
//               {latLng: [38.4199,-117.1219], name: 'Nevada'}
//           ]);

usaMap.createMarkers(regionMarkers);

  


  //update markers while scrolling

  var dataSection = $('#lowest-ratio').first();
  var greatestSection = $('#greatest-ratio').first();
  var northeastSection = $('#northeast').first(),
      citiesSection = $('#cities').first();

  var lowest = {top: dataSection.offset().top,
  bottom: dataSection.offset().top + dataSection.outerHeight()};
    var greatest = {top: greatestSection.offset().top,
  bottom: greatestSection.offset().top + greatestSection.outerHeight()};
      var northeast = {top: northeastSection.offset().top,
  bottom: northeastSection.offset().top + northeastSection.outerHeight()};
  var cities = {top: citiesSection.offset().top,
  bottom: citiesSection.offset().top + citiesSection.outerHeight()};


    $('.fact-region').each(function(k,v) {
      var region = $(v);
      var regionName = region.attr('id');
      var position = {top: region.offset().top,
  bottom: region.offset().top + region.outerHeight()};

      $(window).scroll(function() {
        if ($(window).scrollTop() >= position.top && $(window).scrollTop() <= position.bottom) {
          usaMap.removeAllMarkers();
          usaMap.createMarkers(regions[regionName]);
        }
      });

    });


  $(window).scroll(function() {
    // console.log(cities.top, $(window).scrollTop());
    if ($(window).scrollTop() >= cities.top && $(window).scrollTop() <= cities.bottom) {
      console.log("Boo");
      usaMap.removeAllMarkers();
      usaMap.createMarkers(regionMarkers);
    }

    if ($(window).scrollTop() >= lowest.top && $(window).scrollTop() <= lowest.bottom) {
      usaMap.removeAllMarkers();
      usaMap.createMarkers({latLng: [42.331427,-83.0457538], name: "Detroit"});
    }
    if ($(window).scrollTop() >= greatest.top && $(window).scrollTop() <= greatest.bottom) {
      usaMap.removeAllMarkers();
      usaMap.createMarkers({latLng: [37.7749295,-122.4194155], name: "San Francisco"});
    }

    if ($(window).scrollTop() >= northeast.top && $(window).scrollTop() <= northeast.bottom) {
      usaMap.removeAllMarkers();
      usaMap.createMarkers(regions.northeast);
    }

  });

});


//end animated us map

//Affixing the map

var offsetTop = $('#myAffix').first().offset().top;
var offsetBottom = $('.more-info').first().offset().top;

$("#myAffix").affix({
        offset: {
            top: function() {
              return offsetTop;
            },
            bottom: function() {
              return 1650;
            }
      }
    });

//end affixing



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
[{"year":1965,"median_income":6000,"median_price":20000},{"year":1970,"median_income":9000,"median_price":23400},{"year":1975,"median_income":13000,"median_price":39300},{"year":1980,"median_income":21000,"median_price":64600},{"year":1985,"median_income":27000,"median_price":84300},{"year":1990,"median_income":35000,"median_price":122900},{"year":1995,"median_income":40000,"median_price":133900},{"year":2000,"median_income":50000,"median_price":169000},{"year":2005,"median_income":56000,"median_price":240900},{"year":2010,"median_income":60000,"median_price":221800}];
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
