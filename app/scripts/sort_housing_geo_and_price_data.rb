require 'nokogiri'
require 'geocoder'
require 'open-uri'
require 'json'

# doc = Nokogiri::XML(open("http://www.zillow.com/webservice/GetDemographics.htm?zws-id=X1-ZWz1erkbtbrv2j_76gmj&state=MA&city=Boston"))

places = 
	[
		{"city"=>"New York","state"=>"NY","region"=>"Northeast","lat"=>nil, "lng" => nil},
		{"city"=>"Los Angeles","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Chicago","state"=>"IL","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Houston","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Philadelphia","state"=>"PA","region"=>"Northeast","lat"=>nil, "lng" => nil},
		{"city"=>"Phoenix","state"=>"AZ","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"San Antonio","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"San Diego","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Dallas","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"San Jose","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Austin","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Indianapolis","state"=>"IN","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Jacksonville","state"=>"FL","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"San Francisco","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Columbus","state"=>"OH","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Charlotte","state"=>"NC","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Fort Worth","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Detroit","state"=>"MI","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"El Paso","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Memphis","state"=>"TN","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Seattle","state"=>"WA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Denver","state"=>"CO","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"WA","state"=>"DC","region"=>"Northeast","lat"=>nil, "lng" => nil},
		{"city"=>"Boston","state"=>"MA","region"=>"Northeast","lat"=>nil, "lng" => nil},
		{"city"=>"Nashville","state"=>"TN","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Baltimore","state"=>"MD","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Oklahoma City","state"=>"OK","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Louisville","state"=>"KY","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Portland","state"=>"OR","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Las Vegas","state"=>"NV","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Milwaukee","state"=>"WI","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Albuquerque","state"=>"NM","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Tucson","state"=>"AZ","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Fresno","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Sacramento","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Long Beach","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Kansas City","state"=>"MO","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Mesa","state"=>"AZ","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"VA Beach","state"=>"VA","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Atlanta","state"=>"GA","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Colorado Springs","state"=>"CO","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Omaha","state"=>"NE","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Raleigh","state"=>"NC","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Miami","state"=>"FL","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Oakland","state"=>"CA","region"=>"West","lat"=>nil, "lng" => nil},
		{"city"=>"Minneapolis","state"=>"MN","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Tulsa","state"=>"OK","region"=>"South","lat"=>nil, "lng" => nil},
		{"city"=>"Cleveland","state"=>"OH","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Wichita","state"=>"KS","region"=>"Midwest","lat"=>nil, "lng" => nil},
		{"city"=>"Arlington","state"=>"TX","region"=>"South","lat"=>nil, "lng" => nil}
	]

places.each do |place| 
	puts place
	state = place["state"]
	city = place["city"].gsub(" ", "+")
	url = "http://www.zillow.com/webservice/GetDemographics.htm?zws-id=X1-ZWz1erkbtbrv2j_76gmj&state=#{state}&city=#{city}"
	puts url
	doc = Nokogiri::XML(open(url))

	house_price = doc.at('name:contains("Median Single Family Home Value")').next_sibling.css('value')[0].text.strip
	income = doc.at('name:contains("Median Household Income")').next_sibling.css('value')[0].text.strip

	place["house_price"] = house_price
	place["income"] = income
	puts "Median Single Family Home", house_price
	puts "Median Household Income", income
	puts place
end


#Add Geographic Data

south = []
midwest = []
west = []
northeast = []

regions = {"south" => [], "midwest" => [], "northeast" => [], "west" => []}
places.each do |datum|
  region = datum["region"].downcase
  # puts region.downcase

  results = Geocoder.search(datum["city"])
  location = results[0].data["geometry"]["location"]
  lat = location['lat']
  lng = location['lng']

  datum["lat"]=lat
  datum["lng"]=lng

  puts "Datum: #{datum}"

  regions[region] << datum
  sleep(10)
end

puts "Northeast: #{regions["northeast"].length}"
puts "South: #{regions["south"].length}"
puts "Midwest: #{regions["midwest"].length}"
puts "West: #{regions["west"].length}"

city = "San Francisco"

#Sort Data by Ratio

places.each do |place| 
	place["ratio"] = (place["house_price"].to_f / place["income"].to_f).round(2)
	puts "ratio #{place["ratio"]}"
end

sorted_data = places.sort_by { |k| k["ratio"] }

puts sorted_data


#Write json file for data
File.open('app/scripts/june_places_data.json', 'w') { |file| file.write(places.to_json) }
File.open('app/scripts/june_places_sorted_data.json', 'w') { |file| file.write(sorted_data.to_json) }






