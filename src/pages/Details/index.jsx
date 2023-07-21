import { Container, Links, Content } from "./style";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            iste id totam libero autem natus mollitia molestiae fugiat quis
            numquam voluptas consectetur in dolorem illum officiis a veritatis!
            Repellat, modi.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.github.com/LpDavi" target="_blanck">
                  https://www.github.com/LpDavi
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/LpDavi" target="_blanck">
                  https://www.linkedin.com/in/LpDavi
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="Nodejs" />
          </Section>

          <Button title="Back" />
        </Content>
      </main>
    </Container>
  );
}
