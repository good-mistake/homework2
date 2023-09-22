function search(x: string) {
  let firstName: string[] = ["first"];
  for (let i = 0; i < firstName.length; i++) {
    let userName: string = prompt(`Enter your name:`) as string;
    firstName.push(userName);
    if (firstName.length % 5 === 0) {
      let askForSearch: number = parseInt(
        prompt(
          "Press 1 for search OR 2 to stop OR any other key to continue:"
        ) as string
      );
      if (askForSearch === 1) {
        let enterSearch: string = prompt(`search:${x}`) as string;
        console.log(firstName.includes(enterSearch));
        let stopSearch: number = parseInt(
          prompt(
            "Press 1 if you want to stop OR press any other key to continue:"
          ) as string
        );
        if (stopSearch === 1) {
          break;
        }
      } else if (askForSearch === 2) {
        break;
      }
    }
    console.log(firstName);
  }

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
