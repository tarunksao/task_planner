import {Box, Button, Heading, VStack, Input, Select, FormControl, FormLabel} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../Redux/tasks/task.actions';

const initForm = {
    title:'',
    category:'',
    assignedTo:'',
    status:'pending',
}

export default function AddTask() {
    const [taskForm, setTaskForm] = useState(initForm);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTaskForm({...taskForm, [e.target.name]:e.target.value});
    }

    const handleSubmit = () => {
        dispatch(createTask(taskForm));
    }

    const {title, category, assignedTo, status} = taskForm

    return (
        <Box>
            <VStack w='md' boxShadow={'2xl'} p='20px 40px' m='50px auto' borderRadius={'2xl'} bgColor={'#F0F7FF'}>
                <Heading color='blue.300'>Add Task</Heading>
                <FormControl isRequired>
                    <FormLabel>Title of the Task</FormLabel>
                    <Input type='text' placeholder='Enter the Title of your Task' name='title' value={title} onChange={(e) => handleChange(e)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Category of the Task</FormLabel>
                    <Select name='category' value={category} onChange={(e) => handleChange(e)}>
                        <option value=''>Select Task Category</option>
                        <option value='bug'>Bug</option>
                        <option value='feature'>Feature</option>
                        <option value='story'>Story</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Assign Task to</FormLabel>
                    <Input type='text' placeholder='Enter the name of person Task has to be assigned to.' name='assignedTo' value={assignedTo} onChange={(e) => handleChange(e)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Status of the Task</FormLabel>
                    <Select name='status' value={status} onChange={(e) => handleChange(e)}>
                        <option value=''>Select Task Status</option>
                        <option value='pending'>Pending</option>
                        <option value='progress'>Progress</option>
                        <option value='completed'>Completed</option>
                    </Select>
                </FormControl>
                <Button onClick={handleSubmit} w='full' colorScheme='linkedin'>Add Task</Button>
            </VStack>
        </Box>
    )
};
