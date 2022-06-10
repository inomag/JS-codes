                                        /*FUNCTION EXPRESSIONS*/
// function add(x,y) {
//     return x+y;
// }
// const subtract = function (x,y) {
//     return x-y;
// }
// const multiply = function (x,y) {
//     return x*y;
// }
// function divide(x,y) {
//     return (x/y)+(x%y)/10;
// }
// const operations = [add, subtract, multiply, divide];
// for(let func of operations){
//     let result = func(100,3);
//     console.log(result);
// }



                                        /*FOR EACH EXAMPLE*/
// const nums = [2,3,5,7,9,8,5,2];
// nums.forEach(function(num) {
//    if(num%2==0){
//     console.log('Even');
//    } 
//    else
//     console.log('Odd');
// }); 
                                        


                                        /*MAP
creates a new array with the results of calling a function for every array element.*/

// const small = ['haha','hehe','hihi','hoho','huhu'];
// const large = small.map(function (element) {
//     let i = small.indexOf(element);
//     return {
//     value: element,
//     position: i
//     }
// })
// console.log(small);
// console.log(large);



                                        /*ARROW FUNCTIONS
An arrow function expression is a compact alternative to a traditional function expression, but is limited and cannot be used in all situations. */

// const square = (x) =>{
//     return x*x;
// }
// const sum = (x,y)=>{
//     return x+y;
// }
// const square1 = n =>n*n; //Arrow function with implicit return
// console.log(square1(25));
// console.log(sum(96,77));



                                        /*FIND FUNCTION
returns the value of the first element in an array that pass a test (provided as a function).*/

// let movies = [
//     "Avatar",
//     "Avengers:Endgame",
//     "Wolf of Wall Street",
//     "The Hangover"
// ];
// const movie = movies.find(movie => movie.includes('End'));
// //Returns the first element
// console.log(movie);



                                        /*FILTER FUNCTION
creates an array filled with all array elements that pass a test (provided as a function).*/

// const nums = [9,8,7,6,5,4,3,2,1];
// const odds = nums.filter(n => {
//     return n%2==1; //Returns true and false
//     //If it is true then n is added to odds
// });
// const smallNum = nums.filter(n => n<5);
// console.log(nums);
// console.log(odds);
// console.log(smallNum);

                    /*EXAMPLE 2*/
// const books = [
//     {
//         title: "Good Omens",
//         authors: ["Terry Pratchett", "Neil Gaiman"],
//         rating: 4.5,
//         genres: ["fiction", "fantasy"]
//     },
//     {
//         title: "Changing My Mind",
//         authors: ["Zadie Smith"],
//         rating: 3.83,
//         genres: ["nonfiction", "essay"]
//     },
//     {
//         title: "Bone: The Complete Edition",
//         authors: ["Jeff Smith"],
//         rating: 4.42,
//         genres: ["fiction", "graphic novel", "fantasy"]
//     },
//     {
//         title: "American Gods",
//         authors: ["Neil Gaiman"],
//         rating: 4.11,
//         genres: ["fiction", "fantasy"]
//     },
//     {
//         title: "A Gentleman in Moscow",
//         authors: ["Amor Towles"],
//         rating: 4.36,
//         genres: ["fiction", "historical fiction"]
//     },
//     {
//         title: "The Name of the Wind",
//         authors: ["Patrick Rothfuss"],
//         rating: 4.54,
//         genres: ["fiction", "fantasy"]
//     },
// ];
// const goodBooks = books.filter(book => book.rating>4.3);
// console.log(goodBooks);

// const query = 'The';
// const results = books.filter(book => {
//     const title = book.title.toLowerCase();
//     return title.includes(query.toLowerCase());
// });
// console.log(results);



                                        /*EVERY & SOME
checks if all (some) elements in an array pass a test (provided as a function).*/

// const words = ['pig', 'dog', 'pag', 'dig', 'log', 'bagg'];
// const all3letters = words.every(word =>{
//     return word.length === 3;
// });
// const lastG = words.every(word =>{
//     const last = word.charAt(word.length-1);
//     return last==='g';
// });
// const middleVow = words.every(word =>{
//     let middle='';
//     if(word.length%2==1){
//         middle = word.charAt((word.length-1)/2);
//     }
//     else{
//         middle = word.charAt(word.length/2-1);
//     }
//     return middle==='a'||middle==='e'||middle==='i'||middle==='o'||middle==='u';
// });
// console.log(all3letters);
// console.log(lastG);
// console.log(middleVow);



                                        /*REDUCE
executes a provided function for each value of the array (from left-to-right). The return value of the function is stored in an accumulator (result/total).*/

// const array = [3,5,7,9,11];
// const reduceVal = array.reduce((total,current) => total*current);
// console.log(reduceVal);

                    /*EXAMPLE 2*/
// let grades = [80,80,97,98,99];
// const max = grades.reduce((current, next) => {
//     if(current>next) return current;
//     return next;
// });
// var i = 1;
// const percent = grades.reduce((total,next) => {
//     i++;
//     return total+next;
// })
// console.log(max);
// console.log(percent/i+'%');



                                        /*DEFAULT PARAMETERS*/
// function multiply(x,y=1){
//     return x*y;
// }
// console.log(multiply(3, 4));
// console.log(multiply(12));
// const greet = (person, greeting = 'Hi')=>{
//     console.log(`${greeting}, ${person}!`);
// }
//DEFAULT PARAMETERS SHOULD BE DECLARED AT THE END IN THE PARANTHESIS



                                        /*SHORTHAND OBJECT PROPERTIES*/
