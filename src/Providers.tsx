import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
