function userCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];


    return {
        getCardOptions() {
            return {balance, transactionLimit, historyLogs, key};
        },
        putCredits(amountCredits) {
            balance += amountCredits;

            historyLogs.push({
                operationType: 'Received credits',
                credits: amountCredits,
                operationDate: new Date().toLocaleString('en-GB')
            });
        },
        takeCredits(amountCredits) {
            if (transactionLimit > amountCredits && balance > amountCredits) {
                balance -= amountCredits;

                historyLogs.push({
                    operationType: 'Withdrawal credits',
                    credits: amountCredits,
                    operationDate: new Date().toLocaleString('en-GB')
                });
            } else {
                console.log('Sorry, you can not take credits from the card!');
            }
        },
        setTransactionLimit(amountCredits) {
            transactionLimit = amountCredits;
            historyLogs.push({
                operationType: 'Transaction limit change',
                credits: amountCredits,
                operationDate: new Date().toLocaleString('en-GB')
            });
        },
        transferCredits(amountCredits, card) {
            const tax = 0.005;
            if (transactionLimit > amountCredits && balance > amountCredits) {
                amountCredits -= amountCredits * tax;
                card.putCredits(amountCredits);
            } else {
                console.log('Sorry, you can not perform this operation!');
            }
        }
    }
}

class UserAccount {

    constructor(name) {
        this.name = name;
        this.cards = [];
        this.limit = 3;
    }

    addCard() {
        if (this.cards.length >= this.limit) {
            console.log('Sorry, you can not perform this operation!');
        } else {
            let card = userCard(this.cards.length + 1);
            this.cards.push(card);
        }
    }

    getCardByKey(key) {
        return this.cards[key - 1];

    }
}

