import React from 'react';
import { PaletteModeCode } from '@procom-labs/common';
export declare const AppThemeProvider: React.FC<{
    themeMode: PaletteModeCode;
}>;
export interface AppContextProps {
    themeMode?: PaletteModeCode;
    isAngular?: boolean;
}
export declare function WithAppContext<T extends object>(Component: React.FC<T & AppContextProps>): (props: T & AppContextProps) => import("@emotion/react/jsx-runtime").JSX.Element;
