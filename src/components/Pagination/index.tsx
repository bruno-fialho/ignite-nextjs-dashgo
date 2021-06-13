import { Stack, HStack, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      spacing="6"
      justify="space-between"
      align="center"
    >
      <Box>
          <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <HStack spacing="2">
        <PaginationItem pageNumber={1} isCurrent />
        <PaginationItem pageNumber={2} />
        <PaginationItem pageNumber={3} />
        <PaginationItem pageNumber={4} />
        <PaginationItem pageNumber={5} />
      </HStack>
    </Stack>
  )
}
