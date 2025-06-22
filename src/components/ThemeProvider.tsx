"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React, { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute: string;
  defaultTheme: string;
}

export function ThemeProvider({
  children,
  attribute,
  defaultTheme,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      attribute={attribute}
      defaultTheme={defaultTheme}
    >
      {children}
    </NextThemesProvider>
  );
}
