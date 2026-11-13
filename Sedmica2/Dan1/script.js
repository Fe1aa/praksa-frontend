const company_list = document.getElementById("companies");

const companies = ["Nvidia", "Apple", "Microsoft", "Google", "Amazon", "Meta"];

const result = companies
  .map((company) => {
    return `<p>${company}</p>`;
  })
  .join("");

company_list.innerHTML = result;
