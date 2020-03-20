/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
    'Students',
    'Faculty',
    "What's New",
    'Tech Trends',
    'Music',
    'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
const createMenu = (items) => {

    const menu = document.createElement("div");
    const list = document.createElement("ul");

    const students = document.createElement("li")
    const faculty = document.createElement("li")
    const newStuff = document.createElement("li")
    const trends = document.createElement("li")
    const exit = document.createElement("li")


    menu.appendChild(list)
    list.appendChild(students)
    list.appendChild(faculty)
    list.appendChild(newStuff)
    list.appendChild(trends)
    list.appendChild(exit)


    menu.classList.add("menu")
    list.classList.add("ui", "li")

    students.textContent = menuItems[0]
    faculty.textContent = menuItems[1]
    newStuff.textContent = menuItems[2]
    trends.textContent = menuItems[3]
    exit.textContent = menuItems[4]

    // items.forEach(listItem => {
    //     let listItem = createElement("li")
    //     list.appendChild(listItem)
    // });



    const menuBtn = document.querySelector(".menu-button");
    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("menu--open")
        menu.classList.toggle("close")
    });
    return menu;
}

const navMenu = document.querySelector(".header");
navMenu.appendChild(createMenu(menuItems))