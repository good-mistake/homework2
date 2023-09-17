function search(x: string) {
  let firstName = [];
  for (let i = 0; i < 5; i++) {
    let userName = prompt(`Enter your name:`);
    firstName.push(userName);
    console.log(firstName);
  }

  let enterSearch = prompt(`search:${x}`);
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
