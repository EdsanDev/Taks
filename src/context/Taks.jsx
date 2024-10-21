import { createContext,useContext,useState } from "react";

const TaksContext = createContext();

export const useTaks = () => {
    const context = useContext(TaksContext);
    if(!context){
        throw new Error("useTaks must be used within a TaksProvider")
    }
    return context
}
export function TaksProvider({children}){
    const [taks, setTaks] = useState([]);

    const registerTaks = (data) => {
        try {
            setTaks((prevTaks) => [...prevTaks,data])
            console.log('[+] se Ha registrado los datos correctos')
        } catch (error) {
            console.log(error)
        }
    }
    const Destroy = (data) => {
        setTaks((prevTaks)=> prevTaks.filter((_,i)=>i !== data));
    }

    return(
        <TaksContext.Provider
            value={{
                taks,
                registerTaks,
                Destroy
            }}
        >
            {children}
        </TaksContext.Provider>
    );
}
