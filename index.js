


function Upcoming(){
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
   res = this.responseText;
   obj = JSON.parse(res);
   var i;
   for (i=0; i< obj.results.length; i++){
    document.getElementById("mydata").innerHTML += i+1 + " - " + obj.results[i].title + " / " + "<br>" + " " + i+1 + ".a " + "Release Date" + obj.results[i].release_date +  "<br>";
      // document.getElementById("mydata").innerHTML = this.responseText;
   }
  }
});


xhr.open("GET", "	https://api.themoviedb.org/3/movie/upcoming?api_key=ad78f3550b87158b38b80c61d248c10b");
xhr.setRequestHeader("Accept", "application/json");

xhr.send();
}
function Top(){
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
     res = this.responseText;
   obj = JSON.parse(res);
   var i;
   for (i=0; i< obj.results.length; i++){
    document.getElementById("mydata").innerHTML += i+1 + " - " + obj.results[i].title + " / " + "<br>" + " " + i+1 + ".a " + "Release Date" + obj.results[i].release_date +  "<br>";
        //document.getElementById("mydata").innerHTML = this.responseText;
  }
  }
});


xhr.open("GET", "   https://api.themoviedb.org/3/movie/top_rated?api_key=ad78f3550b87158b38b80c61d248c10b");
xhr.setRequestHeader("Accept", "application/json");

xhr.send();

}
function popular(){
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    //console.log(this.responseText);
     res = this.responseText;
   obj = JSON.parse(res);
   var i;
   for (i=0; i< obj.results.length; i++){
    document.getElementById("mydata").innerHTML += i+1 + " - " + obj.results[i].title + " / " + "<br>" + " " + i+1 + ".a " + "Release Date" + obj.results[i].release_date +  "<br>";
        //document.getElementById("mydata").innerHTML = this.responseText;
  }
  }
});


xhr.open("GET", "   https://api.themoviedb.org/3/movie/popular?api_key=ad78f3550b87158b38b80c61d248c10b");
xhr.setRequestHeader("Accept", "application/json");

xhr.send();

}


