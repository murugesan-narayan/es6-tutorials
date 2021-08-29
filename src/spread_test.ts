const displayColors = (message, ...colors) => {
    console.log('Args Length: ', arguments.length)
    console.log(message)
    console.log(colors)
    for (const i in colors) {
        console.log(colors[i])
    }
}
const messageB = 'List of Colors:'
const colors = ['GREEN', 'BLUE', 'YELLOW']
//here we use spread oprator to spread the array elements 
//as parameters to the function
displayColors(messageB, ...colors)//args.len = 4