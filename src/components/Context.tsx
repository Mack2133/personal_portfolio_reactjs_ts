import { useState,createContext } from 'react';

export const CustomContext = createContext<any>([])

export const CustomeProvider = (props : any) => {
    const [works,setWorks] = useState([
        {
            id: 1,
            title: 'Portfolio',
            description: 'This is my portfolio',
            image: 'portfolio.png',
            url: ''
        },
        {
            id: 2,
            title: 'Portfolio 2',
            description: 'This is my portfolio 2',
            image: 'portfolio.png 2',
            url: ''
        }
    ]);
    return (
        <CustomContext.Provider value={[works, setWorks]}>
            {props.children}
        </CustomContext.Provider>
    )
}