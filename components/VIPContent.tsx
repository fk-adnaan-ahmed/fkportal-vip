import {Button, Modal} from "@nextui-org/react";
import {Dispatch, SetStateAction} from "react";


type Props = {
    setVisible: Dispatch<SetStateAction<boolean>>
    bindings: {
        open: boolean;
        onClose: () => void;
    }
}
export default function VIPContent({setVisible, bindings}: Props) {

    return (
        <Modal
            fullScreen
            closeButton
            {...bindings}
        >
            <Modal.Body>
                <div>
                    <video width='75%' height='75%' controls={false} autoPlay>
                        <source src='/videos/rickroll.mp4' type='video/mp4'/>
                    </video>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onPress={() => setVisible(false)}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}