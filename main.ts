// quetion:2
// // // let personName="mariam shahzad";
// // // console.log('hello',personName,"would you like to learn typescript");
// // // question:3
// // // let personName="mariam shahzad";
// // // console.log(personName.toLowerCase());
// // // console.log(personName.toUpperCase())//
// // // question:4
// // // console.log("Audrey hypburn said",'"word impossible itself says I am possible"');
// // // question:5
// // // let famousperson="Audrey hypburn";
// // // let message="said,'word impossible itself says I am possible'";
// // // console.log(famousperson,message);
// // // question:6
// // // let whitespace="\n\t Mariam Shahzad\t\n"
// // // console.log(whitespace);
// // // let withoutwhitespace=whitespace.trim();
// // // console.log(withoutwhitespace);
// // // question:7,8
// // // console.log(3+5);
// // // console.log(12-4);
// // // console.log(4*2);
// // // console.log(40/5);
// // // question:9
// // // let favouriteNumber=7;
// // // console.log("My favourite number is" , favouriteNumber);
// // // question:10
// // // let whitespace="\n\t Mariam Shahzad\t\n";//\n is used for new line and\t is used for whitespacce 
// // // console.log(whitespace);
// // // let withoutwhitespace=whitespace.trim();
// // // console.log(withoutwhitespace);
// // // question:11
// // // let friendName=["Saima","Shahida","Aisha","Rabisha","Wasia"]
// // // console.log(friendName[0])
// // // console.log(friendName[1])
// // // console.log(friendName[2])
// // // console.log(friendName[3])
// // // console.log(friendName[4])
// // // question:12
// // // let friendName=["Saima","Shahida","Aisha","Rabisha","Wasia"]
// // // let message="you are my best friend"
// // // console.log("Hello",friendName[0],message)
// // // console.log("Hello",friendName[1],message)
// // // console.log("Hello",friendName[2],message)
// // // console.log("Hello",friendName[3], message)
// // // console.log("Hello",friendName[4],message)
// // // question:13
// // // let transportation :string [] = ["Mercidies","Ferrari","Lambergini"]; 
// // // transportation.map((items) => console.log(`I would like to own a ${items}`));
// // // question:14
// // // let guestArr: string [] = ["zunair","AbdulMuid","Tanzeel"];
// // // guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));
// // // question:15
// // //  part#1
// // // let guestArr = ["Samia","Fatima","Noor","Umar"];
// // // let canNotAttend = "samia"
// // // console.log(  canNotAttend    +   "can not attend the dinner")
// // // part#2
// // // let newGuest = "Hamza"
// // // guestArr [guestArr.indexOf(canNotAttend)] = newGuest;
// // // console.log(guestArr) 
// // // part#3
// // // guestArr.map((items) => console.log(`Dear ${items} you are invited to the dinner `)); 
// // // question:16

import { features } from "process";

// // // part:1
// // // let guestArr : string[] = ["Wasia","Maheen","Anus","Haseeb"];
// // // let canNotAttend : string = "Anus"
// // // let newGuest :string = "Hanzala"
// // // guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// // // console.log(guestArr)

// // // part:2 
// // // guestArr.map((items) =>
// // // console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
// // // );

// // // // part:3 Begining
// // // let guestBeg : string ="Arham"
// // // guestArr.unshift(guestBeg);
// // // console.log(guestArr)

// // // // part:4 middle
// // // let middleGuest : string ="Rohan"
// // // let middleIndex = guestArr.length/4
// // // guestArr.splice(middleIndex,0,middleGuest)
// // // console.log(guestArr)

// // // // part:4 append
// // // guestArr.push("Hania")
// // // console.log(guestArr)
// // // // part:5
// // // guestArr.map((items) =>
// // // console.log(`Dear ${items},you are invited in the more people list on dinner`));

// // // // question:17
// // // // part#1
// // // // Initial list of guests
// // // let guests: string[] = ["Raees","Zeenat","Naseem","Ayub","najma"];
// // // // Informig that only two people can be invited
// // // console.log("Due to limited Space,only two people can be invited for dinner.");
// // // // part#2
// // // // Removing guests until only two names remain
// // // while (guests.length > 2) {
// // //  const removedGuest = guests.pop();
// // //    console.log(`Sorry, ${removedGuest},you're no longer invited to dinner.`);
// // // }
// // //   // part#3
// // // //printing invitations  to the remaining two guests
// // //  guests.forEach((guest) =>{ 
// // // console.log(`Dear ${guest},you're still invited to dinner.`);
// // // });
// // // // part#4
// // // let guestArr: string[] = ["Raees","Zeenat"];
// // // guestArr.pop();
// // // guestArr.pop();
// // // console.log("Final guest list:", guestArr);

