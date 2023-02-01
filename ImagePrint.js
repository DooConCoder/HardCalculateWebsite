var imageRequest = new XMLHttpRequest();
imageRequest.open("GET", "./imageList.json");
imageRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        console.log(this.response);
    }
}
imageRequest.send();