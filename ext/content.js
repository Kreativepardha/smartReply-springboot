console.log("Email wirter extensiosn - content Script Loaded")

function createAIButton = 


const observer = new MutationObserver((mutations) => {
    for(const mutation of mutations) {
        const addedNotes = Array.from(mutation.addedNodes) 
        const hasComposedElements = addedNotes.some(node => 
            node.nodeType === Node.ELEMENT_NODE && 
            (node.matches('.aDh, .btC, [role="dialog"]') || node.querySelector(' .aDh, .btC, [role="dialog"]'))
        );
        if(hasComposedElements) {
            console.log("Compose Window Detected")
            setTimeout(injectButton, 500);
        }
  
    }
});


observer.observe(document.body, {
    childList: true,
    subtree: true    
})