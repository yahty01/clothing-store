import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import { ProductType } from "../../App";

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
            <Field>
                <label>Фамилия</label>
                <input {...register("lastName", { required: true })} />
                {errors.lastName && <span>Это поле обязательно</span>}
            </Field>
            <Field>
                <label>Имя</label>
                <input {...register("firstName", { required: true })} />
                {errors.firstName && <span>Это поле обязательно</span>}
            </Field>
            <Field>
                <label>Отчество</label>
                <input {...register("middleName")} />
            </Field>
            <Field>
                <label>Город</label>
                <input {...register("city", { required: true })} />
                {errors.city && <span>Это поле обязательно</span>}
            </Field>
            <Field>
                <label>Адрес Сдека</label>
                <input {...register("sdekAddress", { required: true })} />
                {errors.sdekAddress && <span>Это поле обязательно</span>}
            </Field>
            <Field>
                <label>Номер телефона</label>
                <input {...register("phoneNumber", { required: true })} />
                {errors.phoneNumber && <span>Это поле обязательно</span>}
            </Field>
            <Field>
                <label>Email</label>
                <input {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} />
                {errors.email && <span>Введите корректный email</span>}
            </Field>
            <Field>
                <label>Комментарий к заказу</label>
                <textarea {...register("comment")} />
            </Field>
            <StyledButton type="submit">Оплатить</StyledButton>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    font-family: 'NEXT ART', sans-serif !important;
    font-weight: 500;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    button {
        font-family: "Fira Code", monospace;
    }
`;

const Field = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label {
        margin-bottom: 5px;
    }

    input, textarea {
        padding: 8px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    span {
        color: red;
        font-size: 12px;
    }
`;

const StyledButton = styled(Button)`
    && {
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border-radius: 8px;
        padding: 8px 16px;
        margin-top: 20px;

        &:hover {
            background-color: #0056b3;
        }
    }
`;

export default OrderForm;
