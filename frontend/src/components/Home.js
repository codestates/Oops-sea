import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

	const HeadText = "Discover, collect, and sell extraordinary NFTs"
	const DescText = "OpenSea is the world's first and largest NFT marketplace"

	return(
		<div>
			{/* <div style={{float: 'left', width: '40%', padding: '3% 3% 3% 3%', margin: 'auto'}}>
					<div style={{margin: "auto"}}>
						<h1 style={{textAlign: 'left'}}>{HeadText}</h1>
						<h3 style={{textAlign: 'left', color: 'gray'}}>{DescText}</h3>
					</div>
					{/* button from https://getbootstrap.com/docs/4.3/components/buttons/ */}
					{/* <div style={{display: "flex", marginTop: "10%", justifyContent: "center"}}>
						<Link to="/explore" style={{marginRight: "5%"}}><button type="button" className="btn btn-primary btn-lg" style={{width: "100%", margin: "auto"}}>Explore</button></Link>
						<Link to="/create"><button type="button" className="btn btn-outline-primary btn-lg" style={{width: "100%", margin: "auto"}}>Create</button></Link>
					</div>
			</div>
			<div className="div-right" style={{float: 'right', width: '55%', padding: '3% 3% 3% 3%', margin: 'auto'}}>
				<img src="https://www.coindeskkorea.com/news/photo/202103/73065_10919_4125.jpg" width="100%" height="100%" alt='beeple_nft_img'></img> */}
			</div>  } 
		</div>
	);

}

export default Home;
