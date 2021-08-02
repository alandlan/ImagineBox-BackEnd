import {FormControl,FormLabel,Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
} 


export function Input({name,label, ...rest}: InputProps){
    return (
        <FormControl>
            { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
            <ChakraInput 
            name={name}
            id={name}
            focusBorderColor="orange.900" 
            bgColor="orange.200"
            variant="filled"
            _hover={{
                bgColor:"orange.200"
            }}
            size="lg"
            {...rest}
            />
        </FormControl>
    )
}