import React from 'react';
import "./Table.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";


const Table = ({ rows, deleteRow, editRow }) => {

    

    return (
        <div className='table-wrapper'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Task-no.</th>
                        <th className='expand'>Task</th>
                        <th className='expand'>Due Date</th>
                        <th>Status</th>
                        <th>Delete/Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row) => {
                            return (
                                <tr key={row.id}>
                                    <td>{row.taskNo}</td>
                                    <td className='expand'>{row.task}</td>
                                    <td className='expand'>{row.duedate}</td>
                                    <td>
                                        <span className={`label label-${row.status}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td>
                                        <span className='action'>
                                            <BsFillTrashFill onClick={() => deleteRow(row.id)} />
                                            <BsFillPencilFill onClick={() => editRow(row.id)} />
                                        </span>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;
