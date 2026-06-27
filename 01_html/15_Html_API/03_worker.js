// self.onmessage inside the worker receives it
self.onmessage = function (event) {
  let sum = 0;

  for (let i = 0; i < 1_000_000_000; i++) {
    sum += i;
  }

  //  sends result back
  self.postMessage(sum);
};
