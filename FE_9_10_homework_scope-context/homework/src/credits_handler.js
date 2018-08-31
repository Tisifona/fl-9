/* Your code goes here */

function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = 100;


    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        },
        putCredits(amountCredits){
            balance+=amountCredits;

            historyLogs.push({
               operationType: 'Received credits',
                credits: amountCredits,
                //дата кредиту
            });
        },
        takeCredits(amountCredits){
            if(transactionLimit > amountCredits && balance > amountCredits){
                balance-=amountCredits;

                historyLogs.push({
                    operationType: 'Withdrawal credits',
                    credits: amountCredits,
                    //дата кредиту
                });
            }else {
                console.log('Sorry, you can not take credits from the card!');
            }
        },
        setTransactionLimit(amountCredits){
            transactionLimit = amountCredits;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amountCredits,
                //дата кредиту
            });
        }
    }

}

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
    }
}
