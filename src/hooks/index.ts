import { Dispatch } from "../store/types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/index";

export const useAppDispatch = () => useDispatch<Dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
