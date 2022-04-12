
function Erc721({ erc721list }) {
    return (
        <div className="erc721list">
            {erc721list.map((token) => {
                return (
                    <div key = {token.tokenId} className="erc721token">
                        Name: <span className="name">{token.tokenName}</span>(
                        <span className="symbol">{token.tokenSymbol}</span>)
                        <div className = "nftOwner">NFT Owner: {token.tokenOwner}</div>
                        <div className="nft">id: {token.tokenId}</div>
                        <img src={token.tokenURI} width={300} />
                        <br></br>
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;