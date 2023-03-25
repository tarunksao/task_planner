import {Box, HStack, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <Box p='10px 300px'>
            <HStack justifyContent={'space-evenly'}>
                <Text fontWeight={'bold'} fontSize={'18px'} color='teal'>Task Planner</Text>
                <Link to='/addTask' style={{fontWeight:'500'}}>Add Task</Link>
                <Link style={{fontWeight:'500'}}>Add Sprint</Link>
            </HStack>
        </Box>
    )
};
