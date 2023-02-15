import { useState } from "react";

export default function useForm(){

    const [text,setText] = useState();
   
    
    return [text,setText];
}