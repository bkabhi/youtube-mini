var YOUR_API_KEY = "AIzaSyCmDdzIfZkn9obHsU5FXp3iYJreN5KhKOg"
var YOUR_API_KEY2 = "AIzaSyD2zHdRbWXuQpqQrmX5a5A-xTK62DYadAU"

document.getElementById("sort_Video_Type").addEventListener("click", function () {
    event.preventDefault();
    var searched = document.getElementById("searchField").value;
    console.log(searched, " insort inp vale");
    var clickedvalue = event.target.id
    console.log(clickedvalue, " clickedvalue in sort");
    var sortType = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searched}&type=${clickedvalue}&key=${YOUR_API_KEY2}`
    if (clickedvalue === "movie") {
        sortType = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searched}&type=video&videoType=movie&key=${YOUR_API_KEY2}`
    }

    fetchData(sortType)

    divSortOption.classList.remove("divSortOption");
    divSortOption.style.display = "none";
    c = true
})

document.getElementById("sort_Duration").addEventListener("click", function () {
    event.preventDefault();
    var searched = document.getElementById("searchField").value;
    console.log(searched, " insort inp vale");
    var clickedvalue = event.target.id
    console.log(clickedvalue, " clickedvalue in sort");
    var sortduration = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searched}&type=video&videoDuration=${clickedvalue}&key=${YOUR_API_KEY2}`

    fetchData(sortduration)

    divSortOption.classList.remove("divSortOption");
    divSortOption.style.display = "none";
    c = true
})


var divSortOption = document.getElementById("divSortOption")
var c = true
document.getElementById("sortClickDiv").addEventListener("click", function () {
    if (c) {
        c = false
        divSortOption.setAttribute("class", "divSortOption");
        divSortOption.style.display = "flex";
    } else {
        divSortOption.classList.remove("divSortOption");
        divSortOption.style.display = "none";
        c = true
    }
})

var url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=in&key=${YOUR_API_KEY2}`
fetchData(url);

function fn() {
    event.preventDefault();
    var searched = document.getElementById("searchField").value;
    console.log(searched, " searched value without sort");
    var urlSearched = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=title&q=${searched}&key=${YOUR_API_KEY2}`
    fetchData(urlSearched);
}

async function fetchData(url) {
    try {
        var res = await fetch(url)
        var res2 = await res.json();
        console.log(res2.items);
        name(res2.items);
    } catch {
        console.log("err");
    }
}

function name(data) {
    var x = document.getElementById("showData");
    x.innerHTML = "";

    data.forEach(function (element, index) {

        var div = document.createElement("div")
        div.addEventListener("click", function () {
            addToCart(element)
        })

        var img = document.createElement("img")
        img.src = element.snippet.thumbnails.high.url
        var p1 = document.createElement("h3")
        p1.innerText = element.snippet.title
        var p2 = document.createElement("p")
        p2.innerText = element.snippet.channelTitle
        div.append(img, p1, p2)
        x.append(div)
    })
}

function addToCart(element) {
    localStorage.setItem("video", JSON.stringify(element));
    location = "video.html";
}