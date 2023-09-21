import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
} from "@mui/material";
const MiTable = () => {
  const data = [
    {
      id: 1,
      name: "Gertruda",
      email: "gmurrill0@jigsy.com",
      gender: "Female",
    },
    {
      id: 2,
      name: "Phelia",
      email: "pmeedendorpe1@berkeley.edu",
      gender: "Female",
    },
    {
      id: 3,
      name: "Illa",
      email: "itomaszek2@flavors.me",
      gender: "Female",
    },
    {
      id: 4,
      name: "Worthy",
      email: "wgayden3@privacy.gov.au",
      gender: "Male",
    },
    {
      id: 5,
      name: "Tab",
      email: "tjindra4@microsoft.com",
      gender: "Male",
    },
    {
      id: 6,
      name: "Pammie",
      email: "pbohden5@flickr.com",
      gender: "Female",
    },
    {
      id: 7,
      name: "Merilee",
      email: "moneligan6@ed.gov",
      gender: "Female",
    },
    {
      id: 8,
      name: "Abbott",
      email: "aolphert7@blogtalkradio.com",
      gender: "Male",
    },
    {
      id: 9,
      name: "Ashleigh",
      email: "afarfoot8@dyndns.org",
      gender: "Female",
    },
    {
      id: 10,
      name: "Malia",
      email: "mguilloton9@vk.com",
      gender: "Female",
    },
    {
      id: 11,
      name: "Lenee",
      email: "lpolacka@washingtonpost.com",
      gender: "Female",
    },
    {
      id: 12,
      name: "Olive",
      email: "oyurevichb@prlog.org",
      gender: "Female",
    },
  ];
  return (
    <>
      <Typography variant="h6">Table Component</Typography>
      <TableContainer component={Paper} sx={{maxHeight:"300px"}}>
        <Table aria-labeel="Simple Table" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Gender</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((row)=>{
                return (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell align="center">{row.gender}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                  </TableRow>
                )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MiTable;
