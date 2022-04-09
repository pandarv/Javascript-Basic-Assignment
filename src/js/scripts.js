async function main() {
  // This is where the code you're actually experimenting with goes.
  const customerDatabase = [];
  let menuOption;
  do {
    output("1- Create New Car Profile \n2- View Previous Profile \n3- Quit Application");
    menuOption = Number(await input("Please Enter 1, 2 or 3 to select your option: "));
    const customerInfo = [];
    switch (menuOption) {
      case 1:
        // let inputDetail = [
        //   [firstNameInput, /^[a-z-]{1,20}$/i],
        //   [lastNameInput, /^[a-z-]{1,20}$/i],
        //   [addressInput, /^([a-z#-,.\d]( ){0,}){5,50}$/i],
        //   [carModel, /^([a-z\d]( ){0,}){1,15}$/i],
        //   [VINInput, /^[A-Z\d]{17}$/i],
        // ];
        let firstNameInput;
        while (!(firstNameInput = await input("Please Enter your First Name:  ")).match(/^[a-z-]{1,20}$/i)) {}
        customerInfo.push(firstNameInput);
        let lastNameInput;
        while (!(lastNameInput = await input("Please Enter your Last Name:  ")).match(/^[a-z-]{1,20}$/i)) {}
        customerInfo.push(lastNameInput);
        let addressInput;
        while (!(addressInput = await input(`Please Enter your Address (Between 5-50 with special characters #,-.):  `)).match(/^([a-z#-,.\d]( ){0,}){5,50}$/i)) {}
        customerInfo.push(addressInput);
        let purchaseDateInput;
        while (!isDateValid((purchaseDateInput = await input("Please Enter Date of Purchase in yyyy-mm-dd format: ")))) {}
        customerInfo.push(purchaseDateInput);
        let carBrandInput;
        while (!checkBrand((carBrandInput = await input("Please Enter your Car Brand: ")))) {}
        customerInfo.push(carBrandInput);
        let carModel;
        while (!(carModel = await input("Please Enter your car Model: ")).match(/^([a-z\d]( ){0,}){1,15}$/i)) {}
        customerInfo.push(carModel);
        let carYear;
        while (!isYearValid((carYear = await input("Please Enter Car Make Year: ")))) {}
        customerInfo.push(carYear);
        let VINInput;
        while (!(VINInput = await input("Please Enter 17 character long VIN Number: ")).match(/^[A-Z\d]{17}$/i)) {}
        customerInfo.push(VINInput.toUpperCase());
        customerDatabase.push(customerInfo);
        break;
      case 2:
        for (let [i, row] of customerDatabase.entries()) {
          output(`\nCustomer #${i + 1}`);
          for (let item of row) {
            output(`       ${item}`);
          }
        }
        break;
      case 3:
        output("Goodbye!");
        break;
      default:
        output("Please select the valid option.");
    }
  } while (menuOption != 3);
}
// let checkVal = (inputVal, regEx) => regEx.test(inputVal);

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

function isYearValid(inputVal) {
  return Number(inputVal) >= 1990 && Number(inputVal <= new Date().getFullYear() + 1);
}

function isDateValid(inputVal) {
  let outputVal = true;
  let dateValue = inputVal.split("-");
  // Year Validation
  if (dateValue[0] > new Date().getFullYear()) {
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
