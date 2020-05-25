var text = "Hey there, i am a javascript developer, and i live in vienna"
console.log( text.substring(11,12).toUpperCase()+ text.substring(12,38)+ ".")

start = ['apple', 'banana', 'kiwi']
console.log("Start = [\'" + start[0] + "\', \'" + start[1] + "\', \'" + start[2] + "\']")

start.splice(2,0,'orange', 'strawberry')
console.log("Output = [\'" + start[0] + "\', \'" + start[1] + "\', \'" + start[2] + "\', \'" + start[3] + "\', \'" + start[4]+ "\']")