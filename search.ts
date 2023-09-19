function search(x: string) {
  let firstName: string[] = [];
  for (let i = 0; i < 5; i++) {
    let userName: string = prompt(`Enter your name:`) as string;
    firstName.push(userName);
    console.log(firstName);
  }

  let enterSearch: string = prompt(`search:${x}`) as string;
  console.log(firstName.includes(enterSearch));
  // for (let z = 0; z < firstName.length; z++) {
  //   if (enterSearch == firstName[z]) {
  //     console.log("That name already exists");
  //     break;
  //   } else {
  //     console.log("That name doesn't exist");

  //     break;
  //   }
  // }
}
search("");
