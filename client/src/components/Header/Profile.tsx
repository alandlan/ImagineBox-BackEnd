import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfilePros{
    showProfileData?: boolean,
}

export function Profile({showProfileData}:ProfilePros){
    return (
        <Flex align="center" >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Alan Martins</Text>
                    <Text color="orange.300" fontSize="small">
                        alan4lann@gmail.com
                    </Text>
                </Box>
            )}
            

            <Avatar size="md" name="Alan Martins" src="" />
        </Flex>
    )
}