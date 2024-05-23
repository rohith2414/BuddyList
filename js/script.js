// var updateUser;
// var updateId;

// let userStatus = {
//   1: "one",
//   2: "two",
//   3: "three",
//   4: "four",
// };

// let users_json = [
//   {
//     userId: 1,
//     name: "Jon Snow",
//     profilePicture:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
//     statusMessage: "We become what we think about!",
//     presence: 1,
//   },
//   {
//     userId: 2,
//     name: "Daenerys Targaryen",
//     profilePicture:
//       "https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
//     statusMessage: "A positive mindset brings positivethings.",
//     presence: 3,
//   },
//   {
//     userId: 3,
//     name: "Tyrion Lannister",
//     profilePicture:
//       "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
//     statusMessage: "One small positive thought can change your whole day",
//     presence: 3,
//   },
//   {
//     userId: 4,
//     name: "Jaime Lannister",
//     profilePicture:
//       "https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
//     statusMessage: "I am a rockstar",
//     presence: 1,
//   },
//   {
//     userId: 5,
//     name: "Arya Stark",
//     profilePicture:
//       "https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
//     statusMessage: "I am using Gradious messenger",
//     presence: 4,
//   },
// ];

// const container = document.getElementById("root");
// window.onload = display();

// function display() {
//   for (let i = 0; i < users_json.length; i++) {
//     let obj = users_json[i];
//     let user = document.createElement("div");
//     adduser(user, obj);
//     container.appendChild(user);
//   }
// }

// function adduser(user, obj) {
//   user.classList.add("user");
//   user.innerHTML = `
// 		<div class="img-container">
// 		<img src=${obj.profilePicture} class='user-image ${
//     userStatus[obj.presence]
//   }' alt="user image" />
// 		</div>
// 		<div class="user-detail">
// 		<p class="user-name">${obj.name}</p>
// 		<p class="user-message">${obj.statusMessage}</p>
// 		</div>
// 		<div class='three-btn'>
// 			<div class="dropdown">

// 				<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
// 				<ul class="dropdown-menu">
// 					<li><button id=${
//             "USR" + obj.userId
//           } class="dropdown-item deletebtn">Delete</button></li>
// 					<li><button  id='update-${"USR" + obj.userId}' onclick='updateItem("${
//     "USR" + obj.userId
//   }",this)'class="dropdown-item ">Update</button></li>
// 				</ul>
// 			</div>
// 		</div>
// 	`;
// }

// // onclick='deleteItem(${'USR'+obj.userId})'

// let addBtn = document.getElementById("addBtn");

// addBtn.addEventListener("click", function (event) {
//   event.preventDefault();
//   addDetails();
// });



// function addDetails(){
// 	if (addBtn.innerText == "Add User") {
// 		let newName = document.getElementById("name").value;
// 		let newStatusMessage = document.getElementById("statusMessage").value;
// 		let newProfilePicLink = document.getElementById("profilePicLink").value;
// 		let newPresence = document.getElementById("presence").value;
	
// 		if (newName && newStatusMessage && newProfilePicLink && newPresence) {
// 		  let newUserId = users_json.length + 1;
	
// 		  let newJson = {
// 			userId: newUserId,
// 			name: newName,
// 			profilePicture: newProfilePicLink,
// 			statusMessage: newStatusMessage,
// 			presence: newPresence,
// 		  };
// 		  users_json = addNewElementAtStart(users_json, newJson);
// 		  let user = document.createElement("div");
// 		  adduser(user, newJson);
// 		  addDivAsFirstChild(container, user);
// 		  console.log(users_json);
	
// 		  document.getElementById("addUserForm").reset();
// 		}
// 		console.log("rohith");
// 	}
// 	else{
// 		let getJson = findById(users_json, updateId);

		

// 		const img = updateUser.querySelector(".img-container img");
// 		const userName = updateUser.querySelector(".user-name");
// 		const userMsg = updateUser.querySelector(".user-message");

// 		getJson.name =document.getElementById("name").value;
// 		getJson.profilePicture = document.getElementById("profilePicLink").value;
// 		getJson.statusMessage = document.getElementById("statusMessage").value;
// 		getJson.presence=document.getElementById("presence").value;

// 		if(getJson.name && getJson.profilePicture && getJson.statusMessage && getJson.presence){
// 			img.src = getJson.profilePicture;
// 		userName.innerText = getJson.name;
// 		userMsg.innerText =getJson.statusMessage;

