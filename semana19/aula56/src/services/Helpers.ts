import { format } from 'date-fns';
import { v4 } from 'uuid';
import dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

/**
 * ####################
 * ###   VALIDATE   ###
 * ####################
 */

export const isEmail = (emailAdress: string): boolean => {
    // eslint-disable-next-line no-useless-escape
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regexEmail)) {
        return true;
    }

    return false;
};

export const isPasswd = (password: string, hash: string): boolean =>
    bcrypt.compareSync(password, hash);

/**
 * ####################
 * ###   PASSWORD   ###
 * ####################
 */

export const passwd = (password: string): string => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = bcrypt.genSaltSync(rounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
};

/**
 * ################
 * ###   DATE   ###
 * ################
 */

export const dateFmt = (date: string, formatStr = 'dd/MM/yyyy'): string =>
    format(new Date(date), formatStr);

export const dateFmtBack = (date: string, formatStr = 'yyyy-MM-dd'): string => {
    const newDate = date.split('/');

    const day = Number(newDate[0]);
    const month = Number(newDate[1]) - 1;
    const year = Number(newDate[2]);

    return format(new Date(year, month, day), formatStr);
};

/**
 * ################
 * ###   MISC   ###
 * ################
 */

export const uuid = (): string => v4();
