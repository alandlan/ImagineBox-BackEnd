import { Image, Text } from "@chakra-ui/react";

export function Logo(){
    return (
        <Text
            fontSize="3xl"
            fontWeight= "bold"
            letterSpacing="tight"
            w="64"
        >ImagineBox
        <Image src= "box-icon.png" boxSize="50px" display="inline"
            
        />
        </Text>

    )
}