// // //question:18
// // //store alocations in Array
// // //let placeTovist: string[] = ["Pakistan","Palastine","Turkey","Oman","Saudiarab"];

// // //print the array in its original order
// // //console.log("original order:", placeTovist);

// // //print the array in alphabaticalorder without modifying the actual list
// // //console.log("Alphabetical order:", [...placeTovist].sort());

// // //show that the array is still in its original order
// // //console.log("original order after sorting:", placeTovist);

// // //print the array in reverse alphabatical order without changing the order of the original list
// // //console.log("Reverse alphabetical order:", [...placeTovist].sort().reverse());

// // // show that the array is still in its original order
// // //console.log("original order after reverse sorting:",placeTovist);

// // //Reverse the order of the list
// // //placeTovist.reverse();
// // //console.log("Reversed order:",placeTovist);

// // //Reverse the order of the list again to get back to the original order 
// // // placeTovist.reverse();
// // //console.log("Back to original order:",placeTovist);

// // //sort the array in alphabetical order 
// // // placeTovist.sort();
// // // console.log("sorted in alphabetical order:",placeTovist);

// // // //sort the array in reverse alphabetical order 
// // // placeTovist.sort((a, b) => b.localeCompare(a));
// // // console.log("Sorted in reverse alphabetical order:",placeTovist);

// // //question:19
// // // let invitations : string [] = ["Raees","Zeenat"]
// // // let count_invitations : number = invitations.length
// // // console.log(`$(count_invitations)  people will come to the dinner`)

// // //question:20
// // //think of something you could store in a array.for example, you could make a list 
// // //of mountain, river, countries, cities, languages,or anything else you'd like .
// // //Write a program that create  a listcontaining these items.

// // // let country: string [] = ["Pakistan","India","Newyork","Japan","china"];
// // // console.log("List of country:");
// // //console.log(country);

// // //question:21
// // //think of somethig you could store in a Typescript object.Write aprogram
// // //that creates objects containing these items.

// // // let person:{name: string, fname: string , age: number} = {name:"Mariam",fname:"female", age: 40}
// // // console.log(person)

// // //question:22
// // //International Error:If you haven't received anarry index error in one of your 
// // //programs yet, tryto makeone happen. Change an index in one of your programs
// // //produce an index error .Make sure you correct the error before closing the program.

// // // const days : string [] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","saturday"];
// // //console.log(days{7});
// // // console.log(days[6])

// // //question:23
// // let car = "subaru";
// // console.log("is car == 'subaru'? | predict True")
// // console.log(car == 'subaru')

// // console.log("is car != 'Honda city'? |predict true")
// // console.log(car != 'Honda city')

// // console.log("is car == 'subaru'? | predict false")
// // console.log(car == 'subaru')

// // console.log("is car == 'SUBARU'? | predict false")
// // console.log(car == 'SUBARU')

// // console.log("is car.length == 3?|predict false")
// // console.log(car.length == 3)

// // console.log("is car.length != 12?|predict true")
// // console.log(car.length != 12)

// // console.log("is 10 > 45 ?|predict false")
// // console.log(10 > 45 )

// // console.log("is 3 <= 2 ?|predict false")
// // console.log(3 <= 2)

// // console.log("is 72 >= 83 ?|predict false")
// // console.log(72 >= 83)

// // console.log("is car == 'subaru' && car.length == 6? predict true")
// // console.log(car == 'subaru' && car.length == 6)

// // question:24
// let name_1 : string = "Mariam"
// let name_2 : string = "Mariam Shahzad"
// let name_3 : string = "Mariam Shahzad Khan"

// // if (name_1 == name_3){
//     // console.log("names are equal")
// // } else{
//     // console.log("names are not equal")
// // }

//if ('name_1 != name_2'){
//   console.log("names are  equal")
//}

//  if ('name_1 != name_3'){
    // console.log("names are  equal")
//  }

//  let age_1 : number =17
//  let age_2 : number =21

 //if(age_1 ==17) {
    // console .log("eligible for vote")
 //}

//  if (age_1 != 21){
    //  console.log("eligible for vote in older category")
//   }

// if (age_1 <= age_2 ){
    // console.log("younger")
// }
// if (age_2 >= age_1){
    // console.log("older")
// }

// if(age_1 == 17 && age_2 == 21){
    // console.log("person is eligible  for vote")
