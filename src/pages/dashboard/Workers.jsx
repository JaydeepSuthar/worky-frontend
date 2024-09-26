import React from "react";
import WorkersTable from "../../components/Tables/WorkersTable";
import AddWorker from "../../components/AddWorker";

export function Workers() {
    return (
        <>
            <div className='relative  mx-auto my-20 flex flex-col gap-8 bg-white shadow-md shadow-gray-900/30'>
                <WorkersTable />
                <AddWorker />
            </div>
        </>
    );
}

export default Workers;
