import React from 'react';
import { Card, CardBody, CardHeader, Input, Button } from '@nextui-org/react';
import "./Components.css"

export default function ExampleCard() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 logincard">
            <Card className='max-w-md w-full shadow-lg rounded-3xl'>
                <CardHeader className="flex items-center justify-center h-20">
                    <h2 className="text-4xl font-bold text-center">Login Page</h2>
                </CardHeader>
                <CardBody className="flex flex-col items-center p-4">
                    <Input 
                        type="Pin" 
                        label="Pin-Number" 
                        placeholder="Enter your Pin Number" 
                        className="input-field w-full mb-4"
                    />
                    <Input 
                        type="password" 
                        label="Password" 
                        placeholder="Enter your password" 
                        className="input-field w-full mb-4"
                    />
                    <Button color='primary' variant='shadow' className="mt-6">
                        Login
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}
