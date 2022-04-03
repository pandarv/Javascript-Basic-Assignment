async function main() {
  // This is where the code you're actually experimenting with goes.

  let menuOption = 0;
  do {
    output("1- Create New Car Profile \n2- View Previous Profile \n3- Quit Application");

    menuOption = Number(await input("Please Enter 1, 2 or 3 to select your option: "));

    switch (menuOption) {
      case 1:
        // let firstNameInput = await input('Please Enter your First Name: ')
        output("You are in Creat New Car Profile");
        break;
      case 2:
        output(" You are in View Previous Profile");
        break;
      case 3:
        output("Goodbye");
        break;
      default:
        output("Please select the valid option.");
    }
  } while (menuOption != 4);
}
