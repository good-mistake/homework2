const user = {
  userName: [],
  UserNumber: [],
};
function contact(i: string, x: number) {
  for (let z = 0; z < 999; z++) {
    let name = prompt(`Please enter a name:example(${i}) =  `);
    let number = parseInt(prompt(`Please enter a number:example(${x}) =  `));
    user.userName.push(name);
    user.UserNumber.push(number);

    console.log(user);
  }
  return user;
}
contact("reza", 9177777777);
//search
