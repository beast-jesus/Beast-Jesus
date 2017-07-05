$(document).ready(()=>{
  $("#savePixel").click(()=>{
    html2canvas($("#pixel"), {
      onrendered: canvas => {
        var imgData =(canvas.toDataURL())
        $('#div_data').val(imgData)
        console.log($('#div_data').val())

        document.getElementById("myForm").submit()
      }
    })
  })
})


// API call
// $(document).ready(function() {
//   getId()
// })
// var id = []
// var farm  = []
// var server = []
// var secret = []
// var title = []
// var orientation = ""
// var random = Math.floor(Math.random() * 18)
// function getId(){
//   var url = "https://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=850fe695ff16c8b0d94eb86407512d53&user_id=149907004@N05&format=json&nojsoncallback=1"
//    $.get(url)
//   .then(function(data){
//     for (var i=0; i<(data.photos.photo).length; i++){
//       id.push(+data.photos.photo[i].id)
//       farm.push(+data.photos.photo[i].farm)
//       server.push(+data.photos.photo[i].server)
//       secret.push(data.photos.photo[i].secret)
//       title.push(data.photos.photo[i].title)
//     }
//     if (id[random] === 34119127771 || id[random] === 33865752870 || id[random] === 34119127641 || id[random] === 34119127511 || id[random] === 33865752520 || id[random] === 34249268725 || id[random] === 34118930141 || id[random] === 34118929981 || id[random] === 33439283403 || id[random] === 33439283263){
//       orientation = "portrait"
//     } else {
//       orientation = "landscape"
//     }
//
//
//     console.log(id[random])
//     console.log(farm[random])
//     console.log(server[random])
//     console.log(secret[random])
//     console.log ('https://c1.staticflickr.com/' + farm[random] + '/' + server[random] + '/' + id[random] + '_' + secret[random] + '_z.jpg')
//     updatePage(farm, server, id, secret)
//
//
//
//   })
// }
// function updatePage(farm, server, id, secret){
//     $(".origArt").append("<img src='https://c1.staticflickr.com/" + farm[random] + "/" + server[random] + "/" + id[random] + "_" + secret[random] + "_z.jpg' alt='" + title[random]+ "'>")
// }





//pixel grid
var colorPicker = document.querySelector('.paint-container')
var currentColor = "#fff"
colorPicker.addEventListener('click', function () {
  var property = window.getComputedStyle(event.target)
  var color = property.getPropertyValue("background-color")
  console.log(color)
  currentColor=color
})
function createCell (){
  var gridContainer = document.querySelector("#pixel")
  for (var i=0; i<6825; i++){
    var newCell = document.createElement('div')
    // set <div class='cell' id=i>
    newCell.classList.add('cell')
    newCell.setAttribute('id', i)
    gridContainer.appendChild(newCell)
  }
  // if (orientation === "landscape"){
  //   gridContainer.classList.add('landscape')
  // }
  // else {
  //   gridContainer.classList.add('portrait')
  // }
  gridContainer.addEventListener('click', function () {
    if (event.target.classList.contains("cell")){
    event.target.style.backgroundColor = currentColor
  }})
}

  createCell()





// function updatePage(farm, server, id, secret){
//   $(".origArt").append("<img src='https://c1.staticflickr.com/" + farm[random] + "/" + server[random] + "/" + id[random] + "_" + secret[random] + "_z.jpg' alt='" + title[random]+ "'>")
// }
// var grid = $(".grid")
// function createGrid (x, y) {
// 	while (grid.firstChild) {
//   	grid.removeChild(grid.firstChild);
//   }
// 	// set grid width so that divs will properly wrap
//   grid.style.width = (6) * x + 'px'
//   // get total number of new individual cells needed
//   var cellCount = x * y
//   // iterate through and create each new cell
//   for (var i = 1; i <= cellCount; i++) {
//     var newCell = document.createElement('div')
//     // set <div class='cell'>
//     newCell.classList.add('cell')
//     newCell.setAttribute('id', i)
//     // newCell.textContent = i
//     grid.appendChild(newCell)
//     // set cell size to requested px size
//     newCell.style.width = '4px'
//     newCell.style.height = '4px'
//   }
// }

// function checkOrientation (orientation) {
//   if (orientation === "landscape") {
//     createGrid(200, 150)
//   } else {
//     createGrid(150, 200)
//   }
// }
// checkOrientation("landscape")
// var colorPicker = document.querySelector('.paint-container')
// var currentColor = "#fff"
// colorPicker.addEventListener('click', function () {
//   var property = window.getComputedStyle(event.target)
//   var color = property.getPropertyValue("background-color")
//   console.log(color)
//   currentColor=color
// })
