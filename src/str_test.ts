let user = 'Swami'

let userDesc = user + ' is a Hindu Monk.'
console.log(userDesc)

// we can avoid + by `(back quotes)
userDesc = `${user} is a Hindu Monk.`
console.log(userDesc)

// we can use single quotes or double quotes inside
// we can also use it as multi line string
userDesc = `${user} is a Hindu Monk.
He is famous all over the world,
for his speach in Chigago.
His stared the speach with 'Brothers and Systers'.
His birth name is "Narendranath Datta".`
console.log(userDesc)