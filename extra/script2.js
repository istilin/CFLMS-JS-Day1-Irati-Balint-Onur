var bills = [100, 50, 20, 10]

var number = 1230

var result = [0, 0, 0, 0]

console.log(number)

result[0] = Math.floor(number / bills[0])
reminder = number % bills[0]
result[1] = Math.floor(reminder / bills[1])
reminder = reminder % bills[1]
result[2] = Math.floor(reminder / bills[2])
reminder = reminder % bills[2]
result[3] = Math.floor(reminder / bills[3])
reminder = reminder % bills[3]


console.log(result[0] + " bill(s) of 100 Euros, " + result[1] + " bill(s) of 50 Euros, " + result[2] + " bill(s) of 20 Euros and " + result[3] + " bill(s) of 10 Euros." ) 


