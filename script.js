function startTest() {
  const name = document.getElementById("username").value.trim();
  if (!name) {
    alert("Please enter your name first!");
    return;
  }

  // Redirect to questions page with name as a query param
  window.location.href = `questions.html?name=${encodeURIComponent(name)}`;
}
