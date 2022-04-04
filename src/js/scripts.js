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
          // Last Name
          lastNameInput = await input("Please Enter your Last Name:  ");
          if (checkName(lastNameInput)) {
            custInfo.push(lastNameInput);
          }
        } while (!checkName(lastNameInput));

        let addressInput;
        do {
          // Address
          addressInput = await input("Please Enter your Address:  ");
          if (!isEmpty(addressInput)) {
            output("You should have minimum 5 letters and maximum 50 with special characters #,-.");
          } else {
            custInfo.push(addressInput);
          }
        } while (!isEmpty(addressInput));

        //Car Brands
        let carBrandInput;
        do {
          carBrandInput = await input("Please Enter your carBrand: ");
          if (!checkBrand(carBrandInput)) {
            output("This brand is not in the list.");
          } else {
            custInfo.push(carBrandInput);
          }
        } while (!checkBrand(carBrandInput));

        // Car Year
        let carYear;
        do {
          carYear = await input("Please Enter car Make Year: ");
          if (!isCarYearValid(carYear)) {
            output("Your make of your car should be 1990 and till present year model.");
          } else {
            custInfo.push(carYear);
          }
        } while (!isCarYearValid(carYear));

        // VIN Number
        let VINInput;
        do {
          VINInput = await input("Please Enter 17 character long VIN Number: ");
          if (!isVINValid(VINInput)) {
            output("VIN should be 17 character long includes only letters and digits.");
          } else {
            custInfo.push(VINInput.toUpperCase());
          }
        } while (!isVINValid(VINInput));

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
        output("Goodbye!");
        break;
      default:
        output("Please select the valid option.");
    }
  } while (menuOption != 3);
}

function checkName(inputVal) {
  const regEx = /^[a-z-]{1,20}$/i;
  return regEx.test(inputVal);
}

function isEmpty(inputVal) {
  const regEx = /^([a-z#-\d]( ){0,}){5,50}$/i;
  return regEx.test(inputVal);
}

function checkBrand(inputVal) {
  const carBrand = ["bmw", "gm", "honda", "toyota", "audi", "kia"];
  let outputVal = false;

  for (item of carBrand) {
    if (inputVal.toLowerCase().includes(item)) {
      outputVal = true;
    }
  }
  return outputVal;
}

function isVINValid(inputVal) {
  const regEx = /[A-Z\d]{17}/;
  return regEx.test(inputVal.toUpperCase());
}
