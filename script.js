//your JS code here. If required.
const output = document.getElementById("output");

function log(message) {
  output.innerHTML += message + "<br>";
  console.log(message);
}

// Synchronous task
log("🛸 Alien signal received (Synchronous Task)");

// Macrotask
setTimeout(() => {
  log("📡 Processing large alien transmission (Macrotask)");
}, 0);

// Microtask
Promise.resolve().then(() => {
  log("⚡ Decoding alien micro-signal (Microtask)");
});

// Another synchronous task
log("👨‍🚀 Human response prepared (Synchronous Task)");
