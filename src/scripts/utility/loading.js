export function loader(element, duration = 1000, usingId = true) {
    // usingId represents how the element is begin accesed, obviously we need classes for toggling to start/stop animation and stuff
    if (!element) {
        return Promise.resolve();
    }

    element.style.display = "grid";

    return new Promise((resolve) => {
        setTimeout(() => {
            element.style.display = "none";
            resolve();
        }, duration);
    });
}