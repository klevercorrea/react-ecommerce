import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 4;
    padding: 20px;
`

const Title = styled.h1``

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const FormItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 20px;
`

const FormLabel = styled.label`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
`

const FormInput = styled.input`
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
`

const Gender = styled.div``

const GenderInput = styled.input`
    margin-top: 15px;
`

const GenderLabel = styled.label`
    margin: 10px;
    font-size: 18px;
    color: #555;
`

const Select = styled.select`
    height: 40px;
    border-radius: 5px;
`

const Option = styled.option``

const Button = styled.button`
    width: 200px;
    border: none;
    background-color: darkblue;
    color: white;
    padding: 7px 10px;
    font-weight: 600;
    border-radius: 10px;
    margin-top: 30px;
    cursor: pointer;
`


const NewUser = () => {
    return (
        <Container>
            <Title>New User</Title>
            <Form>
                <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormInput type="text" placeholder="jonsnow" />
                </FormItem>
                <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormInput type="text" placeholder="Jon Snow" />
                </FormItem>
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormInput type="email" placeholder="jonsnow@gmail.com" />
                </FormItem>
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormInput type="password" placeholder="password" />
                </FormItem>
                <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormInput type="text" placeholder="&#40;51&#41; 99999-9999" />
                </FormItem>
                <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormInput type="text" placeholder="Porto Alegre | Brasil" />
                </FormItem>
                <FormItem>
                    <FormLabel>Gender</FormLabel>
                    <Gender>
                        <GenderInput type="radio" name="gender" id="male" value="male" />
                        <GenderLabel for="male">Male</GenderLabel>
                        <GenderInput type="radio" name="gender" id="female" value="female" />
                        <GenderLabel for="female">Female</GenderLabel>
                        <GenderInput type="radio" name="gender" id="other" value="other" />
                        <GenderLabel for="other">Other</GenderLabel>
                    </Gender>
                </FormItem>
                <FormItem>
                    <FormLabel>Active</FormLabel>
                    <Select name="active" id="active">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </FormItem>
                <Button>Create</Button>
            </Form>
        </Container>
    )
}

export default NewUser