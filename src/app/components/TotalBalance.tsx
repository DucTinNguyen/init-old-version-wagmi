'use client'
import React, { memo, useMemo } from 'react'
import { useNetwork } from 'wagmi';
import useGetTokenBalance from '../hooks/useGetTokenBalance';

type Props = {}

const TotalBalance = ({ addressToken, chainId }: { addressToken: string, chainId: number }) => {


    const {balance} = useGetTokenBalance({
        addressToken: addressToken,
        chainId: Number(chainId)
    })

    
  return (
      <div>{ balance} Ladys</div>
  )
}

export default memo(TotalBalance);