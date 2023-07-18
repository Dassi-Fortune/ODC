// This is a comment
 /*
 this is a multiple-linne comment
 seconnd commen*/
 // variable declararation
 //var, let, const
 // var and let declare variables that can be changed at any time while connst declare variables that cannnot be declared twice
 
 //examples
 /** working on arrays */
 const myArr= [ 23, "hello", null, true, ["yo", 1, 3]]
 console.log(myArr[5])

 var myArray= [23, 45,"hello", null, true, ["yo", 1, 2]];
 console.log(myArr);
 myArr[2] = "bonjour"
 console.log(myArr)

 // myArr.pop()
 // myArr.push ("hello")
 // myArr.shift();
 // myArr.unshift("bonjour")
 var last= myArr.push("bonjour")

 console.log(last)
 console.log(myArr)

 myArr.map((i, j) =>{
    // console.log("index: " + j + ", value: " + i);
    console.log(`index: ${j}, value: ${i}`)
 })