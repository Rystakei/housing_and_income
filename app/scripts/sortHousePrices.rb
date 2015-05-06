require 'json'

file = File.read('city_data.json')

data = JSON.parse(file)

puts data.class

data.each do |place| 
	place["ratio"] = (place["house_price"].to_f / place["income"].to_f).round(2)
	puts "ratio #{place["ratio"]}"
end

sorted = data.sort_by { |k| k["ratio"] }

puts sorted

File.open('sorted_city_data.json', 'w') { |file| file.write(sorted.to_json) }
