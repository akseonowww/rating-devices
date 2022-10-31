import React, { FunctionComponent } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Chart: FunctionComponent<{ title: String; resource: any }> = ({
	title,
	resource,
}) => {
	let categorieActive = '';

	if (title === 'Смартфоны') {
		categorieActive = 'smartphones';
	} else if ((title = 'Планшеты')) {
		categorieActive = 'laptops';
	}

	const products: any = resource;
	const newData: any = {
		smartphones: [],
		laptops: [],
	};

	products.forEach((el: any) => {
		if (el.category === 'smartphones') {
			newData.smartphones.push({
				title: el.title,
				rating: el.rating,
			});
		} else if (el.category === 'laptops') {
			newData.laptops.push({
				title: el.title,
				rating: el.rating,
			});
		}
	});

	let titles: any = [];
	newData[categorieActive].forEach((el: any) => titles.push(el.title));

	let data: any = [];
	newData[categorieActive].forEach((el: any) => data.push(el.rating));

	const options = {
		title: {
			text: title,
		},
		chart: {
			style: {
				fontFamily: 'Arial, sans-serif',
			},
		},
		yAxis: {
			title: {
				text: 'Рейтинг',
			},
		},
		xAxis: {
			categories: titles,
		},
		series: [
			{
				type: 'column',
				name: 'Рейтинг',
				data,
			},
		],
		legend: {
			enabled: false,
		},
		credits: {
			enabled: false,
		},
	};

	return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Chart;
