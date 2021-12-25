// Get all the images
image_array = [
'xure.png',
'poster.png',
'pregunta.png',
'xddddd.png',
'xd2.png',
'xd1.png',
'weitopascua.png',
'vdestile.png',
'oedesfuname.png',
'collisauria.png',
'aliado.png',
'lmao.png',
'sopita.png',
'unchinoyuntailandesvanenbus.png',
'toumasleep.png',
'tonyhawk.png',
'rubik.png',
'problem.png',
'pnaucasleep.png',
'owersleep.png',
'nofps.png',
'nft.png',
'memo.png',
'like.png',
'lerezo.png',
'lepulgue.png',
'kelltheraccoon.png',
'kieres.png',
'keriktewebee.png',
'inception.png',
'gun.png',
'gabosinlentes.png',
'FOTO_CHILLHOUSE_2021.png',
'dinoxd.png',
'cursedtile.png',
'culostack.png',
'creepstile.png',
'COLLAGE_CASI.png',
'clownpanucas.png',
'ciclista.png',
'bigdown.png',
'bro.png',
  ]
  
  function get_random_image(){
    // Get a random index
    random_index = Math.floor(Math.random() * image_array.length);
  
    // Get an image at the random_index
    selected_image = image_array[random_index]
  
    // Display the image
    document.getElementById('image_shower').src = `./img/${selected_image}`
  }
  