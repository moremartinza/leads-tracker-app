import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-database.js";

const firebaseConfig = {
  databaseURL:
    "https://leads-tracker-app-9534b-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "leads");

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}' class="text-blue-700 dark:text-sky-300 underline break-words">
          ${leads[i]}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

onValue(referenceInDB, function (snapshot) {
  if (snapshot.exists()) {
    const snapshotValues = snapshot.val();
    const leads = Object.values(snapshotValues);
    render(leads);
  }
});

deleteBtn.addEventListener("dblclick", function () {
  remove(referenceInDB);
  ulEl.innerHTML = "";
});

inputBtn.addEventListener("click", function () {
  if (inputEl.value.trim()) {
    push(referenceInDB, inputEl.value.trim());
    inputEl.value = "";
  }
});
