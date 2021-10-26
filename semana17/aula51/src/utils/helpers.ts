// `date` is a `Date` object
export const formatYmd = (date: Date) => date.toISOString().slice(0, 10);

// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
export const format = (date: Date, locale: string) => new Intl.DateTimeFormat(locale).format(date);

export const uuid = (min: number = 1000, max: number = 9000) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
