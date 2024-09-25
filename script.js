

let onHomePage = true;

function togglePage() {
    if (onHomePage) {
        window.location.href = './blog.html';
    } else {
        window.location.href = './index.html';
    }

    onHomePage = !onHomePage;

    const button = document.getElementById('toggleButton');
    button.textContent = onHomePage ? 'blog' : 'Home';
}

document.getElementById('toggleButton').addEventListener('click', togglePage);

