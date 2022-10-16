import { Center, Divider, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import styles from "./About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <VStack maxW={[300, 400, 450]} mx="auto">
      <Divider/>     
      
      <Text className={styles.about} fontSize={['16px', '20px', '24px']} pt={[1, 3]}>
        Sobre mí
      </Text>
      <Text className={styles.about_text} fontSize={['sm', 'md', 'lg']}>
        Siempre fui entusiasta de las computadoras y del aprendizaje. Soy
        Licenciado en Psicología, y luego de recibirme me enfoqué en
        estudiar programación al sentirme convocado por una disciplina más
        práctica. Así descubrí un mundo muy absorbente, que me motiva a
        desafiarme y seguir mejorando cada día.{" "}
      </Text>
    </VStack>
  );
};

export default About;
