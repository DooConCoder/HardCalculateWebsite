var imageRequest = new XMLHttpRequest();
imageRequest.open("GET", "./imageList.json");
imageRequest.onreadystatechange = function() {
    if (this.readyState == 4) {
        //console.log(this.response);
        var data = JSON.parse(this.response);
        for (var i = 0; i < data.length; i++) {
            var div = document.createElement("div");
            div.setAttribute("class", "image");

            div.onclick = function() {
                this.classList.toggle("image-selected")
            };

            var img = document.createElement("img");
            img.src = data[i];
            div.appendChild(img);
            document.body.appendChild(div);
        }
    }
}
imageRequest.send();