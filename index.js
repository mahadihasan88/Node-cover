
///Event Handler in Node js

const EventEmitter=require('events');

const emitter=new EventEmitter();

///Register Event listener to listen the Event

emitter.addListener('ballPlay',()=>{
    console.log("ball kora hoa gese 6 mere dau");
})

//Event gotano(Event raise)
setTimeout(() => {
    emitter.emit('ballPlay');
}, 2000);



