import React from "react";

export const TestComponent = (props: any) => {
    const { title, subtitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};