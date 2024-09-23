import React, { useState, useEffect } from 'react';
import { Input, Button, Card, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import '../components/Components.css';

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        pinNumber: '',
        password: '',
        confirmPassword: '',
        branch: 'Select Your Branch',
        regulation: 'C',
        regulationNumber: '',
        file: null,
        mobilenumber: '',
    });

    const [passwordError, setPasswordError] = useState("");
    const [filePreview, setFilePreview] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        
        // Validate password match
        if (name === 'confirmPassword') {
            validatePassword(value);
        }
    };

    const validatePassword = (confirmPassword) => {
        if (confirmPassword !== formData.password) {
            setPasswordError("Passwords do not match.");
        } else {
            setPasswordError("");
        }
    };

    const handleSelect = (key) => {
        setFormData((prevData) => ({
            ...prevData,
            branch: key,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFilePreview(previewUrl);
            setFormData((prevData) => ({
                ...prevData,
                file: file,
            }));
        }
    };

    useEffect(() => {
        return () => {
            if (filePreview) {
                URL.revokeObjectURL(filePreview);
            }
        };
    }, [filePreview]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="p-6 max-w-md w-full shadow-lg mt-4">
                <h2 className="text-2xl font-bold text-center mb-4">Sign Up Page</h2>
                <CardBody className='items-center'>

                    <Input
                        isRequired
                        type="text"
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="max-w-xs mx-auto mb-4 input-field"
                    />
                    <Input
                        isRequired
                        type="text"
                        label="Pin number"
                        name="pinNumber"
                        value={formData.pinNumber}
                        onChange={handleInputChange}
                        className="max-w-xs mx-auto mb-4 input-field"
                    />
                    <div className="flex items-center mb-4 input-field">
                        <span className="mr-2">C -</span>
                        <Input
                            isRequired
                            type="number"
                            label="Regulation Number"
                            name="regulationNumber"
                            value={formData.regulationNumber}
                            onChange={handleInputChange}
                            className="flex-1"
                        />
                    </div>
                    <Input
                        isRequired
                        type="text"
                        label="Mobile Number"
                        name="mobilenumber"
                        value={formData.mobilenumber}
                        onChange={handleInputChange}
                        className="max-w-xs mx-auto mb-4 input-field"
                    />
                    <Input
                        isRequired
                        type="password"
                        label="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="max-w-xs mx-auto mb-4 input-field"
                    />
                    <Input
                        isRequired
                        type="password"
                        label="Confirm Your Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="max-w-xs mx-auto mb-4 input-field"
                    />
                    {passwordError && (
                        <p className="text-red-500 text-center mt-2">
                            {passwordError}
                        </p>
                    )}
                </CardBody>
                <div className="Branch-parent flex items-center justify-center mt-5">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                color="primary"
                                variant="shadow"
                                className="capitalize button-branch input-field"
                            >
                                {formData.branch}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dropdown Variants"
                            color="primary"
                            variant="solid"
                        >
                            <DropdownItem key="CME" onClick={() => handleSelect("CME")}>CME</DropdownItem>
                            <DropdownItem key="MECH" onClick={() => handleSelect("MECH")}>MECH</DropdownItem>
                            <DropdownItem key="ECE" onClick={() => handleSelect("ECE")}>ECE</DropdownItem>
                            <DropdownItem key="EEE" onClick={() => handleSelect("EEE")}>EEE</DropdownItem>
                            <DropdownItem key="CIV" onClick={() => handleSelect("CIVIL")}>CIVIL</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="Buttonparent-file mt-5 flex flex-col items-center">
                    <input
                        type="file"
                        id="file-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                    <Button
                        color="primary"
                        variant="shadow"
                        className="capitalize filebutton input-field"
                        onClick={() => document.getElementById('file-upload').click()}
                    >
                        Add Your File
                    </Button>
                    {filePreview && (
                        <div className="mt-4">
                            <img 
                                src={filePreview} 
                                alt="Selected file preview" 
                                className="max-w-full h-auto border border-gray-400"
                            />
                        </div>
                    )}
                </div>
                <Button
                    color="primary"
                    variant="shadow"
                    className="mt-5 input-field"
                >
                    Signup
                </Button>
            </Card>
        </div>
    );
}
