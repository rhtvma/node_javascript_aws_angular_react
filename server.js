/**
 
  Callback functions are used for Asynchronous events. Whenever any asynchronous
  event has to be done it is generally preferred to use callbacks (if data is not nested or inter-dependent).

 What are Promises?
  A promise is basically an advancement of callbacks in Node.  
  In other words, a promise is a JavaScript object which is used to handle all the asynchronous data operations.
   While developing an application you may encounter that you are using a lot of nested callback functions. 

A Promise is in one of these states:
  - pending: initial state, neither fulfilled nor rejected.
  - fulfilled: meaning that the operation was completed successfully.
  - rejected: meaning that the operation failed.

 
 */

  const promiseA = new Promise((resolve, reject) => {
    resolve(777);
  });
  // At this point, "promiseA" is already settled.
  promiseA.then((val) => console.log("asynchronous logging has val:", val));
  console.log("immediate logging");
  
  // produces output in this order:
  // immediate logging
  // asynchronous logging has val: 777

  /**
  Promise concurrency - The Promise class offers four static methods to facilitate async task concurrency:

  Promise.all()
    Fulfills when all of the promises fulfill; rejects when any of the promises rejects.

    Takes an iterable of promises as input and returns a single Promise. 
    This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), 
    with an array of the fulfillment values. It rejects when any of the input's promises reject, 
    with this first rejection reason.

  Promise.allSettled()
    Fulfills when all promises settle.

    Takes an iterable of promises as input and returns a single Promise. 
    This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), 
    with an array of objects that describe the outcome of each promise.

  Promise.any()
    Fulfills when any of the promises fulfills; rejects when all of the promises reject.

    Takes an iterable of promises as input and returns a single Promise. 
    This returned promise fulfills when any of the input's promises fulfill, 
    with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), 
    with an AggregateError containing an array of rejection reasons.

  Promise.race()
    Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

    Takes an iterable of promises as input and returns a single Promise. 
    This returned promise settles with the eventual state of the first promise that settles.
   */