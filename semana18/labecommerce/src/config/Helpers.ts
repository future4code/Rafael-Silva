import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';

/**
 * ################
 * ###   MISC   ###
 * ################
 */

// const uuid = a =>
//     a
//         ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
//         : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);

const id = uuid();

/**
 * ################
 * ###   DATE   ###
 * ################
 */

export const dateFmt = (date: string, formatStr = 'dd/MM/yyyy'): string =>
    format(new Date(date), formatStr);

export const dateFmtBack = (date: string, formatStr = 'yyyy-MM-dd'): any => {
    const newDate = date.split('/');

    const day = Number(newDate[0]);
    const month = Number(newDate[1]) - 1;
    const year = Number(newDate[2]);

    return format(new Date(year, month, day), formatStr);
};
