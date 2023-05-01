const deleteForm = async function (event) {
  event.preventDefault();

  const idForm = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log(idForm);

  const responseForm = await fetch(`/api/posts/${idForm}`, {
    method: "DELETE",
    body: JSON.stringify({
      postId: idForm,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (responseForm.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(responseForm.statusText);
  }
};

document.getElementById("delete-post").addEventListener("click", deleteForm);
