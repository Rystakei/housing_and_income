require 'nokogiri'
require 'open-uri'
require 'json'

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

places.each do |place| 
	state = place[:state]
	city = place[:city].gsub(" ", "+")
	url = "http://www.zillow.com/webservice/GetDemographics.htm?zws-id=X1-ZWz1erkbtbrv2j_76gmj&state=#{state}&city=#{city}"
	puts url
	doc = Nokogiri::XML(open(url))

	apt_price = doc.at('name:contains("Median Single Family Home Value")').next_sibling.css('value')[0].text.strip
	income = doc.at('name:contains("Median Household Income")').next_sibling.css('value')[0].text.strip

	place["apt_price"] = apt_price
	place["income"] = income
	puts "Median Single Family Home", apt_price
	puts "Median Household Income", income
	puts place
end



File.open('city_data.json', 'w') { |file| file.write(places.to_json) }





