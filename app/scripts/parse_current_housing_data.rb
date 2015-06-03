require 'nokogiri'
require 'open-uri'
require 'json'
require 'geocoder'


# doc = Nokogiri::XML(open("http://www.zillow.com/webservice/GetDemographics.htm?zws-id=X1-ZWz1erkbtbrv2j_76gmj&state=MA&city=Boston"))

places = [{city: "New York", state: "NY"},
		  {city: "Los Angeles", state: "CA"},
		  {city: "Chicago", state: "IL"},
		  {city: "Houston", state: "TX"},
		  {city: "Philadelphia", state: "PA"},
		  {city: "Phoenix", state: "AZ"},
		  {city: "San Antonio", state: "TX"},
		  {city: "San Diego", state: "CA"},
		  {city: "Dallas", state: "TX"},
		  {city: "San Jose", state: "CA"},
		  {city: "Indianapolis", state: "IN"},
		  {city: "Jacksonville", state: "FL"},
		  {city: "San Francisco", state: "CA"},
		  {city: "Austin", state: "TX"},
		  {city: "Columbus", state: "OH"},
		  {city: "Fort Worth", state: "TX"},
		  {city: "Louisville", state: "KY"},
		  {city: "Charlotte", state: "NC"},
		  {city: "Detroit", state: "MI"},
		  {city: "El Paso", state: "TX"},
		  {city: "Memphis", state: "TN"},
		  {city: "Nashville", state: "TN"},
		  {city: "Baltimore", state: "MD"},
		  {city: "Boston", state: "MA"},
		  {city: "Seattle", state: "WA"},
		  {city: "Washington", state: "DC"},
		  {city: "Denver", state: "CO"},
		  {city: "Milwaukee", state: "WI"},
		  {city: "Portland", state: "OR"},
		  {city: "Las Vegas", state: "NV"},
		  {city: "Albuquerque", state: "NM"},
		  {city: "Tucson", state: "AZ"},
		  {city: "Fresno", state: "CA"},
		  {city: "Sacramento", state: "CA"},
		  {city: "Long Beach", state: "CA"},
		  {city: "Kansas City", state: "MO"},
		  {city: "Mesa", state: "AZ"},
		  {city: "Virginia Beach", state: "VA"},
		  {city: "Atlanta", state: "GA"},
		  {city: "Colorado Springs", state: "CO"},
		  {city: "Omaha", state: "Nebraska"},
		  {city: "Raleigh", state: "NC"},
		  {city: "Miami", state: "FL"},
		  {city: "Oakland", state: "CA"},
		  {city: "Minneapolis", state: "MN"},
		  {city: "Tulsa", state: "Oklahoma"},
		  {city: "Cleveland", state: "Ohio"},
		  {city: "Wichita", state: "KS"},
		  {city: "Arlington", state: "TX"}
		]

city_data = [{"city"=>"New York","state"=>"New York","region"=>"Northeast","lat"=>nil, "lng" => nil},
{"city"=>"Los Angeles","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Chicago","state"=>"Illinois","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Houston","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Philadelphia","state"=>"Pennsylvania","region"=>"Northeast","lat"=>nil, "lng" => nil},
{"city"=>"Phoenix","state"=>"Arizona","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"San Antonio","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"San Diego","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Dallas","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"San Jose","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Austin","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Indianapolis","state"=>"Indiana","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Jacksonville","state"=>"Florida","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"San Francisco","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Columbus","state"=>"Ohio","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Charlotte","state"=>"North Carolina","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Fort Worth","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Detroit","state"=>"Michigan","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"El Paso","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Memphis","state"=>"Tennessee","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Seattle","state"=>"Washington","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Denver","state"=>"Colorado","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Washington","state"=>"District of Columbia","region"=>"Northeast","lat"=>nil, "lng" => nil},
{"city"=>"Boston","state"=>"Massachusetts","region"=>"Northeast","lat"=>nil, "lng" => nil},
{"city"=>"Nashville","state"=>"Tennessee","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Baltimore","state"=>"Maryland","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Oklahoma City","state"=>"Oklahoma","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Louisville","state"=>"Kentucky","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Portland","state"=>"Oregon","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Las Vegas","state"=>"Nevada","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Milwaukee","state"=>"Wisconsin","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Albuquerque","state"=>"New Mexico","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Tucson","state"=>"Arizona","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Fresno","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Sacramento","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Long Beach","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Kansas City","state"=>"Missouri","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Mesa","state"=>"Arizona","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Virginia Beach","state"=>"Virginia","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Atlanta","state"=>"Georgia","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Colorado Springs","state"=>"Colorado","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Omaha","state"=>"Nebraska","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Raleigh","state"=>"North Carolina","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Miami","state"=>"Florida","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Oakland","state"=>"California","region"=>"West","lat"=>nil, "lng" => nil},
{"city"=>"Minneapolis","state"=>"Minnesota","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Tulsa","state"=>"Oklahoma","region"=>"South","lat"=>nil, "lng" => nil},
{"city"=>"Cleveland","state"=>"Ohio","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Wichita","state"=>"Kansas","region"=>"Midwest","lat"=>nil, "lng" => nil},
{"city"=>"Arlington","state"=>"Texas","region"=>"South","lat"=>nil, "lng" => nil}]

combined_data = []

city_data.zip(places).each do |datum, place| 
	state = place[:state]
	city = place[:city].gsub(" ", "+")
	url = "http://www.zillow.com/webservice/GetDemographics.htm?zws-id=X1-ZWz1erkbtbrv2j_76gmj&state=#{state}&city=#{city}"
	puts url
	doc = Nokogiri::XML(open(url))

	house_price = doc.at('name:contains("Median Single Family Home Value")').next_sibling.css('value')[0].text.strip
	income = doc.at('name:contains("Median Household Income")').next_sibling.css('value')[0].text.strip
	
	datum["region"] = datum["region"].downcase
	datum["state"] = state
	datum["house_price"] = house_price
	datum["income"] = income

	results = Geocoder.search(datum["city"])
  	location = results[0].data["geometry"]["location"]
  	lat = location['lat']
  	lng = location['lng']

  	datum["lat"]=lat
  	datum["lng"]=lng

  	puts "Datum: #{datum}"

  	sleep(10)
	  
end


File.open('current_housing_data.json', 'w') { |file| file.write(city_data.to_json) }



# File.open('city_data.json', 'w') { |file| file.write(places.to_json) }



# south = []
# midwest = []
# west = []
# northeast = []
# regions = {"south" => [], "midwest" => [], "northeast" => [], "west" => []}
# city_data.each do |datum|
#   region = datum["region"].downcase
#   # puts region.downcase

#   results = Geocoder.search(datum["city"])
#   location = results[0].data["geometry"]["location"]
#   lat = location['lat']
#   lng = location['lng']

#   datum["lat"]=lat
#   datum["lng"]=lng

#   puts "Datum: #{datum}"

#   regions[region] << datum
#   sleep(10)
# end

# puts "Northeast: #{regions["northeast"].length}"
# puts "South: #{regions["south"].length}"
# puts "Midwest: #{regions["midwest"].length}"
# puts "West: #{regions["west"].length}"

# city = "San Francisco"






