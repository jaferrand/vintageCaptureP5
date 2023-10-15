import UserContext from "../../context/UserContext";
import { useContext, useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Container, Modal, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  "& .MuiTextField-root": { m: 1, width: "25ch" },
  // borderRadius={5}
  // boxShadow={"5px 5px 10px #ccc"}
};

const MyProfile = () => {
  const { userState, userSubmitForm, verifyToken } = useContext(UserContext);
  const { firstname, lastname, email, age } = userState.info2;
  const [open, setOpen] = useState(false);
  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    age,
    email
  })

  const handleChange = async (e) => {

    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })

  }

  const sendData = () => {
    userSubmitForm(userForm)
  }

  useEffect(() => {

    const updateData = () => {

      return setUserForm({
        ...userForm,
        firstname,
        lastname,
        age,
        email
      })

    }

    updateData()

  }, [])


  const handleOpen = () => setOpen(!open);


  return (
    <div>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "140px",
        }}
      >
        
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            sx={{ height: 250, width: 500 }}
            image="https://res.cloudinary.com/dgvipi8hx/image/upload/v1697214947/logoVintageCapture/logo_cuadrado_wqmzx1.png"
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {`${firstname} ${lastname}`}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {email}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleOpen}>Open modal</Button>

            <Button size="small">Advanced Config</Button>
          </CardActions>
        </Card>
      </Container>
      <div>

        <Box
          component="form"
          onSubmit={(e) => sendData(e)}
          display={!open ? "none" : "flex"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px",
            marginBottom: "40px"
          }}
          noValidate
          autoComplete="off"
        >


          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            Edita tu usuario!
          </Typography>
          <TextField
            id="outlined-disabled"
            label="Firstname"
            value={userForm.firstname}
            name="firstname"
            onChange={handleChange}
            type="text"
          />
          <TextField
            id="outlined-disabled"
            label="Lastname"
            value={userForm.lastname}
            onChange={handleChange}
            name="lastname"
            type="text"

          />
          <TextField
            id="outlined-disabled"
            label="Age"
            value={userForm.age}
            type="number"
            onChange={handleChange}
            name="age"
          />
          <TextField
            id="outlined-disabled"
            label="Email"
            value={userForm.email}
            type="email"
            onChange={handleChange}
            name="email"
          />
          <Button type="submit">Send</Button>

        </Box>

      </div>
    </div>
  );
};

export default MyProfile;
