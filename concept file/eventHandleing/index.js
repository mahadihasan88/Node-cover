
///Event Handler in Node js
const CricketMatch=require('./concept file/eventHandleing/cricket.js');
const match=new CricketMatch();
 console.log(match);


///Register Event listener to listen the Event

match.addListener('ballPlay',({over,ball})=>{
    console.log(` ${over} Over ar  ${ball} ball kora hoa gese 6 mere dau`);
})

match.Play();






