/**
 * Arguments lengths represents passed paramenters.
 * Variable args ('...colors') parameter: each passed values are consided as separate argument.
 * But '...' parameter holds all its values into one single array.
 * @param message 
 * @param colors 
 */
const displayColors = (message, ...colors) => {
    console.log('Args Length: ', arguments.length)
    console.log(message)
    console.log(colors)
    for (const i in colors) {
        console.log(colors[i])
    }
}
const messageA = 'List of Colors:'
displayColors(messageA, 'RED')//args.len = 2
displayColors(messageA, 'GREEN', 'BLUE')//args.len = 3
displayColors(messageA, 'GREEN', 'BLUE', 'YELLOW')//args.len = 4

