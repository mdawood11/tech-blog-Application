const newPost = async function (event) {
  event.preventDefault();

  const title = document.getElementById("new-post").value.trim();
  const content = document.getElementById("content").value.trim();

  const fetchPosts = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({ title, content }),
    headers: { "Content-Type": "application/json" },
  });

  if (fetchPosts.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(fetchPosts.statusText);
  }
};

document.getElementById("post-form").addEventListener("submit", newPost);
