async function main() {
  const customerDatabase = [];
  let menuOption;
  do {
    output("1- Create New Car Profile \n2- View Previous Profile \n3- Quit Application");
    menuOption = Number(await input("Please Enter 1, 2 or 3 to select your option: "));
    const customerInfo = [];
    switch (menuOption) {
      case 1:
        let inputDetail = [
          [`Please Enter your First Name: `, (x) => !/^[a-z-]{1,20}$/i.test(x)],
          [`Please Enter your Last Name:  `, (x) => !/^[a-z-]{1,20}$/i.test(x)],
          [`Please Enter your Address (Between 5-50 with special characters #,-.):  `, (x) => !/^([a-z#-,.\d]( ){0,}){5,50}$/i.test(x)],
          [`Please Enter Date of Purchase in yyyy-mm-dd format: `, (x) => !/^(199[0-9]|200\d|201\d|202[0-2])-(02-(0[1-9]|[12][0-9])|(0[469]|11)-(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))$/.test(x)],
          [`Please Enter your Car Brand: `, (x) => !["bmw", "gm", "honda", "toyota", "audi", "kia"].includes(x.toLowerCase())],
          [`Please Enter your Car Model: `, (x) => !/^([a-z\d]( ){0,}){1,15}$/i.test(x)],
          [`Please Enter Car Make Year: `, (x) => !/^(199[0-9]|200\d|201\d|202[0-3])$/.test(x)],
          [`Please Enter 17 character long VIN Number: `, (x) => !/^[A-Z\d]{17}$/i.test(x)],
        ];
        for (item of inputDetail) {
          while (item[1]((userInput = (await input(item[0])).trim())));
          customerInfo.push(userInput.toUpperCase());
        }
        customerDatabase.push(customerInfo);
        break;
      case 2:
        for (let [i, row] of customerDatabase.entries()) {
          output(`\nCustomer #${i + 1}\n   First Name:${row[0]}\n   Last Name:${row[1]}\n   Address:${row[2]}\n   Purchase Date:${row[3]}\n   Car Brand:${row[4]}\n   Car Model:${row[5]}\n   Car Year:${row[6]}\n   Car VIN Number:${row[7]}`);
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
