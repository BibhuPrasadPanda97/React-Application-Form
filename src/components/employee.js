import {v4 as uuidv4} from 'uuid'

const Employee = [{
    id: uuidv4().slice(0,8),
    name: 'Bibhu',
    age: 25,
    gender: 'Male'
},{
    id: uuidv4().slice(0,8),
    name: 'Rahul',
    age: 45,
    gender: 'Male'
}
]

export default Employee