import { Image, Text } from "@chakra-ui/react";

interface LogoProps{
    showLogoImg?: boolean,
}

export function Logo({showLogoImg = false}: LogoProps){
    return (
        <Text
            fontSize={["2xl","3xl"]}
            fontWeight= "bold"
            letterSpacing="tight"
            w="64"
        >ImagineBox

        {showLogoImg && (
            <Image src= "box-icon.png" boxSize="50px" display="inline" />
        )}

        
        </Text>

    )
}