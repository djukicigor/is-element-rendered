// This promise is waiting 10 seconds for element to be rendered

const renderedChecker = (element) => {
    return new Promise((resolve, reject) => {
        const waitForElement = (timestamp) => {
            if (!document.querySelector(element)) {
                if (timestamp < 10000) {
                    window.requestAnimationFrame(waitForElement);
                } else {
                    reject(false);
                }
            } else {
                resolve(true)
            }
        }
        window.requestAnimationFrame(waitForElement);
    })
}

export default renderedChecker;