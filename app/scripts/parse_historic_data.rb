require 'json'


year = 1967

data = []

stop_year = 2012

while year <= 2012
	data << {"year" => year, "income" => 42934}
	year += 1
end

# puts data

price_data = [{"Period"=> 1963,"Median"=>" $18,000"," Average"=>" $19,300"},
{"Period"=> 1964,"Median"=>" $18,900"," Average"=>" $20,500"},
{"Period"=> 1965,"Median"=>" $20,000"," Average"=>" $21,500"},
{"Period"=> 1966,"Median"=>" $21,400"," Average"=>" $23,300"},
{"Period"=> 1967,"Median"=>" $22,700"," Average"=>" $24,600"},
{"Period"=> 1968,"Median"=>" $24,700"," Average"=>" $26,600"},
{"Period"=> 1969,"Median"=>" $25,600"," Average"=>" $27,900"},
{"Period"=> 1970,"Median"=>" $23,400"," Average"=>" $26,600"},
{"Period"=> 1971,"Median"=>" $25,200"," Average"=>" $28,300"},
{"Period"=> 1972,"Median"=>" $27,600"," Average"=>" $30,500"},
{"Period"=> 1973,"Median"=>" $32,500"," Average"=>" $35,500"},
{"Period"=> 1974,"Median"=>" $35,900"," Average"=>" $38,900"},
{"Period"=> 1975,"Median"=>" $39,300"," Average"=>" $42,600"},
{"Period"=> 1976,"Median"=>" $44,200"," Average"=>" $48,000"},
{"Period"=> 1977,"Median"=>" $48,800"," Average"=>" $54,200"},
{"Period"=> 1978,"Median"=>" $55,700"," Average"=>" $62,500"},
{"Period"=> 1979,"Median"=>" $62,900"," Average"=>" $71,800"},
{"Period"=> 1980,"Median"=>" $64,600"," Average"=>" $76,400"},
{"Period"=> 1981,"Median"=>" $68,900"," Average"=>" $83,000"},
{"Period"=> 1982,"Median"=>" $69,300"," Average"=>" $83,900"},
{"Period"=> 1983,"Median"=>" $75,300"," Average"=>" $89,800"},
{"Period"=> 1984,"Median"=>" $79,900"," Average"=>" $97,600"},
{"Period"=> 1985,"Median"=>" $84,300"," Average"=>" $100,800"},
{"Period"=> 1986,"Median"=>" $92,000"," Average"=>" $111,900"},
{"Period"=> 1987,"Median"=>" $104,500"," Average"=>" $127,200"},
{"Period"=> 1988,"Median"=>" $112,500"," Average"=>" $138,300"},
{"Period"=> 1989,"Median"=>" $120,000"," Average"=>" $148,800"},
{"Period"=> 1990,"Median"=>" $122,900"," Average"=>" $149,800"},
{"Period"=> 1991,"Median"=>" $120,000"," Average"=>" $147,200"},
{"Period"=> 1992,"Median"=>" $121,500"," Average"=>" $144,100"},
{"Period"=> 1993,"Median"=>" $126,500"," Average"=>" $147,700"},
{"Period"=> 1994,"Median"=>" $130,000"," Average"=>" $154,500"},
{"Period"=> 1995,"Median"=>" $133,900"," Average"=>" $158,700"},
{"Period"=> 1996,"Median"=>" $140,000"," Average"=>" $166,400"},
{"Period"=> 1997,"Median"=>" $146,000"," Average"=>" $176,200"},
{"Period"=> 1998,"Median"=>" $152,500"," Average"=>" $181,900"},
{"Period"=> 1999,"Median"=>" $161,000"," Average"=>" $195,600"},
{"Period"=> 2000,"Median"=>" $169,000"," Average"=>" $207,000"},
{"Period"=> 2001,"Median"=>" $175,200"," Average"=>" $213,200"},
{"Period"=> 2002,"Median"=>" $187,600"," Average"=>" $228,700"},
{"Period"=> 2003,"Median"=>" $195,000"," Average"=>" $246,300"},
{"Period"=> 2004,"Median"=>" $221,000"," Average"=>" $274,500"},
{"Period"=> 2005,"Median"=>" $240,900"," Average"=>" $297,000"},
{"Period"=> 2006,"Median"=>" $246,500"," Average"=>" $305,900"},
{"Period"=> 2007,"Median"=>" $247,900"," Average"=>" $313,600"},
{"Period"=> 2008,"Median"=>" $232,100"," Average"=>" $292,600"},
{"Period"=> 2009,"Median"=>" $216,700"," Average"=>" $270,900"},
{"Period"=> 2010,"Median"=>" $221,800"," Average"=>" $272,900"},
{"Period"=> 2011,"Median"=>" $227,200"," Average"=>" $267,900"},
{"Period"=> 2012,"Median"=>" $245,200"," Average"=>" $292,200"},
{"Period"=> 2013,"Median"=>" $268,900"," Average"=>" $324,500"},
{"Period"=> 2014,"Median"=>" $282,800"," Average"=>" $345,800"}]

