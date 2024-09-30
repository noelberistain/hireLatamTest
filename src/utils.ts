/*
    Found a Reg Ex. to validate emails in following ways

    The email couldn't start or finish with a dot
    The email shouldn't contain spaces into the string
    The email shouldn't contain special chars (<:, *,ecc)
    The email could contain dots in the middle of mail address before the @
    The email could contain a double doman ( '.de.org' or similar rarity)
*/

const emailValidationReg = '/^((?!.)[w-_.]*[^.])(@w+)(.w+(.w+)?[^.W])$/gim';

export const verifyEmail = (input: string) => emailValidationReg.match(input);
