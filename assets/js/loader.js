document.addEventListener("DOMContentLoaded", function () {
    const components = document.querySelectorAll('[data-include]');
    let loadedCount = 0;

    if (components.length === 0) {
        hideSpinner();
        return;
    }

    components.forEach(async (el) => {
        const path = el.getAttribute('data-include');
        
        try {
            const response = await fetch(path);
            if (!response.ok) throw new Error();
            const html = await response.text();
            el.outerHTML = html;
        } catch (err) {
            console.error("Could not find file:", path);
            el.innerHTML = `<div style="color:red; background: #fee; padding:10px;">Error: Check if ${path} exists.</div>`;
        } finally {
            loadedCount++;
            if (loadedCount === components.length) {
                setTimeout(hideSpinner, 500);
            }
        }
    });

    setTimeout(hideSpinner, 4000); // Safety
});

function hideSpinner() {
    const spinner = document.getElementById('spinner');
    if (spinner) {
        spinner.classList.remove('show');
        setTimeout(() => { spinner.style.display = 'none'; }, 500);
    }
}