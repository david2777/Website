function show_hide() {
    let breakdown = document.getElementById('breakdown');
    let button = document.getElementById('show_hide_button')
    if (breakdown.style.display === 'none') {
        breakdown.style.display = 'block';
        button.innerHTML = "Hide Breakdown";
    } else {
        breakdown.style.display = 'none';
        button.innerHTML = "Show Breakdown";
    }
}
