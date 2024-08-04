// src/PaymentStatus.js

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';


const PaymentStatus = () => {
	const [paymentStatus, setPaymentStatus] = useState(null);

	useEffect(() => {
		const interval = setInterval(() => {
			axios.get('http://localhost:4000/payment-status')
				.then(response => {
					setPaymentStatus(response.data.status);
				})
				.catch(error => {
					console.error('Error fetching payment status:', error);
				});
		}, 5000); // Проверка статуса оплаты каждые 5 секунд

		return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
	}, []);

	return (
	<Box component="section" sx={{ p: 2, display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '70vh' }}>
			<h1>Статус оплаты</h1>
			{paymentStatus === null ? (
				<p>Ожидание оплаты...</p>
			) : paymentStatus === 'success' ? (
				<p style={{ color: 'green' }}>Оплата прошла успешно!</p>
			) : (
				<p style={{ color: 'red' }}>Оплата не удалась.</p>
			)}
	</Box>
	);
};

export default PaymentStatus;
