import React from 'react'
import Card from './components/layout/Card'

import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductsTable from './components/loops/ProductsTable'
import Students from './components/loops/Students'
import Parent from './components/complex/family/Parent'
import Aleatory from './components/basics/aleatory/Aleatory'
import WithParams from './components/basics/WithParams'
import First from './components/basics/First'

import './app.css'

const App = () => {

    return (
        <div className="App">
            <h1>React Fundamentals</h1>

            <div className="Cards">
            <Card title="#07 - Even or Odd - conditional render" color="#982395">
                    <EvenOrOdd number={15}/>
                </Card>
                <Card title="#06 - Loop in products - Challenger" color="#3a9ad9">
                    <ProductsTable />
                </Card>
                <Card title="#05 - Loop - Student list" color="#ff4c65">
                    <Students />
                </Card>
                <Card title="#04 - Component with child" color="#00c8f8">
                    <Parent name="Paula" surname="Santos"/>
                </Card>
                <Card title="#03 - Aleatory Number Challenger" color="#fa6904">
                    <Aleatory min={10} max={99}/>
                </Card>

                <Card title="#02 - Component with params" color="#e94c6f">
                    <WithParams title="second component" subtitle="very funny"/>
                </Card>

                <Card title="#01 - First component" color="#e8b71a">
                    <First />
                </Card>
            </div>
        </div>
    )
}

export default App