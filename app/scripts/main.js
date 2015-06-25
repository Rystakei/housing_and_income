
 $.getJSON('scripts/june_places_sorted_data.json', function(sortedData) {

  var labels = [];
  var series = [];
  var highlightColor = '#F8F991';


  $.each(sortedData, function(key, value) {
    value["id"]=key;
    labels.push(value.city);
    var income = value.income;
    var ratio = value.ratio;

    series.push({meta: value.city, value: ratio});

  });

  //sort cities alphabetically and create options for select element

  var alphabeticData = _.sortBy(sortedData, function(i) {
    return i.city.toLowerCase();
  });

  $.each(alphabeticData, function(key, value){
    var myOption = $('<option value="'+ value.id + '">' + value.city + '</option>');
    $('select').append(myOption);
    $('select').select2(); 
  });

  //Animated us map

  var regions = {northeast: [], west: [], south: [], midwest: []};

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
        fill: highlightColor
      }
    },
    markers: [{latLng: [40.7127837,-74.0059413]}]
  });  

  var regionMarkers = [];

  var usaMap = $('#map').vectorMap('get', 'mapObject');
  $.each(sortedData, function(k,v) {
    regionMarkers.push({latLng: [v.lat, v.lng], name: v.city});
    regions[v.region.toLowerCase()].push({latLng: [v.lat, v.lng], name: v.city});
  });

  usaMap.createMarkers(regionMarkers);


    



    var dataSection = $('#lowest-ratio').first();
    var greatestSection = $('#greatest-ratio').first();
    var northeastSection = $('#northeast').first(),
        citiesSection = $('#cities').first();

    //update markers while scrolling
    var lowest = {top: dataSection.offset().top,
      bottom: dataSection.offset().top + dataSection.outerHeight()};
    var greatest = {top: greatestSection.offset().top,
      bottom: greatestSection.offset().top + greatestSection.outerHeight()};
    var northeast = {top: northeastSection.offset().top,
      bottom: northeastSection.offset().top + northeastSection.outerHeight()};
    var cities = {top: citiesSection.offset().top,
      bottom: citiesSection.offset().top + citiesSection.outerHeight()};


    var highlightRegion = function(markerOptions, region) {
      usaMap.removeAllMarkers();
      usaMap.createMarkers(markerOptions);
      $('.fact').removeClass('fact-focus');
      region.addClass('fact-focus');
  }


      //add markers for geographical region
      $('.fact-region').each(function(k,v) {
        var region = $(v);
        var regionName = region.attr('id');
        var position = {top: region.offset().top,
          bottom: region.offset().top + region.outerHeight()};

        $(window).scroll(function() {
          if ($(window).scrollTop() >= position.top && $(window).scrollTop() <= position.bottom) {
            highlightRegion(regions[regionName], region);
          }
        });

      });



    $(window).scroll(function() {
      if ($(window).scrollTop() >= cities.top && $(window).scrollTop() <= cities.bottom) {
        highlightRegion(regionMarkers, citiesSection);
      }

      if ($(window).scrollTop() >= lowest.top && $(window).scrollTop() <= lowest.bottom) {
        highlightRegion({latLng: [42.331427,-83.0457538], name: "Detroit"}, dataSection);
      }
      if ($(window).scrollTop() >= greatest.top && $(window).scrollTop() <= greatest.bottom) {
        highlightRegion({latLng: [37.7749295,-122.4194155], name: "San Francisco"}, greatestSection);
      }

    });




  //end animated us map

  //Affixing the map
  var affix = $('#myAffix');
  var offsetTop = $('#myAffix').first().offset().top,
      offsetBottom = offsetTop + affix.outerHeight() - 700;


  $("#myAffix").affix({
          offset: {
              top: function() {
                return offsetTop;
              },
              bottom: function() {
                console.log("returning", offsetTop, offsetBottom);
                return offsetBottom;
              }
        }
      });

  //end affixing



  //charts
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
    console.log("ready!!");

    $.each($('.ct-point'), function(k,v) {
      $(v).attr('ct:key', k);
    });

  var dataPoints = d3.selectAll('.ct-point')[0];


  chart.on('draw', function() {
    console.log("drawing...");
    var drawnPoints = d3.select('body').selectAll('.ct-point')[0];

    $.each($('.ct-point'), function(k,v) {
      $(v).attr('ct:key', k);
    });

    console.log("drawnPoints.length", drawnPoints.length, "dataPoints.length", dataPoints.length);
    if (drawnPoints.length === dataPoints.length) {
      console.log("selecting with d3..");
      d3.selectAll('.ct-point').on('mouseenter', function() {
        console.log("actually selecting on mouseenter");
        var key = $(this).attr('ct:key');
        $('select').first().val(key).change();
        d3.selectAll('.ct-point')
          .classed('emphasis', false);
        d3.select(this).classed('emphasis', true);
      });
    }
  });

    d3.selectAll('.ct-point').on('mouseenter', function() {
      console.log("actually selecting on mouseenter #2");

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

  //need to move the code below


  // var historicSeries = [];
  // var historicLabels = [];

  // var historicData =
  // [{"year":1965,"median_income":6000,"median_price":20000},{"year":1970,"median_income":9000,"median_price":23400},{"year":1975,"median_income":13000,"median_price":39300},{"year":1980,"median_income":21000,"median_price":64600},{"year":1985,"median_income":27000,"median_price":84300},{"year":1990,"median_income":35000,"median_price":122900},{"year":1995,"median_income":40000,"median_price":133900},{"year":2000,"median_income":50000,"median_price":169000},{"year":2005,"median_income":56000,"median_price":240900},{"year":2010,"median_income":60000,"median_price":221800}];
  // $.each(historicData, function(key, value) {
  //   historicLabels.push(value.year);
  //   var income = value.median_income;
  //   var ratio = value.median_price / value.median_income;
  //   historicSeries.push(ratio);

  // });

  // new Chartist.Line('#chart1', {
  //   labels: historicLabels,
  //   series: [historicSeries]
  // });


});

