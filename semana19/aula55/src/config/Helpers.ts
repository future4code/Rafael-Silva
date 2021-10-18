import { format } from 'date-fns';

/**
 * ################
 * ###   MISC   ###
 * ################
 */

export const uuid = () => {
    return (
        Number(Date.now().toString(10).substr(2, 4)) +
        Number(Math.random().toString(10).substr(2, 4))
    );
};

/**
 * ################
 * ###   DATE   ###
 * ################
 */

export const date_fmt = (
    date: string,
    formatStr: string = 'dd/MM/yyyy',
): string => {
    return format(new Date(date), formatStr);
};

export const date_fmt_back = (
    date: string,
    formatStr: string = 'yyyy-MM-dd',
): any => {
    const newDate = date.split('/');

    const day = Number(newDate[0]);
    const month = Number(newDate[1]) - 1;
    const year = Number(newDate[2]);

    return format(new Date(year, month, day), formatStr);
};
