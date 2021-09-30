export const ageFromDateOfBirthday = (dateOfBirth: string): number => {
    const today = new Date();

    const newDateOfBirth = dateOfBirth.split("/");

    const day = Number(newDateOfBirth[0]);
    const month = Number(newDateOfBirth[1]);
    const year = Number(newDateOfBirth[2]);

    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};

export const dateInformedByUser = (date: string): boolean => {
    const arrayDate = date.split("/");
    const dayInformedByUser = Number(arrayDate[0]);
    const monthInformedByUser = Number(arrayDate[1]);
    const yearInformedByUser = Number(arrayDate[2]);

    const today = new Date();
    const actualDay = today.getDate();
    const actualMonth = today.getMonth() + 1;
    const actualYear = today.getFullYear();

    if (dayInformedByUser < actualDay) {
        return false;
    } else if (monthInformedByUser < actualMonth) {
        return false;
    } else if (yearInformedByUser < actualYear) {
        return false;
    } else {
        return true;
    }
};
