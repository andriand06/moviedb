import { Wrapper,Content,Text } from "./HeroImage.styles";
import React from 'react'

const HeroImage = ({image, title, text}) => 
  (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;