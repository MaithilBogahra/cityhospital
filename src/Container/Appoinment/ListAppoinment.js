import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



function ListAppoinment(props) {
    const history = useHistory()

    const [data, setData] = useState([]);

    const columns = [
        { field: 'name', headerName: 'Name', width: 70 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'department', headerName: 'Department', width: 130 },
        { field: 'message', headerName: 'Message', width: 130 },
        { field: 'date', headerName: 'Date', width: 130 },
        {
            field: 'action',
            headerName: 'Action',
            width: 130,
            renderCell: (data) => (
                <>
                    <IconButton aria-label="delete" size="large" onClick={() => handleDelete(data.id)}>
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton aria-label="edit" size="large" onClick={() => handleEdit(data.id)}>
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                </>
            )
        },
    ];

    const viewData = () => {
        let localData = JSON.parse(localStorage.getItem('apt'));
        if (localData !== null) {
            setData(localData);
        }
    }
    useEffect(() => {
        viewData()
    }, []);

    const handleDelete = (id) => {
        let localData = JSON.parse(localStorage.getItem('apt'));

        let fdata = localData.filter((l) => l.id !== id);

        localStorage.setItem('apt', JSON.stringify(fdata));
        viewData();
    }
    const handleEdit = (id) => {
        history.push("/appointment", { id: id })

    }


    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>

                <div className='row'>
                    <div className='col-6 text-center'>
                        <NavLink exact className="nav-link scrollto maithil" to={"/appointment"}>Book Appoinment</NavLink>
                    </div>
                    <div className='col-6 text-center'>
                        <NavLink exact className="nav-link scrollto maithil" to={"/list_appointment"}>List Appoinment</NavLink>
                    </div>
                </div>
                <div style={{ height: 400, width: '100%' }}>
                                <DataGrid
                                    rows={data}
                                    columns={columns}
                                    pageSize={5}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                />
                            </div>

            </div>
        </section>
    );
}

export default ListAppoinment;