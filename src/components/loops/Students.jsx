import React from "react";
import StudentsList from "../../data/Students";

const Students = props => {
    const stidentsLI = StudentsList.map((student) => {
        return (
            <li key={student.id}>
                {`${student.id}) ${student.name} -> ${student.grade}`}
            </li>
        );
    });

    return (
        <div>
            <ul style={{ listStyle: "none" }}>{stidentsLI}</ul>
        </div>
    );
};

export default Students