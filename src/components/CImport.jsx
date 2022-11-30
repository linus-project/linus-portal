import Swal from 'sweetalert2';
import Button from "@mui/material/Button/Button";
import api from '../api';



export function Importacao() {

    async function sweetAlert() {
      const { value: file } = await Swal.fire({
        title: 'Selecione o Arquivo',
        input: 'file',
        inputAttributes: {
          'accept': 'text/*',
          'aria-label': 'Upload your profile picture'
        }
      })
      
      if (file) {
        var formData = new FormData();
        formData.append("file", file);
        api.post("/news/import", formData)
      }
    }
    

    return(
      <>
        <Button  
        style={{
                width: 150,
                backgroundColor: "#9400D3",
                color: "white",
                borderRadius: 10,
                textTransform: "capitalize"}}
                
                onClick={() => sweetAlert()}>Importar</Button>
        </>
    );
    
}