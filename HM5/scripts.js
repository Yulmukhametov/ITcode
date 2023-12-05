const post = document.getElementById("post");
const main = document.querySelector('main');
let combo = document.querySelector('select');
let value = parseInt(combo.value);

let UrlPost = "https://jsonplaceholder.typicode.com/posts";
let UrlUser = "https://jsonplaceholder.typicode.com/users";
let UrlCom = "https://jsonplaceholder.typicode.com/comments";
let UrlAlb = "https://jsonplaceholder.typicode.com/albums";
let UrlPhoto = "https://jsonplaceholder.typicode.com/photos";
let UrlTodo = "https://jsonplaceholder.typicode.com/todos";

let call="";

let buttonsContainer = document.querySelector('.listButtons');


async function printPost(startIndex, endIndex) {
  let ol = document.querySelector('ol');
  ol.innerHTML = '';
  try {
    const responsePost = await fetch(UrlPost);
    const responseUser = await fetch(UrlUser);
    const dataPost = await responsePost.json();
    const dataUser = await responseUser.json();

    printButtons(100);

    for (let i = startIndex; i < endIndex && i < 100; i++) {
      ol.innerHTML += `
        <li onclick="navigateTo('posts/${await dataPost[i]?.id}', ${i})">
              <p>${await dataPost[i]?.id}</p>
              <h3>Title: ${await dataPost[i]?.title}</h3>
              <p>${await dataPost[i]?.body}</p>
              <p>User: ${await dataUser[await dataPost[i]?.userId - 1]?.username}</p>
        </li>`;
    }
  } catch (error) {
    console.log(error);
  }
}

function printButtons(data) {
  buttonsContainer.innerHTML = '';
  let totalPages = Math.ceil(data / value);

  for (let i = 1; i <= totalPages; i++) {
    let but = document.createElement('button');
    but.textContent = i;
    but.addEventListener("click", async (event) => {
      goToPage(parseInt(event.target.textContent))
    });
    buttonsContainer.append(but);
  }
}

function goToPage(pageNumber) {
  let startIndex = (pageNumber - 1) * value;
  let endIndex = startIndex + value ;
  if (call=="post"){
    printPost(startIndex, endIndex);
  }
  else if (call=="com") {
    printCom(startIndex, endIndex);
  }
  else if (call=="alb") {
    printAlb(startIndex, endIndex);
  }
  else if (call=="photo") {
    printPhoto(startIndex, endIndex);
  }
  else if (call=="todo") {
    printTodo(startIndex, endIndex);
  }
  else if (call=="user") {
    printUser(startIndex, endIndex);
  }
}

post.addEventListener("click", async () => {
  call=''
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  printPost(startIndex, endIndex);
  call="post"
});

combo.addEventListener("change", async () => {
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  if (call!="") {
    let comboBut = document.createElement("button")
    comboBut.setAttribute("id", "combobut")
    comboBut.textContent = "Показать"
    document.querySelector(".combobutton").append(comboBut)
    comboBut.addEventListener("click", async () => {
      if (call=="post"){
        printPost(startIndex, endIndex);
        document.querySelector(".combobutton").innerHTML = "";
      }
      else if (call=="com") {
        printCom(startIndex, endIndex);
        document.querySelector(".combobutton").innerHTML = "";
      }
      else if (call=="alb") {
        printAlb(startIndex, endIndex);
        document.querySelector(".combobutton").innerHTML = "";
      }
      else if (call=="photo") {
        printPhoto(startIndex, endIndex);
        document.querySelector(".combobutton").innerHTML = "";
      }
      else if (call=="todo") {
        printTodo(startIndex, endIndex);
        document.querySelector(".combobutton").innerHTML = "";
      }
      else if (call=="user") {
        printUser(startIndex, endIndex);
        document.querySelector(".combobutton").innerHTML = "";
      }
    } )
  }
});

async function printCom(startIndex, endIndex) {
  let ol = document.querySelector('ol');
  ol.innerHTML = '';
  try {
    const responsePost = await fetch(UrlPost);
    const responseCom = await fetch(UrlCom);
    const dataPost = await responsePost.json();
    const dataCom = await responseCom.json();

    printButtons(500);

    for (let i = startIndex; i < endIndex && i < 500; i++) {
      ol.innerHTML += `
      <li onclick="navigateTo('comments/${await dataCom[i]?.id}', ${i})">
        <p>${dataCom[i]?.id}</p>
        <h3>Post: ${dataPost[dataCom[i]?.postId-1]?.title}</h3>
        <h4>Title: ${dataCom[i]?.name}</h3>
        <a href="mailto:${dataCom[i]?.email}">e-mail: ${dataCom[i]?.email}</a>
        <p>${dataCom[i]?.body}</p>
      </li>`;
    }
  } catch (error) {
    console.log(error);
  }
}

