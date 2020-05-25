console.log('js runs...')

const city = [[ "Vienna", "is", "a", "nice", "city" ], [ "Vienna", "is", "a", "nice", "city" ], [ "Vienna", "is", "a", "nice", "city" ], [ "Vienna", "is", "a", "nice", "city" ], [ "Vienna", "is", "a", "nice", "city" ] ]

console.log(`${city[0][0]} ${city[1][1]} ${city[2][2]} ${city[3][3]} ${city[4][4]}`)


console.log()

const sentence = `Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$"properties $flow$down;$actions$flow$up".`

const sentenceWithoutDollar = sentence.split('$')
console.log(sentenceWithoutDollar)

console.log(sentenceWithoutDollar.join(' '))
