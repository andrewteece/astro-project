import { useState } from "react";

function Showcase() {
const [name, setName] = useState('Andrew');

    return <div>Hello { name }</div>;
}
export default Showcase;