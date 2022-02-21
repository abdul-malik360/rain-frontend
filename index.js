// the post method to add employees to the rain db

const addEmployee = () => {
  fetch(`https://rain-db.herokuapp.com/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Fullname: document.getElementById("name").value,
      Rain_Email: document.getElementById("email").value,
      Password: document.getElementById("password").value,
    }),
  })
    .then((response) => response.json)
    .then((data) => {
      window.location.reload();
      alert(`Employee Added to Rain DB`);
    });
};

// the get method to show all the employees in the rain db

let employees_link = "https://rain-db.herokuapp.com/";

let employees = [];

const showEmployees = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let employees = data.rain_employees;

      let show = document.querySelector(".show_employees");

      employees.forEach((employee) => {
        show.innerHTML += ` 
        <div class="employees_container"> 
        <h2> ${employee.Employee_No} </h2>
        <p class="fullname"> Fullname: ${employee.Fullname}</p>
        <p class="email" > Email: ${employee.Rain_Email}</p>
        <p class="password"> Password: ${employee.Password}</p> 
        </div>`;
      });
    });
};

showEmployees(employees_link);

const addBtn = () => {
  document.getElementById("add_employees").style.display = "flex";
  document.getElementById("list").style.display = "none";
};

const closeBtn = () => {
  document.getElementById("add_employees").style.display = "none";
  document.getElementById("list").style.display = "block";
};
