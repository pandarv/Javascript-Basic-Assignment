async function main() {
  // This is where the code you're actually experimenting with goes.

  let menuOption;
  do {
    output("1- Create New Car Profile \n2- View Previous Profile \n3- Quit Application");

    menuOption = Number(await input("Please Enter 1, 2 or 3 to select your option: "));

    const custInfo = [];

    switch (menuOption) {
      case 1:
        // First Name
        let firstNameInput;
        do {
          firstNameInput = await input("Please Enter your First Name:  ");
          if (checkName(firstNameInput)) {
            custInfo.push(firstNameInput);
          }
        } while (!checkName(firstNameInput));

        let lastNameInput;
        do {
          // First Name
          lastNameInput = await input("Please Enter your Last Name:  ");
          if (checkName(lastNameInput)) {
            custInfo.push(lastNameInput);
          }
        } while (!checkName(lastNameInput));

        output(custInfo);
        // if () {
        //   output(`matches the Regular Expression`);
        //   // Last Name
        //   let lastNameInput = await input("Please Enter your Last Name: ");
        // } else {
        //   output("try again");
        // }
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
  } while (menuOption != 3);
}

function checkName(inputVal) {
  const regEx = /^[A-Za-z-]{1,20}$/;
  return regEx.test(inputVal);
}