// }

// if(age_1 == 17 || age_2 != 21){
    // console.log("person is eligible not for vote")
// }

 // let country : string [] = ["pakistan","India","paris","turkey"]
 //if (country.includes("paris")){
   //  console.log("paris is in country list")
//}

// if (!country.includes ("america")){
    // console.log("america is not include in an Array")
// }

//question:25
// let alien_color = "green" 
// if (alien_color == "green")
// console.log("you earn 5 points")

// let alien_color : string = "red"
// if (alien_color == "green")
//  console.log("no output")

//question:26
// let alien_color = "green" 
// if (alien_color == "green"){
// console.log("player just earned 5 points for shooting the alien")
// }else{
//   console.log("player just earned 10 points")
// }

// let alien_color = "red" 
// if (alien_color == "green"){
    // console.log("player just earned 5 points for shooting the alien")
// }else{
    // console.log("player just earned 10 points")
// }

//question:27
// let alien_color : string = "green"

// if (alien_color == "green"){
    // console.log("5 points")
//  } else if (alien_color == "yellow") {
    // console.log("10 points")
// } else {
    // console.log("15 points")
// }

// let alien_color : string = "yellow"
// if (alien_color == "green"){
    // console.log("5 points")
// } else if (alien_color == "yellow") {
    // console.log("10 points")
// } else {
    // console.log("15 points")
// }

// let alien_color : string = "red"
// if (alien_color == "green"){
    // console.log("5 points")
// } else if (alien_color == "yellow") {
    // console.log("10 points")
// } else {
    // console.log("15 points")
// }

//question:28  ...........age .... 2,4,13,20,65,older
// let age :number = 18

// if (age < 2){
    // console.log ("you are a baby")
// } else if (age < 4) {
    // console.log ("you are a toddler")
// } else if (age < 13) {
    // console.log ("you are a kid")
// } else if (age < 20) {
    // console.log ("you are a teenager")
// } else if (age < 65) {
    // console.log ("you are a adult") 
// } else {
    // console.log("you are older")
// }

//question:29    ......... you really like banana
// let favourite_fruits : string  [] = ["kivi","orange","apple","strawberry","mango"] 

// if (favourite_fruits.includes("kivi")) {
//     console.log("kivi")
// }

// if (favourite_fruits.includes("peach")) {
//     console.log("you really like banana")
// }    

// if (favourite_fruits.includes("orange")) {
//     console.log("orange")
// }

// if (favourite_fruits.includes("berry")) {
//     console.log("you really like banana")
// }

// if (favourite_fruits.includes("apple")) {
//     console.log("apple")
// }

//question:30
// let userNames : string [] = ["Admin","Faisal","Hamzah","Asharib","Mehak"]

//  userNames.forEach(username => {
    // if (username === "Admin") {
        // console.log("Hello",username," would you like to see a status report?")
    // } else {
        // console.log("Hello",username, "thank you for logging in again.");
    // }
    // })

    //question:31
   // let userNames : string [] = ["Admin","Faisal","Hamzah","Asharib","Mehak"];
// 
    //  if(userNames.length === 0){
        // console.log("we need to find some users"); 

    // }else{
        // userNames = [];
        // console.log("all users has been removed" , userNames.length);

    //   } 

    //question:32
// let currentUsers : string [] =  ["Admin","Samreen","Maheen","Samiya","Aamir"];
// let newUsers : string [] = ["Admin","Samreen","Sana","Beenish","Samiya"];

// for (let new_users of newUsers) {
  //  const lowercase_new_users = new_users.toLowerCase();
//
    // if(currentUsers.map(user => user.toLowerCase()).includes(lowercase_new_users)){
        // console.log(`the username ${new_users}is not available`);
// 
//    }else{
    // console.log(`the username ${new_users} is available`);
    // }
// }
// question:33........ordinal ending
// let number : number [] =[1,2,3,4,5,6,7,8,9]
// 
// for(let  i =0 ;i < number.length;i++) {
    // const numbers = number[i];
    // let ordinalEnding :string;
// 
// if(numbers === 1) {
    // ordinalEnding ="st";
    // 
// }else if (numbers === 2) {
    // ordinalEnding ="nd";
// 
// }else if(numbers === 3) {
    //    ordinalEnding = "rd";
// }else{
    // ordinalEnding ="th";

    // console.log(`${numbers}${ordinalEnding}`)
// }

//question:34
// let pizzas : string[]= ["Pepperoni","Italian","BBQ chicken"];

