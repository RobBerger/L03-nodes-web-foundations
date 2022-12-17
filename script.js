//appendChild
function append(){
    // create a new element
    var newtag = document.createElement('p');
    // add content to the new element
    newtag.innerHTML = "I am a new node created using createElement and appendChild";
    // place it in our document
    document.getElementById('appendid').appendChild(newtag);
}