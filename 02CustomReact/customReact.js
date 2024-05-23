const mainElement = document.querySelector("#root")

const reactElement = {
    type : "a" , 
    props : {
        href : 'https://www.google.com/', 
        target : "_blank"
    },
    children : "click here to visit google" 
}


function  renderElement(reactElement, mainElement){
   
    const createElement = document.createElement(reactElement.type)
   
    /*
    createElement.setAttribute("href" , reactElement.props.href)
    createElement.setAttribute("target" , reactElement.props.target)
    */

    for (const prop in reactElement.props) {
        if (prop === "children") continue ; 

        createElement.setAttribute(prop , reactElement.props[prop])
    }

    createElement.innerHTML = reactElement.children

    mainElement.appendChild(createElement)
    
}



renderElement(reactElement, mainElement)
