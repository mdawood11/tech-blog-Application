const logOut = async function (event) {
  event.preventDefault();

  const fetchLogout = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (fetchLogout.ok) {
    document.location.replace("/");
  } else {
    alert(fetchLogout.statusText);
  }
};

document.getElementById("log-out").addEventListener("click", logOut);
