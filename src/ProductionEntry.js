import React from 'react'
import './style.css'
import machineData from './machineData'
import partsData from './partsData'
import operatorData from './operatorData'
/**
 * Bug Fixes
 * Need to work on Operation & Production & Production Time as it shows all changed values in array
 * Need to fix the Display of Submitted Data
 * Features to be Added
 * Need to add the sub column list of table, so further data can be entered
 */

export default function ProductionEntry() {
    const [finalTableData, setFinalTableData] = React.useState([])
    const [tableData, setTableData] = React.useState({
        Date: "",
        Machine: "",
        Shift: "",
        Operator: "",
        WorkingHours: 0,
        ProductionTime: 0,
        IdleTime: 0,
        Efficiency: 0,
    })
    const [shiftData, setShiftData] = React.useState({
        Parts: [],
        Operation: [],
        Production: []
    })
    function storeData() {
        setFinalTableData((prev) => {
            const newData = prev
            newData.push(tableData)
            return newData
        })
    }
    //====================================================================
    const machineList = machineData.Data.map((machine) => {
        return (
            <option value={`${machine}`}>{machine}</option>
        )
    })
    const operatorList = operatorData.Name.map((operator) => {
        return (
            <option value={`${operator}`}>{operator}</option>
        )
    })
    const partsList = partsData.Parts.map((parts) => {
        return (
            <option value={`${parts}`}>{parts}</option>
        )
    })
    const operationsList = partsData.Operations.map((operation) => {
        return (
            <option value={`${operation}`}>{operation}</option>
        )
    })

    //====================================================================



    // let tableDataDisplay = finalTableData.map((Data) => {
    //     return (
    //         <tr>
    //             <td>{Data.Date}</td>
    //             <td>{Data.Machine}</td>
    //             <td>{Data.Shift}</td>
    //             <td>{Data.Operator}</td>
    //             <td>{Data.WorkingHours}</td>
    //             <td>{Data.Parts}</td>
    //             <td>{Data.Operation}</td>
    //             <td>{Data.Production}</td>
    //             <td>{Data.ProductionTime}</td>
    //             <td>{Data.IdleTime}</td>
    //             <td>{Data.Efficiency}</td>
    //         </tr>
    //     )
    // })
    const updateValue = () => {

    }


    return (
        <div className='tableContainer'>
            <h1>Production Data-Entry</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Machine</th>
                        <th>Shift</th>
                        <th>Operator</th>
                        <th>Working Hours</th>
                        <th>Part</th>
                        <th>Operation</th>
                        <th>Produced Nos/Hours</th>
                        <th>Production Time</th>
                        <th>Idle Time</th>
                        <th>Efficiency</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {tableDataDisplay} */}
                    <tr>
                        <td>
                            <input type='date' name='Date' value={tableData.Date} onChange={updateValue}></input>
                        </td>
                        <td>
                            <select id='machine' name='Machine' value={tableData.Machine} onChange={updateValue}>
                                <option value=''>--Select--</option>
                                {machineList}
                            </select>
                        </td>
                        <td>
                            <select id='shift' name='Shift' value={tableData.Shift} onChange={updateValue}>
                                <option value=''>--Select--</option>
                                <option value='1st'>1st</option>
                                <option value='2nd'>2nd</option>
                                <option value='3rd'>3rd</option>
                            </select>
                        </td>
                        <td>
                            <select id='operator' name='Operator' value={tableData.Operator} onChange={updateValue}>
                                <option value=''>--Select--</option>
                                {operatorList}
                            </select>
                        </td>
                        <td><input type='text' name='WorkingHours' value={tableData.WorkingHours} onChange={updateValue}></input></td>
                        <td className='shiftData'>
                            {/* {partsFill} */}
                            <div className='addNewPart'>
                                <button className='Add'>+</button>
                                <select id='part' name='Parts' onChange={updateValue}>
                                    <option value=''>--Select--</option>
                                    {partsList}
                                </select>
                            </div>
                        </td>
                        <td className='shiftData'>
                            {/* {operationsFill} */}
                            <select id='operations' name='Operation' onChange={updateValue}>
                                <option value=''>--Select--</option>
                                {operationsList}
                            </select>
                        </td>
                        <td className='shiftData'>
                            {/* {productionFilled} */}
                            <input type='text' name='Production' onChange={updateValue}></input>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button className='submitProductionEntry' onClick={storeData}>Submit</button>
        </div >
    )
}