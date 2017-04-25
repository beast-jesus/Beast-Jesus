// API call
$(document).ready(function() {
  getId()
})
var id = []
var farm  = []
var server = []
var secret = []
var title = []
var random = Math.floor(Math.random() * 18)
function getId(){
  var url = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=850fe695ff16c8b0d94eb86407512d53&user_id=149907004@N05&format=json&nojsoncallback=1"
   $.get(url)
  .then(function(data){
    for (var i=0; i<(data.photos.photo).length; i++){
      id.push(+data.photos.photo[i].id)
      farm.push(+data.photos.photo[i].farm)
      server.push(+data.photos.photo[i].server)
      secret.push(data.photos.photo[i].secret)
      title.push(data.photos.photo[i].title)
    }
    console.log(id[random])
    console.log(farm[random])
    console.log(server[random])
    console.log(secret[random])
    console.log ('https://c1.staticflickr.com/' + farm[random] + '/' + server[random] + '/' + id[random] + '_' + secret[random] + '_z.jpg')
    updatePage(farm, server, id, secret)
  })
}

function updatePage(farm, server, id, secret){
  $(".origArt").append("<img src='https://c1.staticflickr.com/" + farm[random] + "/" + server[random] + "/" + id[random] + "_" + secret[random] + "_z.jpg' alt='" + title[random]+ "'>")
}
