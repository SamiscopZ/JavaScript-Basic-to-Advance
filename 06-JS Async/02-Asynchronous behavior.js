// asynchronous behavior of Javascript

/*
console.log('1at code');

setTimeout(() => {
  console.log('2nd code');
}, 1000);

setInterval(() => {
  console.log('4th code');
}, 1000);

console.log('3rd code');
*/
//  example

const paymentDone = true;
const marks = 53;

function enroll(back) {
  console.log('Course enrollment is in progress.');

  setTimeout(() => {
    if (paymentDone) {
      back();
    } else {
      console.log('Payment is not successful yet! ');
    }
  }, 2000);
}

function progress(back) {
  console.log('Course on progressing... ');

  setTimeout(() => {
    if (marks >= 80) {
      back();
    } else {
      console.log('Your performance is not enough to get certificate. ');
    }
  }, 3000);
}

function getCertificate() {
  console.log('Preparing your certificate');

  setTimeout(() => {
    console.log('Congrats! Your certificate is ready to avail.');
  }, 1000);
}

enroll(() => {
  progress(getCertificate);
});
