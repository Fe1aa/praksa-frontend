const title = document.getElementById("title");
const company_list = document.getElementById("companies");

const add_btn = document.getElementById("add");
const remove_btn = document.getElementById("remove");
const change_btn = document.getElementById("change");
const inp = document.getElementById("inp");

const companies = ["Nvidia", "Apple", "Microsoft", "Google", "Amazon", "Meta"];

let index = 0;

const messages = [
  "Companies",
  "The title was changed",
  "The title was changed again",
  "The title was changed yet again",
  "The title was changed once more",
  "The title was changed for the fourth time",
  "The title was changed for the fifth time",
];

function addCompany(company) {
  const li = document.createElement("li");

  li.textContent = company;

  company_list.appendChild(li);
}

function removeCompany(company) {
  company_list.querySelectorAll("li").forEach((li) => {
    if (li.textContent === company) {
      li.remove();
    }
  });
}

function changeTitle() {
  index++;

  if (index >= messages.length) {
    index = 0;
  }

  title.textContent = messages[index];
}

companies.forEach(addCompany);

add_btn.addEventListener("click", () => {
  const value = inp.value.trim();
  inp.value = "";
  if (!value) return;
  addCompany(value);
});

remove_btn.addEventListener("click", () => {
  const value = inp.value.trim();
  inp.value = "";
  if (!value) return;
  removeCompany(value);
});

change_btn.addEventListener("click", changeTitle);
