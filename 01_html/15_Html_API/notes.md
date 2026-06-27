### What is a Web Worker?

When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is an external JavaScript file that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.

Web workers are useful for heavy code that can't be run on the main thread, without causing long tasks that make the page unresponsive.

## code

const worker = new Worker("worker.js");

// Send work
worker.postMessage(data);

// Receive result
worker.onmessage = (event) => {
console.log(event.data);
};

// Stop the worker when you're done
worker.terminate();

## When should you use one?

Use a Web Worker for CPU-intensive tasks, such as:

Large loops
Image editing
Video processing
Data compression
Cryptography
Parsing large JSON files
Machine learning in the browser


