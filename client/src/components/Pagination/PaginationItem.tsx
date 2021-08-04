import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
    number: number;
    isCurrent?: boolean;
}

export function PaginationItem({isCurrent =false, number}: PaginationItemProps){
    if(isCurrent){
        return (
            <Button 
                size="sm"
                fontSize="xs"
                width="4"
                colorScheme="orange"
                disabled
                _disabled={{
                    bgColor: "orange.500",
                    cursor: "default"
                }}
            >
                {number}
            </Button>
        )
    }
    
    return (
        <Button 
            size="sm"
            fontSize="xs"
            width="4"
            bg ="orange.700"
            _hover={{
                bg: "gray.500"
            }}
        >
            {number}
        </Button>
    )
    
}