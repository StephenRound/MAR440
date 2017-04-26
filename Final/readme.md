## Final Project
---
<<<<<<< HEAD
### Collaboration with Haley Tatalovich [@HaleyTat](https://github.com/HaleyTat)
=======
##### Collaboration with Haley Tatalovich [@HaleyTat](https://github.com/HaleyTat)
>>>>>>> origin/master

#### The basis
This is a volume based projected sculpture that morphs according to the recorded amplitude of the room. It gets prettier when it gets louder.

We wanted to take the concept behind my Project 1 Sculpture and push it into a much bigger and grandiose experience. Our goal is to have this sketch projected on at least one wall within an adequate space. For the more ambitious route, we'd like to have it triple projected around an entire room, using the same setup as having three screens that the sketch could move around in freely.


#### The obstacles
Our biggest obstacle is finding the space to present this, as well as finding the right equipment to properly display it. Other than that, our sketch is mostly ironed out and we're proud to show it


#### The process
My personal biggest accomplishment with this is creating a function that is constantly checking the highest recorded amplitude and storing it. This was achieved by making a function that assigned each amplitude value to an array, then passing that array through a max() function, which takes the highest number in the array. The function then returns this highest value. Currently, the rings that always remain on the screen use the storeLvl variable (the variable with the stored highest value) to determine their size. When the stored value gets higher than a certain point, it spawns new entities to replace the normal rings.

_wip_
