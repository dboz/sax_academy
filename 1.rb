require "rubygems"

file = File.open("sax_timeline.txt")

out = File.open("out.txt", 'w')

file.each do |row|
	r = row.gsub "\n", "" 
	r = r.gsub '"', '\"'
	r = "\"" + r + "\","
	r = r + "\n"
	print r.length.to_s + "\n"
	out.write(r) if r.length > 4
end
