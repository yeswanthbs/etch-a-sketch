
//function display() {
    //var x = document.getElementById("grid-dimensions").value;
    //document.getElementById("test-display").innerHTML = x;
//}

let n = 1
const div1 = getElementById("align")
const div2 = getElementById("test-display")
while (n<=16**2) {
    const ElementNode =  document.createElement("div")
    const AttributeNode = document.createAttribute("class")
    AttributeNode.value = "color-details"
    ElementNode.setAttributeNode(AttributeNode)
    document.getElementById("test-display").appendChild(ElementNode)
    n=n+1
}

function display() {
    let x = document.getElementById("grid-dimensions").value;
    let a = 1
    while (a<=x**2) {
    const ElementNode =  document.createElement("div")
    const AttributeNode = document.createAttribute("class")
    AttributeNode.value = "color-details"
    ElementNode.setAttributeNode(AttributeNode)
    document.getElementById("test-display").appendChild(ElementNode)
    a = a+1
    }
}