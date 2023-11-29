



document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    let isResizing = false;

    container.addEventListener('mousedown', startResize);
    container.addEventListener('touchstart', startResize);

    function startResize(e) {
        isResizing = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', stopResize);
        document.addEventListener('touchmove', handleTouchMove, { passive: false });
        document.addEventListener('touchend', stopResize);
    }

    function handleMouseMove(e) {
        if (isResizing) {
            container.style.width = e.clientX - container.offsetLeft + 'px';
            container.style.height = e.clientY - container.offsetTop + 'px';
        }
    }

    function handleTouchMove(e) {
        if (isResizing && e.touches.length === 1) {
            e.preventDefault(); // Prevent scrolling
            const touch = e.touches[0];
            container.style.width = touch.clientX - container.offsetLeft + 'px';
            container.style.height = touch.clientY - container.offsetTop + 'px';
        }
    }

    function stopResize() {
        isResizing = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', stopResize);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', stopResize);
    }
});