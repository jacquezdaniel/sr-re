document.addEventListener("DOMContentLoaded", function() {
  // Initializes Materialize JavaScript components.
  const parallax = M.Parallax.init(document.querySelectorAll(".parallax"));
  const select = M.FormSelect.init(document.querySelectorAll("select"));
  const sidenav = M.Sidenav.init(document.querySelectorAll(".sidenav"));
  const tabs = M.Tabs.init(document.querySelectorAll(".tabs"));
  const slider = M.Slider.init(document.querySelectorAll(".slider"));
  const dropdown = M.Dropdown.init(
    document.querySelectorAll(".dropdown-trigger")
  );
  const toast = M.toast.intit(document.querySelectorAll(".toast"));
});
