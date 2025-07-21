let count = 0;

function full() {
  // Hide the initial div and show the progress div
  document.getElementById('hide').style.display = "none";
  document.getElementById('show').style.display = "block";

  // Reset count in case of multiple clicks
  count = 0;
  document.getElementById('add').innerText = count + "% Installed";

  // Start the progress
  add();
}

function add() {
  if (count >= 100) {
    count = 100;
    document.getElementById('add').innerText = count + "% Installed";
    return; // Stop when 100% is reached
  }

  count++;
  document.getElementById('add').innerText = count + "% Installed";

  setTimeout(add, 400); // Adjust timing as needed
}