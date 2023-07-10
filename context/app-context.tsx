"use client";
import { UserStatus } from "@/enums/enums";
import { createContext } from "react";

export interface IAppContext {
  userStatus: UserStatus;
  setUserStatusTo: (status: UserStatus) => void;
}

export const AppContext = createContext<IAppContext>(null as any);
