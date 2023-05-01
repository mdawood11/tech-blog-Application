const editForm = async function (event) {
  event.preventDefault();

  const titleForm = document.getElementById("post-title").value.trim();
  const contentForm = document.getElementById("content").value.trim();

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const postResponse = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ post_id: id, titleForm, contentForm }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (postResponse.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
};

document.getElementById("update-post").addEventListener("click", editForm);
