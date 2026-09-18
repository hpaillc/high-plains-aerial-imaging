document.getElementById("quoteForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  const f = new FormData(this);
  const subject = encodeURIComponent("Website Quote Request - " + (f.get("service") || "Agriculture Services"));
  const body = encodeURIComponent(
    "Name: " + f.get("name") + "\n" +
    "Farm/Ranch/Company: " + f.get("company") + "\n" +
    "Phone: " + f.get("phone") + "\n" +
    "Email: " + f.get("email") + "\n" +
    "Location/County: " + f.get("location") + "\n" +
    "Approx. acres: " + f.get("acres") + "\n" +
    "Service: " + f.get("service") + "\n\n" +
    "Project details:\n" + f.get("message")
  );
  window.location.href = "mailto:highplainsimaging590@gmail.com?subject=" + subject + "&body=" + body;
});