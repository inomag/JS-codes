const body = document.querySelector('body');
const h1 = document.querySelector('h1');



                                        /*CALLBACKS
A function passed as an argument to another function*/

// setTimeout(() => {
//     body.style.backgroundColor = 'teal';
//     setTimeout(() => {
//         body.style.backgroundColor = 'blue';
//         setTimeout(() => {
//             body.style.backgroundColor = 'pink';
//             setTimeout(() => {
//                 body.style.backgroundColor = 'orange';
//                 setTimeout(() => {
//                     body.style.backgroundColor = 'yellow';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);
                    /*-----EXAMPLE 2-----*/
// const colors = ['teal','blue','pink','orange','yellow'];
// let i =0;
// const changeBG = (element, color, successCall, failCall)=>{
//     if(i>2){
//         failCall();
//     }
//     else{
//         setTimeout(() => {
//             element.style.backgroundColor = color;
//             successCall();
//         }, 1000);        
//     }
// };
                    //CALLBACK WITHOUT FAILCALL
// changeBG(body,colors[i],1000,()=>{
//     i++;
//     changeBG(body, colors[i],1000,()=>{
//         i++;
//         changeBG(body,colors[i],1000,()=>{
//             i++;
//             changeBG(body,colors[i],1000,()=>{
//                 i++;
//                 changeBG(body,colors[i],1000);
//             });
//         });
//     });
// });

                    //ABOVE CALLBACK WITH FAILCALL
// changeBG(body,colors[i],()=>{
//     i++;
//     changeBG(body,colors[i],()=>{
//         i++;
//         changeBG(body,colors[i],()=>{
//             i++;
//             changeBG(body,colors[i],()=>{
//                 i++;
//                 changeBG(body,colors[i],()=>{},()=>{
//                     alert('HiHi');
//                 });
//             },()=>{
//                 i=0;
//                 alert('errrr');
//             });
//         },()=>{
//             i=0;
//             alert('errr');
//         });
//     },()=>{
//         i=0;
//         alert('err');
//     });
// },
// ()=>{
//     i=0;
//     alert('er');
// });



                                        /*PROMISE
The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.*/

// const x= new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const random = Math.random();
//         if(random>0.5)
//             resolve();
//         else
//             reject(); 
//     }, 5000);
// });
// x.then(()=>{
//     console.log('You kept the promise !');
// }).catch(()=>{
//     console.log('UUUUUUUU');
// });
                    /*EXAMPLE 2*/
// const promise = (random)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(random>0.5)
//                 resolve({
//                     status: 'online',
//                     error: 'NA'
//                 });
//             else
//                 reject({
//                     status: 'offline',
//                     error: 404
//                 }); 
//         }, 3000);
//     });
// }
// promise(Math.random())
//     .then((res)=>{
//         console.log(`Status: ${res.status} Error: ${res.error}`);
//     })
//     .catch((rej)=>{
//         console.log(`Status: ${rej.status} Error: ${rej.error}`);
//     });
                    /*EXAMPLE 3*/
// const fakeRequest = (url) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            const pages = {
//                '/users':[
//                    {id: 1, username: 'Bilbo'},
//                    {id: 5, username: 'Esmerelda'}
//                 ],
//                '/users/1':{
//                     id: 1,
//                     username:'Bilbo',
//                     upvotes: 360,
//                     city: 'Lisbon',
//                     topPostId: 454321
//                 },
//                 '/users/5':{
//                     id: 5,
//                     username: 'Esmerelda',
//                     upvotes: 571,
//                     city: 'Honolulu'
//                 },
//                 '/posts/454321':{
//                     id: 454321,
//                     title: 'Ladies & Gentleman, may I introduce my pet'
//                 },
//                 '/about' : 'This is about page'
//            };
//            const data = pages[url];
//            if(data){
//                resolve({status: 200, data});
//            }
//            else{
//                reject({status: 404});
//            }
//         }, 1000);
//     });
// };
// fakeRequest('/users')
// .then((res)=>{
//     const id = res.data[0].id;
//     fakeRequest(`/users/${id}`)
//     .then((res)=>{
//         const postID = res.data.topPostId;
//         fakeRequest(`/posts/${postID}`)
//         .then((res)=>{
//             console.log(res);
//         })
//         .catch((res)=>{
//             console.log(`ERROR: ${res.status}`);
//         });
//     });
// });

                    //ABOVE NESTED REQUEST CAN BE ALSO WRITTEN AS BELOW
