import { ChildComponent } from "./ChildComponent"

export const ParentComponet = () =>{
    const greetParent = (childName) =>{
        alert(`Hello Parent ${childName}`)
    }
    return <ChildComponent greetHandler={greetParent}/>
}