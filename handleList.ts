interface User {
  userName: string[];
  userNumber: number[];
}
const user: User = {
  userName: [],
  userNumber: [],
};
function contact(i: string, x: number) {
  for (let z = 0; z < 3; z++) {
    let name: string = prompt(
      `Please enter a name:example(${i}) =  `
    ) as string;
    // let number = parseInt(prompt(`Please enter a number:example(${x}) =  `));
    let number: number = parseInt(
      prompt(`Please enter a number:example(${x}) =  `) as string
    );
    user.userName.push(name);
    user.userNumber.push(number);

    console.log(user);
  }
  //search
  let enterSearch: string = prompt(
    `search a name on the list like: ${i}`
  ) as string;
  console.log(user.userName.includes(enterSearch));
  return user;
}

contact("reza", 9177777777);
