import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled from 'styled-components';
import { useBasket } from '../basket/BasketContext';
type RouteParams = {
  orderId?: string;
};

const PaymentStatus = () => {
  const { orderId } = useParams<RouteParams>();
  const { clearBasket } = useBasket();  // Используем функцию очистки корзины
  const [paymentStatus, setPaymentStatus] = useState<'pending' | 'succeeded' | 'failed' | 'error'>('pending');

  useEffect(() => {
    if (orderId) {
      const checkStatus = async () => {
        try {
          const response = await axios.get(`https://vyacheslavna.ru/check_payment_status.php?order_id=${orderId}`);
          if (response.data && response.data.status) {
            setPaymentStatus(response.data.status);
            if (response.data.status === 'succeeded') {
              await axios.get(`https://vyacheslavna.ru/admin_mail.php?order_id=${orderId}`);
              clearBasket();  // Очищаем корзину после успешной оплаты
            }
          } else {
            setPaymentStatus('error');
          }
        } catch (error) {
          setPaymentStatus('error');
        }
      };
      checkStatus();
    }
  }, [orderId, clearBasket]);

  const renderStatusMessage = () => {
    switch (paymentStatus) {
      case 'pending':
        return (
          <>
            <CircularProgress color="inherit" />
            <p>Ожидание оплаты...</p>
          </>
        );
      case 'succeeded':
        return (
          <>
            <CheckCircleOutlineIcon style={{ color: 'green', fontSize: '2rem' }} />
            <p>Оплата прошла успешно!</p>
          </>
        );
      case 'failed':
        return (
          <>
            <ErrorOutlineIcon style={{ color: 'red', fontSize: '2rem' }} />
            <p>Оплата не удалась.</p>
          </>
        );
      case 'error':
      default:
        return (
          <>
            <ErrorOutlineIcon style={{ color: 'red', fontSize: '2rem' }} />
            <p>Ошибка при получении статуса. Попробуйте позже.</p>
          </>
        );
    }
  };

  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom>
        Статус оплаты
      </Typography>
      {renderStatusMessage()}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  text-align: center;
  padding: 2rem;
  font-family: "Fira Mono", monospace;
  font-weight: 300;
  & p {
    margin-top: 20px;
    font-size: 1.2rem;
  }
`;

export default PaymentStatus;