// 		let classList=img.classList;
// 		for(let i=classList.length-1;i>0;i--){
// 			img.classList.remove(classList[i]);
// 		}
		
// 		img.classList.add(userStatus[getJson.presence]);
// 		addBtn.innerText = "Add User";
// 		document.getElementById("addUserForm").reset();
// 		}

		
// 	}
// }

// function addNewElementAtStart(users_json, newJson) {
//   users_json.unshift(newJson);
//   return users_json;
// }

// function addDivAsFirstChild(parent, newDiv) {
//   if (parent.firstChild) {
//     parent.insertBefore(newDiv, parent.firstChild);
//   } else {
//     parent.appendChild(newDiv);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   container.addEventListener("click", function (event) {
//     if (event.target.classList.contains("deletebtn")) {
//       const deleteUser = event.target.closest(".user");
//       let deleteUserId = event.target.closest("button").id;
//       deleteUser.remove();
//       deleteUserId = deleteUserId.slice(3);
//       users_json = removeById(users_json, deleteUserId);
//     }
//   });
// });

// function removeById(users_json, id) {
//   return users_json.filter((item) => item.userId != id);
// }

// function updateItem(updateUserId,obj) {
//   updateUserId = updateUserId.slice(3);
// 	const user = obj.closest(".user");
	

//   let getJson = findById(users_json, updateUserId);
  

//   document.getElementById("name").value = getJson.name;
//   document.getElementById("statusMessage").value = getJson.statusMessage;
//   document.getElementById("profilePicLink").value = getJson.profilePicture;
//   document.getElementById("presence").value = getJson.presence;

//   const updateBtn = document.querySelector(".updatebtn");
//   updateBtn.innerText = "Update Detail";
//   updateUser=user;
//   updateId=updateUserId;
// }

// function findById(users_json, id) {
//   return users_json.find((item) => item.userId == id);
// }





var updateUser;
var updateId;

let userStatus = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
};

var users_json;

const container = document.getElementById("root");
window.onload = function(){
  if(localStorage.getItem('json')){
    users_json=JSON.parse(localStorage.getItem('json'));
    display();
  }
  else{
    let newJson = [
      {
        userId: 1,
        name: "Jon Snow",
        profilePicture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s",
        statusMessage: "We become what we think about!",
        presence: 1,
      },
      {
        userId: 2,
        name: "Daenerys Targaryen",
        profilePicture:
          "https://preview.redd.it/hlxen8gtwpm01.jpg?width=640&crop=smart&auto=webp&v=enabled&s=a3c43bcbfc1db31d542ef67071559264358b3d2b",
        statusMessage: "A positive mindset brings positivethings.",
        presence: 3,
      },
      {
        userId: 3,
        name: "Tyrion Lannister",
        profilePicture:
          "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6a3f5237411193.573f25019c8bf.jpg",
        statusMessage: "One small positive thought can change your whole day",
        presence: 3,
      },
      {
        userId: 4,
        name: "Jaime Lannister",
        profilePicture:
          "https://images.nightcafe.studio/jobs/mWfF1s7OOVg5DMTYiNZ8/mWfF1s7OOVg5DMTYiNZ8--4--qccau.jpg?tr=w-1600,c-at_max",
        statusMessage: "I am a rockstar",
        presence: 1,
      },
      {
        userId: 5,
        name: "Arya Stark",
        profilePicture:
          "https://64.media.tumblr.com/21de4501827aba1c6463ce2ae6a36780/tumblr_ps5le9xxRb1w9a5vgo1_1280.jpg",
        statusMessage: "I am using Gradious messenger",
        presence: 4,
      },
    ];
    localStorage.setItem('json',JSON.stringify(newJson));
    users_json = JSON.parse(localStorage.getItem('json'));
    display();
  }
};

function display() {
  for (let i = 0; i < users_json.length; i++) {
    let obj = users_json[i];
    let user = document.createElement("div");
    adduser(user, obj);
    container.appendChild(user);
  }
}

