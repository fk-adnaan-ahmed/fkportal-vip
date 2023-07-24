import {
  ChainId,
  ConnectWallet,
  useAddress,
  useContract,
  useNetworkMismatch,
  useOwnedNFTs,
  useSwitchChain
} from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import {NextPage} from "next";
import PassList from "../components/PassList";
import {Spacer, useModal} from "@nextui-org/react";
import VIPContent from "../components/VIPContent";
import {useEffect} from "react";
import {showToast} from "../utils/Toast";
import {ERC1155_ADDRESS} from "../contants";
import SplashComponent from "../components/SplashComponent";

const Home: NextPage = () => {


  const { setVisible, bindings } = useModal();
  const address = useAddress();
  const switchChain = useSwitchChain();
  const isWrongNetwork = useNetworkMismatch()

  useEffect(() => {
    if (isWrongNetwork && switchChain) {
      switchChain(ChainId.Mumbai)
          .then(value => showToast('chain switched'))
          .catch(reason => showToast('chain switch failed', 'error'))
    }
  }, [address, isWrongNetwork, switchChain])

  const {contract} = useContract(ERC1155_ADDRESS);
  const {data, isLoading} = useOwnedNFTs(contract, address)

  if (!address || !contract || !data || isLoading) return <SplashComponent />


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText4}>
              <text>
                FLIPKART GOLD PORTAL
              </text>
            </span>
          </h1>
          <Spacer y={1}/>
          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>
        <PassList nfts={data} totalCount={4} onCardClick={() => setVisible(true)}/>
        <VIPContent setVisible={setVisible} bindings={bindings}/>
      </div>
    </main>
  );
};

export default Home;
