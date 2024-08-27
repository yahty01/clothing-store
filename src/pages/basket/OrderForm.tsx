import React from 'react';
import styled from 'styled-components';
import {Button} from '@mui/material';
import {useForm} from "react-hook-form";
import {useLocation} from 'react-router-dom';
import {ProductType} from "../../App";
import {theme} from "../../styles/theme";
import Grid from '@mui/material/Grid';

interface OrderFormProps {
}

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
	const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
	const location = useLocation();
	const {products, total} = location.state as {
		products: (ProductType & { quantity: number })[];
		total: number;
	};

	const onSubmit = async (data: FormData) => {
		const orderData = {
			...data,
			products,
			total
		};

		try {
			const response = await fetch('https://vyacheslavna.ru/process_payment.php', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(orderData)
			});

			if (!response.ok) {
				const errorText = await response.text();
				console.error('Ошибка создания платежа:', errorText);
				throw new Error(`Ошибка создания платежа: ${response.status}`);
			}

			const result = await response.json();
			console.log('Получены данные от сервера:', result);
			if (result.payment.confirmation.confirmation_url) {
				window.location.href = result.payment.confirmation.confirmation_url;
			} else {
				console.error('Ошибка создания платежа', result);
			}
		} catch (error) {
			console.error('Ошибка при отправке формы:', error);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit(onSubmit)}>
			<Grid container>
				<StyledFieldGrid  xl={4} md={4} xs={6}>
					<input placeholder={'Фамилия'} {...register("lastName", {required: true})} />
					{errors.lastName && <span>Это поле обязательно</span>}
				</StyledFieldGrid>
				<StyledFieldGrid  xl={4} md={4} xs={12}>
					<input placeholder={'Имя'} {...register("firstName", {required: true})} />
					{errors.firstName && <span>Это поле обязательно</span>}
				</StyledFieldGrid>
				<StyledFieldGrid  xl={4} md={4} xs={12}>
					<input placeholder={'Отчество'} {...register("middleName")} />
				</StyledFieldGrid>
				<StyledFieldGrid  xl={4} md={4} xs={12}>
					<input placeholder={'Город'} {...register("city", {required: true})} />
					{errors.city && <span>Это поле обязательно</span>}
				</StyledFieldGrid>
				<StyledFieldGrid  xl={4} md={4} xs={12}>
					<input placeholder={'Адрес Сдека'} {...register("sdekAddress", {required: true})} />
					{errors.sdekAddress && <span>Это поле обязательно</span>}
				</StyledFieldGrid >
				<StyledFieldGrid xl={4} md={4} xs={12}>
					<input placeholder={'Номер Телефона'} {...register("phoneNumber", {required: true})} />
					{errors.phoneNumber && <span>Это поле обязательно</span>}
				</StyledFieldGrid>
				<StyledFieldGrid  xl={6} md={6} xs={12}>
					<input placeholder={'Email'} {...register("email", {required: true, pattern: /^\S+@\S+\.\S+$/})} />
					{errors.email && <span>Введите корректный email</span>}
				</StyledFieldGrid>
				<StyledFieldGrid xl={6} md={6} xs={12}>
					<input placeholder={'Комментарий к заказу'} {...register("comment", {required: false})} />
				</StyledFieldGrid>
			</Grid>

			<StyledButton sx={{textTransform: 'none'}} type="submit">Оплатить →</StyledButton>
		</StyledForm>
	);
};

const StyledForm = styled.form`
  width: 1219px;
  min-height: 165px;
  flex-grow: 1;
  font-family: 'NEXT ART', sans-serif !important;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
	justify-content: center;
  align-items: flex-end;
	
  padding: 20px;
  margin: 0 auto;

  button {
    font-family: "Fira Mono", monospace;
  }
	
	input{
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
  margin-bottom: 10px;
  label {
    margin-bottom: 5px;
  }

  &:not(:nth-last-child(-n+2)) {
    margin-bottom: 56px;
  }
	
  input, textarea {
    font-size: 16px;
    border: none;
	  color: ${theme.secondaryTextColor};
	  border-bottom: 1px solid ${theme.secondaryTextColor};
	  background-color: ${theme.mainBackgroundColor};
	  width: 90%;
  }

  span {
    color: red;
    font-size: 12px;
  }
`;


export default OrderForm;
