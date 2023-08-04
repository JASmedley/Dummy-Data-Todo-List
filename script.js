// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfToDos = [
  {
    userId: 14,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 20,
    id: 2,
    title: "delectus aut autem",
    completed: false,
  },
];

const fetchToDos = () => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
      console.log("response:", response);
      return response.json();
    })
    .then((data) => {
      console.log("data:", data);
      arrayOfToDos = data;
    });
};

const logToDos = () => {
  console.log(arrayOfToDos);
};

const newLi = () => {};

const populateToDos = () => {
  const orderedList = document.getElementById("todo-list");
  console.log("orderedList:", orderedList);

  for (let IndexArray = 0; IndexArray < arrayOfToDos.length; IndexArray++) {
    console.log("index:", IndexArray);
 
    const newLi = document.createElement("li");
    const newContent = document.createTextNode(arrayOfToDos[IndexArray].userId);
    newLi.appendChild(newContent);
    console.log(newLi);
    orderedList.appendChild(newLi);
    console.log(orderedList);
    if (arrayOfToDos[IndexArray].completed === true) {
      console.log("element title:", arrayOfToDos[IndexArray]);
      newLi.style.backgroundColor="#408FC2";
      newLi.style.color="white";
    }
  }
};

const userIdList = arrayOfToDos.filter(element => {
  return element.userId === 14
})
console.log(userIdList)

