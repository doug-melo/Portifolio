import { Children } from "react";

function Container({children, cor}) {
    return ( 
    <div className="w-4/5 mx-auto my-0">
        {children}
        </div>
     );
}

export default Container;