'use server';
import { FieldValues } from 'react-hook-form';

// register
export const register = async (data: FieldValues) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!res?.ok) {
        console.log('User Registration Failed', await res.text());
    }
    const json = await res.json();
    const result = json?.data

    return result;
};

// login
export const login = async (data: FieldValues) => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
       method: 'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(data)
   });

    if (!res?.ok) {
        console.log("Login Failed", await res.text())
    }
    
   const json = await res.json();
   const result = json?.data;
    return result
}