function adduser(user, obj) {
  user.classList.add("user");
  user.innerHTML = `
		<div class="img-container">
		<img src=${obj.profilePicture} class='user-image ${
    userStatus[obj.presence]
  }' alt="user image" />
		</div>
		<div class="user-detail">
		<p class="user-name">${obj.name}</p>
		<p class="user-message">${obj.statusMessage}</p>
		</div>
		<div class='three-btn'>
			<div class="dropdown">

				<a class="" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-three-dots-vertical"></i></a>
				<ul class="dropdown-menu">
					<li><button id=${
            "USR" + obj.userId
          } class="dropdown-item deletebtn">Delete</button></li>
					<li><button  id='update-${"USR" + obj.userId}' onclick='updateItem("${
    "USR" + obj.userId
  }",this)'class="dropdown-item ">Update</button></li>
				</ul>
			</div>
		</div>
	`;
}

// onclick='deleteItem(${'USR'+obj.userId})'

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addDetails();
});



function addDetails(){
	if (addBtn.innerText == "Add User") {
		let newName = document.getElementById("name").value;
		let newStatusMessage = document.getElementById("statusMessage").value;
		let newProfilePicLink = document.getElementById("profilePicLink").value;
		let newPresence = document.getElementById("presence").value;
	
		if (newName && newStatusMessage && newProfilePicLink && newPresence) {
		  let newUserId = users_json.length + 1;
	
		  let newJson = {
			userId: newUserId,
			name: newName,
			profilePicture: newProfilePicLink,
			statusMessage: newStatusMessage,
			presence: newPresence,
		  };
		  users_json = addNewElementAtStart(users_json, newJson);
      localStorage.setItem('json',JSON.stringify(users_json));
      console.log(JSON.parse(localStorage.getItem('json')))
		  let user = document.createElement("div");
		  adduser(user, newJson);
		  addDivAsFirstChild(container, user);
		  console.log(users_json);
	
		  document.getElementById("addUserForm").reset();
		}
		console.log("rohith");
	}
	else{

		let getJson = findById(users_json, updateId);

		

		const img = updateUser.querySelector(".img-container img");
		const userName = updateUser.querySelector(".user-name");
		const userMsg = updateUser.querySelector(".user-message");

		getJson.name =document.getElementById("name").value;
		getJson.profilePicture = document.getElementById("profilePicLink").value;
		getJson.statusMessage = document.getElementById("statusMessage").value;
		getJson.presence=document.getElementById("presence").value;

		if(getJson.name && getJson.profilePicture && getJson.statusMessage && getJson.presence){
			img.src = getJson.profilePicture;
		userName.innerText = getJson.name;
		userMsg.innerText =getJson.statusMessage;

		let classList=img.classList;
		for(let i=classList.length-1;i>0;i--){
			img.classList.remove(classList[i]);
		}
		
		img.classList.add(userStatus[getJson.presence]);
		addBtn.innerText = "Add User";
		document.getElementById("addUserForm").reset();
    localStorage.setItem('json',JSON.stringify(users_json));
		}

		
	}
}

function addNewElementAtStart(users_json, newJson) {
  users_json.unshift(newJson);
  return users_json;
}

function addDivAsFirstChild(parent, newDiv) {
  if (parent.firstChild) {
    parent.insertBefore(newDiv, parent.firstChild);
  } else {
    parent.appendChild(newDiv);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  container.addEventListener("click", function (event) {
    if (event.target.classList.contains("deletebtn")) {
      const deleteUser = event.target.closest(".user");
      let deleteUserId = event.target.closest("button").id;
      deleteUser.remove();
      deleteUserId = deleteUserId.slice(3);
      users_json = removeById(users_json, deleteUserId);
      localStorage.setItem('json',JSON.stringify(users_json));
    }
  });
});

function removeById(users_json, id) {
  return users_json.filter((item) => item.userId != id);
}

function updateItem(updateUserId,obj) {
  updateUserId = updateUserId.slice(3);
	const user = obj.closest(".user");
	

  let getJson = findById(users_json, updateUserId);
  

  document.getElementById("name").value = getJson.name;
  document.getElementById("statusMessage").value = getJson.statusMessage;
  document.getElementById("profilePicLink").value = getJson.profilePicture;
  document.getElementById("presence").value = getJson.presence;

  const updateBtn = document.querySelector(".updatebtn");
  updateBtn.innerText = "Update Detail";
  updateUser=user;
  updateId=updateUserId;
}

function findById(users_json, id) {
  return users_json.find((item) => item.userId == id);
}
