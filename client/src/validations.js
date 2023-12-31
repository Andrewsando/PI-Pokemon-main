export default function validations(data, name) {
  const regex = new RegExp("^[A-Za-z_]+$");

  let incorrect = {name: [],
image: ''};

  if (name === "name") {
    if (data.length > 10) {
      incorrect.name = [
        ...incorrect.name,
        "Your pokemon's name cannot have more than 10 letters.",
      ];
    }
    if (data.length <= 0) {
      incorrect.name = [...incorrect.name, "You must enter a name"];
    }
    if (!regex.test(data)) {
      incorrect.name = [
        ...incorrect.name,
        "The name of your pokemon cannot have numbers",
      ];
    }
  } else {
    if (data.length > 250) {
      incorrect.img ="Your image URL is too long";
    }
  }

  return incorrect;
}
