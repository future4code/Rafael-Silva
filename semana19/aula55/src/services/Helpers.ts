import { format } from 'date-fns';
import { v4 } from 'uuid';

/**
 * ################
 * ###   MISC   ###
 * ################
 */

export const uuid = (): string => v4();

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
