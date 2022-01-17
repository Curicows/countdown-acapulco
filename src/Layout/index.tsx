import React, { useState } from 'react';

import Footer from './Footer';
import {Container} from "react-bootstrap";


interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children, ...rest }: LayoutProps) => {
    return (
        <>
            <Container fluid={true} {...rest}>
                {children}
                <Footer />
            </Container>
        </>
    );
};
