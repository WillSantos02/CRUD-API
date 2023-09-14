import { badRequest } from "../helpers";
import { HttpResponse } from "../protocols";
import { IPasswordValidator } from "./protocols";

export class PasswordValidator implements IPasswordValidator {
  async passwordIsValid(
    password: string
  ): Promise<HttpResponse<string> | boolean> {
    if (password.length < 8) {
      return badRequest("mínimo de oito caracteres");
    }

    const specialCharacters = /[!@#$%^&*()_+{}:;<>,.?~\\/-]/;
    if (!specialCharacters.test(password)) {
      return badRequest("mínimo de um caractere especial");
    }

    const uppercaseLetters = /[A-Z]/;
    if (!uppercaseLetters.test(password)) {
        return badRequest("mínimo de uma letra maiúscula");
    }

    const lowercaseLetters = /[a-z]/;
    if (!lowercaseLetters.test(password)) {
        return badRequest("mínimo de uma letra minúscula");
    }

    const digitCount = password.replace(/[^0-9]/g, "").length;
    if (digitCount < 2) {
        return badRequest("mínimo de dois números");
    }

    return true;
  }
}

export default PasswordValidator;