// for(let i =0 ; i<pizzas.length;i++) {

    // console.log(`I like ${pizzas[i]} pizza`);
// }
// console.log("I really love pizza!");

//question:35
// let animal :string[]= ["lion","rabbit","cow"];

// for(let i = 0 ;i<animal.length ;i++){
//     console.log(`A ${animal[i]} would make a great pet`);
// }
// console.log("Any of these animals would make a great pet!");

//quesiton:36

// function makeShirt(size: string, text: string):void{
    // console.log(`/n you order a ${size} shirt that says ${text}`)
// } 
// makeShirt(`large`,'"i love typescript"');
// makeShirt(`medium`,'"i need a big shirt"');


// //quesiton:37
// function makeShirt(size: string = "large", text: string ="I love typescript"): void {
//     console.log(`you have order a ${size}, shirt that says ${text}`)
// }

// makeShirt();
//  makeShirt('medium')

// different message
//  makeShirt(`small`,`I need a big shirt to wear`)

//question:38
// function describe_city(city: string, country: string =`Pakistan`):void{
        // console.log(`${city} is in ${country} `)
// }

// describe_city(`Karachi`) //default sentence
// describe_city(`Farance`,`Europe`)
// describe_city(`Lahore`,`Punjab`)

//question:39
// function citycountry(city:string,country: string): string {
//     return`${city}, ${country}`
// }

// let c1 = citycountry(`Lahore` ,`Pakistan`)
// let c2 = citycountry(`Tokyo` ,`Japan`)
// let c3 = citycountry(`Paris`,`France`)

// console.log(c1) 
// console.log(c2)
// console.log(c3)

//question: 40

// function makeAlbum (artist:string, title:string):{artist :string , title :string} {
//     const dictionaries = {
//             artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//             title: title.charAt(0).toUpperCase() + title.slice(1)
//     };
//     return dictionaries;
// } 
    
// let album = makeAlbum("salar" ,"light")
// console.log(album)

//  album = makeAlbum("rais" ,"red wave")
// console.log(album)

 //album = makeAlbum("ammar" ,"seenbreez")
//console.log(album)

//question:41
// let magician : string[] =['Harry Potter','Hermione Granger','Ron weasley','Albus Dumbledore'];

// function show_magicians(magicians:string[]){
// 
    // magicians.forEach(element => {
        // console.log(element);
    // });
// }
// show_magicians(magician);

// quesion:42

// let magician : string[] =['Harry Potter','Hermione Granger','Ron weasley','Albus Dumbledore'];

// function make_great (magicianArry:string[] ){

//     for(let i=0; i<magicianArry.length;i++){

//          magician[i] = 'the Great '+magicianArry[i]
//     }
// }
// function show_magicians(magicians:string[]){

//     magicians.forEach(element => {

//         console.log(element);
//     });
// }

// make_great(magician);

// show_magicians(magician);

 //question:43

// let magician : string[] =['Harry Potter','Hermione Granger','Ron weasley','Albus Dumbledore'];

// function copyArry(arr:string[]){
    //  return [...arr]

// }

// function make_great (magicianArry:string[] ){

    // for(let i=0; i<magicianArry.length;i++){

        //  magicianArry[i] = 'the Great '+ magicianArry[i]
    // }
// }
// function show_magicians(magicians:string[]){

    // magicians.forEach(element => {

        // console.log(element);
    // });
// }
// const copyMagicianArry = copyArry(magician)

// make_great(copyMagicianArry);

// console.log('\n\nThis is my original array:');
// show_magicians(magician);

// console.log('\n\nThis is my modified copy of the array');
// show_magicians(copyMagicianArry);

//question:44

// function makeSandwich (item: string[]){
    // console.log('Making your sandwich with:');

    // item.forEach(element => console.log("- " + element) );
    // console.log('Enjoy your Sandwich ! ');
    // }

    // makeSandwich(['Ham','Cheese','lettuce']);
    // makeSandwich(['Turkey','Bacon']);
    // makeSandwich(['Peanut butter','Jelly']);

    //question:45
    // function storeCarInfo(manufacturer: string, modelName:string, ...extraOption: { [key : string ]:any } [] ) : object {

        // const carInfo ={
            // manufacturer,
            // modelName,
            // ...Object.assign({}, ...extraOption)
        // }

        // return carInfo;
    // };


    //  let answer = storeCarInfo('Honda','Civic', {color:'black'},{features: ['Navigation', 'Power window']})

    // console.log(answer);


    
    //completed//45 Assignment// Allah thanks ....!

    