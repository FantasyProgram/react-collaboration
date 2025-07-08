import React from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';

export default function RegistrationForm() {
    return (
        <Card className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
                <FloatLabel className="flex-1">
                    <InputText id="firstName" />
                    <label htmlFor="firstName">First Name</label>
                </FloatLabel>

                <FloatLabel className="flex-1">
                    <InputText id="lastName" />
                    <label htmlFor="lastName">Last Name</label>
                </FloatLabel>
            </div>
        </Card>
    );
}
