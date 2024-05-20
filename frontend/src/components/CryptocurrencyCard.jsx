import {Card} from 'antd'
import {useEffect} from 'react';


function CryptocurrencyCard(props) {
	const { currency } = props
	const price = (currency.quote?.USD.price)?.toFixed(2)
	const capitalization = ((currency.quote?.USD.fully_diluted_market_cap)/1000000000).toFixed(3)
	const change24h = currency.quote?.USD.percent_change_24h

	useEffect(() => {

		console.log('quote', currency)
	}, []);

	return (
		<div>
			<Card
				title={
					<div className="flex items-center gap-3">
						<img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} width={40}/>
						<span>{currency.name}</span>
					</div>
				}
				style={{
					width: 400,
				}}
			>
				<p>Текущая цена: { price } $</p>
				<p>Капитализация: { capitalization.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }B $</p>
				<p>Изменения за последние 24ч.: <label style={{color: change24h > 0 ? 'green' : 'red' }}> { change24h } %</label> </p>
			</Card>
		</div>
	)
}

export default CryptocurrencyCard