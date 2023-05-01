const handlerComments = async function (e) {
  e.preventDefault();

  const comment_content = document.getElementById("comment").value.trim();

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_content) {
    const fetchComments = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ post_id, comment_content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (fetchComments.ok) {
      document.location.reload();
    } else {
      alert(fetchComments.statusText);
      document.getElementById("comment-post").style.display = "block";
    }
  }
};

document
  .getElementById("comment-post")
  .addEventListener("submit", handlerComments);
