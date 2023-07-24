import {Grid, Text} from "@nextui-org/react";
import PassCard from "./PassCard";
import {NFT} from "@thirdweb-dev/sdk";

type Props = {
    nfts: NFT[] | undefined
    totalCount: number
    onCardClick: () => void;
}

export default function PassList({nfts, totalCount, onCardClick}: Props) {

    if (!nfts || nfts.length == 0) return <Text h1> NO NFT PASSES FOUND</Text>

    return (
        <Grid.Container gap={4} justify='flex-start'>
            {
                nfts.map((value, index) => <Grid key={value.metadata.id} xs={6}>
                    <PassCard index={Number(value.metadata.id)} onCardClick={onCardClick}/>
                </Grid>)
            }

        </Grid.Container>
    )

}