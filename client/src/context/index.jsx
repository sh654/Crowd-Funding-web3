import React, { useState, createContext, useContext } from 'react';

import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContexProvider = ({ children }) => {
    const { contract } = useContract('0x0A4a822B3Ce996A02b22A9d8f48C1D5812b9DdA6');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();  

    const publishCamapaign = async (form) => {
        try {
            const data = await createCampaign([
                address, //owner
                form.title, //title
                form.description, //description
                form.target, 
                new Date(form.deadline).getTime(), //deadline
                form.image
            ])

            console.log("contract call success", data)
        } catch (error) {
            console.log("contract call failure",error)
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                createCampaign: publishCamapaign,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);