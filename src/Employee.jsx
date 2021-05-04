import React from "react";

const Employee = (props) => {
    const {firstName, lastName, age} = props;
    return (
        <div>
            <h6>
                {`HAHAHA Employee Name: ${firstName} ${lastName} who is aged: ${age}`}
            </h6>
{/*             <h6>
                Employee Name: {firstName} {lastName} who is aged: {age}
            </h6> */}
        </div>
    );
};

export default Employee;