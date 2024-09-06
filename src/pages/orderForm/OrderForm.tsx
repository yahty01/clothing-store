import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { theme } from "../../styles/theme";
import Grid from '@mui/material/Grid';
import { ProductType } from "../../store/useProducts";

interface OrderFormProps {}

interface FormData {
  lastName: string;
  firstName: string;
  middleName?: string;
  city: string;
  sdekAddress: string;
  phoneNumber: string;
  email: string;
  comment?: string;
}

const OrderForm: React.FC<OrderFormProps> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const location = useLocation();
  const { products, total } = location.state as {
    products: (ProductType & { quantity: number })[];
    total: number;
  };

  const onSubmit = async (data: FormData) => {
    const orderData = {
      customer_name: `${data.firstName} ${data.lastName}`,
      customer_email: data.email,
      customer_phone: data.phoneNumber,
      delivery_address: `${data.city}, ${data.sdekAddress}`,
      products,
      total,
    };
  
    try {
      const response = await fetch('https://vyacheslavna.ru/process_payment.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      const responseText = await response.text(); // Проверяем ответ как текст
  
      try {
        const result = JSON.parse(responseText); // Пробуем парсить только если это JSON
        if (!response.ok || result.error) {
          throw new Error(result.error || `Ошибка создания платежа: ${response.status}`);
        }
  
        if (result.payment.confirmation.confirmation_url) {
          window.open(result.payment.confirmation.confirmation_url, '_self');
        }
      } catch (err) {
        console.error('Ошибка при обработке JSON ответа:', err);
        throw new Error('Ошибка в формате JSON');
      }
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
    }
  };

  return (
    <>
      <OrderSummary>
        <h2>Ваш заказ</h2>
        <ProductList>
          {products.map((prod) => (
            <ProductCard key={prod.id}>
              <ProductImage src={prod.imgUrl} alt={prod.title} />
              <ProductDetails>
                <ProductTitle>{prod.title}</ProductTitle>
                <ProductSize>Размер: {prod.sizeSelect}</ProductSize>
                <ProductQuantity>Количество: {prod.quantity}</ProductQuantity>
                <ProductPrice>{prod.price}₽</ProductPrice>
              </ProductDetails>
            </ProductCard>
          ))}
        </ProductList>
        <TotalPrice>ИТОГО: {total}₽</TotalPrice>
      </OrderSummary>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <StyledFieldGrid item xs={12} sm={6}>
            <input placeholder="Фамилия" {...register('lastName', { required: true })} />
            {errors.lastName && <span>Это поле обязательно</span>}
          </StyledFieldGrid>
          <StyledFieldGrid item xs={12} sm={6}>
            <input placeholder="Имя" {...register('firstName', { required: true })} />
            {errors.firstName && <span>Это поле обязательно</span>}
          </StyledFieldGrid>
          <StyledFieldGrid item xs={12}>
            <input placeholder="Город" {...register('city', { required: true })} />
            {errors.city && <span>Это поле обязательно</span>}
          </StyledFieldGrid>
          <StyledFieldGrid item xs={12}>
            <input placeholder="Адрес Сдека" {...register('sdekAddress', { required: true })} />
            {errors.sdekAddress && <span>Это поле обязательно</span>}
          </StyledFieldGrid>
          <StyledFieldGrid item xs={12}>
            <input placeholder="Номер телефона" {...register('phoneNumber', { required: true })} />
            {errors.phoneNumber && <span>Это поле обязательно</span>}
          </StyledFieldGrid>
          <StyledFieldGrid item xs={12}>
            <input placeholder="Email" {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
            {errors.email && <span>Введите корректный email</span>}
          </StyledFieldGrid>
        </Grid>

        <StyledButton sx={{ textTransform: 'none' }} type="submit">
          Оплатить →
        </StyledButton>
      </StyledForm>
    </>
  );
};

// Стили аналогичные корзине
const OrderSummary = styled.div`
  text-align: center;
  margin: 20px 0;
  font-family: 'NEXT ART', sans-serif;
`;

const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  margin: 0;
`;

const ProductSize = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: ${theme.secondaryTextColor};
`;

const ProductQuantity = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: ${theme.secondaryTextColor};
`;

const ProductPrice = styled.p`
  margin: 5px 0;
  font-size: 18px;
  color: ${theme.mainTextColor};
`;

const TotalPrice = styled.h2`
  margin-top: 20px;
  color: ${theme.mainTextColor};
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 20px;
`;

const StyledFieldGrid = styled(Grid)`
  margin-bottom: 10px;
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${theme.secondaryTextColor};
  }
  span {
    color: red;
    font-size: 12px;
  }
`;

const StyledButton = styled(Button)`
  && {
    font-size: 16px;
    background-color: ${theme.mainBackgroundColor};
    color: ${theme.mainTextColor};
    padding: 10px 20px;
  }
`;

export default OrderForm;