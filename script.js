function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function handleClick() {
  const input = parseInt(prompt("Enter a non-negative integer:"), 10);
  if (!isNaN(input) && input >= 0) {
    alert("Number of trailing zeros in " + input + "! is: " + trailingZeros(input));
  } else {
    alert("Please enter a valid non-negative integer.");
  }
}
