import React from 'react'

import studentsList from '../../../data/Student'

const StudentList = props => {
    console.log(studentsList)
    const lis = studentsList.map(student => {
        return (
            <li key={student.id}>{`${student.id}) ${student.name} -> ${student.grade}`}</li>
        )
    })
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>
                {lis}
            </ul>
        </div>
    )
}

export default StudentList