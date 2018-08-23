const numberFour = 4;
const numberTwenty = 20;

const login = prompt(`Please enter your login`);


if (login === `` || login === null) {
    alert(`Canceled.`);
} else if(login.length < numberFour) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else if (login !== `User`) {
    alert(`I don’t know you`);
} else {
    const password = prompt(`Please enter your password`);

    if (password === `` || password === null){
        alert(`Canceled`);
    } else{
        if (password !== `SuperUser` ) {
            alert(`Wrong password`);
        } else {
            if (new Date().getHours() < numberTwenty) {
                alert(`Good day!`);
            } else {
                alert(`Good evening!`);
            }
        }
    }

    
}
