function show_hide() {
    var breakdown = document.getElementById('breakdown');
    var button = document.getElementById('show_hide_button')
    if (breakdown.style.display === 'none') {
        breakdown.style.display = 'block';
        button.innerHTML = "Hide Breakdown";
    } else {
        breakdown.style.display = 'none';
        button.innerHTML = "Show Breakdown";
    }
}