income_data = [
{"Age and year"=>"2013 (38)","Number\n (thous.)"=>81.217,"Current Median Income"=>63.815,"2013 Median Income"=>63.815},
{"Age and year"=>"2012","Number\n (thous.)"=>80.944,"Current Median Income"=>62.241,"2013 Median Income"=>63.145},
{"Age and year"=>"2011","Number\n (thous.)"=>80.529,"Current Median Income"=>60.974,"2013 Median Income"=>63.152},
{"Age and year"=>"2010 (37)","Number\n (thous.)"=>79.559,"Current Median Income"=>60.236,"2013 Median Income"=>64.356},
{"Age and year"=>"2009 (36)","Number\n (thous.)"=>78.867,"Current Median Income"=>60.088,"2013 Median Income"=>65.257},
{"Age and year"=>"2008","Number\n (thous.)"=>78.874,"Current Median Income"=>61.521,"2013 Median Income"=>66.560},
{"Age and year"=>"2007","Number\n (thous.)"=>77.908,"Current Median Income"=>61.355,"2013 Median Income"=>68.931},
{"Age and year"=>"2006","Number\n (thous.)"=>78.454,"Current Median Income"=>58.407,"2013 Median Income"=>67.481},
{"Age and year"=>"2005","Number\n (thous.)"=>77.418,"Current Median Income"=>56.194,"2013 Median Income"=>67.053},
{"Age and year"=>"2004 (35)","Number\n (thous.)"=>76.866,"Current Median Income"=>54.061,"2013 Median Income"=>66.670},
{"Age and year"=>"2003","Number\n (thous.)"=>76.232,"Current Median Income"=>52.680,"2013 Median Income"=>66.723},
{"Age and year"=>"2002","Number\n (thous.)"=>75.616,"Current Median Income"=>51.680,"2013 Median Income"=>66.918},
{"Age and year"=>"2001","Number\n (thous.)"=>74.340,"Current Median Income"=>51.407,"2013 Median Income"=>67.640},
{"Age and year"=>"2000 (30)","Number\n (thous.)"=>73.778,"Current Median Income"=>50.732,"2013 Median Income"=>68.626},
{"Age and year"=>"1999 (29)","Number\n (thous.)"=>73.206,"Current Median Income"=>48.831,"2013 Median Income"=>68.268},
{"Age and year"=>"1998","Number\n (thous.)"=>71.551,"Current Median Income"=>46.737,"2013 Median Income"=>66.703},
{"Age and year"=>"1997","Number\n (thous.)"=>70.884,"Current Median Income"=>44.568,"2013 Median Income"=>64.495},
{"Age and year"=>"1996","Number\n (thous.)"=>70.241,"Current Median Income"=>42.300,"2013 Median Income"=>62.536},
{"Age and year"=>"1995 (25)","Number\n (thous.)"=>69.597,"Current Median Income"=>40.611,"2013 Median Income"=>61.637},
{"Age and year"=>"1994 (24)","Number\n (thous.)"=>69.313,"Current Median Income"=>38.782,"2013 Median Income"=>60.279},
{"Age and year"=>"1993 (23)","Number\n (thous.)"=>68.506,"Current Median Income"=>36.959,"2013 Median Income"=>58.671},
{"Age and year"=>"1992 (22)","Number\n (thous.)"=>68.216,"Current Median Income"=>36.573,"2013 Median Income"=>59.494},
{"Age and year"=>"1991","Number\n (thous.)"=>67.173,"Current Median Income"=>35.939,"2013 Median Income"=>59.945},
{"Age and year"=>"1990","Number\n (thous.)"=>66.322,"Current Median Income"=>35.353,"2013 Median Income"=>61.082},
{"Age and year"=>"1989","Number\n (thous.)"=>66.090,"Current Median Income"=>34.213,"2013 Median Income"=>62.059},
{"Age and year"=>"1988","Number\n (thous.)"=>65.837,"Current Median Income"=>32.191,"2013 Median Income"=>60.910},
{"Age and year"=>"1987 (21)","Number\n (thous.)"=>65.204,"Current Median Income"=>30.970,"2013 Median Income"=>60.750},
{"Age and year"=>"1986","Number\n (thous.)"=>64.491,"Current Median Income"=>29.458,"2013 Median Income"=>59.737},
{"Age and year"=>"1985 (20)","Number\n (thous.)"=>63.558,"Current Median Income"=>27.735,"2013 Median Income"=>57.261},
{"Age and year"=>"1984 (19)","Number\n (thous.)"=>62.706,"Current Median Income"=>26.433,"2013 Median Income"=>56.447},
{"Age and year"=>"1983","Number\n (thous.)"=>61.997,"Current Median Income"=>24.580,"2013 Median Income"=>54.638},
{"Age and year"=>"1982","Number\n (thous.)"=>61.393,"Current Median Income"=>23.433,"2013 Median Income"=>54.312},
{"Age and year"=>"1981","Number\n (thous.)"=>61.019,"Current Median Income"=>22.388,"2013 Median Income"=>55.021},
{"Age and year"=>"1980","Number\n (thous.)"=>60.309,"Current Median Income"=>21.023,"2013 Median Income"=>56.585},
{"Age and year"=>"1979 (18)","Number\n (thous.)"=>59.550,"Current Median Income"=>19.587,"2013 Median Income"=>58.573},
{"Age and year"=>"1978","Number\n (thous.)"=>57.804,"Current Median Income"=>17.640,"2013 Median Income"=>57.803},
{"Age and year"=>"1977","Number\n (thous.)"=>57.215,"Current Median Income"=>16.009,"2013 Median Income"=>56.056},
{"Age and year"=>"1976 (17)","Number\n (thous.)"=>56.710,"Current Median Income"=>14.958,"2013 Median Income"=>55.682},
{"Age and year"=>"1975 (16)","Number\n (thous.)"=>56.245,"Current Median Income"=>13.719,"2013 Median Income"=>54.008},
{"Age and year"=>"1974 (16)(15)","Number\n (thous.)"=>55.698,"Current Median Income"=>12.902,"2013 Median Income"=>54.966},
{"Age and year"=>"1973","Number\n (thous.)"=>55.053,"Current Median Income"=>12.051,"2013 Median Income"=>56.475},
{"Age and year"=>"1972 (14)","Number\n (thous.)"=>54.373,"Current Median Income"=>11.116,"2013 Median Income"=>55.353},
{"Age and year"=>"1971 (13)","Number\n (thous.)"=>53.296,"Current Median Income"=>10.285,"2013 Median Income"=>52.751},
{"Age and year"=>"1970","Number\n (thous.)"=>52.227,"Current Median Income"=>9.867,"2013 Median Income"=>52.825},
{"Age and year"=>"1969","Number\n (thous.)"=>51.586,"Current Median Income"=>9.433,"2013 Median Income"=>52.989},
{"Age and year"=>"1968","Number\n (thous.)"=>50.823,"Current Median Income"=>8.632,"2013 Median Income"=>50.652},
{"Age and year"=>"1967 (12)","Number\n (thous.)"=>50.111,"Current Median Income"=>7.933,"2013 Median Income"=>48.376},
{"Age and year"=>"1966 (11)","Number\n (thous.)"=>49.214,"Current Median Income"=>7.532,"2013 Median Income"=>47.366},
{"Age and year"=>"1965 (10)","Number\n (thous.)"=>48.509,"Current Median Income"=>6.957,"2013 Median Income"=>44.990},
{"Age and year"=>"1964","Number\n (thous.)"=>47.956,"Current Median Income"=>6.569,"2013 Median Income"=>43.133},
{"Age and year"=>"1963","Number\n (thous.)"=>47.540,"Current Median Income"=>6.249,"2013 Median Income"=>41.591},
# {"Age and year"=>"1962 (9)","Number\n (thous.)"=>47.059,"Current Median Income"=>5.956,"2013 Median Income"=>40.188},
# {"Age and year"=>"1961 (8)","Number\n (thous.)"=>46.418,"Current Median Income"=>5.735,"2013 Median Income"=>39.083},
# {"Age and year"=>"1960","Number\n (thous.)"=>45.539,"Current Median Income"=>5.620,"2013 Median Income"=>38.684},
# {"Age and year"=>"1959","Number\n (thous.)"=>45.111,"Current Median Income"=>5.417,"2013 Median Income"=>37.897},
# {"Age and year"=>"1958","Number\n (thous.)"=>44.232,"Current Median Income"=>5.087,"2013 Median Income"=>35.882},
# {"Age and year"=>"1957","Number\n (thous.)"=>43.696,"Current Median Income"=>4.966,"2013 Median Income"=>35.993},
# {"Age and year"=>"1956","Number\n (thous.)"=>43.497,"Current Median Income"=>4.780,"2013 Median Income"=>35.782},
# {"Age and year"=>"1955","Number\n (thous.)"=>42.889,"Current Median Income"=>4.418,"2013 Median Income"=>33.587},
# {"Age and year"=>"1954","Number\n (thous.)"=>41.951,"Current Median Income"=>4.167,"2013 Median Income"=>31.538},
# {"Age and year"=>"1953","Number\n (thous.)"=>41.202,"Current Median Income"=>4.242,"2013 Median Income"=>32.393},
# {"Age and year"=>"1952","Number\n (thous.)"=>40.832,"Current Median Income"=>3.890,"2013 Median Income"=>29.905},
# {"Age and year"=>"1951","Number\n (thous.)"=>40.578,"Current Median Income"=>3.709,"2013 Median Income"=>29.035},
# {"Age and year"=>"1950","Number\n (thous.)"=>39.929,"Current Median Income"=>3.319,"2013 Median Income"=>28.035},
# {"Age and year"=>"1949 (6)","Number\n (thous.)"=>39.303,"Current Median Income"=>3.107,"2013 Median Income"=>26.573},
# {"Age and year"=>"1948","Number\n (thous.)"=>38.624,"Current Median Income"=>3.187,"2013 Median Income"=>26.920},
# {"Age and year"=>"1947 (5)","Number\n (thous.)"=>37.237,"Current Median Income"=>3.031,"2013 Median Income"=>27.651}
]

income_data.reverse!


income_and_price_data = []

income_data.zip(price_data) do |income, price|
	year = income["Age and year"][0..3].to_i
	if (year % 5 == 0)
		median_price = price["Median"].gsub(",","")
		median_price.slice!(0,2)
		median_price = median_price.to_i
		median_income = income["Current Median Income"].to_i * 1000
		year = {:year =>year, :median_income => median_income, :median_price => median_price}
		puts year
		income_and_price_data << year
	end
end


File.open('historic_data.json', 'w') { |file| file.write(income_and_price_data.to_json) }


