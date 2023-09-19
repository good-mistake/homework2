function add_to_cart(i: string) {
  let items: string[] = [];
  for (let x: number = 0; x < 100; x++) {
    let askForItem = prompt(`Enter a new Item:${i}`);
    askForItem ? items.push(askForItem) && console.log(items) : "";
  }
  return items;
}
add_to_cart("");
