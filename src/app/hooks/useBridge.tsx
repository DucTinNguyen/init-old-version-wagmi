import React from 'react'

import BridgeABI from '../_contract/Bridge.json'
import ERC20 from '../_contract/ILady.json'
import { ethers } from 'ethers';
import { useAccount, useSigner } from 'wagmi';

const useBridge =  ({ amount, desAddress, tokenAddress }: {
    amount: string;
    desAddress: string;
    tokenAddress: string;
}) => {

    const { data: signer } = useSigner({
        chainId: Number(5)
    })

    const { address } = useAccount();

    const provider = new ethers.providers.Web3Provider(window.ethereum as any);


    const approveBridge = async () => {

        try {
            const contract = new ethers.Contract(tokenAddress, ERC20, signer as any);
            return await contract.approve(String(process.env.NEXT_PUBLIC_LADYS_BRIDE_A), ethers.utils.parseEther(amount.toString()))
        } catch (err: any) { 
            if (err.code === 4001) {
                // User denied transaction
                console.log('User denied transaction');
            } else {
                // Other error
                console.log(err);
            }
        }
        
    }
    

    const bridge = async () => {
        const contract = new ethers.Contract(String(process.env.NEXT_PUBLIC_LADYS_BRIDE_A), BridgeABI, signer as any);
        await approveBridge();
        const res = await contract.bridge(ethers.utils.parseUnits(amount.toString()), 421613)
        return await res.wait();
    }

    return {
        approveBridge,
        bridge
    }


}

export default useBridge
