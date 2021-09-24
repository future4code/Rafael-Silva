const ageFromDateOfBirthday = (dateOfBirth: string): any => {
    const today = new Date();

    const newDateOfBirth = dateOfBirth.split("/")

    const day = Number(newDateOfBirth[0])
    const month = Number(newDateOfBirth[1])
    const year = Number(newDateOfBirth[2]);


    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
};


module.exports = ageFromDateOfBirthday