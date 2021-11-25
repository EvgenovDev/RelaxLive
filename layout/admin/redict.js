if (!document.cookie || document.cookie !== "admin=true") {
  window.location.href = `${document.location.href}/../index.html`;
}
