import React from 'react'
import Card from './components/layout/Card'

import LotteryNumber from './components/lottery-number/LotteryNumber'
import Counter from './components/count/Counter'
import Input from './components/forms/Input'
import IndirectFather from './components/communication/IndirectFather'
import DirectFather from './components/communication/DirectFather'
import UserInfo from './components/conditional/UserInfo'
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

            <Card title="#12 - Lottery Number - class component" color="#871625">
                    <LotteryNumber />
                </Card>

                <Card title="#11 - Counter - class component" color="#424242">
                    <Counter initialNumber={10}/>
                </Card>

                <Card title="#10 - controlled component(input)" color="#e45f56">
                    <Input />
                </Card>

                <Card title="#09 - Indirect communication" color="#8bad39">
                    <IndirectFather />
                </Card>

                <Card title="#08 - Direct communication" color="#186753">
                    <DirectFather />
                </Card>

                <Card title="#07 - Even or Odd - conditional render" color="#982395">
                    <EvenOrOdd number={15}/>
                    <UserInfo user={{ name: "Wendel" }}/>
                    <UserInfo user={{ email: "ws@email.com" }}/>
                    <UserInfo />
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