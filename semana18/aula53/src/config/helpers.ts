import { format } from "date-fns";

/**
 * ################
 * ###   MISC   ###
 * ################
 */

export const create_uuid = (min: number = 1000, max: number = 9000): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// `arr` is an array
export const isEmpty = (arr: []) => !Array.isArray(arr) || arr.length === 0;

/**
 * ################
 * ###   DATE   ###
 * ################
 */

export const date_fmt = (date: string, formatStr: string = "dd/MM/yyyy"): string => {
    return format(new Date(date), formatStr);
};

export const date_fmt_back = (date: string, formatStr: string = "yyyy-MM-dd"): any => {
    const newDate = date.split("/");

    const day = Number(newDate[0]);
    const month = Number(newDate[1]) - 1;
    const year = Number(newDate[2]);

    return format(new Date(year, month, day), formatStr);
};
