/* We created a h1 heading using react & then rendered the heading inside the DOM root 
        this was we injected h1 tag inside the root element */

const heading = React.createElement("h1", {id:"head"}, "Hello World from React ! "); //h1 element is created having some attribute id: head and content inside it  "Hello World from React"
console.log(heading); //it returns a object of react 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); //its responsible for rendering heading inside root

/**
 * Making Nested elements including siblings
 * <div id="parent">
 *      <div id="child">
 *          <h1>Child 1</h1>
 *          <h2> Child 2</h2>
 *      </div>
 * </div>
 */

 const nested = React.createElement("div",{id: "parent"}, 
                    React.createElement("div",{id: "child"},[
                         React.createElement("h1",{}, "Child 1"),
                         React.createElement("h2", {}, "Child 2")
                        ]
                        
                    )
                )
root.render(nested);                
    