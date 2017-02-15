## Interactive Sculpture

###### Stephen Round - MAR440

-----------------

My idea for an interactive project was to create a virtual [sculpture](https://stephenround.github.io/MAR440/Sculpture/) that reacts to the user hands-free. This, in a technical sense, can be achieved by grabbing the data from the microphone or the webcam of the computer and using that data to assign a value to the sculpture's position, size, color, etc. From a conceptual sense, it's a piece of art that you look at and it will "look" back at you by altering its appearance.

I know I talked about doing a game for this project in class, but that just didn't seem like a unique design or particularly fun to create. Instead, I had this idea to create a "breathing" or "reactive" 3D model that was visually entertaining.

The current process that it uses is a simple color value set by the mouse position. This is a very, very basic form of interaction, but it requires the use of the mouse (or finger, if you're on a mobile device). My vision is to utilize the p5.dom module of p5 to access the camera or microphone to gather a value from the exterior tools for use by the sculpture. For the case of mobile devices, I would use the mobile device functions that detect the orientation and touching of the screen to create a different experience for the user.

The results of the data could alter a number of things. As it stands, the color is altered by the mouse movement, and this is a simple enough value to plug in. Another alteration could be size or camera distance, which would produce the same visual result. The most drastic payload would be the sculpture reshaping itself, or exploding at the sound of your voice. It could also spin much faster depending on the "wind" or noise the mic picks up. On the mobile front, the sculpture could roll as if it were balancing on your phone screen, and could be thrown upwards if the phone is flicked up.
