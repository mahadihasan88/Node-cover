const EventEmitter=require('events');



class CricketMatch extends EventEmitter{
      Play() {
//Event gotano(Event raise)
        setTimeout(() => {
            this.emit('ballPlay',{
                over:'Second',
                ball:'3'
            });
        }, 2000);
    }
}
module.exports=CricketMatch;