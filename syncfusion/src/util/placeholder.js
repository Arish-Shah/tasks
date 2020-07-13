export default class Placeholder {
  constructor(string) {
    this.string = string;
  }

  fill(obj) {
    let tempString = new String(this.string);
    Object.keys(obj).forEach((key) => {
      const expression = `##${key}`;
      const regex = new RegExp(expression, 'g');
      tempString = tempString.replace(regex, obj[key]);
    });
    return tempString;
  }
}
