

var breathingIn = 3;
               var breathingOut = 2;
               var secondHolding = 2;
               var trial = 4;
               var breathingInColor = '#00ddff';
               var breathingOutColor = '#00ddff';
               var holdingColor = '#00ddff';
               
                var settings = false;
             
               var i = 90;

               window.onresize = function() {
                   resizeCanvas(window.innerWidth, window.innerHeight);
               }

       window.moveTo(200, 220)

       function setup() {
                      

                   createCanvas(window.innerWidth, window.innerHeight);
          
 breathingInColor = (localStorage.getItem('breathingInColor'));
                  breathingOutColor = (localStorage.getItem('breathingOutColor'));
         
 holdingColor  = (localStorage.getItem('holdingColor'));
                  
         breathingIn = parseFloat(localStorage.getItem('breathingIn'));
                   breathingOut = parseFloat(localStorage.getItem('breathingOut'));

                   trial = parseFloat(localStorage.getItem('trial'));
                   secondHolding = parseFloat(localStorage.getItem('secondHolding'));
                    breathingInColor = localStorage.getItem('breathingInColor');
                    breathingOutColor =  localStorage.getItem('breathingOutColor');

                    holdingColor= localStorage.getItem('holdingColor');                   

                   if (isNaN(breathingIn)) {
                       breathingIn = 2;
                       breathingOut = 2;
                       trial = 2;
                       secondHolding = 3;
                       breathingInColor = '#00ddff';
                       breathingOutColor = '#00ddff';
                       holdingColor = '#00ddff';
                              
                   }

           breathingInColorPicker = createColorPicker(breathingInColor);
           breathingOutColorPicker = createColorPicker(breathingOutColor);
           holdingColorPicker = createColorPicker(holdingColor);
           breathingInColorPicker.position(300, 0);
           breathingOutColorPicker.position(300, 30);
           holdingColorPicker.position(300, 60);
           breathingInInput = createInput();
            breathingOutInput = createInput();
           trialInput = createInput();
           secondHoldingInput = createInput();

           breathingInInput.position(415, 0);
           breathingInInput.size(20, 10);
         breathingOutInput.position(415, 30);
           breathingOutInput.size(20, 10);
         trialInput.position(415, 60);
           trialInput.size(20, 10);
         secondHoldingInput.position(415, 90);
           secondHoldingInput.size(20, 10);
         breathingInInput.value(breathingIn)
            breathingOutInput.value(breathingOut)
         trialInput.value(trial)
         secondHoldingInput.value(secondHolding)
         
  breathingInColorPicker.hide() 
     breathingOutColorPicker.hide()
    holdingColorPicker.hide()
    breathingInInput.hide() 
    breathingOutInput.hide() 
    trialInput.hide() 
    secondHoldingInput.hide() 
    
         
         button = createButton(' ');
  button.size(window.innerWidth/4, window.innerHeight/4);
                   button.style('font-size', '30px');
                   button.style("padding", "0")
                   button.style("border", "none")
                   button.style("background", "none")
  button.position(20, 20);
  button.mousePressed(changeBG);


function changeBG() {
  settings = !settings
  if (!settings){
   breathingInColorPicker.hide() 
     breathingOutColorPicker.hide()
    holdingColorPicker.hide()
    breathingInInput.hide() 
    breathingOutInput.hide() 
    trialInput.hide() 
    secondHoldingInput.hide() 
    
         localStorage.setItem('breathingIn', JSON.stringify(breathingIn));
                               localStorage.setItem('breathingOut', JSON.stringify(breathingOut));

                              localStorage.setItem('trial', JSON.stringify(trial));
                               localStorage.setItem('secondHolding', JSON.stringify(secondHolding));
                     localStorage.setItem('breathingInColor', breathingInColor);
                               localStorage.setItem('breathingOutColor', breathingOutColor);

                              localStorage.setItem('holdingColor',holdingColor);
  }
  else{
    breathingInColorPicker.show() 
     breathingOutColorPicker.show()
    holdingColorPicker.show()
    breathingInInput.show() 
    breathingOutInput.show() 
    trialInput.show() 
    secondHoldingInput.show() 
  }
   
  
}
               }

               var state = 'breatheIn';
               var startFrame = 0;
               var endFrame = 0;
               var radius = 0;
               var bgcolor = 'black';

               function draw() {
                 
                       button.mouseOver(onTop).mouseOut(outside);
     
  function onTop() {
    button.html('⚙️');
  }

  function outside() {
    if (settings == false) {
      button.html(' ');
    }
  }
                  if (settings == true){ 
                    
                    breathingInColor = breathingInColorPicker.color();
                    breathingOutColor = breathingOutColorPicker.color();
                    holdingColor = holdingColorPicker.color();
                   
                    breathingIn =  int(breathingInInput.value());
                    breathingOut = int(breathingOutInput.value());
                    trial = int(trialInput.value());
                    secondHolding = int(secondHoldingInput.value());
                  
                             frameCount = frameCount -1
                
                  }
                 
                
            
                   
                
     
               background(bgcolor);
              

                   switch (state) {
                       case 'breatheIn':
                           bgcolor = breathingOutColor;
                           endFrame = startFrame + breathingOut * 60;
                           radius = 0.3 * Math.min(window.height, window.width) + (endFrame - frameCount) / (endFrame - startFrame) * 0.5 * Math.min(window.height, window.width);
                           ellipse(window.innerWidth / 2, window.innerHeight / 2, radius);
                           if (frameCount == endFrame) {
                               state = 'firstHolding';
                               startFrame = frameCount;
                           }
                           break;
                        case 'firstHolding':
                           bgcolor = holdingColor;
                           endFrame = startFrame + (trial + 0.1) * 60;
                           ellipse(window.innerWidth / 2, window.innerHeight / 2, 0.3 * Math.min(window.height, window.width));
                           if (frameCount == endFrame) {
                               state = 'breatheOut';
                               startFrame = frameCount;
                           }
                           break;
                          case 'breatheOut':
                           bgcolor = breathingInColor;
                           endFrame = startFrame + breathingIn * 60;
                           radius = 0.8 * Math.min(window.height, window.width) - (endFrame - frameCount) / (endFrame - startFrame) * 0.5 * Math.min(window.height, window.width);
                           ellipse(window.innerWidth / 2, window.innerHeight / 2, radius);
                           if (frameCount == endFrame) {
                               state = 'secondHolding';
                               startFrame = frameCount;
                           }
                           break;
                            case 'secondHolding':
                           bgcolor = holdingColor;
                           endFrame = startFrame + (secondHolding + 0.1) * 60;
                           ellipse(window.innerWidth / 2, window.innerHeight / 2, 0.8 * Math.min(window.height, window.width));
                           if (frameCount == endFrame) {
                               state = 'breatheIn';
                               startFrame = frameCount;
                           }
                           break;






                   }}
                
               