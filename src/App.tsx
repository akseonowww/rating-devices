import React from 'react';
import { useSearchProductsQuery } from './store/products.api';
import Loading from './Loading';
import Chart from './Chart/Chart';
import './App.css';

const App = () => {
	const [device, setDevice] = React.useState('Смартфоны');
	const [devices] = React.useState(['Смартфоны', 'Планшеты']);

	const Devices = devices.map((Device) => Device);
	const handleDevicesChange = (e: any) => {
		setDevice(devices[e.target.value]);
	};

	const { isLoading, isError, data } = useSearchProductsQuery('');

	return (
		<div className="App">
			<label htmlFor="devices-names">Рейтинг устройств: </label>
			<select onChange={(e) => handleDevicesChange(e)}>
				{Devices.map((device, key) => (
					<option key={key} value={key}>
						{device}
					</option>
				))}
			</select>
			<br />
			<br />
			<div className="Chart">
				{isLoading && <Loading />}
				{isError && <p style={{ color: 'red' }}>Ошибка!</p>}
				{data && <Chart title={device} resource={data} />}
			</div>
		</div>
	);
};

export default App;
