var video = JSON.parse(localStorage.getItem("video"));
document.getElementById("videoIframe").src = `https://www.youtube.com/embed/${video.id.videoId || video.id}`
document.getElementById("title").innerText = video.snippet.title
document.getElementById("channel").innerText = video.snippet.channelTitle