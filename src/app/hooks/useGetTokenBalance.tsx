

'use client'

import { ethers, providers } from 'ethers'
import React, { useMemo, useState } from 'react'
import ABI_ERC20 from '../_contract/ILady.json'
import { useAccount, useContractRead } from 'wagmi'


const useGetTokenBalance = ({addressToken, chainId}: {addressToken: string, chainId: number}) => {

    const { address } = useAccount();
    const [balance, setBalance] = useState('');
    // let provider: ethers.providers.Web3Provider;
    // provider = new ethers.providers.Web3Provider(window.ethereum as any);
    // const contract = new ethers.Contract(addressToken, ABI_ERC20, provider);

   
    // const getTokenBalance = async () => {
    //     const result = await contract.balanceOf(address);
    //     if (result) {
    //         const balance = ethers.utils.formatEther(result);
    //         console.log(balance)
    //     }
    // }

    // getTokenBalance();
    
    useContractRead({
        address: addressToken as `0x${string}`,
        abi: ABI_ERC20,
        functionName: "balanceOf",
        chainId: Number(chainId),
        args: [address],
        cacheOnBlock: true,
        watch: true,
        onSuccess(data) {
            if (data) {
                const result = ethers.utils.formatEther(data as any);
                setBalance(result);
            }
        },
    });


    return (
        useMemo(() => {
            return {balance};
        },[balance , address])
    )
}

export default useGetTokenBalance
