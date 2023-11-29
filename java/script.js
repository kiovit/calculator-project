



document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementsByClassName('container');
    let isResizing = false;

    container.addEventListener('mousedown', function (e) {
        isResizing = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', () => {
            isResizing = false;
            document.removeEventListener('mousemove', handleMouseMove);
        });
    });

    function handleMouseMove(e) {
        if (isResizing) {
            container.style.width = e.clientX - container.offsetLeft + 'px';
            container.style.height = e.clientY - container.offsetTop + 'px';
        }
    }
});
