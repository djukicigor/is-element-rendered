Is element rendered after blaze if condition
===
Fixed problem when element is rendered after blaze onRendered hook.

## Installation
If you want to try or check how it looks in code. Just install meteor, clone the repo and run:
`meteor`

## Solution promise

```javascript
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
```