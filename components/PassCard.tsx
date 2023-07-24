import {Card, Row, Text} from "@nextui-org/react";


type Props = {
    index: number
    onCardClick: () => void;
}
export default function PassCard({index, onCardClick}: Props) {
    return (
        <Card css={{h: "$24", $$cardColor: '$colors$primary'}} isPressable onPress={_e => onCardClick()}>
            <Card.Body>
                    <Text h1 color="white" weight='bold'>
                        {`PASS #${index+1}`}
                    </Text>
            </Card.Body>
        </Card>
    )
}