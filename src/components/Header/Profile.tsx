import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno Fialho</Text>
        <Text color="gray.300" fontSize="small">
          bruno@mail.com
        </Text>
      </Box>

      <Avatar size="md" name="Bruno Fialho" src="https://github.com/bruno-fialho.png" />
    </Flex>
  )
}