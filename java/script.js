document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');
    const resizeHandle = document.querySelector('.resize-handle');
    let isResizing = false;

    resizeHandle.addEventListener('mousedown', function (e) {
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
