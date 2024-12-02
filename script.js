document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let list = [];
    let email = document.getElementById("email").value;
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let password = document.getElementById("pswd").value;
    let address = document.getElementById("address").value;
    let num = document.getElementById("num_telephone").value;
    let client = {
        nom: nom,
        prenom: prenom,
        email: email,
        numTelephone: num,
        address: address,
        password: password
    };  
    list.push(client);
})