// fakeRequest('/users')
// .then((res)=>{
//     const id = res.data[0].id;
//     return fakeRequest(`/users/${id}`);  
// })
// .then((res)=>{
//     const postID = res.data.topPostId;
//     return fakeRequest(`/posts/${postID}`);   
// })
// .then((res)=>{
//     console.log(res);
// })
// .catch((res)=>{
//     console.log(`ERROR: ${res.status}`);
// });



                                        /*REFRACTORING THE BACKGROUND COLOR CHANGE USING PROMISES*/
// const colors = ['teal','blue','pink','orange','yellow'];
// let i =0;

// const changeBG = (i)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const color = colors[i];
//             if(i<=colors.length){
//                 resolve({
//                     color: color,
//                     error: 'NA'
//                 });
//             }
//             else{
//                 reject({
//                     error:404
//                 });
//             }
//         }, 1000);
//     });
// }
// changeBG(i)
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .then((res)=>{
//         body.style.backgroundColor=res.color;
//         console.log(`Error: ${res.error}`);
//         i++;
//         return changeBG(i);
//     })
//     .catch((res)=>{
//         console.log(`Error: ${res.error}`);
//         i=0;
//     });



                                        /*ASYNC KEYWORD
Async function returns a promise which can later resolved or rejected*/

// async function oddeven(num) {
//     if(num%2==0){
//         return 'EVEN NUMBER';
//     }
//     else{
//         throw 'ODD NUMBER';
//     }
// }                     
// oddeven(Math.floor(Math.random()*10))
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log(res);
//     });
                    /*EXAMPLE 2*/
// const login = async(username, password)=>{
//     if(!username || !password) throw 'Missing Credentials';
//     if(password==='password') return 'Welcome';
//     throw 'Invalid Password';
// }
// login('pratik','password')
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((err)=>{
//         console.log(err);
// });



                                        /*AWAIT KEYWORD
The await operator is used to wait for completion of a promise.*/

// const changeBG = (color,delay)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(color){
//                 body.style.backgroundColor = color;
//                 resolve ();
//             }
//             else{
//                 reject ();
//             }
//         }, delay);
//     });
// }
// async function rainbow() {
//     await changeBG('violet',500);
//     await changeBG('indigo',500);
//     await changeBG('blue',500);
//     await changeBG('green',500);
//     await changeBG('yellow',500);
//     await changeBG('orange',500);
//     await changeBG('red',500);
// }
                    /*EXAMPLE 2*/
                    /*ASYNC FUNCTION WITH TRY & CATCH*/
// const fakeRequest = (url) => {
//     return new Promise((resolve, reject)=>{
//         const delay = Math.floor(Math.random()*4500)+500;
//         setTimeout(() => {
//             if(delay>3000){
//                 reject('Connection Lost :(');
//             }
//             else{
//                 resolve(`Here is your data from ${url}`);
//             }
//         }, delay);
//     });
// }
// const makeRequest = async()=>{
//     try {
//         let data1 = await fakeRequest('/page1');
//         console.log(data1);
//         let data2 = await fakeRequest('/page2');
//         console.log(data2);        
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('Request Completed');  
// }



                                        /*XML Http Request
Used to send HTTP or HTTPS requests to a web server and load the server response data back into the script.*/

// const firstRequest = new XMLHttpRequest();
// firstRequest.addEventListener('load',function(){
//     console.log('It Worked');
//     const data = JSON.parse(this.responseText);
//     for(let i=0;i<10;i++){
//         console.log(data.results[i].name);
//     }
// });
// firstRequest.addEventListener('error',()=>{
//     console.log('Error');
// });
// firstRequest.open('GET','https://swapi.dev/api/people/');
// firstRequest.send();
// console.log('hmm');

                    /*EXAMPLE 2*/
// const secondReq = new XMLHttpRequest();
// secondReq.addEventListener('load',function(){
//     const joke = JSON.parse(this.responseText);
//     console.log(joke.joke);
// })
// secondReq.open('GET','https://icanhazdadjoke.com/');
// secondReq.setRequestHeader('Accept', 'application/json');
// secondReq.send();
                    /*EXAMPLE 3*/
                    /*-----CHAINED REQUESTS-----*/
// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function(){
//     const data = JSON.parse(this.responseText);
//     const filmURL = data.results[0].films[0];
//     const filmReq = new XMLHttpRequest();
//     filmReq.addEventListener('load', function(){
//         const film = JSON.parse(this.responseText);
//         console.log(film.opening_crawl);
//     });
//     filmReq.open('GET',filmURL);
//     filmReq.send();
// });
// firstReq.addEventListener('error', ()=>{
//     console.log('Error');
// });
// firstReq.open('GET', 'https://swapi.dev/api/planets/');
// firstReq.send();



                                        /*FETCH
Interface similar to XMLHttp Requests for fetching data the network. Complex callbacks is not required as it is promise based.*/

// fetch('https://icanhazdadjoke.com/', {
//     headers: {Accept: 'application/json'}
// })
// .then((res)=>{
//     if(res.status!==200){
//         console.log('Error');
//         return;
//     }
//     res.json().then((data)=>{
//         h1.innerText = data.joke;
//     });
// })
// .catch(function (err) {
//     console.log(err); 
// });
                    /*-----CHAINED REQUESTS-----*/
// fetch('https://swapi.dev/api/planets/')
// .then((response)=>{
//     if(!response){
//         throw new Error(`Staus Code Error: ${response.status}`);
//     }
//     return response.json();
// })
// .then((data)=>{
//     const filmURL = data.results[0].films[0];
//     return fetch(filmURL);
// })
// .then((response)=>{
//     if(!response){
//         throw new Error(`Staus Code Error: ${response.status}`);
//     }
//     return response.json();
// })
// .then((data)=>{
//     console.log(`Name: ${data.title}`);
//     console.log(`Plot: ${data.opening_crawl}`);
// })
// .catch((err)=>{
//     console.log(err);
// })
                    /*-----ABOVE EXAMPLE WITH SLIGHT REFRACTORING-----*/
// const checkNpasre = (response)=>{
//     if(!response){
//         throw new Error(`Staus Code Error: ${response.status}`);
//     }
//     return response.json(); 
// }
// fetch('https://swapi.dev/api/planets/')
// .then(checkNpasre)
// .then((data)=>{
//     for(let planet of data.results){
//         console.log(planet.name);
//     }
//     const nextURL = data.next;
//     return fetch(nextURL);
// })
// .then(checkNpasre)
// .then((data)=>{
//     for(let planet of data.results){
//         console.log(planet.name);
//     }
// })
// .catch((err)=>{
//     console.log(err);
// })



                                        /*AXIOS
Promise-based HTTP Client similar to Fetch. Checking of request status & parsing of JSON is not required*/
// axios.get('https://swapi.dev/api/planets/')
// .then((response)=>{
//     for(let planet of response.data.results){
//                 console.log(planet.name);
//             }
//     const nextURL = response.data.next;
//     return axios.get(nextURL);
// })
// .then((response)=>{
//     for(let planet of response.data.results){
//         console.log(planet.name);
//     }
// })
// .catch((err)=>{
//     console.log(err);
// });

                    /*CHAINED AXIOS REQUESTS*/
// axios.get('https://swapi.dev/api/planets/')
// .then((response)=>{
//     for(let planet of response.data.results){
//         console.log(planet.name);
//     }
//     const nextURL = response.data.next;
//     return axios.get(nextURL);
// })
// .then((response)=>{
//     for(let planet of response.data.results){
//         console.log(planet.name);
//     }
// })
// .catch((err)=>{
//     console.log(err);
// })
