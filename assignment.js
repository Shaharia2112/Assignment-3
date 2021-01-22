
//#Problem 1 Solve.

function kilometerToMeter(kilometer) {
    if (kilometer <= -1) {
        return "distance cannot be negative";
    }
    else if (kilometer == " ") {
        return "distance cannot be a White Space";
    }
    else if (kilometer == 0) {
        return "distance cannot be zero";
    }
    else {
        const meter = kilometer * 1000;
        return meter;
    }
}

//#Problem 2 Solve.

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop) {

    if ((numberOfWatch % 1 == 0 && numberOfWatch > 0) && (numberOfMobile % 1 == 0 && numberOfMobile > 0) && (numberOfLaptop % 1 == 0 && numberOfLaptop > 0)) {
        let priceOfAllWatch = 50 * numberOfWatch;
        let priceOfAllMobile = 100 * numberOfMobile;
        let priceOfAllLaptop = 500 * numberOfLaptop;
        let totalMoneyRequired = priceOfAllWatch + priceOfAllMobile + priceOfAllLaptop;
        return totalMoneyRequired;
    }
    else {
        return "The number cannot be zero,less than Zero and Fractions."
    }
}

//#Problem 3 Solve.

function hotelCost(howManyDays) {
    if (howManyDays > 0 && howManyDays <= 10) {
        const totalCost = howManyDays * 100;
        return totalCost;
    }
    else if (howManyDays > 10 && howManyDays <= 20) {
        var secondTendays = (howManyDays - 10) * 80;
        totalCost = secondTendays + 1000;
        return totalCost;
    }
    else if (howManyDays > 20) {
        var anotherDays = (howManyDays - 20) * 50;
        totalCost = anotherDays + 1800;
        return totalCost;
    }
    else {
        return "This hotel is not for you.Stay at home,Thank You";
    }
}

//#Problem 4 Solve.

function megaFriend(arrayOfFriendsName) {
    let stringForCompare = "";
    let i = 0;
    let lengthOfarray = arrayOfFriendsName.length;
    if (lengthOfarray > 0) {
        while (i < lengthOfarray) {

            if (stringForCompare.length < arrayOfFriendsName[i].length) {
                stringForCompare = arrayOfFriendsName[i];
            }
            i++;
        }
        return stringForCompare;
    }

    else {
        return "Array can not be empty .";
    }
}

