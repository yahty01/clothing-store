import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { ProductType } from "../../store/useProducts";
import {theme} from "../../_globalStyles/theme";

interface OrderFormProps {}

interface FormData {
    lastName: string;
    firstName: string;
    middleName?: string;
    city: string;
    address: string;
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
      const customerName = `${data.lastName} ${data.firstName} ${data.middleName || ''}`.trim();
  
      const orderData = {
          ...data,
          customerName,
          products,
          total,
      };
  
      // Логирование данных заказа, включая комментарий
      console.log('Отправляемые данные заказа:', orderData);  // Посмотри в консоли браузера, приходит ли комментарий
  
      try {
          const response = await fetch('https://vyacheslavna.ru/process_payment.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderData),
          });
  
          if (!response.ok) {
              const errorText = await response.text();
              console.error('Ошибка создания платежа:', errorText);
              throw new Error(`Ошибка создания платежа: ${response.status}`);
          }
  
          const responseText = await response.text();
          try {
              const result = JSON.parse(responseText);
              if (result.payment?.confirmation?.confirmation_url) {
                  window.open(result.payment.confirmation.confirmation_url, '_self');
              } else {
                  console.error('Ошибка создания платежа', result);
              }
          } catch (err) {
              console.error('Ошибка при обработке JSON ответа:', err);
          }
      } catch (error) {
          console.error('Ошибка при отправке формы:', error);
      }
  };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                <StyledFieldGrid item xl={4} md={4} xs={12}>
                    <input placeholder={'Фамилия'} {...register("lastName", { required: true })} />
                    {errors.lastName && <span>Это поле обязательно</span>}
                </StyledFieldGrid>
                <StyledFieldGrid item xl={4} md={4} xs={12}>
                    <input placeholder={'Имя'} {...register("firstName", { required: true })} />
                    {errors.firstName && <span>Это поле обязательно</span>}
                </StyledFieldGrid>
                <StyledFieldGrid item xl={4} md={4} xs={12}>
                    <input placeholder={'Отчество'} {...register("middleName")} />
                </StyledFieldGrid>
                <StyledFieldGrid item xl={4} md={4} xs={12}>
                    <input placeholder={'Город'} {...register("city", { required: true })} />
                    {errors.city && <span>Это поле обязательно</span>}
                </StyledFieldGrid>
                <StyledFieldGrid item xl={4} md={4} xs={12}>
                    <input placeholder={'Адрес'} {...register("address", { required: true })} />
                    {errors.address && <span>Это поле обязательно</span>}
                </StyledFieldGrid>
                <StyledFieldGrid item xl={4} md={4} xs={12}>
                    <input placeholder={'Номер телефона'} {...register("phoneNumber", { required: true })} />
                    {errors.phoneNumber && <span>Это поле обязательно</span>}
                </StyledFieldGrid>
                <StyledFieldGrid item xl={6} md={6} xs={12}>
                    <input placeholder={'Email'} {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                    {errors.email && <span>Введите корректный email</span>}
                </StyledFieldGrid>
                <StyledFieldGrid item xl={6} md={6} xs={12}>
                    <input placeholder={'Комментарий к заказу'} {...register("comment")} />
                </StyledFieldGrid>
            </Grid>

            <Grid container alignItems="center" justifyContent="space-between">
                <TotalPrice>ИТОГО: {total}₽</TotalPrice>
                <StyledButton sx={{ textTransform: 'none' }} type="submit">Оплатить →</StyledButton>
            </Grid>
        </StyledForm>
    );
};

// Стили для формы
const StyledForm = styled.form`
    flex-grow: 1;
  width: 100%;
  max-width: 1219px;
  font-family: 'NEXT ART', sans-serif !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto auto;
  padding: 20px;
    

  button {
    font-family: "Fira Mono", monospace;
  }

  input {
    font-family: 'NEXT ART', sans-serif !important;
  }
`;

const StyledButton = styled(Button)`
  && {
    font-size: 16px;
    background-color: ${theme.mainBackgroundColor};
    color: ${theme.mainTextColor};
    border-radius: 8px;
    padding: 8px 16px;

    &:hover {
      background-color: transparent;
      color: ${theme.mainTextColor};
      box-shadow: none;
    }
  }
`;

const StyledFieldGrid = styled(Grid)`
    margin-bottom: 20px;

    input {
        font-size: 16px;
        border: none;
        border-bottom: 1px solid ${theme.secondaryTextColor};
        background-color: ${theme.mainBackgroundColor};
        width: 100%;
        padding: 8px;
    }

    span {
        color: rgba(204, 5, 5, 0.74);
        font-size: 12px;
    }
`;

const TotalPrice = styled.h2`
  font-family: 'NEXT ART', sans-serif !important;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.5;
  color: ${theme.mainTextColor};
`;

export default OrderForm;