const shoppingList = ["Arroz", "Feijão", "Carne", "Massa", "Biscoito", "Pão"]

const listEl = document.getElementById("list")
const searchField = document.getElementById("searchField")

searchField.addEventListener('input', inputHandler);

this.fillList();


function fillList(list = shoppingList) {
  listEl.innerHTML = "";

  for (item in list) {
    let listItems = document.createElement("li");
    listItems.innerHTML = item;
    listEl.appendChild(listItems);
  }
}


function inputHandler() {
  const filteredList = shoppingList.filter(el => {
    const listItems = el.toLowerCase();
    const searchWord = searchField.value.toLowerCase();
    
    return listItems.includes(searchWord);
  });

  fillList(filteredList)
}
