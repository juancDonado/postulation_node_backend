import bcrypt from "bcrypt";

export const encryptPassword = (password: string) => {
    const passEnCrypt = bcrypt.hashSync(password, 10);

    return passEnCrypt;
}

export const validPassword = (password: string, passValid: string) => {
    const equal = bcrypt.compareSync(password, passValid!);

    return equal;
}