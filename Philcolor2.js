//Declare the Color Object with our new keyword below here.
const color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[0] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[0] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  let redIntensity = Math.round(rgb[0]/255*100);
  return redIntensity;

};

//greenIntensity
Color.greenIntensity = function(rgb){
  let greenIntensity = Math.round(rgb[1]/255*100);
  return greenIntensity;

};

//blueIntensity
Color.blueIntensity = function(rgb){
  let blueIntensity = Math.round(rgb[2]/255*100);
  return blueIntensity;

};

//brightness
Color.brightness = function(rgb){
  let bright = (Color.redIntensity(rgb)+Color.blueIntensity(rgb)+Color.greenIntensity(rgb))/3;
  return bright;

}

//complement
Color.complement = function(rgb){
  let comp = []
  for(var i=0; i<3; i++){
    comp[i] = 255-rgb;
  }
      return comp;
}

Color.grayScale = function(rgb){
  let avg = rgb[0]+rgb[1]+rgb[2];
  let gray =[];

  for (var g=0; g<3; g++){
    gray[g]=avg;

  }

  return gray;
}

Color.tint = function(rgb){
  let white = [255,255,255];
  let tint = []

  for (var w )




}
