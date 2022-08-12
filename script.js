
  const firebaseConfig = {
    apiKey: "AIzaSyAlg_e_fuC_Q7T58k7WAkct7G9nIq336s8",
    authDomain: "roshan-food-studio-order.firebaseapp.com",
    databaseURL: "https://roshan-food-studio-order-default-rtdb.firebaseio.com",
    projectId: "roshan-food-studio-order",
    storageBucket: "roshan-food-studio-order.appspot.com",
    messagingSenderId: "562266704531",
    appId: "1:562266704531:web:764266cd0f1c8493f55b66",
    
};
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
    document.getElementById('id01').style.display='none';
}
function closePopup(){
    popup.classList.remove("open-popup");
}



firebase.initializeApp(firebaseConfig);

var contactformdb = firebase.database().ref('contactform');

document.getElementById('orderNowform').addEventListener('submit', submitregForm);

function submitregForm(e){
    e.preventDefault();
    var name = getinputelementVal('name');
    var email = getinputelementVal('email');
    var phone = getinputelementVal('phone');
    var address = getinputelementVal('address');
    var aaloo = getinputelementVal('aaloo');
    var cheese = getinputelementVal('cheese');
    var Grilled = getinputelementVal('Grilled');
    var Soyabean = getinputelementVal('Soyabean');
    var Cauliflower = getinputelementVal('Cauliflower');
    var Onion = getinputelementVal('Onion');
    var Margherita = getinputelementVal('Margherita');
    var extrachees = getinputelementVal('extrachees');
    var specialrquest = getinputelementVal('specialrquest');
    var cod = getinputelementVal('cod');
    
    saveMessagefbd(name, email, phone, address, aaloo, cheese, Grilled, Soyabean, Cauliflower, Onion, Margherita, extrachees, specialrquest, cod);

}

const getinputelementVal = (id) =>{
    return document.getElementById(id).value;
};

const saveMessagefbd = (name, email, phone, address, aaloo, cheese, Grilled, Soyabean, Cauliflower, Onion, Margherita, extrachees, specialrquest, cod) => {
    var newmessageRef = contactformdb.push();
    newmessageRef.set({
        name: name,
        email: email,
        phone: phone,
        address: address,
        aaloo: aaloo,
        cheese: cheese,
        Grilled: Grilled,
        Soyabean: Soyabean,
        Cauliflower: Cauliflower,
        Onion: Onion,
        Margherita: Margherita,
        extrachees: extrachees,
        specialrquest: specialrquest,
        cod: cod,
    });
};