com.addEventListener("click", () => {
  call=''
  call="com"
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  printCom(startIndex, endIndex);
});

async function printAlb(startIndex, endIndex) {
  let ol = document.querySelector('ol');
  ol.innerHTML = '';
  try {
    const responseUser = await fetch(UrlUser);
    const responseAlb = await fetch(UrlAlb);
    const dataUser = await responseUser.json();
    const dataAlb = await responseAlb.json();
    printButtons(100);

    for (let i = startIndex; i < endIndex && i < 100; i++) {
      ol.innerHTML += `
      <li onclick="navigateTo('Albums/${await dataAlb[i]?.id}', ${i})">
        <p>${dataAlb[i]?.id}</p>
        <h3>${dataAlb[i]?.title}</h3>
        <p>User:${dataUser[dataAlb[i]?.userId-1]?.username}<p>
      </li>`;
    }
  } catch(error){
    console.log(error)
  }
}

alb.addEventListener("click", () => {
  call=''
  call="alb"
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  printAlb(startIndex, endIndex);
});

async function printPhoto(startIndex, endIndex) {
  let ol = document.querySelector('ol');
  ol.innerHTML = '';
  try {
    const responsPhoto = await fetch(UrlPhoto);
    const responseAlb = await fetch(UrlAlb);
    const dataAlb = await responseAlb.json();
    const dataPhoto = await responsPhoto.json();
    printButtons(5000);

    for (let i = startIndex; i < endIndex && i < 5000; i++) {
      ol.innerHTML += `
      <li onclick="navigateTo('Photos/${await dataPhoto[i]?.id}', ${i})">
        <p>${dataPhoto[i]?.id}</p>
        <h4>Album title: ${dataAlb[dataPhoto[i]?.albumId-1]?.title}</h4>
        <h4>Title: ${dataPhoto[i]?.title}</h4>
        <img src="${dataPhoto[i]?.thumbnailUrl}">
      </li>`;
    }
  } catch(error){
    console.log(error);
  }
}

photo.addEventListener("click", () => {
  call=''
  call="photo"
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  printPhoto(startIndex, endIndex);
});

async function printTodo(startIndex, endIndex) {
  let ol = document.querySelector('ol');
  ol.innerHTML = '';
  try {
    const responseTodo = await fetch(UrlTodo);
    const responseUser = await fetch(UrlUser);
    const dataTodo = await responseTodo.json();
    const dataUser = await responseUser.json();
    printButtons(200);

    let completed;

    for (let i = startIndex; i < endIndex && i < 200; i++) {
      if (dataTodo[i]?.completed=="true") {
        completed="Completed";
      }
      else {
        completed="Not completed"
      }
      ol.innerHTML += `
      <li onclick="navigateTo('Todos/${await dataTodo[i]?.id}', ${i})">
        <p>${dataTodo[i]?.id}</p>
        <h3>${dataTodo[i]?.title}</h3>
        <p>${completed}</p>
        <p>User:${dataUser[dataTodo[i]?.userId-1]?.username}<p>
      </li>`;
    }
  } catch(error) {
    console.log(error);
  }
}

todo.addEventListener("click", () => {
  call=''
  call="todo"
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  printTodo(startIndex, endIndex);
});

async function printUser(startIndex, endIndex) {
  let ol = document.querySelector('ol');
  ol.innerHTML = '';
  try {
    const responseUser = await fetch(UrlUser);
    const dataUser = await responseUser.json();
    printButtons(10);

    for (let i = startIndex; i < endIndex && i < 10; i++) {
      ol.innerHTML += `
      <li onclick="navigateTo('Users/${await dataUser[i]?.id}', ${i})">
          <p>${dataUser[i]?.id}</p>
          <p>Name:${dataUser[i]?.name}</p>
          <p>Username:${dataUser[i]?.username}</p>
          <a href="mailto:${dataUser[i]?.email}">E-mail:${dataUser[i]?.email}</a>
          <p>Adress:City-${dataUser[i]?.address.city},Street-${dataUser[i]?.address.street},Suite-${dataUser[i]?.address.suite}</p>
          <a href="tel:${dataUser[i]?.phone}">Phone:${dataUser[i]?.phone}</a>
          <a href="${dataUser[i]?.website}">WebSite:${dataUser[i]?.website}</a>
          <p>Company:${dataUser[i]?.company.name}</p>
      </li>`;
    }
  } catch(error){
    console.log(error)
  }
}

