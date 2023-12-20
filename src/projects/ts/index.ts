import "../../../public/styles.css";
import { userRepo } from "./repositories";
import { User, Repo, Branch } from "../entities";
import {
  userInput,
  repoInput,
  branchInput,
  btnStart,
  form,
  main,
  tbody,
  tables,
  user,
  repoBranch,
} from "./constantas";

const userList = new Array();
const list = new Array();
let count = 0;

form.onsubmit = (e) => {
  e.preventDefault();
  btnStart.onclick = () => {
    add();
  };
};

function add() {
  for (let i = 0; i < userList.length; i++) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    td1.innerText = `${userList[i]}`;
    tr.append(td1);
    tbody.append(tr);
  }
  tables.onclick = () => {
    console.log(userList);
    main.style.display = "grid";
    form.style.display = "none";
    tables.style.display = "none";
    console.log(main);
    async function users() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const names = await response.json();

      for (let i = 0; i < names.length; i++) {
        count++;
        list.push(names[i]);

        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.append(names[i].id);
        tr.append(th);

        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        td2.className = "td";
        const td3 = document.createElement("td");
        td3.className = "td";
        const td4 = document.createElement("td");
        const btnInfo = document.createElement("button");
        const btnDelete = document.createElement("button");

        btnInfo.innerText = "Info";
        btnInfo.className = "btn-info";
        btnDelete.innerText = "Delete";
        btnDelete.className = "btn-delete";

        if (userInput.value === "") {
          td1.append(names[i].username);
        } else {
          td1.append(userInput.value);
        }
        if (repoInput.value === "") {
          td2.append(names[i].username);
        } else {
          td2.append(repoInput.value);
        }
        if (branchInput.value === "") {
          td3.append("master");
        } else {
          td3.append(branchInput.value);
        }

        td4.append(btnDelete);
        tr.append(td1, td2, td3, td4);

        btnDelete.addEventListener("click", () => {
          tr.remove();
        });
        tr.appendChild(td4);
        tbody.append(tr);

        btnInfo.onclick = () => {
          const user = fetch(`https://jsonplaceholder.typicode.com/users/${2}`);
          console.log(user);
        };
      }
    }
    users();
  };
}
add();

user.addEventListener("click", () => {
  console.log(repoBranch);
  repoBranch.forEach((e) => {});

  console.log("Deleted repo and branches");
});
