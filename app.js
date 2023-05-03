import Github from "./github.js";
import UI from "./ui.js";

const ui = new UI();
//console.log(ui);

const github = new Github();

const searchUser = document.querySelector("#search-user");
const searchButton = document.querySelector("#search-button");

//console.log(searchButton,searchUser)

searchButton.addEventListener("click", getInput);
searchUser.addEventListener('keypress',(e)=>{
  if(e.code=='Enter'){
    getInput()
  }
})

function getInput() {
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
    //data.message='Not Found'

      if (data.message == "Not Found") {
       ui.showAlert('User Not Found','alert alert-danger')
       searchUser.value=''
      } else {
        //console.log(data);
        ui.showAlert('User Found','alert alert-success')
        ui.showProfile(data.profile);
        ui.showRepos(data.repos)
        searchUser.value=''
      }

      //  console.log(data.message));
    });
  }else{
   ui.clearProfile()
   ui.showAlert('Please Enter Username','alert alert-danger')
  }
}

// searchUser.addEventListener('input',()=>

// github.getUser(searchUser.value).then((data)=>

// {
//  if (data.message == "Not Found") {
//    console.log("kullanıcı yok");
//  } else {
//     console.log(data);
//    ui.showProfile(data);
//  }

//    console.log(data.message)})



// )
