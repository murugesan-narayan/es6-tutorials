//type inference
var i = 1;
var data = 'dads';

//typed vars
var i_ts: number = 2
var data_ts: string = 'data'

console.log(i_ts, data_ts)

//any type declaration
var info: any = 'test'
info = 12
info = true
info = {test: 'test info'}

console.log(info)
