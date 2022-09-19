import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,

        colors: {
            primaryCentral: string,
            secundaryCentral: string,
            primaryDimas: string,
            secundaryDimas: string,
            text: string,
            textSecundary: string,     
            background: string
        }
    }
}