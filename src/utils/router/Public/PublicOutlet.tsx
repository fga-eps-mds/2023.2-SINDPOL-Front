import React from 'react';
import { Outlet } from 'react-router-dom';

export default function PublicOutlet(props: any) {
    return (
        <Outlet/>
    );
}