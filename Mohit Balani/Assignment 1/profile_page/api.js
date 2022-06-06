
let api_url =   url = "https://random-data-api.com/api/users/random_user";

async function getData() {
    const response = await fetch(api_url);
    const data = await response.json().then((data)=>{
        console.log("REtreving data");
        console.log(data);
        post_data(data)
  
    }
    );



  }


  function post_data(data){
  
        
    document.getElementById("fetch_data").innerHTML +=  `
    <div class = "card_view">
    <p >NAME</p>
    <h3 id="name">${data.first_name}</h3>

    <p>MOBILE</p>
    <h3 id="contact">${data["phone_number"]}</h3>

    <p>EMAIL</p>
    <h3 id="email">${data["email"]}</h3>

    <p>GENDER</p>
    <h3 id="gender">${data["gender"]}</h3>

    <p>Date of BIRTH</p>
    <h3 id="dob">${data["date_of_birth"]}</h3>

    <p>CITY</p>
    <h3 id="city">${data["address"]["city"]}</h3>

</div>`







    // document.getElementById("name").innerHTML = data["first_name"];
    document.getElementById("Profile_name").innerHTML = data["first_name"];
    // document.getElementById("contact").innerHTML = data["phone_number"];
    // document.getElementById("email").innerHTML = data["email"];
    // document.getElementById("gender").innerHTML = data["gender"];
    // document.getElementById("dob").innerHTML = data["date_of_birth"];
    // document.getElementById("city").innerHTML = data["address"]["city"];
    document.getElementById("prof_img").src= data["avatar"]
    console.log(data["avatar"])

}

    
for(let i=0;i<3;i++){
    let data = getData();
   
    }




