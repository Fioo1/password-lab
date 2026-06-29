export function generatePassword(
  length,
  uppercase,
  lowercase,
  numbers,
  symbols
) {

  let characters = "";

  if (uppercase)
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (lowercase)
    characters += "abcdefghijklmnopqrstuvwxyz";

  if (numbers)
    characters += "0123456789";

  if (symbols)
    characters += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (characters === "")
    return "";

  let password = "";

  for (let i = 0; i < length; i++) {

    const randomIndex = Math.floor(
      Math.random() * characters.length
    );

    password += characters[randomIndex];

  }

  return password;

}