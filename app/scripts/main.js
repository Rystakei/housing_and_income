
 $('document').ready(function() {
   $.getJSON('scripts/june_places_sorted_data.json', function(sortedData) {

    var labels = [],
        series = [],
        highlightColor = '#F8F991',
        regions = {northeast: [], west: [], south: [], midwest: []},
        regionMarkers = [];


    createLabelsAndSeries();
    addCitiesToSelectElement();
    initializeMap();
    updateMapMarkers();
    setupMapRegionHighlights();
    addCityNamesToRegions();
    affixMap();
    addChart();
    addCityNameToDataPoints();
    addHighlightOnMouseEnter();
    addChartEventHandlers();


    function createLabelsAndSeries() {
      $.each(sortedData, function(key, value) {
        value["id"]=key;
        labels.push(value.city);
        series.push({meta: value.city, value: value.ratio});
      });
    }

    function addCitiesToSelectElement() {
      var alphabeticData = _.sortBy(sortedData, function(i) {
        return i.city.toLowerCase();
      });

      //sort cities alphabetically and create options for select element
      $.each(alphabeticData, function(key, value) {
        cityOption = $('<option value="'+ value.id + '">' + value.city + '</option>');
        $('select').append(cityOption);
        $('select').select2();
      });
    }

    function initializeMap() {
      $('#map').vectorMap({map: 'us_aea_en',
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
        markers: [{latLng: [40.7127837,-74.0059413]}] //do I need to set this here?
      });

      var usaMap = $('#map').vectorMap('get', 'mapObject');

      $.each(sortedData, function(k,v) {
        var latLng = [v.lat, v.lng],
            name = v.city,
            ratio = v.ratio,
            region = v.region.toLowerCase();

        regionMarkers.push({latLng: latLng, name: name});
        regions[region].push({latLng: latLng, name: name, ratio: ratio});
      });

      usaMap.createMarkers(regionMarkers);
    }

    function addCityNamesToRegions() {
      $.each(regions, function(region,city) {
        var cityRatios = [],
            averageRegionalRatio;

        $.each(city, function(k,v) { cityRatios.push(v.ratio); });

        averageRegionalRatio = (_.reduce(cityRatios, 
                                function(a,b) { return a + b; }, 0) / 
                                cityRatios.length).toFixed(2);

        $('#' + region + ' .fact-ratio').text(averageRegionalRatio);
      });
    }

    function addChartEventHandlers() {
      chart.on('draw', function() {
        var drawnPoints = d3.select('body').selectAll('.ct-point')[0];

        if (drawnPoints.length === sortedData.length) {
          addCityNameToDataPoints();
          addHighlightOnMouseEnter();
        }
      });

      $('select').on('change', function(event) {
        var dataPoints = d3.selectAll(".ct-point")[0],
            city = $(this).val(),
            cityData = sortedData[city],
            housePrice = delimitNumbers(cityData.house_price),
            medianIncome = delimitNumbers(Number(cityData.income).toFixed(0)),
            recommendedIncome = delimitNumbers((Number(cityData.house_price) / 3).toFixed(0)),
            mortgageIncome = delimitNumbers((Number(cityData.house_price) / 5).toFixed(0));

        $('.house-price').text(housePrice);
        $('.city-name').text(cityData.city);
        $('.ratio').text(cityData.ratio);
        $('.median-income').text(medianIncome);
        $('.recommended-income').text(recommendedIncome);
        $('.mortgage-income').text(mortgageIncome);

        highlightDataPoint(dataPoints[city], event.type);

        $('.city-data').fadeIn( 3000, function() {
          $('.city-data').show();
        });
      });
    }

    function highlightRegion(markerOptions, region) {
      var usaMap = $('#map').vectorMap('get', 'mapObject');
      usaMap.removeAllMarkers();
      usaMap.createMarkers(markerOptions);
      $('.fact').removeClass('fact-focus');
      region.addClass('fact-focus');
    }

    function highlightDataPoint(point, eventType) {
      d3.selectAll('.ct-point')
        .classed('emphasis', false);
      d3.select(point).classed('emphasis', true);

      if (eventType === 'mouseenter') {
        var cityName= $(point).attr('ct:key');
        $('select').first().val(cityName).change();
      }
    }

    function addCityNameToDataPoints() {
      $.each($('.ct-point'), function(k,v) {
        $(v).attr('ct:key', k);
      });
    }

    function addHighlightOnMouseEnter() {
      d3.selectAll('.ct-point').on('mouseenter', function() {
        highlightDataPoint(this, d3.event.type);
      });
    }

    function addChart() {
      data = {labels: labels, series: [series]};

      options = {
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


      responsiveOptions = [
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
              showGrid: false,
              showLabel: false
            }
          }
        ]
      ];

      chart = new Chartist.Line('#cities-chart', data, options, responsiveOptions);
    }


    function affixMap() {
      var affix = $('#usa-map-affix'),
          offsetTop = $('#usa-map-affix').first().offset().top,
          offsetBottom = offsetTop + affix.outerHeight() - 700;


      $("#usa-map-affix").affix({
        offset: {
            top: function() {
              return offsetTop;
            },
            bottom: function() {
              return offsetBottom;
            }
          }
      });
    }

    function setupMapRegionHighlights() {
      $('.fact-region').each(function(k,v) {
        var region = $(v),
            regionName = region.attr('id'),
            position = {
                        top: region.offset().top,
                        bottom: region.offset().top + region.outerHeight()
                       };
        
        updateRegionOnScroll(regions[regionName], region);
      });
    }


    function updateMapMarkers() {
      //think the variables need clean-up, or at the very least some renaming
      var dataSection = $('#lowest-ratio').first(),
          greatestSection = $('#greatest-ratio').first(),
          northeastSection = $('#northeast').first(),
          citiesSection = $('#cities').first();

        updateRegionOnScroll({latLng: [42.331427,-83.0457538], name: "Detroit"}, dataSection);
        updateRegionOnScroll({latLng: [37.7749295,-122.4194155], name: "San Francisco"}, greatestSection);
        updateRegionOnScroll(regionMarkers, citiesSection);
    }

    function updateRegionOnScroll(markers, region) {
      var regionSections = {top: region.offset().top,
                            bottom: region.offset().top + region.outerHeight()};

      $(window).scroll(function() {
        var withinRegion = ($(window).scrollTop() >= regionSections.top && 
                            $(window).scrollTop() <= regionSections.bottom);

        if (withinRegion) { highlightRegion(markers, region); }
      });
    }


    function delimitNumbers(str) {
      //maybe take the number/str received and call toFixed(0) in here to avoid repetition?
      return (str + "").replace(/\b(\d+)((\.\d+)*)\b/g, function(a, b, c) {
        return (b.charAt(0) > 0 && !(c || ".").lastIndexOf(".") ? b.replace(/(\d)(?=(\d{3})+$)/g, "$1,") : b) + c;
      });
    }

    //need to move the code below


    //     historicSeries = [];
    //     historicLabels = [];

    //     historicData =
    // [{"year":1965,"median_income":6000,"median_price":20000},{"year":1970,"median_income":9000,"median_price":23400},{"year":1975,"median_income":13000,"median_price":39300},{"year":1980,"median_income":21000,"median_price":64600},{"year":1985,"median_income":27000,"median_price":84300},{"year":1990,"median_income":35000,"median_price":122900},{"year":1995,"median_income":40000,"median_price":133900},{"year":2000,"median_income":50000,"median_price":169000},{"year":2005,"median_income":56000,"median_price":240900},{"year":2010,"median_income":60000,"median_price":221800}];
    // $.each(historicData, function(key, value) {
    //   historicLabels.push(value.year);
    //       income = value.median_income;
    //       ratio = value.median_price / value.median_income;
    //   historicSeries.push(ratio);

    // });

    // new Chartist.Line('#chart1', {
    //   labels: historicLabels,
    //   series: [historicSeries]
    // });


  });

 });
 