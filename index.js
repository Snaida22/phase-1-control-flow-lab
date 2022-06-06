function scuberGreetingForFeet(freeSam){
  // Write your code here!
  if(freeSam == 199){
    return "This one is on me!"
  }
  else if (freeSam> 2000 && freeSam < 2500){
    return "I will gladly take your thirty bucks."
  }
  else if (freeSam > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(snyCity){
  // Write your code here!
  if (snyCity == "NYC"){
    return "Ok, sounds good."
  }
  else{
    return "No go.";
  }
}

function switchOnCharmFromTip(driverTip){
  // Write your code here!
  switch(driverTip){
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
    return "Thank you."
    break;
    default:
      return "Bye."
  
  }
}