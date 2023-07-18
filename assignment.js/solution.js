/*write a funnctionn to cennvert from fahrenheit to celcius*/
function tocelcius(fahrenheit){
    return (5/9) * (fahrenheit-32);

}
result = tocelcius(77);
 console.log("celsius is " + result);

 const cars=["ger", 1, "True"];
 cars[1] = "plane" ;
 console.log(cars.length)


 /* write a funnctionn to generate a random string*/
 function generateRandomString(n){
    const characters= "1324abdcdefhijklmnnopqrssssssAQr56!#ç@*+~é&;lpY7890ABGHTKLP";
    for (let i=0; i<n; i++){
        result = result + characters.charAt(Math.floor(Math.random() * characters.length));
        }
    return result;
 }
result = generateRandomString(100);
 console.log(result);
 // end of assignnment
