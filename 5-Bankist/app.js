'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2021-07-26T12:01:20.894Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-09-25T14:18:46.235Z',
    '2021-09-29T06:04:23.907Z',
    '2021-10-02T09:48:16.867Z',
    '2021-10-03T13:15:33.035Z',
  ],
  locale: 'en-US',
  currency: 'USD',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2021-07-26T12:01:20.894Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-09-25T14:18:46.235Z',
    '2021-09-29T06:04:23.907Z',
    '2021-10-02T09:48:16.867Z',
    '2021-10-03T13:15:33.035Z',
  ],
  locale: 'en-US',
  currency: 'USD',
  // locale: 'pt-PT',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2021-07-26T12:01:20.894Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-09-25T14:18:46.235Z',
    '2021-09-29T06:04:23.907Z',
    '2021-10-02T09:48:16.867Z',
    '2021-10-03T13:15:33.035Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    '2021-07-26T12:01:20.894Z',
    '2021-02-05T16:33:06.386Z',
    '2021-04-10T14:43:26.374Z',
    '2021-06-25T18:49:59.371Z',
    '2021-09-25T14:18:46.235Z',
    '2021-09-29T06:04:23.907Z',
    '2021-10-02T09:48:16.867Z',
    '2021-10-03T13:15:33.035Z',
  ],
  currency: 'USD',
  locale: 'en-US',
  // locale: 'pt-PT',
};

const accounts = [account1, account2, account3, account4];
// const movements = [account1.movements, account2.movements, account3.movements, account4.movements]
const movements = [430, 1000, -700, 50, 90];
// console.log(movements);
// let deposits = movements.filter(mov => mov > 0);
// console.log(deposits);
// let withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

let cardMovements = document.querySelector('.left-section');
// let cardAmount = document.querySelector('.card-amount');
let totalBalance = document.querySelector('.total-balance');
let accDates = document.querySelector('.acc-dates');

let ValuesInSpam = document.querySelector('.values-in-spam');
let ValuesOutSpam = document.querySelector('.values-out-spam'); 
let ValuesIntSpam = document.querySelector('.values-int-spam');

let userfield = document.getElementById('user');
let pinfield = document.getElementById('pin');  
let formSubmit = document.querySelector('.login');

let welcomeMsg = document.querySelector('.welcome-msg');
let container = document.querySelector('.container');
let container1 = document.querySelector('.container1');
let topHeader = document.querySelector('.top-header');
let logOut = document.querySelector('.logout');
let closeSubmit = document.querySelector('.close-submit');

let confirmUser = document.querySelector('#confirm-user');
let confirmPin = document.querySelector('#confirm-pin');
let requestAmount = document.querySelector('#request-amount');
let requestSubmit = document.querySelector('.request-submit');
let valuesSort = document.querySelector('.values-sort');

let timeOut = document.querySelector('.time-out');

// Transfer
const transferTo = document.querySelector('#transfer-to');
const transferAmount = document.querySelector('#transfer-amount');
const transferSubmit = document.querySelector('.transfer-submit');

const formatMovementDate = function(date, locale) {
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if(daysPassed === 0) return 'Today';
  if(daysPassed === 1) return 'Yesderday';
  if(daysPassed <= 7) return `${daysPassed} days ago`;
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function(value, locale, currency) {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

const displayMovements = function (acc, sort = false) {
    cardMovements.innerHTML = '';

    const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'Deposit' : 'Withdrawal';
      
      const date = new Date(acc.movementsDates[i]);
      const displayDate = formatMovementDate(date, acc.locale);

      const formattedMov = formatCur(mov, acc.locale, acc.currency);

      const html = `<div class="card">
      <div class="left-card">
          <div class="card-${type}">${i + 1} ${type}</div>
          <div class="card-date">${displayDate}</div>
      </div>
      <div class="card-amount">${formattedMov}</div>
  </div>`;

  cardMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// displayMovements(account1.movements);

const createUsername = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
    });
};
createUsername(accounts);
console.log(accounts);

const updateUI = function (acc) {
  displayMovements(acc);
  calcBalance(acc);
  calcSummary(acc);
}

const startLogOutTimer = () => {
  const tick = () => {
    // In each call, print remaining time to UI
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    timeOut.textContent = `${min} : ${sec}`;
    
    // When 0 sec, stop timer and log out user
    if( time === 0) {
      clearInterval(timer);
      container.style.display = 'block';
      container1.style.display = 'none';
      topHeader.style.display = 'none';
      userfield.value = pinfield.value = '';
    }
    // dec 1s
    time--;
  }
  // set time to 5 min
  let time = 120;
  // call timer every sec
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};
const calcBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // console.log(balance);
  acc.balance = balance;
  totalBalance.innerHTML = formatCur(acc.balance, acc.locale, acc.currency);
};
const calcSummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  ValuesInSpam.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
  ValuesOutSpam.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements.filter(mov => mov > 0).map(deposit => (deposit * acc.interestRate) / 100).filter((int, i, arr) => {
    // console.log(arr);
    return int >= 1;
  }).reduce((acc, int) => acc + int, 0);
  ValuesIntSpam.textContent = formatCur(interest, acc.locale, acc.currency);;
}

let currentAccount, timer;
formSubmit.addEventListener('click', () => {
  currentAccount = accounts.find(acc => acc.username === userfield.value);
  if (currentAccount?.pin === Number(pinfield.value)) {
    // to create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      // weekday: 'long',
    }
    const locale = navigator.language;
    // console.log(locale);
    accDates.innerHTML = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // const sec = `${now.getSeconds()}`.padStart(2, 0);
    // accDates.textContent = `${day}/${month}/${year}, ${hour}:${min}:${sec}`;

    container.style.display = 'none';
    container1.style.display = 'block';
    topHeader.style.display = 'block';
    welcomeMsg.innerHTML = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
    container.style.display = 'none';
    pinfield.blur();

    // timer
    if(timer) clearInterval(timer);
    timer = startLogOutTimer();
    updateUI(currentAccount);    

  confirmUser.value = confirmPin.value = '';
  } else {
    alert("Enter valid username / PIN!");
  }
});

transferSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(transferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === transferTo.value
  );
  transferAmount.value = transferTo.value = '';
  // console.log(amount, receiverAcc);
  // console.log(currentAccount.movements.push(-amount));
  // receiverAcc.movements.push(amount);
  if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    currentAccount.movementsDates.push(new Date()); //.toISOString
    receiverAcc.movementsDates.push(new Date()); //.toISOString
    updateUI(currentAccount);
    // reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

// transfer the amount if its greater than the 10% 
requestSubmit.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(requestAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date()); //.toISOString
      updateUI(currentAccount);
      // reset timer
      clearInterval(timer);
      timer = startLogOutTimer();  
    }, 2500);
  }
  requestAmount.value = '';
});

const overalBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

closeSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  if (confirmUser.value === currentAccount.username && Number(confirmPin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    accounts.splice(index, 1);
    container.style.display = 'block';
    container1.style.display = 'none';
    topHeader.style.display = 'none';  
  }
  
  confirmUser.value = confirmPin.value = '';
});

let sorted = false;
valuesSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

totalBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.card-amount'), el => Number(el.textContent.replace('$', ''))
  );
  console.log(movementsUI);
});


logOut.addEventListener('click', () => {
  container.style.display = 'block';
  container1.style.display = 'none';
  topHeader.style.display = 'none';

  userfield.value = '';
  pinfield.value = '';
});

// next 13