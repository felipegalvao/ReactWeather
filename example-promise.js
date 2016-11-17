// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }

// getTempCallback('Philadelphia', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });

// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {      
//       resolve(79);
//       reject('City not found');
//     }, 1000);    
//   });
// }

// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('One of the passed values is not a number');
    }  
  });  
}

addPromise(1, 3).then(function (sum_of_numbers) {
  console.log('promise success', sum_of_numbers);
}, function (err) {
  console.log('promise error', err);
});

addPromise(1, 'a').then(function (sum_of_numbers) {
  console.log('promise success', sum_of_numbers);
}, function (err) {
  console.log('promise error', err);
});

addPromise('a', 'b').then(function (sum_of_numbers) {
  console.log('promise success', sum_of_numbers);
}, function (err) {
  console.log('promise error', err);
});