user.addEventListener("click", () => {
  call=''
  call="user"
  value = parseInt(combo.value);
  let startIndex = (1 - 1) * value;
  let endIndex = startIndex + value ;
  printUser(startIndex, endIndex);
});

async function navigateTo(page, i) {
  try {
    const responseTodo = await fetch(UrlTodo);
    const responseUser = await fetch(UrlUser);
    const dataTodo = await responseTodo.json();
    const dataUser = await responseUser.json();
    const responsPhoto = await fetch(UrlPhoto);
    const responseAlb = await fetch(UrlAlb);
    const dataAlb = await responseAlb.json();
    const dataPhoto = await responsPhoto.json();
    const responsePost = await fetch(UrlPost);
    const responseCom = await fetch(UrlCom);
    const dataPost = await responsePost.json();
    const dataCom = await responseCom.json();

    const newURL = `/${page}`;
    history.pushState({}, '', newURL);

    document.body.innerHTML = `<div id="content"></div>`
    let content = document.getElementById("content")
    
    if (call=="post"){
      content.innerHTML = `
              <p>${await dataPost[i]?.id}</p>
              <h3>Title: ${await dataPost[i]?.title}</h3>
              <p>${await dataPost[i]?.body}</p>
              <p>User: ${await dataUser[await dataPost[i]?.userId - 1]?.username}</p>`;
    }
    else if (call=="com") {
      content.innerHTML = `
        <p>${dataCom[i]?.id}</p>
        <h3>Post: ${dataPost[dataCom[i]?.postId-1]?.title}</h3>
        <h4>Title: ${dataCom[i]?.name}</h3>
        <a href="mailto:${dataCom[i]?.email}">e-mail: ${dataCom[i]?.email}</a>
        <p>${dataCom[i]?.body}</p>`;
    }
    else if (call=="alb") {
      content.innerHTML = `
      <p>${dataAlb[i]?.id}</p>
      <h3>${dataAlb[i]?.title}</h3>
      <p>User:${dataUser[dataAlb[i]?.userId-1]?.username}<p>`;
    }
    else if (call=="photo") {
      content.innerHTML = `
      <p>${dataPhoto[i]?.id}</p>
      <h4>Album title: ${dataAlb[dataPhoto[i]?.albumId-1]?.title}</h4>
      <h4>Title: ${dataPhoto[i]?.title}</h4>
      <img src="${dataPhoto[i]?.url}">`
    }
    else if (call=="todo") {
      if (dataTodo[i]?.completed=="true") {
        completed="Completed";
      }
      else {
        completed="Not completed"
      }
      content.innerHTML = `
      <p>${dataTodo[i]?.id}</p>
      <h3>${dataTodo[i]?.title}</h3>
      <p>${completed}</p>
      <p>User:${dataUser[dataTodo[i]?.userId-1]?.username}<p>`
    }
    else if (call=="user") {
      content.innerHTML = `
      <p>${dataUser[i]?.id}</p>
      <p>Name:${dataUser[i]?.name}</p>
      <p>Username:${dataUser[i]?.username}</p>
      <a href="mailto:${dataUser[i]?.email}">E-mail:${dataUser[i]?.email}</a>
      <p>Adress:City-${dataUser[i]?.address.city},Street-${dataUser[i]?.address.street},Suite-${dataUser[i]?.address.suite}</p>
      <a href="tel:${dataUser[i]?.phone}">Phone:${dataUser[i]?.phone}</a>
      <a href="${dataUser[i]?.website}">WebSite:${dataUser[i]?.website}</a>
      <p>Company:${dataUser[i]?.company.name}</p>`
    }

    const backButton = document.createElement('button');
    backButton.innerHTML = 'Вернуться';
    content.append(backButton)
    backButton.onclick = function() {
      history.pushState({}, '', '/HM5');
      document.getElementById('content').innerHTML = '';
      backButton.remove();
      location.reload();
    };
  } catch(error){
    console.log(error)
  }
  

  document.getElementById('content').appendChild(backButton);
}