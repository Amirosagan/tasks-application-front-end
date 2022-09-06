function createTask(id, value) {
  var texte = document.createElement("div");
  var del = document.createElement("button");
  del.id = id;
  del.textContent = "delete";
  texte.id = id;
  texte.textContent = value;
  var doubles = document.createElement("div");
  doubles.appendChild(texte);
  doubles.appendChild(del);

  doubles.id = id;
  doubles.className = "task";
  del.addEventListener("click", (eve) => {
    var remover = document.getElementById(eve.target.id);
    remover.remove();
    var contener = JSON.parse(localStorage.tasks);
    contener.forEach((ele, ind) => {
      console.log(ele);
      if (ele.id == eve.target.id) {
        console.log(ind - 1);
        contener.splice(ind, 1);
      }
    });
    localStorage.tasks = JSON.stringify(contener);
  });
  var mai = document.getElementById("tasks");
  mai.appendChild(doubles);
}

if (localStorage.tasks) {
  var contener = JSON.parse(localStorage.tasks);
  contener.forEach((element) => {
    createTask(element.id, element.Text);
  });
}

var sumpit = document.getElementById("input-sumbit-task");

sumpit.onclick = () => {
  var text = document.getElementById("input-text-task").value;
  if (text !== "") {
    var Id = Math.round(Math.random() * 100000000000);
    var value = {
      id: Id,
      Text: text,
    };
    if (localStorage.tasks) {
      var contener = JSON.parse(localStorage.tasks);
      contener.push(value);
      localStorage.tasks = JSON.stringify(contener);
    } else {
      var contener = [value];

      localStorage.tasks = JSON.stringify(contener);
    }
    createTask(value.id, value.Text);
  }
};
