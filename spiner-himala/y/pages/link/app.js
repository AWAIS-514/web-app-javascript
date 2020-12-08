
function submit(){
    
    var Full_name =document.getElementById("Fullname").value;
    console.log(Full_name);
    var email =document.getElementById("email").value;
    console.log(email);
    var no =document.getElementById("no").value;
    console.log(no);
    var pin =document.getElementById("pin").value;
    console.log(pin);
    var id={
        name:Full_name,
        email:email,
        phoneNo:no,
        pin:pin
    }
   firebase.database().ref("users/").push(id)
}
function read(){
    var ul=document.getElementById("listSt");
   ul.innerHTML="<li>Delhi - Manali - Shimla - Delhi</li><li>Local Manali Sightseeing</li><li>Solang Valley</li><li>Hidimba Devi Temple</li><li>Famous Vishisht Temple in Manali</li><li>Attraction Point Van Vihar</li><li>Tibetan Monastery & Club House</li><li>Kullu Manikaran Saheb</li><li>Kufri, Green valley & Indira tourist park</li><li>Himalayan Nature park & Fagu valley in Shimla</li>"
var close=document.getElementById("close").style.visibility="visible";
var read=document.getElementById("read").style.visibility="Hidden";

}
function reverse(){
    var ul=document.getElementById("listSt");
    ul.innerHTML="<li>Delhi - Manali - Shimla - Delhi</li><li>Local Manali Sightseeing</li>"
    var close=document.getElementById("close").style.visibility="Hidden";
    var read=document.getElementById("read").style.visibility="visible";

}