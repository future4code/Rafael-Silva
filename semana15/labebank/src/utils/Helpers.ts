const ageFromDateOfBirthday = (dateOfBirth: string): number => {
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

// const date = (dateformat: string): string => {
//     if ()
//     const newDateOfBirth = dateformat.split("/");

//     const day = Number(newDateOfBirth[0]);
//     const month = Number(newDateOfBirth[1]);
//     const year = Number(newDateOfBirth[2]);
// };

// function validarCPF(inputCPF) {
//     var soma = 0;
//     var resto;
//     var inputCPF = document.getElementById("cpf").value;

//     if (inputCPF == "00000000000") return false;
//     for (i = 1; i <= 9; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (11 - i);
//     resto = (soma * 10) % 11;

//     if (resto == 10 || resto == 11) resto = 0;
//     if (resto != parseInt(inputCPF.substring(9, 10))) return false;

//     soma = 0;
//     for (i = 1; i <= 10; i++) soma = soma + parseInt(inputCPF.substring(i - 1, i)) * (12 - i);
//     resto = (soma * 10) % 11;

//     if (resto == 10 || resto == 11) resto = 0;
//     if (resto != parseInt(inputCPF.substring(10, 11))) return false;
//     return true;
// }

module.exports = {  ageFromDateOfBirthday };
