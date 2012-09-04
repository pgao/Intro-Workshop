This will briefly explain what the two helper files provided do. Please do not fret if you don't understand the jargon, or what is being said below. We will go over everything in great detail at the workshop. 

video.js - This file (when imported) will look for a video tag in the html with an id="v", it will then insert webcam video into that tag.

complicated.js - This file (when imported) will look for an array of length 4 with the name vidData in your javascript code. 
vidData is an array that corresponds to the brightness, red, green & blue values used to scale the original video stream.
It will then create a copy of the original video stream with the corresponding scale (as given by vidData) .


