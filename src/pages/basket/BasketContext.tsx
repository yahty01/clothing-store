import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ProductType } from "../../store/useProducts";

type BasketContextType = {
  basket: ProductType[];
  addToBasket: (product: ProductType) => void;
  removeProductToBasket: (id: string) => void;
  clearBasket: () => void;  // Добавлена функция очистки корзины
};

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};

type BasketProviderProps = {
  children: ReactNode;
};

export const BasketProvider = ({ children }: BasketProviderProps) => {
  const [basket, setBasket] = useState<ProductType[]>([]);

  // Загружаем корзину из sessionStorage при монтировании компонента
  useEffect(() => {
    const getBasket = sessionStorage.getItem('basket');
    if (getBasket) {
      setBasket(JSON.parse(getBasket));
    }
  }, []);

  // Сохраняем корзину в sessionStorage при изменении корзины
  useEffect(() => {
    sessionStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product: ProductType) => {
    setBasket((prevBasket) => [...prevBasket, product]);
  };

  const removeProductToBasket = (id: string) => {
    setBasket(basket.filter((prevBasket) => prevBasket.id !== id));
  };

  // Очищаем корзину и sessionStorage
  const clearBasket = () => {
    setBasket([]);
    sessionStorage.removeItem('basket');
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeProductToBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};