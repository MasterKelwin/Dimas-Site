import { Wrapper } from './style';
import GlobalStyle from 'Global/Global';
import dark from 'Global/Theme/Dark';
import { ThemeProvider } from 'styled-components';

export default function Home() {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyle />
        <Wrapper>Hello World</Wrapper>
        </ThemeProvider>
    )
}