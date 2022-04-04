async function main() {
  // This is where the code you're actually experimenting with goes.
  const customerDatabase = [
    ["John", "Domingo", "148A 34 Street", "2010-01-24", "Audi", "Class A", "2008", "SHDYT3STA4SGDT7S9"],
    ["Rob", "Gosta", "43 4 Ave.", "1990-01-24", "BMW", "A12", "9091", "S12ST3ERA4OHT543S"],
    ["Monica", "Joe", "#123-2312 34 Street", "2020-12-01", "Honda", "Accord", "2015", "PY12T3STA4SGDAS65"],
  ];

  let menuOption;
  do {
    output("1- Create New Car Profile \n2- View Previous Profile \n3- Quit Application");

    menuOption = Number(await input("Please Enter 1, 2 or 3 to select your option: "));

    const customerInfo = [];

    switch (menuOption) {
      case 1:
        // First Name
        let firstNameInput;
        do {
          firstNameInput = await input("Please Enter your First Name:  ");
          if (checkName(firstNameInput)) {
            customerInfo.push(firstNameInput);
          }
        } while (!checkName(firstNameInput));

        // Last Name
        let lastNameInput;
        do {
          lastNameInput = await input("Please Enter your Last Name:  ");
          if (checkName(lastNameInput)) {
            customerInfo.push(lastNameInput);
          }
        } while (!checkName(lastNameInput));

        // Address
        let addressInput;
        do {
          addressInput = await input("Please Enter Car your Correspondence Address:  ");
          if (!isEmpty(addressInput)) {
            output("You should have minimum 5 letters and maximum 50 with special characters #,-.");
          } else {
            customerInfo.push(addressInput);
          }
        } while (!isEmpty(addressInput));

        // Date of Purchase
        let purchaseDateInput;
        do {
          purchaseDateInput = await input("Please Enter Date of Purchase in yyyyy-mm-dd format: ");
          if (!isDateValid(purchaseDateInput)) {
            output("Please Enter the correct purchase date.");
          } else {
            customerInfo.push(purchaseDateInput);
          }
        } while (!isDateValid(purchaseDateInput));
        //Car Brands
        let carBrandInput;
        do {
          carBrandInput = await input("Please Enter your carBrand: ");
          if (!checkBrand(carBrandInput)) {
            output("This brand is not in the list.");
          } else {
            customerInfo.push(carBrandInput);
          }
        } while (!checkBrand(carBrandInput));

        // Car Model

        let carModel;
        do {
          carModel = await input("Please Enter your car Model: ");
          if (!isCarModelValid(carModel)) {
            output("Please Enter letters and numbers upto 15 characters");
          } else {
            customerInfo.push(carModel);
          }
        } while (!isCarModelValid(carModel));

        // Car Year
        let carYear;
        do {
          carYear = await input("Please Enter car Make Year: ");
          if (!isYearValid(carYear)) {
            output("Your make of your car should be 1990 and till present year model.");
          } else {
            customerInfo.push(carYear);
          }
        } while (!isYearValid(carYear));

        // VIN Number
        let VINInput;
        do {
          VINInput = await input("Please Enter 17 character long VIN Number: ");
          if (!isVINValid(VINInput)) {
            output("VIN should be 17 character long includes only letters and digits.");
          } else {
            customerInfo.push(VINInput.toUpperCase());
          }
        } while (!isVINValid(VINInput));

        // output(customerInfo);

        customerDatabase.push(customerInfo);
        // output(customerDatabase);
        // if () {
        //   output(`matches the Regular Expression`);
        //   // Last Name
        //   let lastNameInput = await input("Please Enter your Last Name: ");
        // } else {
        //   output("try again");
        // }
        break;
      case 2:
        for (let i = customerDatabase.length - 1; i >= customerDatabase.length - 3; i--) {
          let row = customerDatabase[i];
          output(`Customer # ${Math.abs(i - 3)}`);
          for (let j = 0; j < row.length; j++) {
            output(`         ${row[j]}`);
          }
        }
        // output(" You are in View Previous Profile");
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

function isCarModelValid(inputVal) {
  const regEx = /^([a-z\d]( ){0,}){1,15}$/i;
  return regEx.test(inputVal);
}

function isYearValid(inputVal) {
  return Number(inputVal) >= 1990 && Number(inputVal <= new Date().getFullYear() + 1);
}

function isVINValid(inputVal) {
  const regEx = /[A-Z\d]{17}/;
  return regEx.test(inputVal.toUpperCase());
}

function isDateValid(inputVal) {
  let outputVal = true;
  let dateValue = inputVal.split("-");
  // Year Validation
  if (!isYearValid(dateValue[0])) {
    outputVal = false;
  }
  //  Month Validation
  if (dateValue[1] > 12 || dateValue[1] < 1 || !Number.isInteger(Number(dateValue[1]))) {
    outputVal = false;
  }

  // Date validation
  if (dateValue[2] > 31 || dateValue[2] < 1 || !Number.isInteger(Number(dateValue[2]))) {
    outputVal = false;
  }
  return outputVal;
}
