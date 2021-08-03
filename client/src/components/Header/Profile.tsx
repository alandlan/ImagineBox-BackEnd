import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile(){
    return (
        <Flex align="center" >
            <Box mr="4" textAlign="right">
                <Text>Alan Martins</Text>
                <Text color="orange.300" fontSize="small">
                    alan4lann@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Alan Martins" src="" />
        </Flex>
    )
}