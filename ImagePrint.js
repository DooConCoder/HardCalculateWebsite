var imageRequest = new XMLHttpRequest();
imageRequest.open("GET", "D:/Coding/DooConProjects/HardCalculateWebsite/Code/JSON/.X/imageList.json");
imageRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        console.log(this.response);
    }
}
imageRequest.send();