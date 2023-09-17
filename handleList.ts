const user = {
  userName: [],
  UserNumber: [],
};
function contact(i: string, x: number) {
  for (let z = 0; z < 5; z++) {
    let name = prompt(`Please enter a name:example(${i}) =  `);
    let number = parseInt(prompt(`Please enter a number:example(${x}) =  `));
    user.userName.push(name);
    user.UserNumber.push(number);

    console.log(user);
  }
  //search
  let enterSearch = prompt(`search a name on the list like: ${i}`);
  console.log(user.userName.includes(enterSearch));
  return user;
}

contact("reza", 9177777777);
