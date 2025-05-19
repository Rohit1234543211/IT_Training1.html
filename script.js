document.addEventListener('DOMContentLoaded', function() {
    // Set body styles
    document.body.style.background = '#1976d2';
    document.body.style.height = '100vh';
    document.body.style.margin = '0';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';

    // Create clock div
    const clockDiv = document.createElement('div');
    clockDiv.style.color = '#fff';
    clockDiv.style.fontSize = '3rem';
    clockDiv.style.fontFamily = 'Arial, sans-serif';
    clockDiv.style.fontWeight = 'bold';
    clockDiv.style.background = 'rgba(0,0,0,0.2)';
    clockDiv.style.padding = '40px 60px';
    clockDiv.style.borderRadius = '20px';
    clockDiv.style.boxShadow = '0 4px 16px rgba(0,0,0,0.2)';
    clockDiv.style.textAlign = 'center';

    document.body.appendChild(clockDiv);

    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clockDiv.textContent = timeString;
    }

    updateClock();
    setInterval(updateClock, 1000);
});
