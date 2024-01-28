import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataActionHistory } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const ActionHistory = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        // { field: "registrarId", headerName: "Registrar ID" },
        {
            field: "fan",
            headerName: "Fan",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "light",
            headerName: "Light",
            headerAlign: "left",
            align: "left",
            flex: 1,
        },
        {
            field: "time",
            headerName: "Time",
            type: "date",
            flex: 1,
        },
        // {
        //     field: "email",
        //     headerName: "Email",
        //     flex: 1,
        // },
        // {
        //     field: "address",
        //     headerName: "Address",
        //     flex: 1,
        // },
        // {
        //     field: "city",
        //     headerName: "City",
        //     flex: 1,
        // },
        // {
        //     field: "zipCode",
        //     headerName: "Zip Code",
        //     flex: 1,
        // },
    ];

    return (
        <Box m="20px">
            <Header
                title="ACTION HISTORY"
            />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    },
                }}
            >
                <DataGrid
                    rows={mockDataActionHistory}
                    columns={columns}
                    components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    );
};

export default ActionHistory;
