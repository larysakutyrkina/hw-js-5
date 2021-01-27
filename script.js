function createNewUser () {
    const newUser = {
        Name : prompt("Please enter name"),
        lastName : prompt("Please enter lastname"),
        birthDate : prompt("Please enter your birth date in this format: dd.mm.yyyy"),

        getLogin() {
            return ((this.Name[0] + this.lastName.trim()).toLowerCase());
        },
        getAge () {
            let today = new Date();
            let age = today.getFullYear() - this.birthDate.slice(6);

            if (today.getMonth() > this.birthDate.slice(3, 5)){
                    return age;
                } if (today.getDate() > this.birthDate.slice(0, 3)){
                    return age;
            }else {
              return  age = age - 1;
            }
        },
        getPassword () {
            return (((this.Name[0]).toUpperCase() + (this.lastName + this.birthDate.slice(6)).toLowerCase()).trim());
        },
    }
    return newUser;
}

const firstUser = createNewUser();

console.log(firstUser.getLogin());
console.log(firstUser.getAge());
console.log(firstUser.getPassword());


