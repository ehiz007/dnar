import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export interface coin {
    id:string;
    name: string;
    current_price: number;
    image: string;
    circulating_supply: number;
    market_cap: number;
    max_supply: number;
    sparkline: Array<number>;
    symbol: string;
    price_change_24h: number;
    price_change_percentage_24h: number;
  }
  
export interface initialStateType {
    coins: Array<coin>;
    status: "idle" | "loading" | "failed";
    getCoin: any
  }
  

  
