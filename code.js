let a = 1;
while (a<=16**2) {
    const ElementNode =  document.createElement("div");
    const AttributeNode = document.createAttribute("class");
    AttributeNode.value = "color-details";
    ElementNode.setAttributeNode(AttributeNode);
    ElementNode.style.width = `${(400/16)}px`;
    ElementNode.style.height = `${(400/16)}px`;
    ElementNode.addEventListener("mouseover",bgclr);
    document.getElementById("test-display").appendChild(ElementNode);
    a = a+1;
}

function bgclr() {
    this.style.backgroundColor = "black";
}

function display() {
    let x = document.getElementById("grid-dimensions").value;
    let b = 1;
    let mynode = document.getElementById("test-display");
    mynode.textContent = "";
    while (b<=x**2) {
        const ElementNode =  document.createElement("div");
        const AttributeNode = document.createAttribute("class");
        AttributeNode.value = "color-details";
        ElementNode.setAttributeNode(AttributeNode);
        ElementNode.style.width = `${(400/x)}px`;
        ElementNode.style.height = `${(400/x)}px`;
        ElementNode.addEventListener("mouseover",bgclr);
        document.getElementById("test-display").appendChild(ElementNode);
        b = b+1;
    }
}

display()