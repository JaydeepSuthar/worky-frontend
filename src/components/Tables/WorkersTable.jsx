import React from "react";
import { data, columns } from "./data/workersData";
import DataTable from "react-data-table-component";
import { useState } from "react";
import useWebStore from "../../context/webStore";

const WorkersTable = () => {
    const [records, setRecords] = useState(data);
    const handleSubmit = (event) => {
        const newData = data.filter((row) => {
            return row.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
        });
        setRecords(newData);
    };
    return (
        <>
            <DataTable
                data={records}
                columns={columns}
                responsive
                striped
                highlightOnHover
                pagination
                subHeader={true}
                subHeaderComponent={<SubHeader handleSubmit={handleSubmit} />}
                noDataComponent={"There is no data"}
                // fixedHeader={true}
            ></DataTable>
        </>
    );
};

const SubHeader = ({ handleSubmit }) => {
    const setModal = useWebStore((state) => state.setModal);

    return (
        <>
            <div className='w-full flex justify-between items-center max-md:flex-col max-md:gap-2'>
                <h1 className='font-semibold'>Workers Table</h1>
                <input
                    type='text'
                    className=' rounded-lg p-1 border border-gray-400 '
                    placeholder='Search...'
                    onChange={handleSubmit}
                />
                <button
                    onClick={setModal}
                    className='p-3 bg-blue-400 text-white'
                >
                    Add
                </button>
            </div>
        </>
    );
};

export default WorkersTable;
