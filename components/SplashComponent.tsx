import {Progress} from "@nextui-org/react";
import {ConnectWallet} from "@thirdweb-dev/react";
import React from "react";

export default function SplashComponent() {

    return (
        <div style={{
            flexDirection: 'column',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <ConnectWallet
                style={{marginBottom: '2rem'}}
                dropdownPosition={{
                    side: "bottom",
                    align: "center",
                }}
            />
            <Progress style={{width: '400px'}} indeterminated value={20} color='primary' status='primary'/>
        </div>
    )
}