// const getStats = (arr) => {
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);
//     const sum = arr.reduce((sum, r) => sum + r);
//     const avg = sum/arr.length;
//     return{
//         max,
//         min,
//         sum,
//         avg
//     }
// }
// const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// const stats = getStats(reviews);

                    /*EXAMPLE 2*/
// function getCard(){
//     const values = 
//     ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
//     const suits = ['Club', 'Spade', 'Heart', 'Diamond'];
//     const value = pick(values);
//     const suit = pick(suits);
//     return{
//         value,
//         suit
//     };
// }
// function pick(arr) {
//     const id = Math.floor(Math.random()*arr.length);
//     return arr[id];
// }
// const card = getCard();



                                        /*COMPUTED OBJECT PROPERTIES*/
// const role = 'Host';
// const person = 'Jules Holland';
// const role2 = 'Director';
// const person2 = 'James Cameron';
// const team = {
//     [role]: person,
//     [role2]: person2,
// }
// function addProp(obj, k, v){
//     const copy = {...obj};
//     copy[k]=v;
//     return copy;
// }
// const tEAm = addProp(team, 'Actor', 'Tom Cruise');



                                        /*ADDING METHODS TO OBJECT*/
// const math = {
//     add: function(x,y){
//         return x+y;
//     },
//     multiply: function(x,y){
//         return x*y;
//     }
// }
// console.log(math.add(6,9));



                                        /*THIS-KEYWORD
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In an event, this refers to the element that received the event.*/

// function sayHi(){
//     console.log("Hi");
//     console.log(this);
// }
// const greet = function() {
//     console.log(this);
// }

                    /*EXAMPLE 2*/
// const person = {
//     first: 'Pratik',
//     last: 'Gupta',
//     nickName: 'PG',
//     fullName(){
//         return `${this.first} ${this.last} AKA ${this.nickName}`;
//     },
//     printBio(){
//         const fullName = this.fullName();
//         console.log(`${fullName} is a real person!`);
//     }
// }
// const printBio = ()=>{
//     return person.printBio()
// };
                    /*EXAMPLE 3*/
// const annoyer={
//     phrases: ['Literally','Cray Cray',"I Can't even",'Totes!','YOLO',"Can't Stop, Won't Stop"],
//     pickPhrase(){
//        return this.phrases[Math.floor(Math.random()*this.phrases.length)];
//     },
//     start(){
//         this.timerId = setInterval(() => {
//             console.log(this.pickPhrase());
//         }, 1000);
//     },
//     stop(){
//         clearInterval(this.timerId);
//     }
// }



                                        /*----PUTTING IT ALL TOGETHER----*/
// function makeDeck() {
//     const deck = []; 
//     const values = 'A,2,3,4,5,6,7,8,9,10,J,Q,K';
//     const suits = ['Club', 'Spade', 'Heart', 'Diamond'];
//     for(let value of values.split(',')){
//         for(let suit of suits){
//             deck.push({
//                 value,
//                 suit
//             })
//         }
//     }
//     return deck;
// }
// const myDeck = makeDeck();
// function drawCard(deck){
//     return deck.pop();
// }

    //ONE WAY IS TO CREATE A FUNCTION. BUT EVERY TIME WE NEED TO MAKE A DECK WE WILL NEED TO RUN FUNCTION AND STORE IT IN A VARIABLE.
    //ANOTHER WAY IS TO CREATE AN OBJECT
// const myDeck = {
//     deck: [], 
//     values: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
//     suits: ['Club', 'Spade', 'Heart', 'Diamond'],
//     initializeDeck(){
//         const{deck,values,suits}=this;
//         for(let value of values.split(',')){
//             for(let suit of suits){
//                 deck.push({
//                     value,
//                     suit
//                 })
//             }
//         }
//     },
//     drawnCards: [],
//     drawCard(){
//         const card = this.deck.pop();
//         this.drawnCards.push(card);
//         return card;
//     },
//     shuffle(){
//         const{deck}=this;
//         //Loop over array backwards
//         for(let i=deck.length-1;i>0;i--){
//             //pick random element before current element
//             let j= Math.floor(Math.random()*(i+1));
//             //swap with current element
//             [deck[i],deck[j]] = [deck[j],deck[i]];
//         }
//     }
// }



                                        /*EVENT LISTENERS*/
// const button = document.querySelector('#btn');
// const range = document.querySelector('#range');
// button.onclick = function(){
//     alert('You Clicked Me!');
// }
//NOT RECOMMENDED BECAUSE ON ADDING ANOTHER EVENT, THE PREVIOUS EVENT GETS OVERWRITTEN
// button.addEventListener('click', ()=>{
//     alert('You Clicked Me!!');
// });
// button.addEventListener('mouseover',()=>{
//     button.innerText = "Stop Touching";
// });
// button.addEventListener('mouseout',()=>{
//     button.innerText= "Click Me";
// });
// window.addEventListener('scroll',()=>{
//     alert('Stop Scrolling!');
// });
//STOPS WHEN ONCE SCROLLED

// const colors = [
//     'blue',
//     'red',
//     'green',
//     'orange',
//     'yellow',
//     'purple',
//     'indigo',
//     'cyan',
//     'magenta'
// ];
// const printColor = function(){
//     console.log(this.style.backgroundColor);
// }
// const container = document.querySelector('#boxes');
// for(let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color;
//     container.appendChild(box);
//     box.classList.add('box');
//     box.addEventListener('click', printColor)
// }

