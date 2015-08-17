var five = require("johnny-five");
var board = new five.Board();

var Light = function(pin){
    var pin = new five.Pin(pin)

    this.On =function(){
        pin.high();
    };

    this.Off = function(){
        pin.low();
    }
};

var BlinkingLight = function(pin, duration){

    Light.call(this, pin); 
    var lyta = this.On;
    var cima = this.Off; 
    var blinking;

    this.On = function(){
    
        var state = "off";
        blinking = setInterval(function(){
            if (state === "off"){
                lyta();
                state = "on";
            }
            else{
                cima();
                state = "off"
            }
        }, duration);

    }

    this.Off = function(){
        clearInterval(blinking)
        cima();
    };
}
var LightSwitch = function(light){
    //this.BlinkingLight = new BlinkingLight();
    //this.Light = new Light(pin);

    this.On = function(){
        light.On();
    }

    this.Off = function(){
        light.Off();
    }


}

board.on('ready', function(){
    var light = new BlinkingLight(9, 50);
    // var light9 = new Light(9);
    var light6 = new Light(6);
    //var light6 = new BlinkingLight(6, 50);
   // light.blink();
  var theSwitch = new LightSwitch(new BlinkingLight(6, 50));
    theSwitch.On();
    //light.stop();
   //light.On();
   //light.On();
    //theSwitch.On();
     setTimeout(function(){
       
        light.Off();
        theSwitch.Off();
     }, 2000);

     var theSwitch = new LightSwitch(new Light(9, 50));
    theSwitch.On();
    //light.stop();
   //light.On();
   //light.On();
    //theSwitch.On();
     setTimeout(function(){
       
        light.Off();
        theSwitch.Off();
     }, 2000);

    // setTimeout(function(){
    //      light.Off();
    //      light6.On();
         
    // }, 3000);
    //     setTimeout(function(){
    //      light6.Off();
    // }, 4000);
    // }
    
     //  light9.On();
       //light9.Off();

})