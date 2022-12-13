var request = new XMLHttpRequest();

request.open("GET", "https://api.giphy.com/v1/gifs/random?api_key=sTdF2n7y8wUcMa7x5uOo9uSdySawdPn3&tag=puppy&rating=g");
var imageTag = "";
request.onload = function () {
  var response = request.reponse;
  //console.log(response)
  var parseData = JSON.parse(response);
  //console.log(parseDate)
  var imageUrl = parseData.data.data.images.original.url;
  
  imageTag = "<img src='" + imageUrl + “' >”;
document.getElementById("holder").innerHTML = imageTag;
};

request.send();
