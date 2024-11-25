import {MainStyle, Copo,Section, H2, H1,Span, P,Button} from "./style"

export default function Home (){
    return (
        <MainStyle>
           <section>
            <H2>Mais que Café</H2>
            <H1>Isso é <Span>Starbucks</Span>  </H1> 
            <P>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</P>
            <Button>SAIBA MAIS</Button>
            <div>
                <img src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/amarelo%201.png?raw=true" alt="copo P amarelo" />
                <img src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/vermelho%201.png?raw=true" alt="copo P vermelho" />
                <img src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/laranja%203.png?raw=true" alt="copo P laranja" />
            </div>
           </section>

           <Section>
            <Copo src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/laranja2x%201.png?raw=true" alt="copo G laranja" />

            <img src="https://github.com/mariaccarolina/starbugsNoite/blob/main/src/assets/images/Ellipse%201%20(1).png?raw=true" alt="elipse verde" />
           </Section>
           
        </MainStyle>
    )
}