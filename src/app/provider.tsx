'use client'

import React from 'react'
import useWagmi from './hooks/useWagmi';
import { WagmiConfig } from 'wagmi';
import { Web3Modal } from '@web3modal/react';

const Provider = ({children}: {children: React.ReactNode}) => {

    const [mounted, setMounted] = React.useState<boolean>(false);
    React.useEffect(() => setMounted(true), []);

    const { wagmiClient, ethereumClient, projectId }: any = useWagmi();

  return (
    <>
          {mounted && wagmiClient && (
              <WagmiConfig client={wagmiClient}>
                  {children}
              </WagmiConfig>
          )}
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}

export default Provider
